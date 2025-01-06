import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import FoodItems from "./components/FoodItems.vue";
import ProductItems from "./components/ProductItems.vue";
import TodoItem from "./components/TodoItem.vue";
import FlowerItems from "./views/FlowerItems.vue";

const app = createApp(App);

app.component('food-items', FoodItems);
app.component('product-items', ProductItems);
app.component('todo-item', TodoItem);
app.component('flower-item', FlowerItems);

app.use(router);

app.mount("#app");
