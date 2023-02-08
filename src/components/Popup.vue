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

    <v-card>
      <v-card-title primary-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            name="title"
            label="Title"
            id="title"
            v-model="title"
            prepend-icon="mdi-folder"
          ></v-text-field>
          <v-textarea
            label="Information"
            name="information"
            v-model="content"
            prepend-icon="mdi-pencil"
          ></v-textarea>

          <v-btn color="success" class="mx-0 mt-0" depressed @click="submit">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: true,
      title: '',
      content: ''
    }
  },

  methods: {
    submit() {
      console.log(this.title, this.content);
    }
  }
}
</script>