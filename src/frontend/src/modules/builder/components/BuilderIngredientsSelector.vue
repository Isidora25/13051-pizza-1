<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <RadioButton
            v-for="sauce in sauces"
            :key="sauce.id"
            :name="'sauce'"
            :label="sauce.name"
            :value="sauce.value"
            :className="'radio ingredients__input'"
            @input="$emit('setSauce', sauce)"
          />
        </div>
        <div class="ingredients__filling">
          <p>Начинка:</p>
          <ul class="ingredients__list">
            <li
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <AppDrag :transfer-data="ingredient">
                <SelectorItem
                  :name="ingredient.name"
                  :value="ingredient.value"
                />
              </AppDrag>

              <ItemCounter
                v-model="ingredient.count"
                @setCount="$emit('setIngredient', ingredient)"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton.vue";
import SelectorItem from "@/common/components/SelectorItem";
import ItemCounter from "@/common/components/ItemCounter";
import AppDrag from "@/common/components/AppDrag";

export default {
  name: "BuilderIngredientsSelector",
  components: { RadioButton, SelectorItem, ItemCounter, AppDrag },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    sauces: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss//mixins/mixins.scss";
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/layout/sheet.scss";
@import "~@/assets/scss/blocks/ingredients.scss";
@import "~@/assets/scss/blocks/radio.scss";
@import "~@/assets/scss/blocks/filling.scss";
</style>
