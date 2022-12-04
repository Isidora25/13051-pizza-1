<template>
  <div>
    <AppLayoutHeader :totalPrice="totalPrice" :showLogin="showLogin" />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
export default {
  name: "AppLayoutDefault",
  components: { AppLayoutHeader },
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
};
</script>
