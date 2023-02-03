<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

      <v-container class="my-5">

        <v-row>
          <v-col xs=12 md=6>
            <v-btn tile outlined color="primary" block>1</v-btn>
          </v-col>
          <v-col xs=4 md=2>
            <v-btn tile outlined color="primary" block>2</v-btn>
          </v-col>
          <v-col xs=4 md=2>
            <v-btn tile outlined color="primary" block>2</v-btn>
          </v-col>
          <v-col xs=4 md=2>
            <v-btn tile outlined color="primary" block>2</v-btn>
          </v-col>
        </v-row>

        <v-row justify-end>
          <v-col xs=4 md=3>
            <v-btn outlined tile color="success" block>1</v-btn>
          </v-col>
          <v-col xs=4 md=3>
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
