<template>
  <h2>username:{{ name }}</h2>
  <h3>age:{{ age }}</h3>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
