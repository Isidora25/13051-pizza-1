<template>
  <label :class="className">
    <input
      :class="{ 'visually-hidden': isHidden }"
      type="radio"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <b v-if="isBoldLabel">{{ label }}</b>
    <span v-else>{{ label }}</span>
    <span v-if="description">{{ description }}</span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    isHidden: {
      type: Boolean,
      default: false,
    },
    isBoldLabel: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss//mixins/mixins.scss";
@import "~@/assets/scss/visually-hidden.scss";
@import "~@/assets/scss/blocks/diameter.scss";
@import "~@/assets/scss/blocks/dough.scss";
@import "~@/assets/scss/blocks/ingredients.scss";
@import "~@/assets/scss/blocks/radio.scss";
</style>
