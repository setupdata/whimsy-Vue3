<template>
  <div>
    <el-menu
      :default-active="store.state.nowRouter"
      class="el-menu-my"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-menu-item index="home">
        <div class="menu-item-center">
          <el-icon :size="20">
            <house />
          </el-icon>
          <span>首页</span>
        </div>
      </el-menu-item>
      <el-menu-item index="blog">
        <div class="menu-item-center">
          <el-icon :size="iconSize">
            <notebook />
          </el-icon>
          <span>博客</span>
        </div>
      </el-menu-item>
      <el-menu-item index="3">
        <div class="menu-item-center">
          <el-icon :size="iconSize">
            <Picture />
          </el-icon>
          <span>图片</span>
        </div>
      </el-menu-item>
      <el-menu-item index="4">
        <div class="menu-item-center">
          <el-icon :size="iconSize">
            <Reading />
          </el-icon>
          <span>小说</span>
        </div>
      </el-menu-item>
      <el-menu-item index="5">
        <div class="menu-item-center">
          <el-icon :size="iconSize">
            <Avatar />
          </el-icon>
          <span>用户</span>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {
  House,
  Notebook,
  Picture,
  Reading,
  Avatar
} from "@element-plus/icons-vue"
import { useStore } from "vuex"

export default {
  name: "myMenu",
  components: { House, Notebook, Picture, Reading, Avatar },
  setup() {
    const store = useStore()
    // console.log(store)
    // 图标尺寸大小
    let iconSize = 18
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      store,
      iconSize,
      handleOpen,
      handleClose
    }
  }
}

</script>

<style lang="scss" scoped>
.el-menu-my {
  height: 100%;
  width: 100%;
  border-right: 0;

  .el-menu-item {
    height: 100px;
  }

  .menu-item-center {
    margin: 0 auto;

    span {
      font-size: 18px;
    }
  }
}

</style>