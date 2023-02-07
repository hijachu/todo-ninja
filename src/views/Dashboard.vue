<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-card flat class="pa-3" v-for="project in projects" :key="project.title">

        <v-row>
          <v-col cols="12" md="6" :class="`pa-3 project ${project.status}`">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <div class="caption grey--text">Status</div>
            <div>{{ project.status }}</div>
          </v-col>
        </v-row>
      </v-card>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "dashboard",

  components: {},

  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Tempor ea consequat sint ex laborum ex ipsum laborum cupidatat est ipsum ullamco nulla. Voluptate anim eiusmod eu ad dolor quis do adipisicing sint aliquip. Nostrud velit nostrud duis ipsum ad exercitation sit qui dolore mollit. In ut excepteur fugiat est nulla amet labore tempor aliqua id enim aliquip. Minim irure consectetur quis sunt dolor occaecat eu occaecat proident anim irure commodo. Aliqua do est eu sit laboris.' },
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Tempor quis proident magna enim aliquip mollit ea tempor ea velit officia dolor quis. Velit et ea sit est est nulla. Elit pariatur voluptate quis nostrud excepteur irure esse pariatur enim magna sint.' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20st Dec 2018', status: 'complete', content: 'Mollit sint amet magna esse. Sint qui occaecat velit proident magna adipisicing sunt do. Irure est mollit culpa culpa. Amet qui magna exercitation est in.' },
        { title: 'Create a community forum', person: 'Gouken', due: '20st Oct 2018', status: 'overdue', content: 'Reprehenderit magna deserunt cupidatat voluptate id. Veniam cillum esse labore enim ut labore consectetur. Lorem cillum aliquip anim eu eu do. Deserunt fugiat laborum aliqua do magna ut et. Reprehenderit irure eiusmod nisi nisi amet officia. Eiusmod laborum adipisicing commodo et pariatur velit eiusmod eu mollit velit nulla. Ullamco est ut dolor minim reprehenderit nulla consequat irure irure enim mollit aliquip Lorem.' },
      ]
    }
  },

};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.row {
  border-bottom: 1px solid #ccc;
}
</style>