<script setup>
import { getMovieList } from "@/apis/movie";
import { computed, ref } from 'vue'

const moves = ref([])

getMovieList().then(res => moves.value = res).catch(err => console.log(err))

const imdbSearch = computed(()=>{
  return (movieName) => {
    return `https://www.imdb.com/find?q=${movieName}`
  }
})


</script>

<template>
  <p>{{ moves.total }} Titles</p>
  <ul class="movie-list">
    <li v-for="movie in moves.movies">
      {{ movie.name }}-{{ movie.year }}
      <span class="float-right">
        <template v-if="isLogin">
          <el-button size="mini">edit</el-button>
          <el-button size="mini">delete</el-button>
        </template>
        <el-button size="mini" class="imdb">
          <a
            class="imdb"
            :href="imdbSearch(movie.name)"
            target="_blank"
          >
            IMDb
          </a>
        </el-button>
      </span>
    </li>
  </ul>
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
