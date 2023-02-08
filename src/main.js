import { createApp } from "vue";
import App from "./App.vue";
import activeUsser from "./components/activeUser.vue";
import userData from "./components/userData.vue";
const app = createApp(App);
app.component("active-user", activeUsser);
app.component("update-data", userData);
app.mount("#app");
// 两个组件，第一个组件输出数据，第二个组件以input形式修改更新第一个组件中的内容
