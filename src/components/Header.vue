<template>
  <div class="container">
    <div>
      <h1>Subjects</h1>
    </div>

    <div v-for="subject in subjects" :key="subject.id">
      <ul @click="$emit('subject-select', subject[0])">
        {{
          subject[1]
        }}
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    subjects: Array,
  },
};
</script>

<style scoped>
.container{
  display: inline-flex;
  font-size: 10px;
  background-color: azure;
  
}

ul:hover {
  cursor: pointer;
  background-color: chartreuse;
  }
</style>