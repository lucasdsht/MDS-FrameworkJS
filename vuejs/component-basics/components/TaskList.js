export default Vue.component('TaskList', {
    template:`
        <div>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
                <li>Task 4</li>
                <li>{{message}}</li>
            </ul>
            <button v-on:click="sayHello">Dis bonjour !</button>
        </div>
    `,
    data(){
        return{
            message: "Hello World !"
        }
    },
    methods: {
        sayHello(){
            alert('coucou')
        }
    }
})