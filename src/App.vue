<template>
    <the-header></the-header>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue"

export default {
    components: {
        TheHeader
    }
}
</script>

<style>
    body{
        margin: 0;
        padding: 0;
    }
</style>