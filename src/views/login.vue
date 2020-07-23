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
               
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleForm)">提交</el-button>
                    <el-button type="primary" @click="$router.push('/register')">注册</el-button>
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
          if (this.ruleForm.password !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
         
        }
      };
     
      return {
        ruleForm: {
          password: '',
         
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
         
          name: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
   
      submitForm(params){
        let _this=this 
        this.$axios.get("login",{params}).then(res=>{
          let path='path' in  _this.$route.query?_this.$route.query.path:'home'
            if(res.data=="200"){
               _this.$store.state.username=params.username
             
                _this.$router.push(path)
                _this.$message('登录成功');
            }else{
                  _this.$message('登录失败');
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
        margin-left: 80px;
    }

   

}
</style>