<template>
  <h1>{{  }}</h1>
  <atom-header logo="atom">
    <atom-header-nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/atom-help">Atom Help</router-link>
      <router-link to="/test">Test</router-link>
    </atom-header-nav>

    <atom-header-actions>
        <!-- ADD as many buttons as you wish, they will pick up the same ATOM theme -->
        <button>Logout</button>
        <button @click="alert">HELLO</button>
    </atom-header-actions>

  </atom-header>
  <router-view></router-view>
  <!-- <img src="../public/assets/atom-logo1.svg"/> -->
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    alert() {
      return alert('HELLO!!!')
    }
  },
  methods: {

  },
  mounted() {
    document.title = process.env.VUE_APP_TITLE;
  }

}
</script>

<style>
.router-link-active {
  font-size: 35px;
  background-color: red;
}
</style>
