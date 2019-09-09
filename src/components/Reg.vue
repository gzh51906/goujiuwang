<template>
  <div>
    <div class="header">
      <i class="el-icon-arrow-left" @click="gotoback"></i>
      <span>注册</span>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="regForm" class="demo-ruleForm">
      <el-form-item prop="phone" style="margin-top:10px; width:80%; margin-left:35px;">
        <el-input type="text" v-model="ruleForm.phone"  placeholder="请输入11位手机号"></el-input>
      </el-form-item>
      <el-form-item prop="pass" style=" width:80%; margin-left:35px;">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass" style=" width:80%; margin-left:35px;">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="gotoReg" class="btn">注册</el-button>
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
          this.$refs.regForm.validateField("checkPass");
        }
        callback();
      }
    };

    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        //通过验证
        callback();
      }
    };

    var checkPhone = async (rule, value, callback) => {
      let { data } = await this.$axios.get("http://localhost:1906/user/check", {
        params: {
          phone: this.ruleForm.phone
        }
      });
      if (data.code === 0) {
        callback(new Error("手机号已经存在"));
      } else {
        //通过验证
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [
          { required: true, message: "必须添加密码", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        checkPass: [{ validator: checkPass, trigger: "blur" }],
         phone:[{pattern:/^1[3|4|5|7|8][0-9]{9}$/ ,message:'输入有误', trigger: "blur" },
          { required: true, message: "必须填写手机号", trigger: "blur" },
          { min: 11, max: 11, message: "11位数字", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" }],
        // phone: [
        //   { required: true, message: "必须填写手机号", trigger: "blur" },
        //   { min: 11, max: 11, message: "11位数字", trigger: "blur" },
        //   { validator: checkPhone, trigger: "blur" }
        // ]
      }
    };
  },
  methods: {
    gotoback() {
      this.$router.go(-1);
    },
    gotoReg() {
      this.$refs["regForm"].validate(async valid => {
        if (valid) {
          let { data } = await this.$axios.post(
            "http://localhost:1906/user/reg",
            {
              phone: this.ruleForm.phone,
              password: this.ruleForm.pass
            }
          );

          if (data.code === 1) {
            this.$router.push("/login");
          }
        } else {
          console.log("error submit!!");
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
  border: 1px solid #eee;
  display: flex;
  align-items: center;
}
.header i {
  font-size: 18px;
  margin-left: 10px;
  color: #ccc;
}
.header span {
  margin-left: 140px;
}
.btn {
  width: 80%;
  margin-left: 35px;
  color: #999;
  background-color: #e8e8e8;
}
</style>