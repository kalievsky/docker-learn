<template>
<div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, cum cumque dolorem facilis harum in, ipsa
    ipsum, iusto maxime nam nihil nobis optio ratione repellendus rerum velit voluptate! Repellat, veniam?
  </p>
  <p>
    <input type="text" v-model="userName">
    <button @click="addUser">
      Add new user
    </button>
  </p>
  <pre>{{userList}}</pre>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userName: null,
      userList: [],
    };
  },

  mounted() {
    this.getUserList();
  },

  methods: {
    addUser() {
      if (!this.userName || this.userName === '') {
        return;
      }

      axios.post('/api/user', {
        name: this.userName,
      })
        .then(response => {
          this.userName = null;
          this.getUserList();
        })
        .catch(error => {
          console.error(error);
        });
    },

    getUserList() {
      axios.get('/api/user-list')
        .then(({data}) => {
          if (!data) {
            return Promise.reject(new Error('No Data received'));
          }

          this.userList = data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
