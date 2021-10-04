<script setup>
import { getMovieList, addMovie, delMovie } from "@/apis/movie";
import { computed, ref, reactive, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

onMounted(() => {
  getMovies;
});

const movies = ref([]);

const store = useStore();
const router = useRouter();

const isLogin = store.state.token ? true : false;

const formInline = reactive({
  name: "",
  year: "",
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

const currentPageSize = reactive({
  limit: 10,
  page: 1,
});

watch(currentPageSize, (oldV, newV) => {
  getMovieList(newV).then((res) => (movies.value = res));
});

const handleSizeChange = (currentSize) => {
  currentPageSize.limit = currentSize;
};

const handleCurrentChange = (currentPage) => {
  currentPageSize.page = currentPage;
};

// 计算属性
const imdbSearch = computed(() => {
  return (movieName) => {
    return `https://www.imdb.com/find?q=${movieName}`;
  };
});

const getMovies = getMovieList(currentPageSize)
  .then((res) => (movies.value = res))
  .catch((err) => console.log(err));

const onSubmit = () => {
  ruleForm.value.validate((valid) => {
    if (valid) {
      addMovie(formInline)
        .then((res) => {
          getMovieList(currentPageSize).then((res) => (movies.value = res));
        })
        .catch((err) => console.log(err));
    } else {
      return false;
    }
  });
};

const delBtnClick = (id) => {
  delMovie(id)
    .then((res) => {
      getMovieList(currentPageSize).then((res) => (movies.value = res));
    })
    .catch((err) => console.log(err));
};

const editBtnClick = (movie) => {
  router.push({ name: "edit", params: { ...movie } });
};
</script>

<template>
  <p>{{ movies.total }} Titles</p>
  <template v-if="isLogin">
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
        <el-button type="primary" @click="onSubmit">Save</el-button>
      </el-form-item>
    </el-form>
  </template>
  <ul class="movie-list">
    <li v-for="movie in movies.movies">
      {{ movie.name }} - {{ movie.year }}
      <span class="float-right">
        <template v-if="isLogin">
          <el-button size="mini" @click="editBtnClick(movie)">edit</el-button>
          <el-button size="mini" @click="delBtnClick(movie.id)"
            >delete</el-button
          >
        </template>
        <el-button size="mini" class="imdb">
          <a class="imdb" :href="imdbSearch(movie.name)" target="_blank">
            IMDb
          </a>
        </el-button>
      </span>
    </li>
  </ul>
  <el-pagination
    v-model:currentPage="currentPageSize.page"
    :page-sizes="[1, 5, 10]"
    :page-size="currentPageSize.size"
    layout="sizes, prev, pager, next"
    :total="movies.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
  <img src="@/assets/img/totoro.gif" class="dudu" />
</template>

<style scoped>
.movie-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.movie-list li {
  padding: 12px 24px;
  border-bottom: 1px solid #ddd;
}

.dudu {
  display: block;
  margin: 0 auto;
  height: 100px;
}

.el-button {
  font-size: 12px !important;
  padding: 3px 5px !important;
  text-decoration: none !important;
  cursor: pointer !important;
  background-color: white !important;
  color: black !important;
  border: 1px solid #555555 !important;
  border-radius: 5px !important;
  margin-top: -5px !important;
  vertical-align: middle !important;
}

.imdb {
  font-size: 12px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  background: #f5c518;
  border-radius: 5px;
  padding: 3px 5px;
}

.float-right {
  float: right;
}
</style>
