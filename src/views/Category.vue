<template>
  <div class="category">
    <div class="container">
      <div class="row pd-2">
        <div class="col-12">
          <h1 class="h1 m-0 pb-2">{{ category.name }}</h1>
        </div>
        <div class="col-6" v-for="recipe in recipes" :key="recipe._id">
          <div class="card bg-secondary items-center">
            <router-link
              class="card-link card-fade pos-relative"
              :to="'/receta/' + recipe.nameLink"
              :title="'Ir a la receta ' + recipe.title"
            >
              <div class="bg-fade"></div>
              <img
                class="card-image shadow-sm"
                :src="`/img/${recipe.image}`"
                :alt="'Imagen de ' + recipe.title"
              />
            </router-link>
            <div class="card-body">
              <router-link
                class="card-link d-block mb-1"
                :to="'/receta/' + recipe.nameLink"
                :title="'Ir a la receta ' + recipe.title"
                >{{ recipe.title }}</router-link
              >
              <p>{{ recipe.description }}</p>
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
  name: "category",
  components: {},
  data() {
    return {
      category: {},
      recipes: []
    };
  },
  methods: {
    getCategoryRecipes(nameLink) {
      api
        .category(nameLink)
        .then(res => {
          this.category = res.data.category;
          this.recipes = res.data.recipes;
          console.log(this.recipes);
        })
        .catch(() => {});
    }
  },
  created() {
    this.getCategoryRecipes(this.$route.params.id);
  }
};
</script>
<style scoped>
.card {
  flex-direction: row;
}

.card-image {
  width: 200px;
}

.card-link {
  font-size: 25px;
}
</style>
