<template>
  <div class="layout">
    <video
      id="video-bg"
      src="../static/video/a83ce4d200051e342ca86a4ff11d4d51.mp4"
      autoplay
      loop
    ></video>
    <div class="other">
      <nuxt-child></nuxt-child>
      <PictureContent></PictureContent>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    PictureContent: () => import('@/components/PictureContent')
  }
}
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

  .other {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
}
</style>
