new Vue({
    el: "#app",
    data: {
        recipesData: [
            {
                id: 0,
                totalPrice: 1000,
                receivedPrice: 1000
            },
            {
                id: 1,
                totalPrice: 2000,
                receivedPrice: 1999
            },
            {
                id: 2,
                totalPrice: 3000,
                receivedPrice: 2999
            },
            {
                id: 3,
                totalPrice: 4000,
                receivedPrice: 3999
            },
            {
                id: 4,
                totalPrice: 5000,
                receivedPrice: 4999
            },
            {
                id: 5,
                totalPrice: 6000,
                receivedPrice: 5999
            },
            {
                id: 6,
                totalPrice: 7000,
                receivedPrice: 6999
            },
        ]
    },
    methods: {
        setPrices: (item) => {
            item.receivedPrice = item.totalPrice
        }
    }
})