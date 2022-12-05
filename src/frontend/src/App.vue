<template>
  <div id="app">
    <component :is="layout" :totalPrice="totalPrice" showLogin>
      <router-view @addToCart="addToCart" />
    </component>
  </div>
</template>

<script>
const defaultLayout = "AppLayoutDefault";

export default {
  name: "App",
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
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/libs/normalize.scss";
@import "~@/assets/scss/fonts.scss";
@import "~@/assets/scss/scaffolding.scss";
</style>
