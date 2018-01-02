<template>
  <div class='t-circle' v-bind:style="{ animation:'circle '+ speed+'s linear infinite .5s'}">
        <img :src="src" />
  </div>
</template>

<script>

export default {
  name: 'TCircle',
  props: ['speed','src'],
  
}
</script>

<style scoped lang='stylus'>

  
</style>
