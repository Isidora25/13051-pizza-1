<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <RadioButton
          v-for="size in sizes"
          isHidden
          :key="size.id"
          :name="'size'"
          :label="size.name"
          :value="size.value"
          :className="`diameter__input diameter__input--${size.value}`"
          @input="setSize(size)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton.vue";
export default {
  name: "BuilderSizeSelector",
  components: { RadioButton },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setSize(size) {
      this.$emit("setSize", size);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/layout/sheet.scss";
</style>
