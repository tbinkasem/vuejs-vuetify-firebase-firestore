<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">เพิ่มโครงการใหม่</v-btn>
    <v-card>
      <v-card-title>
        <h2>เพิ่มโครงการใหม่</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field v-model="title" label="ชื่อโครงการ" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea v-model="detail" label="รายละเอียดเกี่ยวกับโครงการ" prepend-icon="edit" :rules="inputRules"></v-textarea>
          <v-text-field v-model="status" label="สถานของโครงการ" prepend-icon="fact_check" :rules="inputRules"></v-text-field>

          <v-menu v-model="menu" :close-on-content-click="false">
            <v-text-field slot="activator" :rules="inputRules"
              :value="formattedDate" clearable label="วันเดือนปีสิ้นสุดโครงการ" prepend-icon="date_range">
            </v-text-field>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn flat @click="submit" class="success mx-0 mt-3" :loading="loading">เพิ่มโครงการ</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
  data() {
    return {
      title: '',
      detail: '',
      due: null,
      status: 'ongoing',
      menu: false,
      inputRules: [
        v => !!v || 'คุณยังไม่ได้กรอกข้อมูล',
        v => v.length >= 5 || 'คุณกรอกข้อมูลน้อยกว่า 5 ตัวอักษร'
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true
        const project = { 
          title: this.title,
          detail: this.detail,
          due: format(this.due, 'Do MMM YYYY'),
          person: 'Teera',
          status: this.status
        }
        db.collection('projects').add(project).then(() => {
          this.loading = false
          this.dialog = false
          this.$emit('projectAdded')
        })
      }
    }
  },
  computed: {
    formattedDate () {
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  }
}
</script>
