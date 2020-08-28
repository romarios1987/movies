<template>
  <div>
    <div class="movies_list">
      <ItemCard
        v-for="(item, index) in results"
        :key="index"
        :item="item"
        :type="type"
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue';
export default {
  name: 'ItemList',
  components: {
    ItemCard,
  },
  props: {
    results: Array,
    type: String,
  },
};
</script>

<style scoped lang="scss">
.movies_list {
  display: grid;
  grid-template-rows: auto;
  grid-gap: 1vw;
}

@include sm {
  .movies_list {
    grid-template-columns: 1fr 1fr;
  }
}
@include md {
  .movies_list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@include lg {
  .movies_list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
