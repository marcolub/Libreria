import Vue from 'vue'

const state = {
    authUser: {},
    isAuthenticated: false,
    jwt: localStorage.getItem('token'),
    endpoints: {
        // TODO: Remove hardcoding of dev endpoints
        obtainJWT: 'http://127.0.0.1:8000/auth/obtain_token/',
        refreshJWT: 'http://127.0.0.1:8000/auth/refresh_token/',
        baseUrl: 'http://127.0.0.1:8000/'
    }
}

const mutations = {
    setAuthUser(state, {
        authUser,
        isAuthenticated
    }) {
        Vue.set(state, 'authUser', authUser)
        Vue.set(state, 'isAuthenticated', isAuthenticated)
    },
    updateToken(state, newToken) {
        // TODO: For security purposes, take localStorage out of the project.
        localStorage.setItem('token', newToken);
        state.jwt = newToken;
    },
    removeToken(state) {
        // TODO: For security purposes, take localStorage out of the project.
        localStorage.removeItem('token');
        state.jwt = null;
    }
}


export default {
    namespaced: true,
    state,
    mutations
}