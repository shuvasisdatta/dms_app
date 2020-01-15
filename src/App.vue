<template>
  <div id="app">
    <Header />
    <Navigation />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="container-fluid mx-auto">
      <router-view />
    </div>
    <Footer
      :app_maintainer="app_maintainer"
      :app_title="app_title"
      :app_version="app_version"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layouts/Header";
import Navigation from "@/components/layouts/Navigation";
import Footer from "@/components/layouts/Footer";

export default {
  components: {
    Header,
    Navigation,
    Footer
  },
  data() {
    return {
      app_version: process.env.VUE_APP_VERSION,
      app_title: process.env.VUE_APP_TITLE,
      app_maintainer: process.env.VUE_APP_MAINTAINER,
      app_api: process.env.VUE_APP_API
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
