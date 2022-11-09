import AddContact from "./components/AddContact.js";
import ShowContact from "./components/ShowContact.js";
new Vue({
    el: "#app",
    data: {
      contacts: []
    },
    methods: {
        loadContacts: function () {
            let data = localStorage.getItem('contacts')
            if (data !== null) {
                this.contacts = JSON.parse(data)
            }
        },
        save: function () {
            let jsonData = JSON.stringify(this.contacts)
            localStorage.setItem('contacts', jsonData)
        },
    },
    components: {
        AddContact,
        ShowContact,
    },
    beforeMount() {
        this.loadContacts()
    }
})