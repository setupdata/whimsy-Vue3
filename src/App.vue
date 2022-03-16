<template>
  <div class="common-layout">
    <!--布局容器-->
    <el-container>
      <!--左侧-->
      <el-aside class="aside">
        <logo />
        <Avatar />
        <Menu />
      </el-aside>
      <!--右侧-->
      <el-main class="main">
        <!--路由-->
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Logo from "./components/logo"
import Avatar from "./components/avatar"
import Menu from "./components/menu"

export default {
  components: { Menu, Avatar, Logo },
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.aside {
  width: 200px;
  height: 100Vh;
}

.main {
  width: calc(100% - 200px);
  height: 100Vh;
  overflow: hidden;
  background-color: #f4f5f7;
}
</style>
