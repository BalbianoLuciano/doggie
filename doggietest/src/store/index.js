import { createStore } from "vuex";

const store = createStore({
  state: {
    doggie: null,
    owner: null,
    connected: false
  },
  mutations: {
    setGlobalDoggie(state, doggieData){
        state.doggie = doggieData
    },
    setGlobalOwner(state, ownerData){
      state.owner = ownerData
    },
    setGlobalAccount(state, accountData){
      state.connected = accountData
    }
  },
  getters: {},
});

export default store;
