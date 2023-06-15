<template>
  <div style="width: 72px">
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Styles</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>Head</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Components</span>
      </a-menu-item>
      <a-menu-item key="4" @click="downloadProject">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Download</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import createAcrhive from "@/assets/helpers/createAcrhive";
import {useConstructorStore} from "@/store/constructor";
export default defineComponent({
  name: "ConstructorNav",
  components: {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  setup() {
    const constructorStore = useConstructorStore()
    const state = reactive({
      collapsed: true,
      selectedKeys: [''],
      openKeys: [''],
      preOpenKeys: [''],
    });

    watch(
        () => state.openKeys,
        (_val, oldVal) => {
          state.preOpenKeys = oldVal;
        },
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    const downloadProject = () => {
      createAcrhive(constructorStore.getHtml)
    }

    return {
      ...toRefs(state),
      downloadProject,
      toggleCollapsed,
    };
  },
});
</script>

<style scoped>
.ant-menu{
  height: 100vh;
}
</style>