<template>
    <div class="nav_body">
        <h2>Find a Coach App</h2>
        <div class="nav_body_list">
            <ul>
                <li><router-link to="/coaches">Coaches</router-link></li>
                <li><router-link to="/requests">Requests</router-link></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .nav_body {
        background: rgba(100, 105, 29, 0.404);
        color: white;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .nav_body h2 {
        padding-left: 15px;
        font-weight: bold;
        font-size: 30px;
    }
    .nav_body_list ul {
        display: flex;
    }
    .nav_body_list ul li {
        margin: 0 18px;
        list-style-type: none;
        padding: 10px;
        font-size: 20px;
    }
    .nav_body_list ul li a {
        cursor: pointer;
        color: white;
        text-decoration: none;
    }
    .nav_body_list ul li a.active {
        background: transparent;
        color: rgba(210, 42, 30, 0.582);
        border: 1px solid rgba(210, 42, 30, 0.582);
        padding: 10px;
        border-radius: 10px 10px 0 0;
    }
</style>