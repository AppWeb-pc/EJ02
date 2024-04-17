<script>
import { University } from "../model/universities.entity.js";
import { LogoApiService} from "../../shared/services/logo-api.service.js";

export default {
  name: "university-card",
  props: {
    university: University,
  },

  data() {
    return {
      logoApiService: new LogoApiService(),
    };
  },

  created() {
    if (this.university) {
      try {
        this.university.logoUrl = this.logoApiService.getUrlToLogo(this.university);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    }
  },
};
</script>

<template>
  <pv-card class="university-card">
    <template #header>
      <div class="header-card">
        <img :src="university.logoUrl" alt="University Logo" class="logo">
      </div>
    </template>
    <template #title><h1>{{ university.name }}</h1></template>
    <template #subtitle>
      <h3><b>Domains:</b> {{ university.domains.join(', ') }}</h3>
      <h3><b>WebPages:</b> {{ university.web_pages.join(', ') }}</h3>
    </template>
    <template #content>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1 footer-card">
        <a v-if="university.web_pages.length > 0" :href="university.web_pages[0]" target="_blank">
          <button class="footer-button">Visit Website</button>
        </a>
        <p v-else>No website available</p>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

.university-card {
  width: 25rem;
  padding: 3rem;
  box-shadow: 0px 0px 5px 0px #858585;
  margin: 1rem;
  text-align: center;
}

.header-card {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  width: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
}

.footer-card {
  justify-content: center;
}

.footer-button {
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.footer-button:hover {
  background-color: gray;
}

@media only screen and (max-width: 700px) {
  .university-card{
    width: 60%;
  }
}

</style>

