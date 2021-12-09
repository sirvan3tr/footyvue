// import { Amplify, Auth } from 'aws-amplify'
// import '@aws-amplify/ui-vue'
// import config from '~/src/aws-exports'

import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue';
import config from '../src/aws-exports'
Amplify.configure(config)

// config.API = {
//   endpoints: [
//     {
//       name: 'footyvue',
//       endpoint: 'http://localhost:5000/',
//       custom_header: async () => {
//         return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
//       }
//     }
//   ]
// }
// 
// Amplify.configure(config)
// Auth.configure(config)