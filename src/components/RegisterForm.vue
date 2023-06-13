<template>
  <div >
    <a-form :form="registerForm" @submit="handleRegister">
      <h1>Register</h1>
      <a-form-item label="Email" name="email">
        <a-input v-model:value="registerForm.email" />
      </a-form-item>
      <a-form-item label="Password" name="password">
        <a-input-password v-model:value="registerForm.password" />
      </a-form-item>
      <a-form-item label="Confirm Password" name="confirmPassword">
        <a-input-password v-model:value="registerForm.confirmPassword" />
      </a-form-item>
      <a-form-item >
        <a-button  type="primary" html-type="submit">Register</a-button>
        <router-link style="margin-left: 10px" to="/login">Go to login</router-link>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { ref} from 'vue';
import {useLoginStore} from "@/store/login";

export default {
  name: 'LoginForm',
  setup() {
    const registerForm = ref({ email: '', password: '', confirmPassword: '' });
    const loginStore = useLoginStore();

    const handleRegister = async () => {
      const { email, password } = registerForm.value;
      await loginStore.register(email, password)
    };

    return {
      registerForm,
      handleRegister
    };
  }
};
</script>
