<template>
  <div id="search-form">
    <form @submit.prevent="handleSubmit">
      <label>Latitude</label>
      <input v-model="searchParams.latitude" type="text" />
      <label>Longitude</label>
      <input v-model="searchParams.longitude" type="text" />
      <label>Limit</label>
      <input v-model="searchParams.limit" type="text" />
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "search-form",
  data() {
    return {
      searchParams: {
        latitude: "",
        longitude: "",
        limit: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("search:store", this.searchParams);
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>