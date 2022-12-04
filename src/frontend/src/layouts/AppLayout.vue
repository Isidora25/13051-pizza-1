<template>
  <component :is="layout" :totalPrice="totalPrice" :showLogin="showLogin">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
    showLogin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
