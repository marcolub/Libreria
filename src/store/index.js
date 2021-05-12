import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import axios from 'axios'

Vue.use(Vuex)

// // Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default new Vuex.Store({

  modules: {
    users
  },
})