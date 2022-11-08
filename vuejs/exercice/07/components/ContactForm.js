export default Vue.component('ContactForm', {
    template: `
        <div>
            <form action="">
                <label for="pseudoInput">Pseudo</label>
                <input v-model="pseudo" type="text" name="pseudo" id="pseudoInput" placeholder="pseudo">
                
                <label for="subjectInput">Sujet</label>
                <input v-model="subject" type="text" name="subject" id="subjectInput" placeholder="Le sujet">
                
                <label for="messageInput">Message</label>
                <textarea v-model="message" name="message" id="messageInput" cols="30" rows="10" placeholder="De quoi traite le sujet ?"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    `,
    data() {
        return {
            pseudo: "",
            subject: "",
            message: ""
        }
    },
})