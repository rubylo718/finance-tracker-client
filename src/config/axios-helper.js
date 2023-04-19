import axios from 'axios'

const baseURL = "http://finance-tracker-server-dev.ap-northeast-1.elasticbeanstalk.com/"

export const apiHelper = axios.create({
  baseURL, validateStatus: function (status) {
    return status >= 200 && status < 500
  }
})

