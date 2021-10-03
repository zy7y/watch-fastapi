<script setup>
import { reactive } from 'vue'

import login from '@/apis/user'

const loginForm = reactive({
  username: "test",
  password: "123456"
})

const loginBtnClick = () =>{
  login(loginForm).then(res => console.log(res)).catch(err => console.log(err))
}

</script>

<template>
  <h3>Login</h3>
  <el-form
    ref="ruleForm"
    label-width="120px"
    class="demo-ruleForm"
    label-position="top"
    :model="loginForm"
  >
    <el-form-item label="username">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="password">
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
