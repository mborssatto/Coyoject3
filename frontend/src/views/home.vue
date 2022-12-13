<script>
// @ is an alias to /src
import axios from 'axios'
import UserCard from '@/components/user-card.vue'

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
    const usersRequest = await axios.get('http://localhost:3000/api/users')

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
