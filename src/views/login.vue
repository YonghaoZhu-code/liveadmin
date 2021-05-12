<template>
    <div class="login-wrapper">
        <div class="login-content">
            <div class="login-main">
                <h2 class="login-main-title">管理员登录</h2>
                <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
                    <el-form-item prop="userName">
                        <el-input v-model="dataForm.userName" placeholder="帐号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login-btn-submit" type="primary" @click="dataFormSubmit()">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dataForm: {
                    userName: '',
                    password: ''
                },
                dataRule: {
                    userName: [{
                        required: true,
                        message: '帐号不能为空',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            // 提交表单
        async  dataFormSubmit() {
            const {data} = await this.$axios.get('/login',{params:{username:this.dataForm.userName,password:this.dataForm.password}})
              if(data.code!==200) return this.$message.error(data.msg)
              window.sessionStorage.setItem('admin',JSON.stringify(data.admin))
              this.$message.success('登录成功')
              this.$router.push('/home')
             
              
            }
        }
    }
</script>
<style lang="less" scoped>

    .login-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        background-color: rgba(38, 50, 56, .6);
        background: url('../assets/loginbg.jpg') no-repeat;
        background-size: 100% 100%;
    }

    .login-content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        height: 300px;
        width: 400px;
        background-color: #112234;
        opacity: .8;
    }

    .login-main {
        color: beige;
        padding: 20px 20px 10px 20px;
    }
    .login-main-title{
      font-size: 24px;
      text-align: center;
      padding-bottom: 12px;
      margin-bottom: 12px;
    }
	.login-select {
		left: -120px;
		width: 120px;
	}
  .login-btn-submit{
    margin-left:120px;
  }
</style>
