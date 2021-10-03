<script setup></script>

<template>
  <h3>Login</h3>
  <el-form
    ref="ruleForm"
    label-width="120px"
    class="demo-ruleForm"
    label-position="top"
  >
    <el-form-item label="username">
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="password">
      <el-input></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">Submit</el-button>
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
