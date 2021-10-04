<script setup>
import { reactive, ref } from "vue";

import { useRoute, useRouter } from "vue-router";
import { updateMovie } from "@/apis/movie";

const route = useRoute();
const router = useRouter();

const formInline = reactive({
  name: route.params.name,
  year: route.params.year,
});

const rules = {
  name: [
    {
      required: true,
      message: "请输入电影名称",
      trigger: "blur",
    },
    {
      min: 3,
      message: "Length should 3 ",
      trigger: "blur",
    },
  ],
  year: [
    {
      required: true,
      message: "请输入电影年份",
      trigger: "blur",
    },
    {
      min: 4,
      max: 4,
      message: "Length should 4 ",
      trigger: "blur",
    },
  ],
};

const ruleForm = ref(null);

const onSubmit = () => {
  ruleForm.value.validate((valid) => {
    if (valid) {
      updateMovie(route.params.id, formInline)
        .then((res) => router.push("/"))
        .catch((err) => console.log(err));
    } else {
      return false;
    }
  });
};
</script>

<template>
  <h3>Edit Item</h3>
  <el-form
    :inline="true"
    :model="formInline"
    class="demo-form-inline"
    :rules="rules"
    ref="ruleForm"
  >
    <el-form-item label="name" prop="name">
      <el-input v-model="formInline.name"></el-input>
    </el-form-item>
    <el-form-item label="year" prop="year">
      <el-input v-model="formInline.year"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Update</el-button>
    </el-form-item>
  </el-form>
</template>

<style></style>
