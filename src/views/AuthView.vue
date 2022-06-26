<template>
  <div id="authView">
    <auth-form />
  </div>
</template>
<script>
import AuthForm from "../components/AuthForm.vue";
export default {
  name: "auth",
  components: {
    AuthForm,
  },
  data: () => ({}),
};
</script>
<style scoped>
</style>