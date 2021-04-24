<template>
  <div class="config">
    <form action="#" @submit.prevent="save">
      <div>
        <p>Preferred chart.</p>
        <div>
          <div>
            <input type="radio" v-model="chart" name="chart" id="tsb" value="tsb">
            <label for="tsb">TSB</label>
          </div>
          <div>
            <input type="radio" v-model="chart" name="chart" id="busso" value="busso">
            <label for="busso">Busso</label>
          </div>
          <div>
            <input type="radio" v-model="chart" name="chart" id="bannister" value="bannister">
            <label for="bannister">Bannister</label>
          </div>
        </div>
      </div>
      <div>
        <input type="submit" value="Save">
      </div>
    </form>
  </div>
</template>
<script>
import Storage from "@/services/Storage";

export default {
  name: "Config",
  data() {
    return {
      chart: 'tsb',
    }
  },
  methods: {
    async save() {
      const data = JSON.parse(JSON.stringify(this.$data));
      await Storage.setItem("config", data);
    }
  },
  async mounted() {
    const config = await Storage.getItem("config");
    Object.assign(this.$data, config);
  }
}
</script>
