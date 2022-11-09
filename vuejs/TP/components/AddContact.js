export default Vue.component('AddContact', {

    props: ['contactdata'],
    methods: {
        onSubmit: function () {
            console.table(this.contactdata)
            this.contactdata.push(this.formData)
            console.table(this.contactdata)
            this.$emit('savedata')
        }
    },
    template: `
        <form>
                <label for="nameInput">Nom</label>
                <input type="text" v-model="formData.nom" id="nameInput" name="nom">
                
                <label for="firstnameInput">Prénom</label>
                <input type="text" v-model="formData.prenom" id="firstnameInput" name="prenom">
                
                <label for="phoneInput">Téléphone</label>
                <input type="tel" v-model="formData.phone" id="phoneInput" name="phone">
                
                <label for="mailInput">Email</label>
                <input type="email" v-model="formData.email" id="mailInput" name="email">
                
                <button type="submit" v-on:click="onSubmit">Ajouter un contact</button>
        </form>
    `,
    data() {
        return {
            formData: {
                nom: "",
                prenom: "",
                phone: "",
                email: "",
                editable: false,
            }
        }
    }
})