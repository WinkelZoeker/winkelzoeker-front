<template>
  <div id="app" class="small-container">
    <h1>WinkelZoeker</h1>

    <search-form @search:store="searchStore" />
    <stores-table :stores="stores" />
  </div>
</template>

<script>
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
      stores: [
        {
          uuid: 1,
          name: "Jumbo Kastelenplein",
          address: "Kastelenplein, Eindhoven",
        },
        {
          uuid: 2,
          name: "Jumbo Hanevoet",
          address: "Hanevoet, Eindhoven",
        },
      ],
    };
  },
  methods: {
    searchStore(searchParams) {
      console.log(`App => searchParams: ${JSON.stringify(searchParams)}`);
      console.log(`URL: ${process.env.SEARCH_API_URL}`);

      this.stores = [
        ...this.stores,
        {
          uuid: searchParams.limit,
          name: searchParams.latitude,
          address: searchParams.longitude,
        },
      ];
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
