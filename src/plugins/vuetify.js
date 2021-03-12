import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#770dff',
    secondary: '#fbe400',
    success: '#2af40a',
    info: '#ec8608',
    error: '#ee1408'
  }
})
