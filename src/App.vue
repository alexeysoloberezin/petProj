<template>
  <a-layout v-if="!hideElements" class="layout">
    <SidebarBlock></SidebarBlock>
    <a-layout-content style="min-height: 100vh;">
      <router-view/>
    </a-layout-content>
  </a-layout>

  <div v-else>
    <router-view/>
  </div>
</template>
<script >
import SidebarBlock from "@/components/SidebarBlock";
import {useLoginStore} from "@/store/login";
import {useRoute} from "vue-router";
import {ref} from "vue";

export default {
  components: {SidebarBlock},
  setup(){
    const loginStore = useLoginStore()
    let hideElements = ref(null)

    if(window.location.pathname === '/Constructor'){
      hideElements = true
    }

    const loginStart = async () => {
      await loginStore.fetchCurrentUser()
      await loginStore.watchStatusUser()
    }

    loginStart()

    return {hideElements}
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
