<template>
  <div id="stores-table">
    <table>
      <!-- ...thead... -->
      <tbody>
        <tr v-for="store in stores" :key="store.id">
          <td>{{ store.uuid }}</td>
          <td>{{ store.name }}</td>
          <td>{{ store.address }}</td>
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