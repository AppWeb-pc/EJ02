<script>
export default {
  name: 'toolbar-content',
};
</script>

<template>
  <pv-toolbar class="toolbar">
    <template #start></template>
    <template #center>
      <h1>HIPO Universities API Service</h1>
    </template>
    <template #end></template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar {
  background-color: #000000;
  color: white;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.toolbar h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}
</style>
