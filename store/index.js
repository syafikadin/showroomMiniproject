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