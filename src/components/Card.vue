<template>
  <div class="dib tc v-mid" v-on:click="trigger(x, y, 1)" >
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Card',
  props: {
    state: String,
    x: Number,
    y: Number,
  },
  methods: {
    ...mapActions({ trigger: 'trigger' }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
