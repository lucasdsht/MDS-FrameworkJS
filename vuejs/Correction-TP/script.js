new Vue({
    el: "#app",

    data: {
        contactData: [
            {
                name: "truc",
                firstName: "muche",
                phone: "0617926387",
                mail: "truc.muche@gmail.com",
            }
        ]
    },
    methods: {
        loadContact: () => {},
        save: () => {},
    },

    beforeMount() {
        this.loadContact()
    }
})

// nom renom mail tel dateNaissance age
