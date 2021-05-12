<template>
<div>
<div><Header></Header></div>
  <div class="home">  
    <el-row>
      <el-col :span="4">
        <div class="left">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b"
      router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-team icon"></i>
          <span>主播管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组1</template>
          <el-menu-item index="list">主播列表</el-menu-item>
          <el-menu-item index="limit">封禁列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="apply">
        <i class="iconfont icon-dongtai icon" style="font-size:18px"></i>
        <span slot="title">用户申请</span>
      </el-menu-item>
      <el-menu-item index="setting">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
    </div>
    </el-col>
    <el-col :span="20">
      <div class="right">
        <router-view></router-view>
      </div>
    </el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
   components: {
    Header,
  },
  data(){
    return{
      searchmsg:'',
      liverlist:{},
      admin:{}
    }
  },

 methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="less" scoped>
.left{
  height: 595px;
  background-color:#333744;
  .icon{
    font-size: 22px;
    padding-right: 4px;
  }
  
}
.right{
    background-color: #eaedf1;
    width: 100%;
    min-height: 595px;
  }
</style>
