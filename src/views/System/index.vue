<template>
  <el-container>
    <el-aside width="200px">
      <Aside/>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
import Aside from './Aside'
export default {
   components:{
    Aside
  }
}
</script>