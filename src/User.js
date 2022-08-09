export default async function user() {
  if (localStorage.getItem('Access-Token')) {
    sessionStorage.setItem('Access-Token', localStorage.getItem('Access-Token'))
    sessionStorage.setItem('Refresh-Token', localStorage.getItem('Refresh-Token'))
  }

  if (sessionStorage.getItem('Access-Token')) {
    var axios = require('axios');
    var expiresResponse
      await axios.get('token/expires', {
        headers: {
          'Access-Token': sessionStorage.getItem("Access-Token"),
          'Refresh-Token': sessionStorage.getItem("Refresh-Token")
        }
      })
      .then(function (data) {
        expiresResponse = data
      })
      .catch(function (error) {
        console.log(error);
      });

      if (expiresResponse.data.refreshToken === "expired") {
        sessionStorage.removeItem("Access-Token")
        sessionStorage.removeItem("Refresh-Token")
        localStorage.removeItem("Access-Token")
        localStorage.removeItem("Refresh-Token")
      }

      if (expiresResponse.data.accessToken === "expired") {
        var axios = require('axios');
      
        var config = {
          method: 'get',
          url: 'token/refresh',
          headers: { 
            'Authorization': 'Bearer ' + sessionStorage.getItem("Refresh-Token"),
            'Access-Token': sessionStorage.getItem("Access-Token"),
            'Refresh-Token': sessionStorage.getItem("Refresh-Token")
          }
        }

        var refreshResponse
        await axios(config)
          .then(function (data) {
            refreshResponse = data
          })
          .catch(function (error) {
            console.log(error);
          });

        sessionStorage.setItem("Access-Token", refreshResponse.data.accessToken)

        if (localStorage.getItem("Access-Token")) {
          localStorage.setItem("Access-Token", refreshResponse.data.accessToken)
        }
    }
  }
}