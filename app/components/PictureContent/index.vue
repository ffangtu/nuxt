<template>
  <div class="picture-content">
    0.0
    <div>
      满帧
      <canvas ref="cavAll"></canvas>
    </div>
    <div>
      四分之一帧率
      <canvas ref="cavHalf"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureContent',
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    // video.addEventListener('timeupdate', () => {})
    const getUrl = () => {
      this.count++
      const video = document.querySelector('#video-bg')
      const canvasall = this.$refs.cavAll
      canvasall.width = video.videoWidth
      canvasall.height = video.videoHeight
      canvasall
        .getContext('2d')
        .drawImage(video, 0, 0, canvasall.width, canvasall.height)

      if (this.count % 4 === 0) {
        const canvasHalf = this.$refs.cavHalf
        canvasHalf.width = video.videoWidth
        canvasHalf.height = video.videoHeight
        canvasHalf
          .getContext('2d')
          .drawImage(video, 0, 0, canvasHalf.width, canvasHalf.height)
      }
      requestAnimationFrame(getUrl)
    }
    requestAnimationFrame(getUrl)
  }
}
</script>

<style lang="less" scoped>
.picture-content {
  color: red;
}
</style>
