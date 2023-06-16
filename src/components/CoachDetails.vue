<template>
    <base-card>
        <div v-for="coach in ChosenCoach" :key="coach">
            <h3>{{ firstName(coach, coach.id) }} {{ lastName(coach, coach.id) }}</h3>
            <span>{{ rate(coach, coach.id) }}</span>
            <div class="displayBtn">
                <p v-for="skill in skillSet(coach, coach.id)" :key="skill">
                    <span v-if="skill === 'Frontend'" :class="{ 'frontendBtn': btnState }">{{ skill }}</span>
                    <span v-else-if="skill === 'Backend'" :class="{ 'backendBtn': btnState }">{{ skill }}</span>
                    <span v-else-if="skill === 'Career'" :class="{ 'careerBtn': btnState }">{{ skill }}</span>
                </p>
            </div>
            <div class="textDesc">{{ description(coach, coach.id) }}</div>
        </div>
    </base-card>
    <base-card>
        <h3>Interested? Reach out now!</h3>
        <base-button>
            <template #back_btn>
                Contact
            </template>
        </base-button>
        <base-badge>
            <form @submit.prevent="submitRequest">
                <div class="email">
                    <label for="email">Your Email</label>
                    <input type="email" v-model="email" placeholder="test@gmail.com" />
                </div>
                <div class="text">
                    <label for="email">Message</label>
                    <textarea type="text" v-model="requestMessage" placeholder="Enter Message..."></textarea>
                </div>
                <base-button>
                    <template #back_btn>
                        Send Message
                    </template>
                </base-button>
            </form>
        </base-badge>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            chosenCoach: [],
            btnState: true,
            loadLocal: [],
            Id: ""
        }
    },
    computed: {
        ChosenCoach() {
            return this.$store.getters["coach/dataArr"]
        },
    },
    mounted() {
        const loadLocal = JSON.parse(localStorage.getItem('Local'))
        console.log(loadLocal)
        this.Id = this.$route.params.id
        console.log(this.Id)
        console.log(this.loadLocal)       
        this.chosenCoach = loadLocal
        console.log(this.chosenCoach)
    },
    methods: {
        check() {
            const loadLocal = JSON.parse(localStorage.getItem('Local'))
            const change = [loadLocal]
            return change
        },

        firstName(coach, id) {
            if (id === this.Id) {
                return coach.firstName
            }
        },
        lastName(coach, id) {
            if(id === this.Id) {
                return coach.lastName
            }
        },
        description(coach, id) {
            if (id === this.Id) {
                return coach.description
            }
        },
        skillSet(coach, id) {
            if (id === this.Id) {
                return coach.skillSet
            }
        },
        rate(coach, id) {
            if (id === this.Id) {
                return coach.rate
            }
        },
        
        submitRequest() {
            if (this.email !== '' && this.requestMessage !== '') {
                this.$store.dispatch('req/postRequests', {
                    id: new Date().toISOString(),
                    email: this.email,
                    requestMessage: this.requestMessage,
                    // coachId: this.$route.params.id
                });
                // this.$router.replace('/coaches')
            }
            this.email = ""
            this.requestMessage = ""
        }
    },
}
</script>

<style scoped>
form {
    text-align: center;
    /* width: 33rem; */
}
.email label,
.text label {
    font-weight: bold;
}

.text { 
    width: 30rem; 
    margin: 0 auto; 
    display: flex; 
}

.displayBtn {
    display: flex;
    margin-top: 30px;
}
.displayBtn p {
    margin: 0 20px 0 0;
}

.textDesc {
    margin: 30px 0 0 0;
}

.text label {
    padding-top: 35px !important;
}
.email input {
    width: 365px;
    margin: 20px;
    margin-left: 20px;
    padding: 12px;
    outline: none;
    border-radius: 10px 10px 0 0;
}
.text textarea {
    padding: 12px;
    outline: none;
    border-radius: 10px 10px 0 0;
    width: 367px;
    margin: 15px 0 15px 25px;
}
.frontendBtn {
    color: white;
    text-transform: uppercase;
    background-color: blue;
    padding: 10px;
    border: none;
    border-radius: 15px
}
.backendBtn {
    color: white;
    text-transform: uppercase;
    background-color: blueviolet;
    padding: 10px;
    border: none;
    border-radius: 15px
}
.careerBtn {
    color: white;
    text-transform: uppercase;
    background-color: brown;
    padding: 10px;
    border: none;
    border-radius: 15px
}
</style>