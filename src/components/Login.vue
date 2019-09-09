<template>
  <div>
    <div class="header">
      <i class="el-icon-arrow-left" @click="gotoback"></i>
      <span>账号登录</span>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="loginForm">
      <el-form-item prop="phone" class="inputs" style="margin-top:10px;">
        <el-input type="text" v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="password" class="inputs">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
       <div class="mont">
         <span style="margin-left:10px">忘记密码</span><span style="margin-right:10px" @click="gotol">注册</span>
       </div>
      <el-form-item>
        <el-button @click="gotoReg" class="btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.loginForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        phone: "",
        password: ""
      },
      rules: {
        password: [
          { required: true, message: "必须添加密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        phone: [
          { required: true, message: "必须填写手机号码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    gotoback() {
      this.$router.go(-1);
    },
    gotol(){
      this.$router.push('/reg')

    },
    gotoReg() {
      this.$refs["loginForm"].validate(async valid => {
        if (valid) {
          // hard code
          let { data } = await this.$axios.post(
            "http://localhost:1906/user/login",
            {
              phone: this.ruleForm.phone,
              password: this.ruleForm.password
            }
          );
          if(data.code === 1){
            localStorage.setItem("username",this.ruleForm.phone);
            let targetUrl = this.$route.query.targetUrl || '/mine'
            this.$router.push(targetUrl);
           
             
              // 保存token到本地
              this.$store.commit('login',data.data.authorization)
          }else{
              alert('用户名或密码错误')
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.header {
  height: 46px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.header i {
  font-size: 18px;
  margin-left: 10px;
  color: #ccc;
}
.header span {
  margin-left: 125px;
}
.inputs {
  width: 80%;
  margin-left: 35px;
}
 .mont {
   height:30px;
   display:flex;
   align-content: center;
   justify-content:space-between;
   color:#999;
 }
.btn {
  width: 80%;
  margin-left: 35px;
  font-size: 18px;
  color: #999;
  background-color: #e8e8e8;
}
</style>