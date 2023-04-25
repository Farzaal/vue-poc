<template>
    <h3>Chakra Buttons</h3>
    <ChakraButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChakraButton from '../components/ChakraButton.vue';

export default defineComponent({
  name: 'Antd',
  components: {
    ChakraButton
  }
});
</script>

<style scoped>
    h3 {
        color: grey
    }
</style>
