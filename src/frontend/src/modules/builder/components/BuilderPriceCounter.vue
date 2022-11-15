<template>
  <div class="content__result">
    <p>
      Итого:
      {{ pizzaPrice }}₽
    </p>
    <button :disabled="pizzaPrice === 0" type="button" class="button">
      Готовьте!
    </button>
  </div>
</template>
<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    pizzaPrice: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/blocks/button.scss";
</style>
