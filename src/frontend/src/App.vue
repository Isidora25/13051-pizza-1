<template>
  <div id="app">
    <AppLayout :totalPrice="totalPrice" :showLogin="true">
      <router-view @addToCart="addToCart" />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
export default {
  name: "App",
  components: {
    AppLayout,
  },
  data() {
    return {
      cart: {
        pizzas: [],
      },
    };
  },
  methods: {
    addToCart(pizza) {
      this.cart.pizzas.push(pizza);
    },
  },
  computed: {
    totalPrice() {
      return this.cart.pizzas.reduce(
        (previous, { price }) => previous + price,
        0
      );
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/libs/normalize.scss";
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/scaffolding.scss";
</style>
