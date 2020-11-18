<template>
  <body>
    <header>
      <nav>
        <div class="logo-container">
          <img src="../assets/logo.png" alt="postIt" />
        </div>
        <div class="search-container">
          <input type="text" name="search" /><button type="button">
            Search
          </button>
        </div>
        <div class="dropdown-container">
          <div class="avatar-container" id="avatar-container">
            <img
              src="../assets/avatar.png"
              id="avatar"
              class="avatar"
              alt="Me"
            />
          </div>
          <div class="dropdown" id="dropdown">
            <p id="user_info">Some fake data</p>
            <a href="browse.html">Browse</a>
            <a href="login.html">Log out</a>
          </div>
        </div>
      </nav>
    </header>
    <h1 v-if="error"> ERROR </h1>
    <section v-else class="main-container-browse">
      <div class="profile" v-for="profile in profiles" :key="profile.id">
        <div class="profile-avatar-container">
          <img :src="profile.avatar" alt="Profile avatar" />
        </div>
        <div class="profile-name">
          <h3>{{ profile.firstname }} {{ profile.lastname }}</h3>
        </div>
        <div class="profile-actions">
          <button type="button" name="follow" v-class="follow-button"
            @click="clickFollowButton">
            Follow
          </button>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import axios from 'axios'
export default {
  name: "Browse",
  data() {
    return {
      loading: true,
      profiles: null,
      error : false
    };
  },
  methods: {
    clickFollowButton: function() {

    }
  },
  mounted() {
    const URL_WS = "https://private-anon-7f820c5d58-wad20postit.apiary-mock.com/profiles"

    // Get all profiles
    axios
      .get(URL_WS)
      .then(response => {
        this.profiles = response.data
      })
      .catch(error => {
        console.log(error)
        this.error = true
      })
      .finally(() => this.loading = false)
  },
};
</script>
