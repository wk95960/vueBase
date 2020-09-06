<template>
 <el-container class="home">
  <el-header calss="content-header">
    <Header/>
  </el-header>
  <router-view></router-view>
</el-container>
</template>

<script>
import Header from './Header'
export default {
  components:{
    Header,
    
  },
}
</script>
<style lang="less" scoped>
 .home{
   height:100%;
   /deep/  .el-header{
     background-color: #2f3f56;
     padding:0;
     line-height: 60px;
   }
    /deep/  .el-aside{
      height:100%;
    background-color: #2f3f56;
     padding:0;
   }
 }
</style>
