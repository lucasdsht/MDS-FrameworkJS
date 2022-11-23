// Instancier une vue
new Vue ({
    el: "#app",
    data: {
        library: [
            {
                title: 'Titre',
                author: "Author Name",
                borrowed: false,
            },
            {
                title: 'Titre2',
                author: "Author Name2",
                borrowed: true,
            },
            {
                title: 'Titre3',
                author: "Author Name3",
                borrowed: false,
            },
            {
                title: 'Titre4',
                author: "Author Name4",
                borrowed: true,
            },
            {
                title: 'Titre5',
                author: "Author Name5",
                borrowed: false,
            },
            {
                title: 'Titre6',
                author: "Author Name6",
                borrowed: true,
            },
        ],


    },
    methods: {
        getBook: function (item) {
            item.borrowed = false
        },
    }
})

