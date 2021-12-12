Vue.config.devtools = true;

const list = new Vue (
    {
        el: '#root',
        data: {
            todo_list: [
                {
                    text: 'andare al supermercato',
                    done: false
                },
                {
                    text: 'andare in tintoria',
                    done: false
                },
                {
                    text: 'uscire con gli amici',
                    done: false
                },
                {
                    text: 'preparare la cena',
                    done: false
                },
            ]
        },
        methods: {

            deleteToDo: function(index) {
                this.todo_list.splice(index, 1);
            },
            addToDo: function() {
                const newToDoTrim = this.newToDo.trim();
                if(newToDoTrim.length > 0) {
                    this.todo_list.push({
                        text: newToDoTrim,
                        done: false
                    });
                    this.newToDo = '';
                }
            }
        }
    }
);