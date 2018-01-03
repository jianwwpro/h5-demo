<template>
  <swiper-slide class='page1'>
  
    <div class="inner">
      <canvas width="640" height="1008" id="p1Can" class="zhen-canvas"></canvas>
      <transition name='summaryBounce'>
        <div class="txt" v-if='txtShow'>
          <div class="text-child"></div>
        </div>
      </transition>
      <!--场景1-->
      <transition name='mainBackground'>
      <div class="p1-one" v-if='mainBackgroundShow'>
          <div class="logo"></div>
          <div class="snow01 snow">
              <TCircle speed='5' :src="images | map('p16','src')" />
          </div>

          <div class="snow02 snow">
              <TCircle speed='7' :src="images | map('p17','src')" />
          </div>

          <div class="snow03 snow">
              <TCircle speed='4' :src="images | map('p17','src')" />
          </div>

          <div class="snow04 snow">
              <TCircle speed='4' :src="images | map('p17','src')" />
          </div>

          <div class="snow05 snow">
              <TCircle speed='6' :src="images | map('p17','src')" />
          </div>

          <div class="snow06 snow">
             <TCircle speed='6.5' :src="images | map('p17','src')" />
          </div>

          <div class="snow07 snow">
             <TCircle speed='4' :src="images | map('p17','src')" />
          </div>


          <div class="pageBg">
              <div class="imag">
                <img :src="images | map('p11','src')">
              </div>
          </div>

          <div class='aroundFlower' v-bind:class="{flowerNoAround:flowerBackgroundShow }">
              <transition name="flowerBackground">
               <div class="bgbox" v-if='flowerBackgroundShow'>
                <transition name="flowerBackgroundBg">
                  <div class="bg" v-if='flowerBackgroundShow'></div>
                </transition>
               </div>
              </transition>
          </div>
          <transition name="pandaBounce" v-on:after-leave="afterLevelSummary()">
            <div v-if='pandaBounceShow' class="panda">
                <div class="imag">
                <img :src="images | map('p13','src')">
                </div>
            </div>
          </transition>
          <transition name="summaryBounce">
            <div v-if='summaryBounceShow' class="page1-summary"></div>
          </transition>
          <div @click='open()' class="page1-button"></div>
        </div>
        </transition>
        <!--场景1结束-->



    </div>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
//画图对象
import Draw from '@/libs/Draw'
import TCircle from '../templates/Circle'


export default {
  name: 'Page1',
  data () {
    return {
      //简介图片显示
      summaryBounceShow:false,
      //熊猫图片显示
      pandaBounceShow:false,
      //主背景显示
      mainBackgroundShow: true,
      //第二背景显示
      flowerBackgroundShow: false,
      //第二背景字幕显示
      txtShow: false,
      draw:null
    }

  },
  components: {
    swiperSlide,
    TCircle
  },
  computed: {
    ...mapGetters({
      images:'images',
      appStart: 'appStart'
    })

  },
  //从外部接收参数
  props : ['sw','on'],
  methods: {
    //点击按钮，出发panda的动画消失。
    //停止花的转圈，显示背景。
    open(){
      this.flowerBackgroundShow=true;
      this.pandaBounceShow=false;


    },
    /** 说明页离开后事件，将数据重置。
      * 1 允许slide
      * 2 draw出下一个画面。隐藏当前场景
      * 3 描述文字消失
        4 隐藏p1背景
    */
    afterLevelSummary(){
      //app已经开始运作
       this.$store.dispatch('change', {
            appStart: true
        });
      
      //隐藏

      //允许滑动
      this.sw.allowSlideNext=true;
      //this.sw.slideNext();
      //简介隐藏
      this.summaryBounceShow=false;
      //主背景隐藏
      this.mainBackgroundShow=false;

      //draw出下一个场景，
      //this.draw.drawImage(this.images.get('p18'),0,0,640,1008)
      //this.draw.drawImage(this.images.get('p117'),0,0,640,1008)
      let awaysImages = [this.images.get('p18')];
      let dynImages = [];
      for(let i=9;i<18;i++){
        dynImages.push(this.images.get('p1'+i))
      }

      this.draw.timeDraw(awaysImages,dynImages)



      setTimeout(()=>{
        this.txtShow=true
      },800)
    },
    /**
    *回到该页时，禁止slide，显示panda和summary
    */
    initPage(beFirstLoad){
      this.$store.dispatch('change', {
        appStart: false
      });
      //主背景显示,第二场景背景隐藏
      this.mainBackgroundShow=true;
      this.flowerBackgroundShow=false;
      //非第一次进来，不允许slide
      if(!beFirstLoad)
        this.sw.allowSlideNext=false;
      //画图对象存在时，清空画布
      if(this.draw!=null)
        this.draw.clear()

      if(this.images==null){
        this.$router.push("/");
      }
      setTimeout(()=>{
        this.summaryBounceShow=true;
      },800)
       setTimeout(()=>{
        this.pandaBounceShow=true;
      },1200)
    }
  },
  mounted () {
    let that = this;
    that.initPage(true);
     //监听slide回到本也时，重新调用动画并禁止slide

    this.on.slideChange=function(){
      console.log(this.activeIndex)
      if(this.activeIndex==0){
        that.initPage();
      }
    }
    if(this.draw==null)
      this.draw=new Draw('p1Can',640,1008);
    this.draw.clear()

  }
}
</script>

<style scoped lang='stylus'>
@import "../../assets/css/commons.styl";

.page1
  .inner
    .mainBackground-leave-active
      transition: opacity .8s
    .mainBackground-leave-to
      opacity: 0
    .zhen-canvas
      width:100%
      height 100%
    .txt 
      position: absolute;
      top: 1.5rem;
      right: 0;
      width: 9.1rem;
      height: 25.1rem;
      .text-child
        width: 100%;
        height: 100%;
        background: url(/static/images/p1/18.png) no-repeat center;
        background-size: 100% auto
  
  .snow
    position: absolute;
    width: 3rem;
    height: 3rem;
    z-index: 10
    &.snow01
      left: 8.5rem;
      top: 1.5rem;
    &.snow02
      left: -1rem;
      top: 16rem;
    &.snow03
      width 2.5rem
      height 2.5rem
      left 1.5rem
      top: 23.5rem
    &.snow04 
      left: 3.3rem;
      top: 31rem;
    &.snow05
      right: 2rem;
      width: 2.5rem;
      height: 2.5rem;
      top: 16rem;
    &.snow06 
      right: -1rem;
      top: 24.2rem;
    &.snow07
      width: 2rem;
      height: 2rem;
      right: 4rem;
      top: 33rem;

  .pageBg
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1
  .aroundFlower
      position: absolute;
      background: url(/static/images/p1/2.png) no-repeat center;
      background-size: 100% auto;
      transform-origin: bottom right;
      bottom: 56%;
      right: 50%;
      transform: translate(50%, 50%);
      padding: 6rem;
      min-width: 13rem;
      min-height: 13rem;
      animation: huahuan 10s linear infinite 2s

      &.flowerNoAround
        animation none
      .bgbox
        .bg
          width: 13rem;
          height: 13rem;
          border-radius: 22rem
          background: url(/static/images/p1/8.png) no-repeat center
          -webkit-background-size: 32rem auto;
          background-size: 32rem auto;
        &.flowerBackgroundBg-leave-active
          transition: all .1s linear
          
  
  .panda 
    position: absolute;
    top: 10rem;
    left: 3.5rem;
    width: 25rem;
    height: 25rem;
    opacity: 1
    &.pandaBounce-enter-active
      animation: fadeIn 1s
    &.pandaBounce-leave-active
      animation: fadeIn 1s reverse
  .page1-summary
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 7.5rem;
    height: 8.9rem
    background: url(/static/images/p1/4.png) no-repeat 0 0;
    opacity: 1;
    background-size: 100% auto
    

  .page1-button 
    position: absolute;
    left: 0;
    left: 5.5rem;
    width: 21rem;
    bottom: 1rem;
    height: 8rem
    background: url(/static/images/p1/5.png) no-repeat 0 0;
    -webkit-background-size: 100% auto;
    background-size: 100% auto
  
 .summaryBounce-enter-active
    animation: bounce-in 1s;

  

  




  




  
</style>
