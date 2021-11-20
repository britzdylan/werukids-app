// plugins/vue-google-oauth2.js
// file name can be changed to whatever you want
import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId:
    '1097932220764-4cudbu6oulaimtb2a85p9q49m5ffaf0h.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
}
Vue.use(GAuth, gauthOption)
