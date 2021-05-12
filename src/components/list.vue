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
        <el-table-column label="用户id" prop="id" show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="主播名称" prop="name" show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="主播简介" prop="catalog" show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="主播状态" prop="islive"></el-table-column>
        <el-table-column label="主播排行" prop="no"></el-table-column>
        <el-table-column label="商品链接" prop="shopping" show-overflow-tooltip="true"></el-table-column>
        <el-table-column label="操作" width="180px">
             <template slot-scope="scope">
             <el-button type="primary" @click="handleClick(scope.row)" >编辑</el-button>
             <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
      form:{},
      searchmsg:'',
      liverlist:[{
          id:'iXp5PEQEN',
          name:'三味书屋',
          catalog:'三味书屋为读者提供海量正版书籍...',
          no:23,
          islive:'未开播',
          shopping:'https://detail.tmall.com/item.htm?spm=a223b.7742558.9189330675.6.112a5a5aHFvphA&id=21355063573&acm=lb-zebra-7852-323868.1003.4.450973&scm=1003.4.lb-zebra-7852-323868.ITEM_21355063573_450973.MMD-157073'

      },
       {
          id:'UbEXZg6Xz',
          name:'新华书店',
          catalog:'新华书店为读者提供海量正版书籍...',
          no:64,
          islive:'未开播',
          shopping:'https://detail.tmall.com/item.htm?spm=a223b.7742558.9189330675.6.112a5a5aHFvphA&id=21355063573&acm=lb-zebra-7852-323868.1003.4.450973&scm=1003.4.lb-zebra-7852-323868.ITEM_21355063573_450973.MMD-157073'

      },
        {
          id:'PhALViW8T',
          name:'小猫书铺',
          catalog:'小猫书铺为读者提供海量正版书籍...',
          no:233,
          islive:'未开播',
          shopping:'https://detail.tmall.com/item.htm?spm=a223b.7742558.9189330675.6.112a5a5aHFvphA&id=21355063573&acm=lb-zebra-7852-323868.1003.4.450973&scm=1003.4.lb-zebra-7852-323868.ITEM_21355063573_450973.MMD-157073'

      },
      {
          id:'tHJ32WEtO',
          name:'华阅图书',
          catalog:'华阅图书为读者提供海量正版书籍...',
          no:986,
          islive:'未开播',
          shopping:'https://detail.tmall.com/item.htm?spm=a223b.7742558.9189330675.6.112a5a5aHFvphA&id=21355063573&acm=lb-zebra-7852-323868.1003.4.450973&scm=1003.4.lb-zebra-7852-323868.ITEM_21355063573_450973.MMD-157073'

      }
     
      ]
  }
},
methods:{
    handleClick(row){
      this.row=row
        this.dialogFormVisible=true
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