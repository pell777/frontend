<template>
  <div>
    <div class="center">
      <h1>LeadHit</h1>
      <vs-input primary placeholder="ID" v-model="value">
        <template v-if="proverka" #message-success> {{ confirm }} </template>
        <template v-else #message-danger> {{ confirm }} </template>
      </vs-input>
      <vs-button @click="check()"> Войти </vs-button>
    </div>
  </div>
</template>
<script>
const axios = require("axios").default;
export default {
  data() {
    return {
      value: "",
      confirm: "",
      proverka: Boolean,
    };
  },
  methods: {
    async check() {
      let res = "";
      let value = this.value.trim().replace(/\s/g, "");
      if (value.length == 24) {
        try {
          res = await axios
            .get("https://track-api.leadhit.io/client/test_auth", {
              headers: {
                "Api-Key":
                  "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
                "Leadhit-Site-Id": value,
              },
            })
            .then(function (response) {
              return response.data.message;
            });
        } catch (error) {
          console.log(error);
        }
        this.proverka = true;
        this.confirm = "Запрос отправлен";
        if (res === "ok") {
          localStorage.setItem("leadhit-site-id", this.value);
          this.$router.push("/analytics");
        } else {
          this.proverka = false;
          this.confirm = "запрос не был отправлен";
        }
      } else {
        this.proverka = false;
        this.confirm = "id должен содержать 24 символа";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: Alfa Slab -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.center button {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 6em;
}
</style>