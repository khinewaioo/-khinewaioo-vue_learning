const app = Vue.createApp({
  data() {
    return {
      result: 0,
      msg: "",
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function(){
          that.result =0;
      }, 5000)
      if (this.result <= 37) {
        this.msg = "Not there yet";
      } else {
        this.msg = "Too much!";
      }
    },
  },
  methods: {
    addNum(num) {
      this.result = this.result + num;
    },
  },
});

app.mount("#assignment");
