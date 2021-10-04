<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { updateUser } from "@/apis/user";
import { ElMessage } from "element-plus";

const store = useStore();

const nickname = ref(store.state.nickname);

const saveBtnClick = () => {
  updateUser(nickname.value)
    .then((res) => {
      store.commit("changeNickname", nickname.value);
      window.localStorage.setItem("nickname", nickname.value);
      ElMessage({
        message: "修改成功.",
        type: "success",
      });
    })
    .catch((err) => console.log(err));
};
</script>

<template>
  <h3>Settings</h3>
  Your Name <input v-model="nickname" required="required" />
  <button @click="saveBtnClick" style="margin-left: 3px">save</button>
</template>

<style scoped></style>
