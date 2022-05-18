<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> | -->
      <!-- <router-link to="/page2">Page 2</router-link> | -->
      <router-link to="/addnewuser">New User</router-link> |
      <router-link to="/addcandidate">New Candidate</router-link> |
      <router-link to="/addcandidate2">New short Candidate</router-link> |
      <router-link to="/secondpage">Second Page</router-link> |
      <router-link to="/questiontype1">Question type 1</router-link> |
      <router-link to="/questiontype2">Question type 2</router-link> | 
      <router-link to="/questiontype3">Question type 3</router-link> |
      <!-- Question type 4 -->
      <router-link to="/questiontype4">Questions</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/hrsetupcandidate">Hr setup candidate</router-link> |
      <router-link to="/setupquestion">Setup Question</router-link> |
      <router-link to="/questionset">Question Set</router-link>   |
      <router-link to="/questionforcandidate">Question Assign to candidate</router-link> |
      <router-link to="/viewexamlist">View exam list</router-link> |
      <router-link to="/viewexam">View exam paper</router-link> |
      <router-link to="/resultsheet">Result Sheet</router-link> 
      
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
