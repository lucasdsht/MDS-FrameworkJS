export default Vue.component('SubjectList', {
    template: `
        <div>
            <div class="list" v-for="item in dataList">
                <h3>{{item.title}}</h3>
                <p>{{item.date}}</p>
                <p>{{item.text}}</p>
            </div>
        </div>
    `,
    data() {
        return {
            dataList: [
                {
                    title: 'blablabla',
                    date: '2021-06-23',
                    text: "lorem ipsum dolor sit amet constectetur adjalin elit."
                },
                {
                    title: 'blablabla',
                    date: '2021-06-23',
                    text: "lorem ipsum dolor sit amet constectetur adjalin elit."
                },
                {
                    title: 'blablabla',
                    date: '2021-06-23',
                    text: "lorem ipsum dolor sit amet constectetur adjalin elit."
                },
                {
                    title: 'blablabla',
                    date: '2021-06-23',
                    text: "lorem ipsum dolor sit amet constectetur adjalin elit."
                },
                {
                    title: 'blablabla',
                    date: '2021-06-23',
                    text: "lorem ipsum dolor sit amet constectetur adjalin elit."
                },
                {
                    title: 'blablabla',
                    date: '2021-06-23',
                    text: "lorem ipsum dolor sit amet constectetur adjalin elit."
                },
                {
                    title: 'blablabla',
                    date: '2021-06-23',
                    text: "lorem ipsum dolor sit amet constectetur adjalin elit."
                },

            ]
        }
    },
})