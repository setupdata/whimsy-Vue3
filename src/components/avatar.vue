<template>
  <div class="active" @click="avatar_but">
    <el-avatar :size="60" :src="circleUrl"></el-avatar>
  </div>
</template>

<script>
export default {
  name: "myAvatar",
  setup() {
    let circleUrl = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"

    // 点击头像相关事件
    function avatar_but() {
      console.log("头像被点击了")
    }

    return {
      circleUrl,
      avatar_but
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  width: 63px;
  height: 63px;
  margin: 20px auto;
}
</style>