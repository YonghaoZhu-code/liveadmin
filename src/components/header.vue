<template>
  <div class="box">
    <div class="same">原子带货后台管理</div>
    <div class="same right">
      <i class="el-icon-guide"></i>
      <span>{{getadmin}}</span><span style="padding:6px">|</span><sapn @click="logout" style="cursor: pointer;">退出</sapn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      admin:{}
    }
  },
   created(){
   this.getadminone()
  },
  computed:{
       getadmin(){
      switch(this.admin.role){
        case 2:return '图书区';
        case 3:return '数码区';
        case 4:return '美妆区';
        case 5:return'服饰区';
        case 6:return '汽车区';
        default:return '图书区'
      }
    }},
    methods:{
    getadminone(){
      this.admin=JSON.parse(window.sessionStorage.getItem('admin'))
    },
    logout(){
      window.sessionStorage.clear()
      this.$router.push('/')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box {
  height: 60px;
  width: 100vw;
  display: flex;
  background-color: #373d41;
  justify-content: space-between;
  .same {
    height: 100%;
    width: 170px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
  }
  .right{
    font-size: 16px;
  }

}
</style>
