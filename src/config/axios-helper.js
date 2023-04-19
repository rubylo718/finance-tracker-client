import axios from 'axios'

const baseURL = "https://infinite-atoll-36727.herokuapp.com/"

export const apiHelper = axios.create({
  baseURL, validateStatus: function (status) {
    return status >= 200 && status < 500
  }
})

