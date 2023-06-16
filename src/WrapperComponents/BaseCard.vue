<template>
    <div>
        <slot name="header"></slot>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    margin: 2rem auto;
    max-width: 48rem;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>