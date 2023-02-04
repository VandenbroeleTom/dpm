<template>
  <div v-if="show" class="login-button">
    <button @click="login">Login with strava</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ApiClient from "@/services/ApiClient";
import Storage from "../services/Storage";

const CLIENT_ID = "50808";

export default defineComponent({
  name: "LoginButton",
  data() {
    return {
      show: true,
    };
  },
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
  methods: {
    login() {
      window.location.href = this.loginLink;
    },
  },
  async created() {
    if (await Storage.getItem("refresh_token")) {
      // Don't show login button
      // this.show = false;
    }

    // The auth code.
    const code = this.$route.query.code;
    // The received scope.
    const scope = this.$route.query.scope;

    if (code) {
      const response = await ApiClient.accessTokens(code);
      await Storage.setItem("user", response);
      await this.$router.push("/activities");
    }
  },
});
</script>
