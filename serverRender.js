
 import config from './config';
 import axios from 'axios';

 axios.get(`${config.serverUrl}/api/urls`)
   .then(resp => {
     console.log(resp.data);
   });
