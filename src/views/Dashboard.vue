<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

      <v-container class="my-5">

        <v-row>
          <v-col xs12 md6>
            <v-btn tile outlined color="primary" block>1</v-btn>
          </v-col>
          <v-col xs4 md2>
            <v-btn tile outlined color="primary" block>2</v-btn>
          </v-col>
          <v-col xs4 md2>
            <v-btn tile outlined color="primary" block>2</v-btn>
          </v-col>
          <v-col xs4 md2>
            <v-btn tile outlined color="primary" block>2</v-btn>
          </v-col>
        </v-row>

        <v-row justify>
          <v-col xs4 md3>
            <v-btn outlined tile color="success" block>1</v-btn>
          </v-col>
          <v-col xs4 md3>
            <v-btn outlined tile color="success" block>2</v-btn>
          </v-col>
        </v-row>

      </v-container>

  </div>
</template>

<script>

  export default {
    name: 'dashboard',

    components: {
    },
  }
</script>
