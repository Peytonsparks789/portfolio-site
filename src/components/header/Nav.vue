<template>
    <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Projects">Projects</RouterLink>
        <RouterLink to="/Contact">Contact</RouterLink>
    </nav>
</template>

<script>
    import { RouterLink } from 'vue-router'

    export default {
        name: 'Nav',
        components: {
            RouterLink
        },
    };
</script>

<style>
    .nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    nav > a,
    nav > a:visited,
    nav > a:active,
    nav > a:focus,
    nav > a:hover {
        font-size: 2rem;
        width: fit-content;
        color: white;
        text-decoration: none;
    }

    /* Underline effect */
    nav a::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: white;
        position: relative;
        bottom: 0;
        transition: width 0.25s ease-in-out;
        opacity: 0;
    }
    nav a:hover::after { /* Create underline effect on hover */
        width: 70%;
        opacity: 1;
    }
</style>