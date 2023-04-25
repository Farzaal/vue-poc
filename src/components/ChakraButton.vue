<template>
    <chakra-container max-w="800px" mx="auto">
      <chakra-heading as="h1" size="xl" mb="4">My Chakra UI App</chakra-heading>
      <chakra-text fontSize="lg" mb="8">Welcome to my app!</chakra-text>
      <chakra-button colorScheme="blue" @click="handleClick">Click me</chakra-button>
    </chakra-container>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { ChakraButton, ChakraContainer, ChakraHeading, ChakraText } from '@chakra-ui/vue';
  
  export default defineComponent({
    name: 'MyComponent',
    components: {
      ChakraButton,
      ChakraContainer,
      ChakraHeading,
      ChakraText
    },
    methods: {
      handleClick() {
        console.log('Button clicked');
      }
    }
  });
  </script>