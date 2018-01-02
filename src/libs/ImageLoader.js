class ImageLoader {
  constructor(){
  }

  loaderImage(imgUrl){

    return new Promise( (resolve,reject) =>{
      var $this = this;
      this.img = new Image();
      this.img.src = imgUrl;
      this.img.onerror = function() {
          console.log('error load images ['+imgUrl+']')
          reject(imgUrl +'not loader')
      }
      this.img.onload = function() {
        resolve(this)
      }
    } );
    
  }



}

export default ImageLoader