<template>
  <div class="index page-box flex-middle-center">
    <swiper :options='swiperOptions' ref='mySwiper'>
      <!-- slides -->
      <Page1 />
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
        debugger: true

      }
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
    //console.log('this is current swiper instance object', this.swiper)
    //this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style scoped>


</style>
