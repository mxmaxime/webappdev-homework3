<template>
  <body>
    <Header />
    <h1 v-if="error">Error when fetching posts</h1>
    <section v-else class="main-container">
      <div class="post" v-for="post in posts" :key="post.id">
        <span class="post-author">
          <span class="post-author-info">
            <img
              :src="post.author.avatar"
              :alt="post.author.firstname + post.author.lastname"/>
              <small>{{post.author.firstname}} {{post.author.lastname}}</small>
          </span>
          <small>{{post.createTime}}</small></span>
        
        <div v-if="post.media" class="post-image">
          
          <img v-if="post.media.type == 'image'"
            :src="post.media.url"
            :alt="post.text" />
          
          <video v-if="post.media.type == 'video'" controls="">
            <source type="video/mp4" :src="post.media.url">
          </video>
        </div>
        <div class="post-title"><h3>{{post.text}}</h3></div>
        <div class="post-actions">
          <button type="button" class="like-button" @click="clickLikeButton">{{post.likes}}</button>
        </div>
      </div>
    </section>
  </body>
</template>
<script>
import axios from "axios";
import Header from './Header.vue';
export default {
  name: "Index",
  components: {
    Header
  },
  data() {
    return {
      //post.media.type == 'image'
      // False if the profiles fetching request has finished
      loading: true,
      posts: null,

      // True if the profiles fetching request fails
      error: false,
    };
  },
  methods: {
    /** Toggle style + change text */
    clickLikeButton: function (e) {
      e.target.classList.toggle("liked");
      
    },
  },
  mounted() {
    const URL_WS =
      "https://private-517bb-wad20postit.apiary-mock.com/posts";

    // Get all profiles from API
    axios
      .get(URL_WS)
      .then((response) => {
        this.posts = response.data;
        
      })
      .catch((error) => {
        console.log(error);
        this.error = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>