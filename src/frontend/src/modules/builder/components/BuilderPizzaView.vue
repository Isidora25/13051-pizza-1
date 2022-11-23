<template>
  <AppDrop class="content__constructor" @drop="moveIngredient">
    <div :class="`pizza pizza--foundation--${dough}-${sauce}`">
      <div class="pizza__wrapper">
        <div
          v-for="{ value, count, id } in ingredients"
          :key="`${count}-${id}`"
          :class="`pizza__filling ${getIngredientClass(count, value)}`"
        ></div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from "@/common/components/AppDrop";
export default {
  name: "BuilderPizzaView",
  components: { AppDrop },
  props: {
    dough: {
      type: String,
      default: "",
    },
    sauce: {
      type: String,
      default: "",
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getIngredientClass(count, value) {
      const defaultClass = `pizza__filling--${value}`;
      const getClass = () => {
        switch (count) {
          case 2:
            return `${defaultClass} pizza__filling--second`;
          case 3:
            return `${defaultClass} pizza__filling--third`;
          default:
            return defaultClass;
        }
      };

      return getClass();
    },
    moveIngredient(ingredient) {
      if (ingredient.count < 3)
        this.$emit("setIngredient", {
          ...ingredient,
          count: ingredient.count + 1,
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/blocks/pizza.scss";
</style>
