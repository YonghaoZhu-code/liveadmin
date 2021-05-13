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
      <el-table :data="liverlist" border stripe>
        <el-table-column type="index" ></el-table-column>
        <el-table-column label="用户id" prop="uid" show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="主播名称" prop="name" show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="主播简介" prop="catalog" show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="主播状态" prop="isLive"></el-table-column>
        <el-table-column label="主播排行" prop="no"></el-table-column>
        <el-table-column label="商品链接" prop="shopping" show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="操作" width="180px">
             <template slot-scope="scope">
             <el-button type="primary" @click="handleClick(scope.row)" >编辑</el-button>
             <el-dialog title="编辑主播信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="主播名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="排行榜" :label-width="formLabelWidth">
      <el-input v-model="form.no" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="礼物数" :label-width="formLabelWidth">
      <el-input v-model="form.gift" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="tosumit(scope.row)">确 定</el-button>
  </div>
</el-dialog> <span style="padding:2px">
             <el-button type="danger" @click="block(scope.row)" >封禁</el-button>
             </span>
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
      dialogFormVisible: false,
      row:{},
      form:{name:'',
             no:'',
             gift:''},
      admin:{},
      onlive:'未开播',
      searchmsg:'',
      liverlist:[{
          uid:'iXp5PEQEN',
          name:'三味书屋',
          catalog:'三味书屋为读者提供海量正版书籍...',
          no:23,
          isLive:'未开播',
          shopping:'https://detail.tmall.com/item.htm?spm=a223b.7742558.9189330675.6.112a5a5aHFvphA&id=21355063573&acm=lb-zebra-7852-323868.1003.4.450973&scm=1003.4.lb-zebra-7852-323868.ITEM_21355063573_450973.MMD-157073'

      },
       {
          uid:'UbEXZg6Xz',
          name:'新华书店',
          catalog:'新华书店为读者提供海量正版书籍...',
          no:64,
          isLive:'未开播',
          shopping:'https://detail.tmall.com/item.htm?spm=a223b.7742558.9189330675.6.112a5a5aHFvphA&id=21355063573&acm=lb-zebra-7852-323868.1003.4.450973&scm=1003.4.lb-zebra-7852-323868.ITEM_21355063573_450973.MMD-157073'

      },
        {
          uid:'PhALViW8T',
          name:'小猫书铺',
          catalog:'小猫书铺为读者提供海量正版书籍...',
          no:233,
          isLive:'未开播',
          shopping:'https://detail.tmall.com/item.htm?spm=a223b.7742558.9189330675.6.112a5a5aHFvphA&id=21355063573&acm=lb-zebra-7852-323868.1003.4.450973&scm=1003.4.lb-zebra-7852-323868.ITEM_21355063573_450973.MMD-157073'

      },
      {
          uid:'tHJ32WEtO',
          name:'华阅图书',
          catalog:'华阅图书为读者提供海量正版书籍...',
          no:986,
          isLive:'未开播',
          shopping:'https://detail.tmall.com/item.htm?spm=a223b.7742558.9189330675.6.112a5a5aHFvphA&id=21355063573&acm=lb-zebra-7852-323868.1003.4.450973&scm=1003.4.lb-zebra-7852-323868.ITEM_21355063573_450973.MMD-157073'

      }
     
      ]
  }
},
created(){
  this.getadminone()
},
mounted(){
  this.getlivers()
},
methods:{
  getadminone(){
      this.admin=JSON.parse(window.sessionStorage.getItem('admin'))
    },
    handleClick(row){
        this.form.name=row.name
        this.form.gift=row.gift
        this.form.no=row.no
        this.dialogFormVisible=true
        
        
    },
     tosumit(row){
         this.updateliver(row)
         this.dialogFormVisible = false
         
    },
    async updateliver(row){
            const {data}=await this.$axios.get('/updateliver',{params:{uid:row.uid,name:this.form.name,no:this.form.no,gift:this.form.gift}})
            if(data.code===200){
              this.$message.success('操作成功')
              await this.getlivers()
            }
        },
  async getlivers(){
    const {data}=await this.$axios.get('/getbytype',{params:{type:this.admin.role}})
     this.liverlist=data.livers
     console.log('---'+ this.liverlist[0].isLive)
     for(let i = 0; i< this.liverlist.length;i++){
     this.liverlist[i].isLive = this.liverlist[i].isLive?'已开播':'未开播'
     }
 },
 async block(row){
    const {data}=await this.$axios.get('/tieliver',{params:{uid:row.uid,name:row.name,type:this.admin.role}})
    if(data.code===200){
    this.$message.success('已封禁该主播')
    this.getlivers()
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