<template>
  <div class="navbar-menu" :class="{'menu-active' : active}">
    <div class="navbar-menu-content">
      <ul>
        <li v-for="link in menu" :key="link.name" @click="$emit('change')">
          <router-link :to="link.url" router-link-exact-active>
            <span class="icon"><font-awesome-icon :icon="link.icon" size="sm"/></span>{{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="bg-menu" @click="$emit('change')"></div>
  </div>
</template>
<script>
export default {
	name: 'NavBarMenu',
	props: {
		menu: {
			type: Array,
			required: true
		},
		active: {
			type: Boolean
		}
	}
};
</script>
<style scoped>
.navbar-menu{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 4;
  display:none;
}

.menu-active {
  display: flex;
}

.navbar-menu-content {
  width: 280px;
  position: fixed;
  left: -280px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 5;
}

.navbar-menu-content ul {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  list-style: none;
}

.navbar-menu-content ul li {
  padding: .5rem;
}

.navbar-menu-content ul li a {
  text-decoration: none;
  color: #222;
}

.navbar-menu-content ul li a:hover, 
.navbar-menu-content ul li a:focus,
.navbar-menu-content ul li a.router-link-exact-active {
  color: tomato;
  transition: .2s;
}

.icon {
  width: 32px;
  margin-right: .5rem;
  display: inline-block;
  text-align: center;
}

.bg-menu{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.menu-active .navbar-menu-content {
  left: 0px;
  transition: .2s;
  -moz-transition: .2s;
  -webkit-transition: .2s;
  -o-transition: .2s;
}

.menu-active .bg-menu {
  transition: 1s;
  background-color: #2424244a;
}

</style>