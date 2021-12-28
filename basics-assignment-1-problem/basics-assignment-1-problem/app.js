const app = Vue.createApp({
  data(){
   return {
    name: "",
    age:  31,
    favNum: 0,
    imgulr: 'forest.jpg'
   };
},
methods:{
    outputRandomNum()
    {
        return Math.random();
    }
   }
});

app.mount('#assignment');