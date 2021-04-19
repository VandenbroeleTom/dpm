<template>
  <div class="login-button">
    <a :href="loginLink">Login with strava</a>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import localforage from "localforage";
import ApiClient from "@/services/ApiClient";

const CLIENT_ID = "50808";

export default defineComponent({
  name: "LoginButton",
  computed: {
    loginLink() {
      const url = new URL("https://www.strava.com/oauth/authorize");
      url.searchParams.append("client_id", CLIENT_ID);
      url.searchParams.append("redirect_uri", window.location.href);
      url.searchParams.append("response_type", "code");
      url.searchParams.append("scope", "activity:read_all");
      return url.toString();
    },
  },
  async created() {
    // Check if we have a access token and it has not yet expired.
    // ..

    // The auth code.
    const code = this.$route.query.code;
    // The received scope.
    const scope = this.$route.query.scope;
    if (code) {
      // Get the access code.
      const { access_token, refresh_token } = await ApiClient.getAccessTokens(
        code
      );

      if (access_token) {
        await localforage.setItem("access_token", access_token);
        await localforage.setItem("refresh_token", refresh_token);
        this.$router.push("/activities");
      }
    }
  },
});
</script>
