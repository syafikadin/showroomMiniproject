import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    indexNumber: [],
})
  
export const mutations = {
    setIndexNumber(state, payload){
        state.indexNumber = payload
    },
}

export const actions = {
    changeIndexNumber(store, payload){
        store.commit("setIndexNumber", payload)
    },
}