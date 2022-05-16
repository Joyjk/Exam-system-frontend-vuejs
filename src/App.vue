<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/page2">Page 2</router-link> |
      <router-link to="/addnewuser">New User</router-link> |
      <router-link to="/addcandidate">New Candidate</router-link> |
      <router-link to="/addcandidate2">New short Candidate</router-link> |
      <router-link to="/secondpage">Second Page</router-link> |
      <router-link to="/questiontype1">Question type 1</router-link> |
      <router-link to="/questiontype2">Question type 2</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
