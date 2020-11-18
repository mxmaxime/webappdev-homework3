// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

const URL_WS = "https://private-anon-7f820c5d58-wad20postit.apiary-mock.com/profiles"
//const URL_PROFILE = "https://private-anon-188803be0a-wad20postit.apiary-mock.com/users/1"
//load Vuex
Vue.use(Vuex);

//to handle state
const state = {}

//to handle state
const getters = {
    allProfiles: (state) => state.profiles
}

//to handle actions
const actions = {
    getProfiles({ commit }) {
        
        axios.get(URL_WS)
    .then(response => {
        
        commit('SET_POSTS', response.data)
        // console.log(response.status)
        // console.log(response.config)
        // console.log(response.data)
    })
}}

//to handle mutations
const mutations = {
    SET_POSTS(state, profiles) {
        // console.log("SET POSTS")
        state.profiles = profiles

    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
/** we have just created a boiler plate for our vuex store module**/