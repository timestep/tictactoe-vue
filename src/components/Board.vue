<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="row">
      <Card />
      <Card />
      <Card />
    </div>
    <div class="row">
      <Card />
      <Card />
      <Card />
    </div>
    <div class="row">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue';

export default {
  name: 'Board',
  props: {
    msg: String,
  },
  components: {
    Card,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
