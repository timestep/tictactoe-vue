<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Winner: {{getWinner}}</h2>
    <div class="board vh-100">
      <div class="flex justify-center h-25">
        <Card class="ba w-25" :x=0 :y=0></Card>
        <Card class="ba w-25" :x=1 :y=0></Card>
        <Card class="ba w-25" :x=2 :y=0></Card>
      </div>
      <div class="flex justify-center h-25">
        <Card class="ba w-25" :x=0 :y=1></Card>
        <Card class="ba w-25" :x=1 :y=1></Card>
        <Card class="ba w-25" :x=2 :y=1></Card>
      </div>
      <div class="flex justify-center h-25">
        <Card class="ba w-25" :x=0 :y=2></Card>
        <Card class="ba w-25" :x=1 :y=2></Card>
        <Card class="ba w-25" :x=2 :y=2></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Board',
  props: {
    msg: String,
  },
  components: {
    Card,
  },
  computed: {
    ...mapGetters(['getWinner']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
