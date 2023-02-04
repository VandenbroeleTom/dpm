<template>
  <div class="home">
    <LoginButton />
    <button @click="refreshToken">Refresh token</button>

    <User />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginButton from "@/components/LoginButton.vue";
import User from "@/components/User.vue";
import Storage from "@/services/Storage";
import ApiClient from "@/services/ApiClient";

export default defineComponent({
  name: "Home",
  components: {
    LoginButton,
    User,
  },
  methods: {
    async refreshToken() {
      const user = await Storage.getItem('user');
      const refreshToken = user.refresh_token;
      const tokens = await ApiClient.refreshToken(refreshToken);
      user.refresh_token = tokens.refresh_token;
      user.access_token = tokens.access_token;
      user.expires_at = tokens.expires_at;
      await Storage.setItem('user', user);
    },
  },
});
</script>
