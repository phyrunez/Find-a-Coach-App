<template>
    <base-card>
        <h2>Enter Your Information</h2>
        <div class="first-name">
            <label for="firstName">First Name</label>
            <input type="text" v-model.trim="firstName" placeholder="Enter First Name" />
        </div>
        <div class="last-name">
            <label for="lastName">Last Name</label>
            <input type="text" v-model.trim="lastName" placeholder="Enter Last Name" />
        </div>
        <div class="desc">
            <label for="desc">Description</label>
            <input type="text" v-model.trim="description" placeholder="Enter Description" />
        </div>
        <div class="form-control">
            <h4>Skill Set</h4>
            <div class="arrange_input">
                <div class="form-control_input">
                    <input type="checkbox" id="frontend" value="Frontend" v-model="skillSet" />
                    <label for="frontend">Frontend</label>
                </div>
                <div class="form-control_input">
                    <input type="checkbox" id="backend" value="Backend" v-model="skillSet" />
                    <label for="backend">Backend</label>
                </div>
                <div class="form-control_input">
                    <input type="checkbox" id="career" value="Career" v-model="skillSet" />
                    <label for="career">Career</label>
                </div>
            </div>
        </div>
        <div class="rate">
            <label for="rate">Rate</label>
            <input type="number" v-model="rate" placeholder="Enter Number" />
        </div>
        <div class="btn_div">
            <button class="reg_btn" :class="{ 'disabled': disabled }" @click="registerCoach" :disabled="disabled ? display = true : display = false">Register Coach</button>
        </div>
    </base-card>
    <base-card v-if="display">Successfully added Coach</base-card>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            skillSet: [],
            description: '',
            rate: '',
            display: false,
            disabled: false
        }
    },
    methods: {
        registerCoach() {  
            if(this.firstName !== '' && this.lastName !== '' && this.skillSet !== [] && this.description !== '' && this.rate !== '') {
                this.$store.dispatch('coach/postCoachData', {
                    id: this.firstname,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    skillSet: this.skillSet,
                    description: this.description,
                    rate: this.rate,
                })
            }
            this.display = true;
            this.disabled = !this.disabled
            this.firstName = ""
        }
    }
}
</script>

<style scoped>
    h2 {
        text-align: center;
    }
    .form-control {
        width: 32rem;
        margin: 0 auto;
    }
    .first-name, .last-name {
        width: 32rem;
        margin: 0 auto;
    }

    .desc {
        /* width: 50rem; */
        text-align: center;
        margin: 0 auto;
        /* margin-left: 20px; */
    }

    .disabled {
        opacity: .2;
    }

    .first-name label,
    .last-name label, .desc label {
        font-weight: bold;
    }
    .desc label {
        margin-right: 13px;
    }
    .first-name input,
    .last-name input{
        width: 365px;
        margin: 20px;
        padding: 12px;
        outline: none;
        border-radius: 10px 10px 0 0;
    }
    .desc input {
        width: 365px;
        margin: 20px 20px 20px 0px;
        padding: 12px;
        outline: none;
        border-radius: 10px 10px 0 0;
    }
    .arrange_input {
        display: flex;
        justify-content: space-between;
    }
    .form-control_input label{
        padding: 10px;
    }
    .rate {
        width: 32rem;
        margin: 0 auto;
    }
    .rate label {
        font-weight: bold
    }
    .rate input {
        width: 365px;
        margin-top: 45px;
        margin-left: 65px;
        padding: 12px;
        outline: none;
        border-radius: 10px 10px 0 0;
    }
    .btn_div {
        margin: 0 auto;
        width: 5rem
    }
    .reg_btn {
        background: brown;
        color: white;
        border-color: transparent;
        margin-top: 40px;
        padding: 10px;
        width: 7.5rem;
        cursor: pointer;
        font-size: 13px;
        border-radius: 10px 10px 0 0;
    }
</style>