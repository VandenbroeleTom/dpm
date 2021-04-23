<template>
  <div class="home">
    <LoginButton />
    <button @click="refreshToken">Refresh token</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginButton from "@/components/LoginButton.vue";
import Storage from "@/services/Storage";
import ApiClient from "@/services/ApiClient";

export default defineComponent({
  name: "Home",
  components: {
    LoginButton,
  },
  methods: {
    async refreshToken() {
      const refreshToken = await Storage.getItem("refresh_token");
      const tokens = await ApiClient.refreshToken(refreshToken);
      await Storage.setItem('refresh_token', tokens.refresh_token);
      await Storage.setItem('access_token', tokens.access_token)
    },
  },
});
</script>
