import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('Access-Token')
axios.defaults.headers.common['Access-Token'] = sessionStorage.getItem('Access-Token')
axios.defaults.headers.common['Refresh-Token'] = sessionStorage.getItem('Refresh-Token')


