<template>
    <div class="site-logo">
        <RouterLink to="/"><img src="/assets/site-icons/headerLogo.webp" alt="Site Logo"></RouterLink>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';

    export default {
        name: 'LogoImage',
        components: {
            RouterLink
        }
    };
</script>

<style>
    .site-logo {
        display: flex;
        width: fit-content;
    }
    .site-logo > a > img {
        width: 100%;
        max-width: 350px;
        height: auto;
    }
</style>
