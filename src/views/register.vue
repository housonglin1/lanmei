<template>
    <div>
       <div class="login">
           <div class="iconfont icon-qiqiu"></div>
           <img src="https://login.flyme.cn/resources/uc/wlogin/member/images/flyme.png" alt="">

            <!-- <form action="/login" method="post">
            <div>

                <label > 姓名:</label><input type="text" name="username">
            </div>
            <div>

                <label > 密码:</label><input type="password" name="password">
            </div>
            <div>
                 <input type="submit" value="登录" class="btn" @click="login">
            </div>
            </form> -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="姓名" prop="username">
                    <el-input v-model.number="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input type="password" v-model="ruleForm.password2" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleForm)">注册</el-button>
                    <!-- <el-button type="primary" @click="$router.push('/register')">注册</el-button> -->
                </el-form-item>
                </el-form>
          
       </div>
                
    </div>
</template>

<script>
   export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
        setTimeout(() => {
          if (value.length<2) {
            callback(new Error('请输入两个字符以上'));
          } else {
              callback();
            }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
         
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {

        ruleForm: {
          password: '',
          password2: '',
          username: ''
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password2: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          username: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
   
      submitForm(params){ 
        let _this=this
        this.$axios.get("register",{params}).then(res=>{
            console.log(res)
            if(res.data=="200"){
                _this.$router.push('login')
            }else{
                console.log("失败")
            }
        })
      } 



      
    },
  
  }
  
</script>

<style lang="scss" scoped>
.login{
    // border: 1px solid #ccc;
    width: 500px;
    margin:50px auto;
    .iconfont{
        margin-left: 60px;
        font-size: 80px;
        color: #387aff;
        text-align: center;
    }
    img{
       padding-top: 20px;
        display: block;
        width: 80px;
        margin: 20px auto;
        margin-left: 245px;
    }
    .el-button{
        margin-left: 160px;
    }

   

}
</style>