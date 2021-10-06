<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <signUp/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import signUp from '@/components/Signup/Signup.vue'
export default {
  name: 'Home',
  components: {
    signUp,
    // HelloWorld
  }
}
</script>
