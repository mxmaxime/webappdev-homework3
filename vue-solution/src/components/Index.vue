<template>
  <body>
    <header>
      <nav>
        <div class="logo-container">
          <img src="res/images/logo.png" alt="postIt">
        </div>
        <div class="search-container">
          <input type="text" name="search"><button type="button">Search</button>
        </div>
        <div class="dropdown-container">
          <div class="avatar-container" id="avatar-container">
            <img src="res/images/avatar.png" id="avatar" class="avatar" alt="Me">	
          </div>	
          <div class="dropdown" id="dropdown">	
            <p id="user_info">Some fake data</p>	
            <a href="browse.html">Browse</a>	
            <a href="login.html">Log out</a>	
          </div>
        </div>
      </nav>
    </header>
  </body>
</template>
