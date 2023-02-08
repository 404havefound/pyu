<template>
  <section>
    <active-user
      v-for="msg in msgs"
      :key="msg.id"
      :name="msg.name"
      :age="msg.age"
    ></active-user>
    <update-data @update-data="updateData"></update-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msgs: [
        {
          id: "1",
          name: "max",
          age: "18",
        },
      ],
    };
  },
  methods: {
    updateData(name, age) {
      const newmsg = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
      console.log(newmsg.id);
      console.log(this.msgs[0].id);
      this.msgs[0].id = newmsg.id;
      this.msgs[0].name = newmsg.name;
      this.msgs[0].age = newmsg.age;
      //this.msgs.push(newmsg);
    },
  },
};
</script>

<style></style>
