<template>
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
        <h1 v-if="error">Error when fetching user info</h1>
        <div v-else-if="userData" class="dropdown-container">
          <div class="avatar-container" id="avatar-container" @click="showDropdown = !showDropdown">
            <img 
              
              :src="userData.avatar"
              id="avatar"
              class="avatar"
              alt="Me"
            />
          </div>
          
          <div  v-show='showDropdown' class="dropdown" id="dropdown-profile">
            <p id="user_name">{{userData.firstname}} {{userData.lastname | allCaps}} </p>
            <p id="user_email">{{userData.email}}</p>
            <a href="/browse">Browse</a>
            <a href="/">Log out</a>
          </div>
        </div>
      </nav>
    </header>
</template>
<script>
//../assets/avatar.png
import axios from "axios";
export default {
  name: "Header",
  data() {
    return {
      // False if the profiles fetching request has finished
      loading: true,
      userData: null,
      showDropdown: false,
      // True if the profiles fetching request fails
      error: false,
    };
  },
  methods: {
    /** Toggle style + change text */
    dropDownProfile: function () {
      //e.target.classList.toggle(".drop-down-container"); triggers on img
      var div = document.getElementById("dropdown-profile")
      
      div.toggle()
      if (div.style.visibility == "hidden") {
          div.style.visibility == "visible"
      } else {
          div.style.visibility == "hidden"
      }
      
    },
  },
  mounted() {
    const URL_WS =
      "https://private-517bb-wad20postit.apiary-mock.com/users/1";

    
    // Get all profiles from API
    axios
      .get(URL_WS)
      .then((response) => {
        this.userData = response.data;
        
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  },
  filters: {
  allCaps: function (value) {
    
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase()
  }
}
};

</script>