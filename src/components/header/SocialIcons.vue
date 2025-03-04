<template>
    <div class=social-icons>
        <a href="https://www.instagram.com/peytonsparks789/" target="_blank" rel="external"><img src="/assets/site-icons/InstagramLogo.webp" alt="Instagram Logo"></a>
        <a href="https://www.linkedin.com/in/peytonsparks/" target="_blank" rel="external"><img src="/assets/site-icons/LinkedInLogo.webp" alt="LinkedIn Logo"></a>
        <a href="https://github.com/Peytonsparks789" target="_blank" rel="external"><img src="/assets/site-icons/GitHubLogo.webp" alt="GitHub Logo"></a>
    </div>
</template>

<script>
    export default {
        name: 'SocialImages',
    };
</script>

<style>
    .social-icons {
        display: flex;
        width: fit-content;
        gap: 15px;
    }
    .social-icons > a > img {
        width: 40px;
        height: auto;
    }
</style>
