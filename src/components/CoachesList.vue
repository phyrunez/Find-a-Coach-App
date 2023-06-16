<template>
    <base-card>
        <template #header>
            <h1>Find a Coach</h1>
            <div class="selectionBox">
                <div class="frontend">
                    <input type="checkbox" id="frontend" checked @change="selectedCoach" />
                    <label for="frontend">Frontend</label>
                </div>
                <div class="backend">
                    <input type="checkbox" id="backend" checked @change="selectedCoach" />
                    <label for="backend">Backend</label>
                </div>
                <div class="career">
                    <input type="checkbox" id="career" checked @change="selectedCoach" />
                    <label for="career">Career</label>
                </div>
            </div>
        </template>
    </base-card>
    <base-card>
        <button class="trans_btn">
            <router-link to="/coach-form">Add Coach</router-link>
        </button>
        <div v-if="setBodyState">
            <div v-for="coach in CoachArr" :key="coach">
                <base-badge v-if="filteredCoach(coach)">
                    <h2>{{ coach.firstName }} {{ coach.lastName }}</h2>
                    <p>${{ coach.rate }}/hour</p>
                    <div class="displayBtn">
                        <p v-for="skill in coach.skillSet" :key="skill">
                            <span v-if="skill === 'Frontend'" :class="{ 'frontendBtn': btnState }">{{ skill }}</span>
                            <span v-else-if="skill === 'Backend'" :class="{ 'backendBtn': btnState }">{{ skill }}</span>
                            <span v-else-if="skill === 'Career'" :class="{ 'careerBtn': btnState }">{{ skill }}</span>
                        </p>
                    </div>
                    <div class="btnDiv">
                        <button class="trans_btn">
                            Contact
                        </button>
                        <base-button @click="setLocal">
                            <template #back_btn>
                                <router-link :to=detailsLink(coach.id)>View Details</router-link>
                            </template>
                        </base-button>
                    </div>
                </base-badge> 
            </div>
        </div>
        <div v-else>ksksksksksksksk</div>
        <div v-if="dataAvail">
            <h3>No Coaches...</h3>
        </div>
    </base-card>
    
</template>

<script>
export default {
    data() {
        return {
            btnState: true,
            filtered: {
                frontend: true,
                backend: true,
                career: true
            },
            bodyState: true,
            localArr: []
        }
    },
    computed: {
        CoachArr() {
            return this.$store.getters["coach/dataArr"]
        },
        dataAvail() {
            return this.$store.getters["coach/dataAvail"]
        },
    },
    methods: {
        setLocal(){
            this.localArr = this.CoachArr
            const setLocalArr = localStorage.setItem('Local', JSON.stringify(this.localArr))
            console.log(setLocalArr)
        },
        setBodyState() {
            this.bodyState = !this.bodyState
        },
        selectedCoach(event) {
            const inputId = event.target.id
            const isChecked = event.target.checked
            const filteredUpdated = {
                ...this.filtered,
                [inputId]: isChecked
            };
            this.filtered = filteredUpdated
            console.log(this.filtered)
        },
        filteredCoach(coach) {
            if (this.filtered.frontend === true && coach.skillSet.includes('Frontend')) {
                return coach
            }else {
                this.bodyState = false
            }

            if (this.filtered.backend === true && coach.skillSet.includes('Backend')) {
                return coach
            }else {
                this.bodyState = false
            }

            if (this.filtered.career === true && coach.skillSet.includes('Career')) {
                return coach
            }else{
                this.bodyState = false
            }
        },
        detailsLink(id) {
            return this.$route.path + "/" + id
        }
    },
    created() {
        const get = this.$store.dispatch("coach/getAllCoachData")
        const d = this.$store.getters["coach/dataArr"]
        console.log(get, d)
    },
}
</script>

<style scoped>
h1 {
    padding-bottom: 10px;
    text-align: center
}
.selectionBox {
    display: flex;
    justify-content: space-around;
}

a {
    text-decoration: none;
    color: brown;
}

.frontend label,
.backend label,
.career label {
    padding: 0 0 0 10px;
}
.displayBtn {
    display: flex;
    margin-top: 10px;
}
.displayBtn p {
    margin: 0 20px 0 0;
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
.btnDiv {
    float: right;
    margin: 32px 0 0 0;
    
}
.btnDiv a { color: white; }
.trans_btn {
    background: transparent;
    color: grey;
    border: 1px grey solid;
    padding: 10px;
    width: 6.5rem;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 50px;
}
.trans_btn a {
    color: brown;
}
</style>