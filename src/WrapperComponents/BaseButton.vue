<template>
    <button class="back_btn">
        <slot name="back_btn"></slot>
    </button>
</template>

<style scoped>
    .back_btn {
        background: orangered;
        color: white;
        border: 1px orangered solid;
        padding: 10px;
        border-radius: 50px;
        cursor: pointer;
    }
</style>