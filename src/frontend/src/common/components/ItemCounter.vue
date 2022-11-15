<template>
  <div>
    <div class="counter counter--orange ingredients__counter">
      <button
        type="button"
        class="counter__button counter__button--minus"
        @click="count--"
        :disabled="count < 1"
      >
        <span class="visually-hidden">Меньше</span>
      </button>
      <input
        name="counter"
        class="counter__input"
        maxlength="1"
        v-model.number="count"
        disabled
      />

      <button
        type="button"
        class="counter__button counter__button--plus"
        @click="count++"
        :disabled="count > 2"
      >
        <span class="visually-hidden">Больше</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemCounter",
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    count: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
        this.$emit("setCount", newValue);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/scss//mixins/mixins.scss";
@import "~@/assets/scss/blocks/ingredients.scss";
@import "~@/assets/scss/blocks/counter.scss";
@import "~@/assets/scss/visually-hidden.scss";
</style>
