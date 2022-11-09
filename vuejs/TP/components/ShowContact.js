export default Vue.component('ShowContact',{
    props: ['contactdata'],
    template: `
        <table>
            <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Téléphone</th>
                <th>Email</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in this.contactdata">
                    <td>
                        <input type="text" v-show="item.nom" v-model="nom" v-if="item.editable == true"
                        >
                        <p v-else>{{item.nom}}</p>
                    </td>
                    <td>
                        <input type="text" v-show="item.prenom" v-model="prenom" v-if="item.editable == true">
                        <p v-else>{{item.prenom}}</p>
                    </td>
                    <td>
                        <input type="text" v-show="item.phone" v-model="phone" v-if="item.editable == true">
                        <p v-else>{{item.phone}}</p>
                    </td>
                    <td>
                        <input type="text" v-show="item.email" v-model="email" v-if="item.editable == true">
                        <p v-else>{{item.email}}</p>
                    </td>
                    <td>
                        <button>
                            <img v-on:click="editEntry(index)" src="img/edit_icon.svg" alt="edit icon">
                        </button>
                    </td>
                    <td>
                        <button>
                            <img v-on:click="deleteEntry(index)" src="img/delete_icon.svg" alt="delete icon">
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    methods: {
        editEntry: function (index) {
            if (this.contactdata[index].editable == false) {
                this.contactdata[index].editable = true
            }
            else {
                this.contactdata[index].editable = false
                this.contactdata[index].nom = this.nom
                this.contactdata[index].prenom = this.prenom
                this.contactdata[index].phone = this.phone
                this.contactdata[index].email = this.email
                this.$emit('savedata')
            }
        },

        deleteEntry: function (index) {
            let confirmation = confirm('Êtes vous sur de vouloir supprimer ce contact. Cette action est irreversible.')
            if (confirmation == true) {
                this.contactdata.splice(index, 1)
                this.$emit('savedata')
            }
        }
    },
    data() {
        return {
                nom:"",
                prenom:"",
                phone:"",
                email:"",
        }
    }
})