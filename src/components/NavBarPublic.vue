<template>
  <header id="navBarPublic" class="bg-light">
    <nav class="navbar" role="navigation" aria-label="Main menu">
      <div class="navbar-body items-center">
        <button @click="activeMenu=!activeMenu" type="button" class="btn" title="Menu"><font-awesome-icon icon="bars" size="lg"/></button>
      
        <router-link to="/" class="logo" title="Inicio">CrisBakery</router-link>
        <button type="button" class="btn" title="Buscar"><font-awesome-icon icon="search" size="lg"/></button>
      
        <Menu :menu="menu" :active="activeMenu" @change="activeMenu = !activeMenu"/>        
      </div>
    </nav>
  </header>
</template>

<script>
import Menu from '@/components/NavBarMenu.vue'

export default {
  name: 'navBarPublic',
  components: {
    Menu
  },
  data() {
    return {
      activeMenu: false,
      menu: [
        {url:'/',name:'Inicio',icon:'home'},
        {url:'/categorias',name:'Categorías',icon:'tags'}
      ]
    }
  }
}
</script>

<style scoped>
#navBarPublic {
  z-index: 2;
}
.navbar {
  display: flex;
  justify-content: center;
}

.navbar-body {
  width: 100%;
  padding: .6rem 2rem;
  display: flex;
  justify-content: space-between;
}

.logo img {
  width: 42px;
}

</style>