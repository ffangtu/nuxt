<template>
  <div class="layout">
    <nuxt-child></nuxt-child>
    <video src="../static/bg.mp4" autoplay loop muted></video>
    <div class="cover"></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.layout {
  background: silver;
  height: 100vh;
  position: relative;

  video {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  .cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /*background: rgba(0, 0, 0, 0.5);*/
  }
}
</style>
