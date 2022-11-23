<template>
  <span :class="`filling filling--${value}`">{{ name }}</span>
</template>

<script>
export default {
  name: "SelectorItem",
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
