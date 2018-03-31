<template>
  <div class="card">
    {{ state }}
  </div>
</template>

<script>
import Card from './components/Card.vue';

export default {
  name: 'Board',
  props: {
    state: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
