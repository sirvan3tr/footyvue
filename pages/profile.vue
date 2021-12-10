<template>
<v-container>
  <amplify-authenticator v-if="authState !== 'signedin'" class="container" />
  <div v-if="authState === 'signedin' && user">
    <h1>Hello, {{user.username}}</h1>
    <button @click="signOut()">Sign Out</button>
  </div>
</v-container>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { Auth }  from 'aws-amplify';

export default {
  data () {
    return {
      user: undefined,
      authState: undefined
    }
  },
  created () {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    })
  },
  beforeDestroy () {
    return onAuthUIStateChange
  },
  methods: {
    async signOut () {
      await Auth.signOut()
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

:root {
  --amplify-primary-color: #4287f5;
  --amplify-primary-tint: #005cf0;
  --amplify-primary-shade: #005cf0;
}
</style>
