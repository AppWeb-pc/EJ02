<script>
import FooterContent from "./public/components/footer-content.component.vue";
import UniversityCard from "./universities/components/card-content.component.vue";
import ToolbarContent from "./public/components/toolbar-content.component.vue";
import CardList from "./universities/components/card-list.component.vue";
import { UniversitiesApiService } from "./universities/services/universities-api.service.js";

export default {
  name: 'App',
  components:{
    CardList,
    FooterContent,
    ToolbarContent,
    UniversityCard,
  },
  data(){
    return{
      universities: [], // Cambiar a un arreglo para almacenar todas las universidades
      errors: [],
      universityApi: new UniversitiesApiService()
    }
  },
  created() {
    this.getUniversities();
  },
  methods:{
    getUniversities(){
      this.universityApi.getUniversities('/search?country=peru')
          .then(response =>{
            this.universities = response.data; // Asignar todas las universidades
            console.log(response.data);
          })
          .catch(e =>{
            this.errors.push(e);
          });
    }
  }
}
</script>

<template>

  <div class="w-full">
    <div>
      <toolbar-content></toolbar-content>
    </div>
    <!-- Iterar sobre todas las universidades y mostrarlas usando UniversityCard -->
    <div class = "main">
      <university-card v-for="university in universities" :key="university.id" :university="university"></university-card>
    </div>
  </div>
  <footer-content></footer-content>
</template>

<style scoped>
.main {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


</style>
