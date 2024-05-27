<template lang="">
  <div>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        <p>{{ book.title }}</p>
        <hr />
        <p>{{ book.author }}</p>
        <br />
        <button @click="removeBook(book.id)">삭제</button>
      </li>
    </ul>
  </div>
</template>
<script>
let i = 2;
export default {
  name: "BookList",
  created() {
    this.emitter.on("add", this.addBook);
    this.loadBook();
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    addBook(book) {
      let newBook = { id: i++, title: book.title, author: book.author };
      console.log(newBook);
      this.books.push(newBook);
      this.saveBook();
    },

    //책삭제
    removeBook(id) {
      this.books = this.books.filter((book) => book.id != id);
      this.saveBook();
    },

    //로컬 스토리지에 저장!
    saveBook() {
      console.log(this.books);
      localStorage.setItem("books", JSON.stringify(this.books));
    },

    // 로컬 스토리지에서 데이터 가져오기
    loadBook() {
      let localBooks = localStorage.getItem("books");
      if (localBooks) {
        this.books = JSON.parse(localBooks);
      }
    },
  },
};
</script>
<style lang=""></style>
