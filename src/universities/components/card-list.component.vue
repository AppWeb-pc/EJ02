<script>
import UniversityCard from "./card-content.component.vue";
export default {
  name: "card-list",
  components: {UniversityCard},
  props: {
    universities: Object,
  }
}
</script>

<template>
  <div v-for="university in universities">
    <university-card :university="university"></university-card>
  </div>
</template>