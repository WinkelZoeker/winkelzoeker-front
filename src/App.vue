<template>
  <div id="app" class="small-container">
    <h1>WinkelZoeker</h1>
    <search-form @search:store="searchStore" :error_api="error_api" :invalidLongitude="invalidLongitude" :invalidLatitude="invalidLatitude" :invalidLimit="this.invalidLimit" />
    <stores-table :stores="stores" />
  </div>
</template>

<script>
import axios from "axios";
import SearchForm from "@/components/SearchForm.vue";
import StoresTable from "@/components/StoresTable.vue";

export default {
  name: "app",
  components: {
    SearchForm,
    StoresTable,
  },
  data() {
    return {
      error_api: "",
      stores: [],
      invalidLongitude: false,
      invalidLatitude: false,
      invalidLimit: false
    };
  },
  methods: {
    clearStatus() {
      this.invalidLongitude = false;
      this.invalidLatitude = false;
      this.invalidLimit = false;
      this.error_api = "";
    },

    searchStore(searchParams) {
      this.clearStatus();
      const searchApiUrl = process.env.VUE_APP_SEARCH_API_URL;
      const queryParams = {
        params: { ...searchParams },
      };

      axios
        .get(searchApiUrl, queryParams)
        .then((response) => {
          this.stores = response.data.data;
        })
        .catch((error) => {
          this.stores = [];
          this.error_api = error.response.data.error;

          console.log(`error.response.data => ${JSON.stringify(error.response.data, null, 2)}`);
          this.invalidLongitude = error.response.data.error.includes('longitude');
          this.invalidLatitude =  error.response.data.error.includes('latitude');
          this.invalidLimit =  error.response.data.error.includes('limit');

        });
    },
  },
};
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
