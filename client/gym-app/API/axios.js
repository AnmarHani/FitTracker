
import Axios from 'axios';

const axios = Axios.create({
  baseURL: "https://django-gym-api.herokuapp.com/"
})


export default axios