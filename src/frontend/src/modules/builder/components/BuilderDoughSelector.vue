<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <RadioButton
          v-for="doughItem in dough"
          isBoldLabel
          isHidden
          :key="doughItem.id"
          :name="'doughType'"
          :label="doughItem.name"
          :value="doughItem.value"
          :description="doughItem.description"
          :checked="doughItem.id === selectedDoughId"
          :className="`dough__input dough__input--${doughItem.className}`"
          @input="setDough(doughItem)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton.vue";
export default {
  name: "BuilderDoughSelector",
  components: { RadioButton },
  props: {
    dough: {
      type: Array,
      required: true,
    },
    selectedDoughId: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setDough(doughItem) {
      this.$emit("setDough", doughItem);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/layout/sheet.scss";
@import "~@/assets/scss/blocks/title.scss";
</style>
