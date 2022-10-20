new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0,
    },
    methods: {
        getCoordonate: function (event) {
            this.x = event.pageX
            this.y = event.pageY

            console.log(event.pageX)
            console.log(event.pageY)
        },
    }
}) 