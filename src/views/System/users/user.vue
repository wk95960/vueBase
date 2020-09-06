<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用户列表</span>
      <el-button style="float: right; padding: 3px 0" type="text">添加用户</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="100px" align="center">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
       <el-table-column prop="account" label="账号"></el-table-column>
      <el-table-column prop="ctime" label="创建时间">
        <template slot-scope="{row}">
          <div>{{dateForma(row.ctime)}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="认证状态">
        <template slot-scope="{row}">
          <el-tag v-show="row.status === '1'">已认证</el-tag>
          <el-tag v-show="row.status === '2'" type="warning">未认证</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="ctime" label="修改时间">
        <template slot-scope="{row}">
          <div>{{dateForma(row.utime)}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template>
          <el-button>编辑</el-button>
          <el-button>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
import system from '@/service/system'
import dateFormat from '@/utils/dateFormat'
export default {
  data() {
    return {
      tableData: [],
    }
  },
  mounted() {
    system.getUser(JSON.stringify({ page: 1, limit: 10 }), {
        'Content-Type': 'application/x-www-form-urlencoded',
         "Authorization": localStorage.getItem("token"),
        COMMAND: 'lists',
        MODULE: 'User',
        SYSTEM: 'boss',
      })
      .then((res) => {
        if (res.data.RESULT === 0) {
          this.tableData = res.data.BODY.result
        }
      })
  },
  methods: {
     filterDate(date1){
        var date = new Date(date1);
       return   date.getFullYear().toString()
      },
    dateForma(str){
      return  dateFormat("YYYY-mm-dd HH:MM", Number(str))
    }
  },
}
</script>