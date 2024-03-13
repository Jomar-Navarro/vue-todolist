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
          done: true,
        },
      ],

      newTask: '',
      errorMsg: '',
      isError: false,
    }

  },

  methods: {
    addTask(){
      
      if (this.newTask.length >= 4) {
        const newObj = {toDo: this.newTask, done: false};
        this.todoList.unshift(newObj);
        this.newTask = '';
        this.errorMsg = '';
      }else{
        this.errorMsg = 'Warning! Error404'
        this.isError = true
      }
    },

    removeTodo(indice){
      this.todoList.splice(indice, 1);
      
    }
  },

  mounted(){
  
  },

}).mount('#app');