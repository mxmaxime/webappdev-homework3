<template>
  <body>
    <Header />
    <h1 v-if="error">Error when fetching profiles</h1>
    <section v-else class="main-container">
      <div class="profile" v-for="profile in profiles" :key="profile.id">
        <div class="profile-avatar-container">
          <img :src="profile.avatar" alt="Profile avatar" />
        </div>
        <div class="profile-name">
          <h3>{{ profile.firstname }} {{ profile.lastname }}</h3>
        </div>
        <div class="profile-actions">
          <button
            type="button"
            name="follow"
            class="follow-button"
            @click="clickFollowButton"
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import axios from "axios";
import Header from './Header.vue';
export default {
  name: "Browse",
  components: {
    Header
  },
  data() {
    return {
      // False if the profiles fetching request has finished
      loading: true,
      profiles: null,

      // True if the profiles fetching request fails
      error: false,
    };
  },
  methods: {
    /** Toggle style + change text */
    clickFollowButton: function (e) {
      e.target.classList.toggle("followed");
      if (e.target.innerHTML == "Followed") {
        e.target.innerHTML = "Follow";
      } else {
        e.target.innerHTML = "Followed";
      }
    },
  },
  mounted() {
    const URL_WS =
      "https://private-anon-7f820c5d58-wad20postit.apiary-mock.com/profiles";

    // Get all profiles from API
    axios
      .get(URL_WS)
      .then((response) => {
        this.profiles = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
