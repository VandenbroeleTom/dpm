<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import LoginButton from "@/components/LoginButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    LoginButton,
  },
});
</script>
