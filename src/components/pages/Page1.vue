<template>
  <swiper-slide class='page1'>
  
    <div class="inner">
      <canvas width="640" height="1008" id="p1Can" class="zhen-canvas"></canvas>
      <div class="txt">
          <div class="text-child"></div>
      </div>

      <div class="p1-one">
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

          <div class="imag02">
               <div class="bgbox"><div class="bg"></div></div>
          </div>
          <transition name="pandaBounce" v-on:after-leave="nextSlide()">
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
    </div>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
import Draw from '@/libs/Draw'
import TCircle from '../templates/Circle'


export default {
  name: 'Page1',
  data () {
    return {
      summaryBounceShow:false,
      pandaBounceShow:false,
    }

  },
  components: {
    swiperSlide,
    TCircle
  },
  computed: {
    ...mapGetters({
      images:'images'
    })

  },
  props : ['sw','on'],
  methods: {
    //点击按钮，出发panda的动画消失。
    open(){
      this.pandaBounceShow=false;


    },
    /** 切换到下一个slide后，将数据重置。
      * 1 允许slide
      * 2 切换到下一张
      * 3 描述文字消失
    */
    nextSlide(){
      this.sw.allowSlideNext=true;
      this.sw.slideNext();
      this.summaryBounceShow=false;
    },
    /**
    *回到该页时，禁止slide，显示panda和summary
    */
    initPage(beFirstLoad){
      if(!beFirstLoad)
        this.sw.allowSlideNext=false;
      
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

    this.on.slideChangeTransitionStart=function(){
      if(this.activeIndex==0){
        that.initPage();
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
@import "../../assets/css/commons.styl";

.page1
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
  .imag02
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
      .bg
        width: 13rem;
        height: 13rem;
        border-radius: 22rem
        background: url(/static/images/p1/8.png) no-repeat center
        -webkit-background-size: 32rem auto;
        background-size: 32rem auto;
      .bgbox 
        opacity: 0
  
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
    &.summaryBounce-enter-active
      animation: bounce-in 1s;

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
  
 

  

  




  


  .next .imag02 .bgbox {
      opacity: 1;
      -webkit-transition: all .1s linear;
      -o-transition: all .1s linear;
      transition: all .1s linear
  }

  .next .imag02 .bg {
      width: 32rem;
      height: 32rem;
      -webkit-transition: all .5s linear 1s;
      -o-transition: all .5s linear 1s;
      transition: all .5s linear 1s
  }

  .next .p1-one {
      opacity: 0;
      -webkit-transition: all .5s linear 1.5s;
      -o-transition: all .5s linear 1.5s;
      transition: all .5s linear 1.5s
  }

  .txt {
      position: absolute;
      top: 1.5rem;
      right: 0;
      width: 9.1rem;
      height: 25.1rem;
      opacity: 0
  }

  .show .txt {
  }
  .show .txt .text-child {
      width: 100%;
      height: 100%;
      background: url(/static/images/p1/18.png) no-repeat center;
      -webkit-background-size: 100% auto;
      background-size: 100% auto
  }


  .next .txt {
      -webkit-animation: fadeIn 1s ease forwards 2s;
      animation: fadeIn 1s ease forwards 2s
  }
  .next .txt.off .text-child {
      opacity: 0;
  }
  .next .txt.text-child {
      -webkit-animation: fadeIn 1s ease forwards .5s;
      animation: fadeIn 1s ease forwards .5s   
  }

  
</style>
