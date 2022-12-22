<script>
// @ is an alias to /src
import axios from 'axios'
import UserCard from '@/components/user-card.vue'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL 
axios.defaults.withCredentials = true

export default {
  name: 'HomeView',
  components: {
    UserCard
  },
  data() {
    return {
      users: []
    }
  },
  async created() {
    const usersRequest = await axios.get('/api/users')

    this.users = usersRequest.data
  }

}
</script>


<template lang="pug">
  .home
    h1 whoPlays
    user-card(v-for="user in users" :user="user")
  </div>
</template>
