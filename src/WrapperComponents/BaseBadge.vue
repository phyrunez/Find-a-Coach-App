<template>
    <div>
        <slot name="displayCoach"></slot>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    margin: 2rem auto;
    max-width: 48rem;
    height: 12rem;
    padding: 1rem;
    border-radius: 12px;
    background: transparent;
    color: grey;
    border: 1px grey solid;
}
</style>