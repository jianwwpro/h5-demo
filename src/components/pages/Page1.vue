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
          <div class="imag03">
              <div class="imag">
              <img :src="images | map('p13','src')">
              </div>
          </div>

          <div class="imag04"></div>
          <div id="p1next" class="imag05"></div>
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
      c:'ddd'
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
  methods: {
    
  },
  mounted () {
   if(this.images==null){
      this.$router.push("/");
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
        animation: circle 7s linear infinite
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


 

  


  .imag04 {
      position: absolute;
      left: 0;
      width: 100%;
      bottom: 7.5rem;
      height: 8.9rem
  }

  .show .imag04 {
      background: url(/static/images/p1/4.png) no-repeat 0 0;
      opacity: 0;
      -webkit-background-size: 100% auto;
      background-size: 100% auto
  }

  .imag05 {
      position: absolute;
      left: 0;
      left: 5.5rem;
      width: 21rem;
      bottom: 1rem;
      height: 8rem
  }

  .show .imag05 {
      background: url(/static/images/p1/5.png) no-repeat 0 0;
      -webkit-background-size: 100% auto;
      background-size: 100% auto
  }

  .pageBg {
       position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1
  }

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




  .imag03 {
      position: absolute;
      top: 10rem;
      left: 3.5rem;
      width: 25rem;
      height: 25rem;
      opacity: 1
  }


  .on.next .imag02 {
      -webkit-animation: none;
              animation: none
  }


  .imag03 img {
      -webkit-transform-origin: 13rem 19.5rem;
      -ms-transform-origin: 13rem 19.5rem;
      transform-origin: 13rem 19.5rem;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0)
  }

  .imag03 img {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      -webkit-transition: -webkit-transform 1s linear 1s;
      transition: -webkit-transform 1s linear 1s;
      -o-transition: transform 1s linear 1s;
      transition: transform 1s linear 1s;
      transition: transform 1s linear 1s, -webkit-transform 1s linear 1s
  }

  .imag04 {
      -webkit-animation: fadeIn 1s ease forwards .5s;
      animation: fadeIn 1s ease forwards .5s
  }

  .next .imag03 img {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transition: -webkit-transform .5s linear;
      transition: -webkit-transform .5s linear;
      -o-transition: transform .5s linear;
      transition: transform .5s linear;
      transition: transform .5s linear, -webkit-transform .5s linear
  }

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
