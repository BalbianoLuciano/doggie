import { createStore } from "vuex";

const store = createStore({
  state: {
    doggie: null,
    owner: null,
    account: null,
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
      state.account = accountData
    },
    setGlobalConnected(state, connectedData){
      state.connected = connectedData
    }
  },
  getters: {},
});

export default store;
