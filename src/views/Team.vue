<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="member in team" :key="member.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="96" class="grey lighten-2">
                <img :src="member.avatar">
              </v-avatar>

            </v-responsive>
            <v-card-text>
              <div class="subtitle-1 font-weight-medium">
                {{ member.name }}
              </div>
              <div class="grey--text">
                {{ member.role }}
              </div>
            </v-card-text>
            <v-card-actions>
                  <v-btn color="grey" text>
                    <v-icon small color="" left>mdi-chat</v-icon>
                    <span>Message</span>
                  </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "team",

  components: {},

  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "web developer", avatar: '/avatar-1.png' },
        { name: "Ryu", role: "Graphic designer", avatar: '/avatar-2.png' },
        { name: "Chun Li", role: "Web developer", avatar: '/avatar-3.png' },
        { name: "Gouken", role: "Social media maverick", avatar: '/avatar-4.png' },
        { name: "Yoshi", role: "Sales guru", avatar: '/avatar-5.png' },
      ],
    };
  },
};
</script>
