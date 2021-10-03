<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { ElMessage } from "element-plus";

const store = useStore();

const loginForm = reactive({
  username: "test",
  password: "123456",
});

const rules = {
  username: [
    {
      required: true,
      message: "请输入你的用户名",
      trigger: "blur",
    },
    {
      min: 3,
      max: 20,
      message: "长度必须是 3 to 20",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入你的密码",
      trigger: "change",
    },
    {
      min: 6,
      max: 12,
      message: "长度必须是 6 to 12",
      trigger: "blur",
    },
  ],
};

const ruleForm = ref();

const loginBtnClick = () => {
  // 表单验证..
  ruleForm.value.validate((valid) => {
    if (valid) {
      store.dispatch("userLoginAction", loginForm);
      ElMessage({
        message: "成功登录.",
        type: "success",
      });
    } else {
      return false;
    }
  });
};
</script>

<template>
  <h3>Login</h3>
  <el-form
    ref="ruleForm"
    label-width="120px"
    class="demo-ruleForm"
    label-position="top"
    :model="loginForm"
    :rules="rules"
  >
    <el-form-item label="username" prop="username">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="password" prop="password">
      <el-input v-model="loginForm.password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginBtnClick">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.el-form-item {
  margin-bottom: 7px;
}

.el-form-item__label {
  padding-bottom: 0px !important;
  line-height: 24px !important;
}
</style>
