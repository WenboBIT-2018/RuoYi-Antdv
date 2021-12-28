export function casLogin () {
  window.location.href = encodeURI(process.env.VUE_APP_CAS_SERVER + '/login?service=' + process.env.VUE_APP_CAS_CLIENT)
}