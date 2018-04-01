<template>
  <div class="dib tc v-mid" @click="trigger({x, y, value: 1})">
    {{getCardState(x,y)}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Card',
  props: {
    x: Number,
    y: Number,
  },
  computed: {
    ...mapGetters(['getCardState']),
  },
  methods: {
    ...mapActions(['trigger']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
