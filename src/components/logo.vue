<template>
  <el-image
    fit="cover"
    :src="require('../assets/logo.png')">
  </el-image>
</template>

<script>
// import { Picture as IconPicture } from "@element-plus/icons-vue"

export default {
  name: "myLogo",
  // components: { IconPicture },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.el-image {
  width: 160px;
  height: 70px;
  margin: 40px 20px 10px 20px; // 上右下左
  border-radius: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>