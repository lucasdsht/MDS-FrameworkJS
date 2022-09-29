new Vue({ 
    el: "#app", 
    data : { 
        concerts:[
            {
                name: "XXVans",
                author: "Tryo",
                date: "2021-01-20",
                place: "Lille Grand Palais",
                imgSrc: "https://m.media-amazon.com/images/I/81Q6FYvuVKL._SL1500_.jpg",
                imgName: "tryo.jpg",
            },
            {
                name: "Aimée la tournée",
                author: "Julien Doré",
                date: "2021-10-31",
                place: "Paris Zone Arena",
                imgSrc: "https://cdn-s-www.estrepublicain.fr/images/4f84fa01-0396-4412-b376-a028b889544c/BES_06/illustration-julien-dore-aimee-la-tournee_1-1599646438.jpg",
                imgName: "juliendore.jpg",
            },
            {
                name: "Unpluged",
                author: "Hubert Felix Thiefaine",
                date: "2022-05-26",
                place: "Bourse du travail Lyon",
                imgSrc: "https://cdn.smehost.net/thiefainecom-frprod/wp-content/uploads/2021/05/affiche.jpg",
                imgName: "hf.jpg",
            },
        ] 
    } 
}) 