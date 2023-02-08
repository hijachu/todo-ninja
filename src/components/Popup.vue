<template>
  <v-dialog
    v-model="dialog"
    scrollable
    persistent :overlay="false"
    max-width="600px"
    transition="dialog-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="success"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Add new project
      </v-btn>
    </template>

    <!-- <v-btn color="success" slot="activator" depressed>Add new project</v-btn> -->

    <v-card>
      <v-card-title primary-title>
        <h2>Add a New Project</h2>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
}
</script>