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
            delete: function(index) {
                this.todo_list.splice(index, 1);
            }
        }
    }
);