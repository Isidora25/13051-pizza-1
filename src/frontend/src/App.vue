<template>
  <div id="app">
    <AppLayout :totalPrice="totalPrice">
      <Index @addToCart="addToCart" />
    </AppLayout>
  </div>
</template>

<script>
import Index from "@/views/Index.vue";
import AppLayout from "@/layouts/AppLayout.vue";
export default {
  name: "App",
  components: {
    Index,
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
</style>
