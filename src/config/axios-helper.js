import axios from 'axios'

const baseURL = "http://localhost:8080"

export const apiHelper = axios.create({
  baseURL, validateStatus: function (status) {
    return status >= 200 && status < 500
  }
})

