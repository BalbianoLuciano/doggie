import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "../src/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faChevronDown, faChevronUp, faHatWizard, faSearch, faShuffle, faWallet } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHatWizard, faShuffle, faSearch, faWallet, faChevronDown, faChevronUp);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).mount("#app");
