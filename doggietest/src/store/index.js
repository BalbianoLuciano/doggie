import { createStore } from "vuex";

const store = createStore({
  state: {
    doggie: null,
  },
  mutations: {
    setGlobalDoggie(state, doggieData){
        state.doggie = doggieData
    }
  },
  getters: {},
});

export default store;
