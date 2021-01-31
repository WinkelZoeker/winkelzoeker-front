<template>
  <div id="search-form">
    <form @submit.prevent="handleSubmit">
      <label>Latitude</label>
      <input v-model="searchParams.latitude" type="text" :class="{ 'has-error': invalidLatitude }"/>
      <label>Longitude</label>
      <input v-model="searchParams.longitude" type="text" :class="{ 'has-error': invalidLongitude }"/>
      <label>Limit</label>
      <input v-model="searchParams.limit" type="text" :class="{ 'has-error': invalidLimit }"/>

      <p v-if="error_api" class="error-message">{{error_api}}</p>

      <button>Search</button>
    </form>
  </div>
</template>

<script>


export default {
  name: "search-form",
  props: {
    error_api: String,
    invalidLongitude: Boolean,
    invalidLatitude: Boolean,
    invalidLimit: Boolean
  },
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
[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>