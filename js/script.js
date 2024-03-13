console.log('Vue To Do List');

const { createApp } = Vue;

createApp({

  data(){

    return {
      todoList: [
        'Fare la spesa',
        'Studiare JS',
        'Allenarsi a basket'
      ],

      newTask: '',
    }

  },

  methods: {

  },

  mounted(){

  },

}).mount('#app');