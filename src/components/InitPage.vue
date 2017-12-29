<template>
  <div class='initPage'>
    <div id="loading" class="flex-middle-center">
      <div class="bar-box">
        <div class="bar" v-bind:style="{width: loadingLength+'%'}"></div>
        <div class="xionmao" v-bind:style="{opacity:opacity,left: imageLeft+'rem'}"></div>
      </div>
    </div>

   <!--  <div v-for="image in images" v-show='false'>
        <img width="100" @load="imageLoaded" :src="image"  />
      </div> -->
  </div>
</template>

<script>

import ImageLoader from '@/libs/ImageLoader'
import Images from '@/libs/Images'

var draw;


export default {
  name: 'PageFirst',
  data () {
    return {
      loadedImages: 0,
      images: Images.images,
      imageObjects:[],
      opacity:0
    }
  },
  methods: {
    
    //页面完成图片加载后
    init() {
      this.$router.push('IndexPage')
    }
  },
  components: {
    
  },
  computed: {
    loadingLength () {
      return Math.floor(this.loadedImages / this.images.length * 100);
    },
    imageLeft () {
        return -2 + 17.5 * this.loadingLength / 100;
    }
  },
  mounted() {
    setTimeout(()=>{
      this.opacity=1;
      var imageLoader = new ImageLoader();
      for (var imgUrl of Images.images) {
        imageLoader.loaderImage(imgUrl).then(img=>{
          this.loadedImages ++;
          this.imageObjects.push(img);
        });
      }
    },200);
   
    
    

  },
  watch: {
    loadedImages: function(val){
      if(val==this.images.length){
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
