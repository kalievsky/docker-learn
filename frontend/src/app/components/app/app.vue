<template>
<div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, cum cumque dolorem facilis harum in, ipsa
    ipsum, iusto maxime nam nihil nobis optio ratione repellendus rerum velit voluptate! Repellat, veniam?
  </p>
  <p>
    <button @click="getData">
      get data
    </button>
  </p>
  <pre>{{user}}</pre>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null,
    };
  },

  methods: {
    getData() {
      axios.get('/api/user')
        .then(({data}) => {
          if (data) {
            this.user = data;
          }
        })
        .catch(error => {
          console.log(error);
        })
    },
  },
};
</script>
