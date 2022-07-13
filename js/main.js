const app = new Vue(
    {
        el: '#app',

        data: {
            //mi creo un array che andrà a contenere tutte le email generate;
            emails: [

            ]

        },
        methods: {
            log: function (...args) {
                console.log(args);
            },
            numberOfRandomEmail: function () {
                //uso un ciclo for per fare richiesta all'API per 10 volte;
                for (let i = 0; i <= 9; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            console.log(response.data.response)
                            //pusho le email generate, all'interno del mio array;
                            this.emails.push(response.data.response);
                        })
                }
            }
        },
        created() {
            this.numberOfRandomEmail();
        }
    }
)