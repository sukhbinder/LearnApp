<template>
  <div class="container">
    <div v-for="item in items" :key="item.id">
      <ReviewItem
        @correct-answer="$emit('correct-answer', item)"
        @wrong-answer="$emit('wrong-answer', item)"
        @speak-this="$emit('speak-this', item)"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import ReviewItem from "./ReviewItem.vue";

export default {
  name: "Review",
  props: {
    items: Array,
  },
  components: {
    ReviewItem,
  },
};
</script>

<style scoped>
.container {
  display: inline-table;
  justify-content: left;
  justify-items: left;
}
</style>
