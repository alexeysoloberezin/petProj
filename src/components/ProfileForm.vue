<template>
  <div class="profile">
    <div class="profile-box profile-main">
      <a-avatar
          shape="square"
          size="large"
          :style="{ backgroundColor: '#095b8d', verticalAlign: 'middle' }"
      >
        L
      </a-avatar>
      <h4>{{ name }}</h4>
      <div>
        <a-icon type="edit" @click="editLogo" />
        <a-icon type="delete" @click="deleteLogo" />
      </div>
    </div>
    <div class="password-reset profile-box">
      <h3>Password Reset</h3>
      <a-button type="danger" @click="resetPassword">Reset Password</a-button>
    </div>
    <div class="contact-info profile-box">
      <h3>Contact Information</h3>
      <p>Email: {{ email }}</p>
      <p>Name: {{ name }}</p>
      <p>Location: {{ location }}</p>
      <a-button type="primary" @click="editContactInfo">Edit</a-button>
    </div>

    <a-modal
        v-model="editModalVisible"
        title="Edit Contact Information"
        @ok="saveContactInfo"
        @cancel="cancelEditContactInfo"
    >
      <a-form :form="editForm" layout="vertical">
        <a-form-item label="Email" :rules="[{ required: true, type: 'email', message: 'Please enter a valid email' }]">
          <a-input v-model="editForm.email" />
        </a-form-item>
        <a-form-item label="Name">
          <a-input v-model="editForm.name" />
        </a-form-item>
        <a-form-item label="Location">
          <a-input v-model="editForm.location" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "ProfileForm",
  data() {
    return {
      logo: 'path/to/default/logo.png',
      email: 'example@example.com',
      name: 'John Doe',
      location: 'New York',
      editModalVisible: false,
      editForm: {
        email: '',
        name: '',
        location: '',
      },
    };
  },
  methods: {
    editLogo() {
      // Implement logo editing logic
    },
    deleteLogo() {
      // Implement logo deletion logic
    },
    editContactInfo() {
      this.editForm.email = this.email;
      this.editForm.name = this.name;
      this.editForm.location = this.location;
      this.editModalVisible = true;
    },
    saveContactInfo() {
      // Implement contact information saving logic
      this.email = this.editForm.email;
      this.name = this.editForm.name;
      this.location = this.editForm.location;
      this.editModalVisible = false;
    },
    cancelEditContactInfo() {
      this.editModalVisible = false;
    },
    resetPassword() {
      // Implement password reset logic
    },
  },
};
</script>

<style scoped lang="scss">
.profile{
  display: grid;
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  &-box{
    background: #181818;
    padding: 20px;
    height: 100%;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }
  &-main{
    display: flex;
    align-items: center;
    grid-column: 1/3;
    h4{
      margin-left: 10px;
    }
  }
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.logo-container img {
  width: 100px;
  height: 100px;
}

.contact-info {
  margin-bottom: 20px;
  color: #fff;
}
.password-reset{
  display: flex;
  align-self: center;
  justify-content: space-between;
  grid-gap: 15px;
}

</style>