    <template>
        <h3>Antd Buttons</h3>
        <AntdButton />
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    import AntdButton from '../components/AntdButton.vue';
    
    export default defineComponent({
      name: 'Antd',
      components: {
        AntdButton
      }
    });
    </script>
    
    <style scoped>
        h3 {
            color: red
        }
    </style>
    