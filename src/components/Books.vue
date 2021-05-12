<template>
  <div class="book">
    <p>Author</p>
    <input type="text" placeholder="Insert Author" v-model="author" />
    <p>Title</p>
    <input type="text" placeholder="Insert Title" v-model="title" />
    <p>Description</p>
    <input type="text" placeholder="Insert Description" v-model="description" />
    <p>Poster Image</p>
    <input type="file" accept="image/*" @change=uploadImage>
    <br /><br />
    <input
      type="submit"
      value="Add"
      @click="
        addBook({
          author: author,
          title: title,
          description: description,
          poster: previewImage,
        })
      "
    />

    <hr />
    <h3>Books on Database</h3>
    <p v-if="books.length === 0">No Books</p>
    <div class="bk" v-for="(bk, index) in books" :key="index">
      <p class="bk-index">[{{ index }}]</p>
      <p v-html="bk.author"></p>
      <p v-html="bk.title"></p>
      <p v-html="bk.description"></p>
      <img v-bind:src="bk.poster" />
      <input type="submit" @click="deleteBook(bk.pk)" value="Delete" />
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      books: [],
      previewImage: "",
    };
  },
  created() {
    this.all();
  },
  methods: {
    all: function () {
      api
        .get(`books/`)
        .then((response) => response.data)
        .then((res) => (this.books = res.results));
    },
    deleteBook: function (id) {
      api
        .delete(`books/${id}`)
        .then((response) => response.data)
        .then((this.books = this.books.filter((obj) => obj.pk !== id)));
    },
    addBook: function (payload) {
      api
        .post(`books/`, payload)
        .then((response) => response.data)
        .then(this.books.push(payload))
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  max-width: 65%;
}

.bk {
  margin: 0 auto;
  max-width: 30%;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}

.bk-index {
  color: #ccc;
  font-size: 0.8rem;
  /* margin-bottom: 0; */
}

img {
  width: 250px;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
