<template>
    <h3>Bootstrap Buttons</h3>
    <BootstrapButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BootstrapButton from '../components/BootstrapButton.vue';

export default defineComponent({
  name: 'Antd',
  components: {
    BootstrapButton
  }
});
</script>

<style scoped>
    h3 {
        color: grey
    }
</style>
