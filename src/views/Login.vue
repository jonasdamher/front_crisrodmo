<template>
  <div id="login">
    <h1 class="h1">Iniciar sesion</h1>
    <form>
      <input v-model.trim="email" type="text" placeholder="Correo" />
      <input v-model="password" type="text" placeholder="Contraseña" />
      <button @click="login" type="submit" >Acceder</button>
    </form>
  </div>
</template>

<script>
import api from "@/helpers/axios";

export default {
  name: "login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      warning: false
    };
  },
  methods: {
    login() {
      api
        .login(this.email, this.password)
        .then(res => {
          localStorage.setItem("token", JSON.stringify(res.data));

          this.$router.push({ path: "dashboard", query: {} }).catch(() => {});
        })
        .catch(() => {
          this.warning = true;
        });
    }
  }
};
</script>

<style scoped></style>
