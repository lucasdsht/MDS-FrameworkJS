new Vue({
    el: "#app",
    data: {
        count: 0
    },
    methods: {
        increment: function () {
            this.count++;
        },
        decrement: function () {
            this.count--;
        }
    }
}) 