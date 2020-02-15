import axios from 'axios'

export const Http = axios.create({
    baseURL:"https://proxysapps.azurewebsites.net/",
  headers: {
    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1ODE1MDEwODYsImV4cCI6MTU4MjEwNTg4NiwiaWF0IjoxNTgxNTAxMDg2fQ.b_zKxzIXVQ2AUV39WLsQ2qsG1BL-pknjHZJX3U9k5n8"
  }
});

export default Http;