<template>
  <swiper-slide class='page2'>
    <button @click="show = !show">点我</button>
  <transition name="bounce">
    <p v-if="show">这是第二页，动画效果演示</p>
  </transition>
  </swiper-slide>
</template>

<script>
import { swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
import Draw from '@/libs/Draw'

export default {
  name: 'Page2',
  data () {
    return {
      show: true
    }
  },
  components: {
    swiperSlide
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
@keyframes bounce-in {
  0% {
    transform: rotate(0)
  }
 
  100% {
    transform: rotate(360deg)
  }
}
.page2 
  .bounce-enter-active {
    animation: bounce-in 5s linear infinite .2s
  }
  .bounce-leave-active {
    animation: bounce-in 5s linear infinite .2s
  }
  
</style>
