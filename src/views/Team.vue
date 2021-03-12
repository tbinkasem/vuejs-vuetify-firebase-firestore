<template>
<v-app>
  <!-- <Navbar /> -->
  <div class="team">
    <h1 class="subheading grey--text">ทีมพัฒนา</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span class="">ส่งข้อความ</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</v-app>
</template>

<script>

//import Navbar from '../components/Navbar'

export default {
  //components: { Navbar },
  data() {
    return {
      team: [
        { name: 'Teera Binkasem', role: 'Web Developer', avatar: '/teera.png' },
        { name: 'Peera Binkasem', role: 'Graphic designer', avatar: '/peera.png' },
        { name: 'Seera Binkasem', role: 'Web developer', avatar: '/seera.png' },
        { name: 'Weera Binkasem', role: 'Social media maverick', avatar: '/weera.png' },
      ]
    }
  }
}
</script>