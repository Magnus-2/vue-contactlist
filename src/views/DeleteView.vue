<template>
    <div class="deleteview">
      <h1>User will be deleted please wait...</h1>
      <button @click="deleteUser">Delete User</button>
    </div>
  </template>
  <script>
  export default {
  name: 'DeleteView',
  mounted() {
    this.deleteUser();
  },
  methods: {
    deleteUser() {
      this.$router.push('/users');
    }
  }
}
</script>
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  