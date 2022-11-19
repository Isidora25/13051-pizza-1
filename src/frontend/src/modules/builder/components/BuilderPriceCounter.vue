<template>
  <div class="content__result">
    <p>
      Итого:
      {{ pizzaPrice }}₽
    </p>
    <button
      :disabled="disabled"
      type="button"
      class="button"
      @click="addToCart"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.pizzaPrice);
    },
  },
  computed: {
    pizzaPrice() {
      const ingredientsPrice = this.pizza.ingredients.reduce(
        (previous, { count, price }) => previous + count * price,
        0
      );

      return (
        this.pizza.size.multiplier *
          (this.pizza.dough.price +
            this.pizza.sauce.price +
            ingredientsPrice) || 0
      );
    },
    disabled() {
      return !this.pizza.ingredients.length || !this.pizza.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/blocks/button.scss";
</style>
