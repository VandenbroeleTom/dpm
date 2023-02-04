<template>
  <div>
    <div v-if="user.athlete">Hi {{ user.athlete.username }}.</div>
    <div>Your access token is: {{ user.access_token }}</div>
    <div>Your refresh token is: {{ user.refresh_token }}</div>
    <div>Your access token will expire at: {{ user.expires_at }}</div>
  </div>
</template>

<script>
import Storage from "@/services/Storage";
export default {
  data() {
    return {
      user: {},
    };
  },
  async created() {
    this.user = (await Storage.getItem("user")) || {};
    if (this.user.expires_at) {
      const date = new Date(this.user.expires_at * 1000);
      this.user.expires_at = date.toISOString();
    }
  },
};
</script>

<style>
</style>
