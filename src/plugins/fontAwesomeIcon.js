import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faEdit, faTrash);
Vue.component("font-awesome-icon", FontAwesomeIcon);
