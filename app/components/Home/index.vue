<template>
  <div class="home">
    <Banner></Banner>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Banner: () => import('@/components/Banner')
  }
}
</script>

<style lang="less" scoped>
.home {
  color: orange;
}
</style>
