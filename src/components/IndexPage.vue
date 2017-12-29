<template>
  <div class="index">
    <swiper :options='swiperOptions' ref='mySwiper'>
      <!-- slides -->
      <swiper-slide>
        <div >1page</div>
      </swiper-slide>
      <swiper-slide>
        <div>2 page</div>
      </swiper-slide>
      <swiper-slide>3 page</swiper-slide>
      <swiper-slide>4 page</swiper-slide>
      <swiper-slide>5 page</swiper-slide>
      <swiper-slide>6 page</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'IndexPage',
  data () {
    return {
      swiperOptions: {
        direction: 'vertical',
        debugger: true

      }
    }
  },
  components: {
    swiper,
    swiperSlide
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
div{
  width:100%;
  height:600px;
  background-color: pink;
}

</style>
