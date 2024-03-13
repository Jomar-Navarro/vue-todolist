console.log('Vue To Do List');

const { createApp } = Vue;

createApp({

  data(){

    return {
      todoList: [
        {
          toDo:'Fare la spesa',
          done: false,
        },

        {
          toDo:'Allenarmi a basket',
          done: true,
        },

        {
          toDo:'Mangiare a cena fuori',
          done: false,
        },
      ],

      newTask: '',
      isdone: false,
    }

  },

  methods: {
    addTask(){
      this.todoList.unshift(this.newTask)
    },
  },

  mounted(){
  
  },

}).mount('#app');