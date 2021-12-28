const app = Vue.createApp({
    data () {
       return {
        courseGoalA: 'Finished the course and learn Vue!',
        courseGoalB: 'Finished the course and Master Vue!',
        vueLink : 'https://vuejs.org/v2/guide/index.html'
       };
    },
    methods:{
      outputGoal(){
          const randomNumber = Math.random();
          if(randomNumber < 0.5){
              return this.courseGoalA;
          }else{
              return this.courseGoalB;
          }
      }
    }
});
app.mount('#user-goal');
