<template>
  <div>
    <form action="#" class="form-example">
      <div class="center">
        <h1>LeadHit</h1>
        <vs-input required primary placeholder="ID" v-model="value">
          <template #message-danger> {{ confirm }} </template>
        </vs-input>
        <vs-button @click="check()"> Войти </vs-button>
      </div>
    </form>
  </div>
</template>
<script>
const axios = require("axios").default;
export default {
  data() {
    return {
      auth: false,
      value: "",
      confirm: "",
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
        if (res === "ok") {
          localStorage.setItem("Leadhit-Site-Id", this.value);
          this.$router.push("/analytics");
          console.log(localStorage.length);
        } else {
          this.confirm = "запрос не был отправлен";
        }
      } else {
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