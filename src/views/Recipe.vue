<template>
  <div id="recipe">
    <div class="container">
      <div class="row">
        <div class="col-6 d-flex items-center">
          <div class="pd-3">
            <div class="d-flex f-wrap">
              <Badge
                v-for="category in recipe.categories"
                :key="category._id"
                :url-badge="'/categorias/' + category.nameLink"
                :name-badge="category.name"
                :title-badge="'Categoría '"
              />
            </div>
            <h1 class="h1 mb-2">{{ recipe.title }}</h1>
            <p class="p text-secondary mb-2">{{ recipe.description }}</p>
            <p class="p">Etiquetas</p>
            <div class="d-flex f-wrap">
              <Badge
                v-for="tag in recipe.tags"
                :key="tag._id"
                :url-badge="'/buscar/' + tag.name"
                :name-badge="tag.name"
                :title-badge="'Buscar por '"
              />
            </div>
            <p class="p text-secondary text-sm">Creado el {{ recipe.createdAt }} por {{ author.name }}</p>
          </div>
        </div>
        <div class="col-6">
          <img
            class="image-recipe pos-relative"
            v-if="recipe.image"
            :src="`/img/${recipe.image}`"
            :alt="'imagen de ' + recipe.title"
            :title="recipe.title"
          />
        </div>
        <div class="col-8 bg-org">
          <div class="pd-3">
            <h2 class="h2 mb-2">Elaboración</h2>
            <div
              class="pb-1 pl-2"
              v-for="elaboration in recipe.elaboration"
              :key="elaboration._id"
            >
              <p class="p m-0 text-bold">{{ elaboration.section }}</p>
              <!-- steps elaboration -->
              <div class="content-steps">
                <ol class="list list-number text-secondary">
                  <li
                    class="p"
                    v-for="step in elaboration.steps"
                    :key="step._id"
                  >
                    {{ step.text }}
                  </li>
                </ol>
                <!-- final steps -->
                <p class="p text-dark" v-if="elaboration.note">
                  Nota: {{ elaboration.note }}
                </p>
                <img
                  class="image-recipe"
                  v-if="elaboration.image"
                  :src="urlImage + elaboration.image"
                  :alt="'imagen de sección ' + elaboration.section"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 bg-light index-2">
          <div class="pd-3">
            <h3 class="h3 mb-2">Ingredientes</h3>
            <ul class="list text-secondary">
              <li
                class="p d-flex j-between items-center"
                v-for="ingredient in recipe.ingredients"
                :key="ingredient._id"
              >
                {{ ingredient.name }}
                <span class="text-dark text-bold ingre-list">{{
                  ingredient.quantity
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Badge from "@/components/Badge.vue";
import moment from "moment";
import api from "@/helpers/axios";

export default {
  name: "recipe",
  components: {
    Badge
  },
  data() {
    return {
      recipe: {},
      author: {},
      warning: {
        error: false,
        message: ""
      }
    };
  },
  metaInfo() {
    return {
      title: this.recipe.title,
      titleTemplate: "%s - crisrodmo",
      meta: [
        { name: "keywords", content: this.recipe.keywords },
        { name: "description", content: this.recipe.description }
      ]
    };
  },
  methods: {
    getRecipe(nameLink) {
      api
        .recipe(nameLink)
        .then(res => {
          this.recipe = res.data;
          this.recipe.createdAt = moment(this.recipe.createdAt).format(
            "DD-MM-YYYY"
          );

          this.author = res.data.creator;

          this.recipe.keywords = "";
          this.recipe.tags.forEach((tag, i) => {
            if (i == 0) {
              this.recipe.keywords += tag.name;
            } else {
              this.recipe.keywords += ", " + tag.name;
            }
          });
        })
        .catch(err => {
          this.warning.error = true;
          this.warning.message = err;
        });
    }
  },
  created() {
    this.getRecipe(this.$route.params.id);
  }
};
</script>
<style scoped>
.image-recipe {
  width: 100%;
  height: calc(100% + 3rem);
  display: block;
  object-fit: cover;
  object-position: center;
}

.list {
  list-style: inside;
}

ol.list-number {
  list-style-type: decimal;
}

.content-steps {
  padding-top: 1rem;
  padding-bottom: 2rem;
}

ol.list-number li {
  text-align: justify;
}

.list li:last-child {
  margin: 0;
}

.h1{
  font-size: 38px;
}

.h2, .h3 {
  font-size: 26px;
}

.ingre-list {
  min-width: 80px;
}

.content-steps .list ~ .p {
  margin: 0;
  margin-top: 1rem;
}
</style>
