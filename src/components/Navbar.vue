<template>
  <nav>
    <v-toolbar flat color="grey lighten-4">
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">
          Todo</span>
          <span>Ninja
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text class="grey--text">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      <!--
        <v-btn rounded @click="toggleTheme
        ">Toggle Theme</v-btn>
      -->
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>

