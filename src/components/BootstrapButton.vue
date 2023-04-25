<template>
  <div class="container">
    <button class="btn btn-primary">Click me</button>
    <button class="btn btn-success">Click me</button>
    <button class="btn btn-danger">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'BootstrapButton',
  methods: {
    handleClick() {
      console.log('Button clicked');
    }
  }
};
</script>