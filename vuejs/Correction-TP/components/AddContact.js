export default Vue.component('AddContact', {
    template: `
        <form action="">
            <label for="nameInput">Nom</label>
            <input type="text" name="name" id="nameInput">
            
            <label for="firstNameInput">Prénom</label>
            <input type="text" name="firstName" id="firstNameInput">
            
            <label for="mailInput">Adresse email</label>
            <input type="email" name="mail" id="mailInput">
            
            <label for="telInput">Téléphone</label>
            <input type="tel" name="tel" id="telInput">
            
            <button type="submit">Ajouter un contact</button>
            
        </form>
    `,
    data() {
        return {

        }

    }
})