<template>
  <div id="app">
    <!-- TODO ROUTER -->
      <!-- <Login /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
    Login
    // HelloWorld
  }
}
</script>

<style>
* {
    font-family: 'Roboto Slab', serif;
    outline: none;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    background-color: #0277bd;
    color: #263238;
}

a {
    color: #40c4ff;
}

.login-page, #app {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#login-container {
    background-image: url(./assets/logo.png);
    background-size: 20% auto;
    background-repeat: no-repeat;
    background-position: 15px 15px;
    min-width: 25%;
    padding: 45px 45px;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    text-align: center;
}

#login-container form div > input {
    padding: 8px 16px;
    margin: 4px 0;
}

button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
}

header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

header:hover {
    box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
}

nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
    padding-top:2px;
}

nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
}

nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
}

nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
}

.dropdown-container {	
    position: relative;	
    display: flex;	
    flex-direction: column;	
    align-items: flex-end;	
}	

.dropdown {	
    background-color: #fff;	
    flex-direction: column;	
    display: flex;	
    width: 70%;	
    justify-content: center;	
    position: absolute;	
    top: 50px;	
    height: auto!important;	
    padding: 0;	
    /* visibility: hidden;	 */
}	

.dropdown.visible {	
    visibility: visible;	
}	

.dropdown > * {	
    padding: 8px;	
    margin: 0;	
    border-top: 1px solid gray;	
}	

.dropdown > :first-child{	
    border-top: none;	
}
.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}

.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author {
    padding: 10px;
}

.post .post-author::after {
    content: "";
    display: block;
    clear: both;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 35px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img, video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

/* BUG : If there is no title (only image, or video), not applied
/* .post .post-title ~ .post-actions {
    padding: 10px;
} */
/* FIX */
.post .post-title ~ .post-actions, .post .post-image ~ .post-actions,
.post video ~ .post-actions {
    padding: 10px;
}
.follow-button {
    background-color: blueviolet;
}
.follow-button.followed {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.842);
    background-color: white;
    color:blueviolet;
}
.like-button {
    background-image: url(./assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    width: 60px;
    background-color: #8a8a8a;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.like-button.liked {
    background-color: #01579b;
}

/** BROWSE ********************************/
.main-container-browse {
    
    width: 50%;
    /* min-height: 100%; */
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
    text-align: center;

    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-around;
}

.profile {
    min-width: 300px;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
    /* text-align:center; */
    padding: 20px;
}

.profile .profile-name{
    padding: 10px;
}

.profile .profile-name::after {
    content: "";
    display: block;
    clear: both;
}

.profile .profile-name .post-author-info {
    float: left;
    position: relative;
    width: 50%;
}

.profile-name > h3 {
    text-align: center;
}

.profile-actions {
    text-align:center;
}

.profile-avatar-container > img {
    width:100px;
    height:auto;
    min-height:100px;
    object-fit: cover;  
}

.profile-avatar-container {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
    text-align: center;
    border-radius: 50%;
}
.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 35px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img, video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

.post .post-title ~ .post-actions, .post .post-image ~ .post-actions,
.post video ~ .post-actions {
    padding: 10px;
}

/** FONTS */
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYmRjRdE.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISma2RjRdE.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmY2RjRdE.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmbGRjRdE.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYGRjRdE.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRjRdE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2Rj.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

