<template>
  <div>
    
        <el-menu
          class="el-menu-curstom"
          @open="handleOpen"
          @close="handleClose"
          background-color="#2f3f56"
          text-color="#fff"
          :unique-opened="true"
          router
          :default-openeds="openeds"
          :default-active="this.$route.path"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/system/user">用户列表</el-menu-item>
              <el-menu-item index="/system/userGroup">用户列表组</el-menu-item>
            </el-menu-item-group>
           
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>应用管理管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">用户列表</el-menu-item>
              <el-menu-item index="1-2">用户列表组</el-menu-item>
            </el-menu-item-group>
           
          </el-submenu>
        </el-menu>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      openeds:['1']
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
<style lang="less" scoped>
  .el-menu-curstom{
    /deep/ &.el-menu-curstom{
      border-right: none;
    }
  }
</style>