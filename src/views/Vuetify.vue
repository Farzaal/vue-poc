<template>
    <h3>Vuetify</h3>
    <VuetifyButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VuetifyButton from '../components/VuetifyButton.vue';

export default defineComponent({
  name: 'Vuetify',
  components: {
    VuetifyButton
  }
});
</script>

<style scoped>
    h3 {
        color: green
    }
</style>
