<template lang="">
  <div>
    <h1>책 목록</h1>
    <div>
      <BookList></BookList>
    </div>
  </div>
</template>
<script>
import BookList from "../components/BookList.vue";
export default {
  name: "BookListPage",
  components: { BookList },
};
</script>
<style lang=""></style>
