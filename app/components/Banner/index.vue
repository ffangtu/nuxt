<template>
  <div class="banner">
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item
        v-for="(item, index) in bannerList"
        :key="index + 'banner'"
      >
        <img :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      bannerList: [
        {
          url: require('@/static/banner/1.jpg')
        },
        {
          url: require('@/static/banner/2.jpg')
        },
        {
          url: require('@/static/banner/3.jpg')
        },
        {
          url: require('@/static/banner/4.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
