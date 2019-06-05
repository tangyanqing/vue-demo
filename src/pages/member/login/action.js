export default {
  // actions
  toHome: function() {
    this.$router.push({ path: `/home` });
  },
  toNot: function() {
      this.$router.push({ path: `/download?enterprise=${this.enterprise}` });
  },
  toResult: function() {
    this.$router.push({ path: `/result` });
  },
  toDo: function() {
    this.$router.push({ path: `/todolist` });
  },

  increment () {
    this.count++
  }

}