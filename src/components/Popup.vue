<template>
  <v-dialog
    v-model="dialog"
    scrollable
    persistent
    :overlay="false"
    max-width="600px"
    transition="dialog-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" dark v-bind="attrs" v-on="on"> Add new project </v-btn>
    </template>

    <v-card>
      <v-card-title primary-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            name="title"
            label="Title"
            id="title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            name="information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="Due date"
                prepend-icon="mdi-calendar-range"
                readonly
                v-bind="attrs"
                v-on="on"
                :value=formattedDate
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
            </v-date-picker>
          </v-menu>

          <!-- <v-spacer></v-spacer> -->

          <v-btn
            color="success"
            class="mx-0 mt-3"
            depressed
            @click="submit"
            :loading="loading"
          >Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format';
import db from '@/firebase';
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      dialog: false,
      title: '',
      content: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
    };
  },

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        // console.log(this.title, this.content);
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: format(new Date(this.due), 'do MMM yyyy'),
          person: 'The Net Ninja',
          status: 'ongoing'
        }

        // db.collection('projects').add(project)
        //   .then((result) => {
        //     console.log('added to db');
        //     console.log('Result', result);
        //   })

        // Add a new document with a generated id.
        // const docRef = await addDoc(collection(db, "projects"), project);

        addDoc(collection(db, "projects"), project)
          .then(docRef => {
            console.log('added to db');
            console.log("Document written with ID: ", docRef.id);
            this.loading = false;
            this.dialog = false;
          })

      }
    },
  },

  computed: {
    formattedDate() {
      return this.due ? format(new Date(this.due), 'do MMM yyyy') : ''
    }
  }
};
</script>
