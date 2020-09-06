<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用户组列表</span>
      <el-button style="float: right; padding: 3px 0" type="text">添加用户组</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="100px" align="center">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column prop="title" label="角色"></el-table-column>
      <el-table-column prop="status" label="认证状态">
        <template slot-scope="{row}">
          <el-tag v-show="row.status === '1'">已认证</el-tag>
          <el-tag v-show="row.status === '2'" type="warning">未认证</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template>
          <el-button>编辑</el-button>
          <el-button>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-block">
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
  </el-card>
</template>
<script>
import system from '@/service/system'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      
      total:0,
      page:1,
      limit:10,
    }
  },
  computed: {
    ...mapGetters(
      'systemData',['tableData']
    )
  },
  mounted() {
     this.$store.dispatch(
       'systemData/getTableDataAction',
       {
        params: JSON.stringify({ page: this.page, limit: this.limit }),
        myconfig: { 'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": localStorage.getItem("token"),
        COMMAND: 'lists',
        MODULE: 'Group',
        SYSTEM: 'boss',}
       }
      )
  },
  methods: {
    getTableData (){
          system.getUser(JSON.stringify({ page: this.page, limit: this.limit }), {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Authorization": localStorage.getItem("token"),
        COMMAND: 'lists',
        MODULE: 'Group',
        SYSTEM: 'boss',
      })
      .then((res) => {
        if (res.data.RESULT === 0) {
          this.tableData = res.data.BODY.result;
          this.total =  Number(res.data.BODY.total) 
        }
      })
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.limit = val;
        this.page = 1;
         this.getTableData ()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.page = val;
         this.getTableData ()
      }
  },
}
</script>
<style lang="less" scoped>
  .page-block{
    margin-top:20px;
  }
</style>