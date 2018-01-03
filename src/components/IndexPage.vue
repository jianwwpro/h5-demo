<template>

  <div class="index page-box flex-middle-center">
    
    <swiper :options='swiperOptions' ref='mySwiper' >
      <!-- slides -->
      <Page1 :sw="sw" :on="swiperOptions.on" />
      <Page2 />
      <Page2 />
      <Page2 />
      <Page2 />
    </swiper>
    <div class="audio-btn on"></div>
    <div class="arrow-box" v-show='beStart'></div>
    <audio src="" loop style="display: none" id="bgaudio"></audio>
  </div>
</template>

<script>
//引入滚动组件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  data () {
    return {
      //滚动组件配置
      swiperOptions: {
        direction: 'vertical',
        parallax:true,
        debugger: true,
        allowSlideNext: false,
        observer:true,
        observeParents:true,
        on:{
            
        }
      },
      //滚动组件在mounted之后，传入到各个slide页面，以方便slide页面操作swiper对象
      sw:null
    }
  },
  components: {
    swiper,
    swiperSlide,
    Page1,
    Page2
  },
  computed: {
    ...mapGetters({
      appStart:'appStart'
    }),
   swiper () {
     return this.$refs.mySwiper.swiper
   },
   beStart() {
    return this.appStart
   }
   
  },
  mounted () {
    this.sw=this.$refs.mySwiper.swiper
    
  },  
  

}
</script>

<style scoped lang="stylus">
@import "../assets/css/commons.styl";

.audio-btn
    position: fixed;
    z-index: 100;
    top: .2rem;
    left: .2rem;
    width: 3rem;
    height: 3rem
    &.on
      background: url(/static/images/2.png) no-repeat 0 0;
      background-size: 65% auto;
    &.off
      background: url(/static/images/3.png) no-repeat 0 0;
      background-size: 65% auto
.arrow-box 
    position: fixed;
    z-index: 100;
    bottom: 1.5rem;
    right: 45%;
    background: url(http://media.sktap.cn/picc/v1/public/images/1.png) no-repeat 0 0;
    background-size: 100% auto;
    width: 14%;
    height: 3rem;
    animation: arrow 1.5s linear infinite



</style>
