<template>
  <div id="app" class="small-container">
    <h1>WinkelZoeker - Version 1</h1>

    <search-form @search:store="searchStore" />
    <stores-table :stores="stores" />
  </div>
</template>

<script>
import axios from 'axios';
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
      stores: [],
    };
  },
  methods: {
    searchStore(searchParams) {
      const searchApiUrl = process.env.VUE_APP_SEARCH_API_URL;
      const queryParams = {
        params: {...searchParams}
      };

      console.log(`URL FORM => ${searchApiUrl}`);


      axios.get(searchApiUrl, queryParams).then(response => {
        console.log(`RESPONSE: ${JSON.stringify(response, null, 2)}`);
        this.stores = response.data;
      }).catch(error => {
        console.log(`ERROR: ${JSON.stringify(error, null, 2)}`);
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
