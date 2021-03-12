<template>
<v-app>
  <!-- <Navbar /> -->
  <div class="projects">
    <h1 class="subheading grey--text">โครงการที่รับผิดชอบ</h1>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header" class="py-1">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">กำหนดเสร็จ by {{ project.due }}</div>
              <div>{{ project.detail }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
    
  </div>
</v-app>
</template>

<script>

import db from '@/fb'
//import Navbar from '../components/Navbar'

export default {
  //components: { Navbar },
  data() {
    return {
      projects: []
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Teera' && project.status != 'complete'
      })
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }  
      })
    })
  }
}
</script>
