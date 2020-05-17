import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    keywords: '',
    description: ''
  },
  mutations: {
    addKeywords: state => state.keywords,
    addDescription: state => state.description
  }
});

export default store
