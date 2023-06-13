<template>
  <div>
    <a-form :form="loginForm" @submit="handleLogin" class="v1">
      <h1>Login</h1>
      <a-form-item label="Email" name="email" rules="required|email">
        <a-input v-model:value="loginForm.email"/>
      </a-form-item>
      <a-form-item label="Password" name="password" rules="required">
        <a-input-password v-model:value="loginForm.password"/>
      </a-form-item>
      <a-form-item>
        <a-button  type="primary" html-type="submit">Login</a-button>
        <a-button  type="dashed"  @click="handleLoginGuest" style="margin-left: 10px">Login Guest</a-button>
        <router-link style="margin-left: 10px" to="/register">Go to register</router-link>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import {useLoginStore} from "@/store/login";

export default {
  name: 'LoginForm',
  setup() {
    const loginForm = ref({email: '', password: ''});
    const loginStore = useLoginStore();

    const handleLogin = async () => {
      const { email, password } = loginForm.value;
      await loginStore.login(email, password)
    };

    const handleLoginGuest = async () => {
      await loginStore.login('test@gmail.com', '123123')
    };

    return {
      loginForm,
      handleLogin,
      handleLoginGuest
    };
  }
};
</script>
