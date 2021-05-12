<template>
<div class="box">
<el-card>
      <!-- 搜索与添加区域 -->
      <div class="seacher">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="searchmsg">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" >搜索用户</el-button>
        </el-col>
      </el-row>
</div>
      <!-- 用户列表区域 -->
      <div class="table">
      <el-table :data="liverlist" border stripe>
        <el-table-column type="index" ></el-table-column>
        <el-table-column label="用户id" prop="uid" show-overflow-tooltip="true"></el-table-column>
         <el-table-column label="用户名" prop="username" ></el-table-column>
        <el-table-column label="申请名称" prop="name" ></el-table-column>
        <el-table-column label="审核意见" width="180px">
             <template slot-scope="scope">
             <el-button type="primary" @click="agree(scope.row)" >同意</el-button>
             <el-button type="danger" @click="reject(scope.row)" >拒绝</el-button>
             </template>
        </el-table-column>
      </el-table>
      </div>
      <!-- 分页区域 -->
      <el-pagination >
      </el-pagination>
    </el-card>
    </div>
</template>
<script>
export default {
     data(){
    return{
      searchmsg:'',
      liverlist:[
      ],
      admin:{}
  }
},
created(){
this.getadmin()
},
mounted(){
   this.getapply()
},
methods:{
    handleClick(row){
        console.log(row)
    },
    getadmin(){
      this.admin=JSON.parse(window.sessionStorage.getItem('admin'))
    },
async getapply(){
    const {data}=await this.$axios.get('/getapply',{params:{type:this.admin.role}})
    this.liverlist=data.apply
}


}
}
</script>
<style lang="less" scoped>
.box{
    width: 96%;
    margin: 0 auto;
    padding: 10px;
    .seacher{
        margin-bottom: 16px;
    }
}
</style>