<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>คุณได้เพิ่มโครงการใหม่เรียบร้อยแล้ว</span>
      <v-btn color="white" flat @click="snackbar = false">ปิด</v-btn>
    </v-snackbar>

    <v-toolbar flat app class="green lighten-3">
      <v-toolbar-side-icon @click="drawer = !drawer" class="black--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase black--text">
        <span class="font-weight-light">ระบบ</span>
        <span class="font-weight-bold">[บริหารจัดการโครงการ]</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <v-btn flat slot="activator" color="grey">
          <v-icon left>expand_more</v-icon>
          <span>เมนูใช้งาน</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat color="grey" @click.prevent="signOut">
        <span>ออกจากระบบ</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/teera.png">
          </v-avatar>
          <p class="white--text subheading mt-1">ทีมไอทีเดพ</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>

import Popup from './Popup'
import firebase from "firebase";

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'แผงควบคุมระบบ', route: '/' },
        { icon: 'folder', text: 'โครงการของตนเอง', route: '/projects' },
        { icon: 'person', text: 'ทีมพัฒนา', route: '/team' },
      ],
      snackbar: false
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "login"
          });
        });
    }
  }
}
</script>