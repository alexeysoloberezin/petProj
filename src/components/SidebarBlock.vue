<template>
  <a-layout-sider :theme="theme" :collapsed-width="collapsedWidth" :trigger="null">
    <h1>{{ currentUser }}</h1>
    <div class="sidebar-ava">
      <a-avatar
          shape="circle"
          size="large"
          :style="{ backgroundColor: '#f56a00', verticalAlign: 'middle' }"
      >
        L
      </a-avatar>
      {{ currentUser }}
      <a-button
          size="small"
          :style="{ marginLeft: '16px', verticalAlign: 'middle' }"
          @click=""
      >
        Logout
      </a-button>
    </div>
    <a-menu :default-selected-keys="[currentRoute.path]" :mode="menuMode">
      <a-menu-item v-for="route in routes" :key="route.path" >
        <router-link :to="route.path">
          <span>{{ route.name }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <div></div>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Layout, Menu } from 'ant-design-vue';
import { RouteRecordRaw } from 'vue-router';
import {useLoginStore} from "@/store/login";
import { User } from "@/store/login";


export default defineComponent({
  name: 'SidebarBlock',
  components: {
    'a-layout-sider': Layout.Sider,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
  },
  setup() {
    const routes = [
      {
        path: '/',
        name: 'Home'
      },
      {
        path: '/About',
        name: 'About'
      },
    ]
    const route = useRoute();
    const loginStore = useLoginStore()
    const currentUser: User | null = loginStore.getUser

    const currentRoute = computed(() => route);
    const theme = 'dark';
    const collapsedWidth = 80; // Ширина боковой панели в свернутом состоянии
    const menuMode = 'vertical';

    return {
      currentUser,
      routes,
      currentRoute,
      theme,
      collapsedWidth,
      menuMode,
    };
  },
});
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  &-ava{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
  }
}

</style>
