<template>

  <div class="index page-box flex-middle-center">
    
    <swiper :options='swiperOptions' ref='mySwiper'>
      <!-- slides -->
      <Page1 :sw="sw" :on="swiperOptions.on" />
      <Page2 />
      <Page2 />
      <Page2 />
      <Page2 />
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

export default {
  name: 'IndexPage',
  data () {
    return {
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
     swiper () {
       return this.$refs.mySwiper.swiper
     }
   
  },
  mounted () {
    this.sw=this.$refs.mySwiper.swiper
  }
}
</script>

<style scoped>


</style>
