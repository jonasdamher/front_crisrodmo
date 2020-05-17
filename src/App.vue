<template>
  <div id="app">
    <NavBarPublic />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarPublic from "@/components/NavBarPublic.vue";

export default {
  name: "app",
  components: {
    NavBarPublic
  },
  data() {
    return {};
  },
  metaInfo() {
    return {
      title: "Inicio",
      titleTemplate: "%s - crisrodmo",
      meta: [
        {
          name: "keywords",
          content: "crisrodmo, bakery, pastelería, pastelería 2020, crisbakery"
        },
        {
          name: "description",
          content: "Un lugar donde aprender pastelería y divertirse dulcemente."
        }
      ]
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
@font-face {
  font-family: PlayfairDisplay;
  src: url("/fonts/Playfair_Display/PlayfairDisplay-Regular.ttf");
  font-family: Alice;
  src: url("/fonts/Alice/Alice-Regular.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Alice;
  color: #202125;
  background-color: #fff;
}

#app {
}

.container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
}

.h1,
.h2,
.h3,
.h4 {
  margin-bottom: 1rem;
  font-family: PlayfairDisplay;
}

.col-1 {
  width: 8.333333333333333%;
}
.col-2 {
  width: 16.66666666666667%;
}

.col-3 {
  width: 25%;
}

.col-4 {
  width: 33.33333333333333%;
}

.col-5 {
  width: 41.66666666666667%;
}

.col-6 {
  width: 50%;
}

.col-7 {
  width: 58.33333333333334%;
}

.col-8 {
  width: 66.6666666666666%;
}

.col-9 {
  width: 75%;
}

.col-10 {
  width: 83.333333333333333%;
}

.col-11 {
  width: 91.66666666666667%;
}

.col-12 {
  width: 100%;
}

/* cards */
.card {
  display: flex;
  flex-direction: column;
  position: relative;
}

.card-image {
  width: 100%;
  height: 100%;
  display: block;
  object-position: center;
  object-fit: cover;
}

.card-fade:hover .bg-fade {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(34, 34, 34, 0.185);
  transition: 0.4s;
  -moz-transition: 0.4s;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
}

.card-body {
  width: 100%;
  padding: 1rem 2rem;
}

.card-link {
  text-decoration: none;
  font-family: PlayfairDisplay;
  font-size: 18px;
  color: #222;
}

.card-link:hover {
  color: tomato;
  transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
}

/* shadows */
.shadow-sm {
  box-shadow: 0px 1px 2px #0e0e0e30;
}

.shadow-md {
  box-shadow: 0px 1px 2px #1716164a, 0px 3px 6px #1716165c;
}

/* display */
.d-flex {
  display: flex;
}

.d-block {
  display: block;
}

/* flex */
.f-column {
  flex-direction: column;
}

.f-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.j-between {
  justify-content: space-between;
}

/* text */
.text-bold {
  font-family: PlayfairDisplay;
  font-weight: bold;
}

.p {
  font-size: 18px;
  margin-bottom: 1rem;
}

.text-sm {
  font-size: 16px;
}

/* text color */
.text-secondary {
  color: #444444;
}

.text-org {
  color: tomato;
}

.text-dark {
  color: #202125;
}

/* buttons */
.btn {
  padding: 0.8rem;
  border: 0;
  cursor: pointer;
  color: currentColor;
  background-color: transparent;
}

/* background-color */
.bg-light {
  background-color: #ffffff;
}

.bg-secondary {
  background-color: #f0fff0;
}

.bg-org {
  background-color: #fffaf0;
}

/* position */
.pos-relative {
  position: relative;
}

.m-0 {
  margin: 0;
}

.mb-1 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 2rem;
}

/* padding */

.pt-4 {
  padding-top: 4rem;
}

.pl-2 {
  padding-left: 2rem;
}

.pr-1 {
  padding-right: 1rem;
}

.pr-2 {
  padding-right: 2rem;
}

.pb-2 {
  padding-bottom: 2rem;
}

.pb-0 {
  padding-bottom: 0;
}

.pd-3 {
  padding: 3rem;
}

.pd-0 {
  padding: 0;
}

.index-2 {
  z-index: 2;
}
</style>
