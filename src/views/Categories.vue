<template>
  <div id="categories">
    <div class="container">
      <div class="row pd-2">
        <div class="col-12">
          <h1 class="h1 m-0 pb-2">Categorías</h1>
        </div>
        <div
          class="col-3"
          v-for="category in categoriesList"
          :key="category._id"
        >
          <div class="card">
            <router-link
              class="card-link card-fade pos-relative"
              :to="'/categorias/' + category.nameLink"
              :title="'Ir a categoría ' + category.name"
            >
              <div class="bg-fade"></div>
              <img
                class="card-image"
                :src="`/img/${category.image}`"
                :alt="'Imagen de ' + category.name"
              />
            </router-link>
            <div class="card-body">
              <router-link
                class="card-link"
                :to="'/categorias/' + category.nameLink"
                :title="'Ir a categoría ' + category.name"
                >{{ category.name }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/helpers/axios";

export default {
  name: "categories",
  components: {},
  data() {
    return {
      categoriesList: []
    };
  },
  methods: {
    getCategories() {
      api
        .categories()
        .then(res => {
          this.categoriesList = res.data;
        })
        .catch(() => {});
    }
  },
  created() {
    this.getCategories();
  }
};
</script>
<style scoped>
.card {
  padding: 0.5rem;
  height: auto;
  position: relative;
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image {
  height: 200px;
}
</style>
