<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector
          :dough="dough"
          :selectedDoughId="pizza.dough.id"
          @setDough="selectDough"
        />
        <BuilderSizeSelector
          :sizes="sizes"
          :selectedSizeId="pizza.size.id"
          @setSize="selectSize"
        />
        <BuilderIngredientsSelector
          :ingredients="ingredients"
          :sauces="sauces"
          :selectedSauceId="pizza.sauce.id"
          @setSauce="selectSauce"
          @setIngredient="selectIngredients"
        />
        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
              v-model="pizza.name"
            />
          </label>
          <BuilderPizzaView
            :dough="pizza.dough.value"
            :sauce="pizza.sauce.value"
            :ingredients="pizza.ingredients"
            @setIngredient="selectIngredients"
          />
          <BuilderPriceCounter :pizza="pizza" @addToCart="addToCart" />
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { dough, sizes, sauces, ingredients } from "@/static/pizza.json";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector.vue";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector.vue";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector.vue";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter.vue";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView.vue";
import {
  normalizeDough,
  normalizeSizes,
  normalizeSauces,
  normalizeIngredients,
} from "@/common/helpers.js";

export default {
  name: "Index",
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPriceCounter,
    BuilderPizzaView,
  },
  methods: {
    selectDough(dough) {
      this.pizza.dough = dough;
    },
    selectSize(size) {
      this.pizza.size = size;
    },
    selectSauce(sauce) {
      this.pizza.sauce = sauce;
    },
    selectIngredients(ingredient) {
      this.ingredients.forEach((item) => {
        if (item.id === ingredient.id) {
          item.count = ingredient.count;
        }
      });
      this.pizza.ingredients = this.ingredients.filter(
        (ingredient) => ingredient.count > 0
      );
    },
    addToCart(pizzaPrice) {
      this.pizza.price = pizzaPrice;
      this.$emit("addToCart", this.pizza);
    },
  },
  data() {
    return {
      dough: dough.map(normalizeDough),
      sizes: sizes.map(normalizeSizes),
      sauces: sauces.map(normalizeSauces),
      ingredients: ingredients.map(normalizeIngredients),
      pizza: {
        name: "",
        dough: {},
        size: {},
        sauce: {},
        ingredients: [],
        price: 0,
      },
    };
  },
  mounted() {
    this.pizza = {
      name: "",
      dough: this.dough[0],
      size: this.sizes[0],
      sauce: this.sauces[0],
      ingredients: [],
      price: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/blocks/title.scss";
@import "~@/assets/scss/blocks/input.scss";
@import "~@/assets/scss/visually-hidden.scss";
</style>
