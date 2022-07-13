const app = new Vue(
    {
        el: '#app',

        data: {

            currentEmail: '',

        },
        methods: {
            log: function (...args) {
                console.log(args);
            },
            numberOfRandomEmail: function () {
                for (let i = 0; i < 9; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            console.log(response.data.response)
                            this.currentEmail = response.data.response;
                        })
                }
            }
        },
        created() {
            this.numberOfRandomEmail();
        }
    }
)