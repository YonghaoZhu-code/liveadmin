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
          <el-button type="primary" >搜索主播</el-button>
        </el-col>
      </el-row>
</div>
      <!-- 用户列表区域 -->
      <div class="table">
      <el-table :data="limitlist" border stripe>
        <el-table-column type="index" ></el-table-column>
        <el-table-column label="主播id" prop="uid" show-overflow-tooltip="true"></el-table-column>
         <el-table-column label="主播名" prop="name" ></el-table-column>
         <el-table-column label="主播类型" prop="type" ></el-table-column>
        <el-table-column label="操作" width="180px">
             <template slot-scope="scope">
             <el-button type="success" @click="untie(scope.row)" >解封</el-button>
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
      limitlist:[
      ],
      admin:{}
  }
},
created(){
this.getadmin()
},
mounted(){
   this.getlimit()
},
methods:{
    handleClick(row){
        console.log(row)
    },
    getadmin(){
      this.admin=JSON.parse(window.sessionStorage.getItem('admin'))
    },


async untie(scope){
    const {data}=await this.$axios.get('/addlive',{params:{uid:scope.uid,name:scope.name,type:scope.type}})
    if(data.code===200){
      await this.$axios.get('/untielimit',{params:{uid:scope.uid}})
      this.$message.success('该主播已解封')
      await this.getlimit()
    }
    else{
      this.$message.error('操作失败')
    }

},


async getlimit(){
    const {data}= await this.$axios.get('/getlimit',{params:{type:this.admin.role}})   
    if(data.code===200) {
      this.limitlist=data.limitlist
    }
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