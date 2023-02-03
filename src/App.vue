<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app {
  background-color: var(--v-background-base);
}
</style>