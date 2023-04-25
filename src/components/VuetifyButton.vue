<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn
          height="72"
          min-width="164"
          color="primary"
        >
          With Ripple
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          :ripple="false"
          height="72"
          min-width="164"
          color="primary"
        >
          Without Ripple
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  </template>
  
  <script>
  export default {
    name: 'VuetifyButton'
  };
  </script>