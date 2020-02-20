import axios from 'axios'

export const Http = axios.create({
    baseURL:"https://proxysapps.azurewebsites.net/",
  headers: {
    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjMiLCJuYmYiOjE1ODIxOTgzMTYsImV4cCI6MTU4MjgwMzExNiwiaWF0IjoxNTgyMTk4MzE2fQ.wZZvcqW7xZpJFFORkDetB_ORTBqLtAt6vTPWv9lwWU4"
  }
});

export default Http;