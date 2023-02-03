<template>
  <nav>
    <v-toolbar flat color="grey lighten-4">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
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

    <v-navigation-drawer v-model="drawer" app class="primary">
      <p class="error">test</p>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>

