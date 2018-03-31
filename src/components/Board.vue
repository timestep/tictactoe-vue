<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="board vh-100">
      <div class="flex justify-center h-25">
        <Card class="ba w-25" state="-"/>
        <Card class="ba w-25" state="-"/>
        <Card class="ba w-25" state="-"/>
      </div>
      <div class="flex justify-center h-25">
        <Card class="ba w-25" state="-"/>
        <Card class="ba w-25" state="-"/>
        <Card class="ba w-25" state="-"/>
      </div>
      <div class="flex justify-center h-25">
        <Card class="ba w-25" state="-"/>
        <Card class="ba w-25" state="-"/>
        <Card class="ba w-25" state="-"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

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
