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


      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            color="grey"
            v-bind="attrs"
            v-on="on"

          >
            <v-icon color="">mdi-chevron-down</v-icon>
            <span>menu</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            :to="link.route"

            active-class="primary--text"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>


      <v-btn text class="grey--text">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      <!--
        <v-btn rounded @click="toggleTheme
        ">Toggle Theme</v-btn>
      -->
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app absolute class="primary">
      <v-list class="mt-5">
        <v-list-item class="d-flex justify-center">
          <v-list-item-avatar size="100">
            <img src="/avatar-1.png" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-center white--text subtitle-1 mt-1">
              The Net Ninja
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">
              mdi-{{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: 'view-dashboard',
          text: 'Dashboard',
          route: '/'
        },
        {
          icon: 'folder',
          text: 'My Projects',
          route: '/projects'
        },
        {
          icon: 'account',
          text: 'Team',
          route: '/team'
        },
      ]
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>

