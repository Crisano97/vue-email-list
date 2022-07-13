const app = new Vue(
    {
        el: '#app',

        data: {

            emails: [

            ]

        },
        methods: {
            log: function (...args) {
                console.log(args);
            },
            numberOfRandomEmail: function () {
                const randomEmail = ''
                for (let i = 0; i <= 9; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            console.log(response.data.response)
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