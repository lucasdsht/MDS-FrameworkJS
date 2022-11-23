// Instancier une vue
new Vue ({
    el: "#app",
    data: {
        numbers: [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        years: 2004

    },
    methods: {
        show: function () {
            alert('methode show')
        },

    }
})

