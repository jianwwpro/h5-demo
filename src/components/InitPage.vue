<template>
  <div class='initPage'>
  <!--加载框，这里准备抽成组件。传入参数：图片对象。-->
    <div id="loading" class="flex-middle-center">
      <div class="bar-box">
        <div class="bar" v-bind:style="{width: loadingLength+'%'}"></div>
        <div class="xionmao" v-bind:style="{opacity:opacity,left: imageLeft+'rem'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
//使用vuex 将数据状态化，此处是难点。
import { mapGetters } from 'vuex'

import ImageLoader from '@/libs/ImageLoader'
//图片对象，由其他文件，组成map对象。
import Images from '@/libs/Images'



export default {
  name: 'PageFirst',
  data () {
    return {
      loadedImages: 0,
      imagesMap: Images.imagesMap(),
      imageObjects:new Map(),
      opacity:0
    }
  },
  methods: {
    
    //页面完成图片加载后
    init() {
      this.$store.dispatch('save', {
          images: this.imageObjects
      });
      this.$router.push('IndexPage')
    }
  },
  components: {
    
  },
  computed: {
    ...mapGetters({
      images:'images'
    }),
    loadingLength () {
      return Math.floor(this.loadedImages / this.imagesMap.size * 100);
    },
    imageLeft () {
        return -2 + 17.5 * this.loadingLength / 100;
    }
  },
  mounted() {

    setTimeout(()=>{
      this.opacity=1;
      var imageLoader = new ImageLoader();
      this.imagesMap.forEach((value, key, mapObj)=>{
        imageLoader.loaderImage(value).then(img=>{
          this.loadedImages ++;
          this.imageObjects.set(key,img);
        });
      })
    },200);
   
    
    

  },
  watch: {
    loadedImages: function(val){
      if(val==this.imagesMap.size){
        this.init();
      }
    }
  }
}
</script>

<style scoped>

  #loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 406;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden
}

#loading .bar-box {
    position: relative;
    width: 20rem;
    height: 7rem
}

#loading .bar-box .bar {
    position: absolute;
    left: 0;
    bottom: 0;
    height: .8rem;
    background: url(../assets/loading/santa/4.png) no-repeat 0 0;
    -webkit-background-size: auto 1.2rem;
            background-size: auto 1.2rem;
    border-radius: .8rem;
    overflow: hidden
}

#loading .bar-box .xionmao {
    position: absolute;
    opacity: 0;
    top: 0;
    width: 6rem;
    height: 6rem;
   background: url(../assets/loading/santa/1.png) no-repeat 0 0;
    -webkit-background-size: 100% auto;
            background-size: 100% auto;
    -webkit-animation: loadingstep .6s step-start infinite;
            animation: loadingstep .6s step-start infinite
}

#loading.on .xionmao {
    opacity: 1
}
</style>
