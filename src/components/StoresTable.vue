<template>
  <div id="stores-table">
    <table>
      <!-- ...thead... -->
      <tbody>
        <tr v-for="store in stores" :key="store.uuid">
          <td>{{ store.addressName }}</td>
          <td>{{ `${store.street}, ${store.street2}` }}</td>
          <td>{{ store.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'stores-table',
  props: {
    stores: Array,
  },
}</script>

<style scoped></style>