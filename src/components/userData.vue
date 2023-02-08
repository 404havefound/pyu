<template>
  <form @submit.prevent="submitDate">
    <input type="text" v-model="newName" />
    <input type="text" v-model="newAge" />
    <button @click="submitDate">Update Data</button>
  </form>
</template>
<script>
export default {
  emits: ["update-data"],
  data() {
    return {
      newName: "",
      newAge: "",
    };
  },
  methods: {
    submitDate() {
      //console.log("点击");
      this.$emit("update-data", this.newName, this.newAge);
    },
  },
};
</script>
