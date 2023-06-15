<template>
  <a-layout-sider :theme="theme" :collapsed-width="collapsedWidth" :trigger="null">
    <div v-if="currentUser" class="sidebar-ava">
      <router-link to="/profile">
        <a-avatar
            shape="circle"
            size="large"
            :style="{ backgroundColor: '#f56a00', verticalAlign: 'middle' }"
        >
          <span v-if="currentUser && currentUser.name">{{ currentUser.name[0] }}</span>
          <span v-else-if="currentUser && currentUser.email">{{ currentUser.email[0] }}</span>
        </a-avatar>
      </router-link>

      <a-button
          size="small"
          :style="{ marginLeft: '16px', verticalAlign: 'middle' }"
          @click="handleLogout"
      >
        Logout
      </a-button>
    </div>
    <div v-else class="sidebar-ava">
      <a-avatar
          shape="circle"
          size="large"
          :style="{ backgroundColor: 'rgb(82,81,79)', verticalAlign: 'middle' }"
      ></a-avatar>

      <router-link to="/login">
        <a-button
            size="small"
            :style="{ marginLeft: '16px', verticalAlign: 'middle' }"
        >
          Login
        </a-button>
      </router-link>
    </div>


    <a-menu :default-selected-keys="[currentRoute.path]" :mode="menuMode">
      <a-menu-item v-for="route in routes" :key="route.path">
        <router-link :to="route.path">
          <span>{{ route.name }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <div></div>
  </a-layout-sider>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {Layout, Menu} from 'ant-design-vue';
import {useLoginStore} from "@/store/login";

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
      {
        path: '/RestApiExamples',
        name: 'Rest api examples'
      },
      {
        path: '/Constructor',
        name: 'Constructor'
      },
    ]
    const route = useRoute();
    const loginStore = useLoginStore()
    const currentUser = computed(() => loginStore.getUser)

    const currentRoute = computed(() => route);
    const theme = 'dark';
    const collapsedWidth = 80; // Ширина боковой панели в свернутом состоянии
    const menuMode = 'vertical';

    const handleLogout = async (): Promise<void> => {
      await loginStore.logout()
    }

    return {
      currentUser,
      handleLogout,
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

  &-ava {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

</style>
