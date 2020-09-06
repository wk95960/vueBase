<template>
  <div>
    <div class="header-nav">
       <div  
       :class="['header-nav-item', activeHand(item.routeName)   ? 'isSelect':'']"
        v-for="(item,index) in navList"
        :key="index"
       @click="linkTo(index,item.path)"
       >{{item.lable}}</div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Index: 0,
      navList:[
        {lable:'系统中心',path:'/system',routeName:'system'},
        {lable:'运营中心',path:'/operator',routeName:'operator'},
        {lable:'电商中心',path:'/business',routeName:'business'},
        {lable:'广告机中心',path:'/advertising',routeName:'advertising'}
      ]
    }
  },
  methods: {
    linkTo(index,path){
      this.Index = index;
      console.log(this.$route.name)
      this.$router.push(path);
    },
    activeHand(activeRouters){
      return  this.$route.path.indexOf(activeRouters) > -1
    }
  },
}
</script>
<style lang="less" scoped>
.header-nav {
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #fff;
  .header-nav-item {
    cursor: pointer;
    width:100px;
    text-align: center;
    &.isSelect {
      background: #409eff;
    }
  }
}
</style>