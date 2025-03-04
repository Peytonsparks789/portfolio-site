<template>
    <Hamburger @toggleHeader="toggleHeaderVisibility"/>
    <header :class="{ header: true, visible: isVisible }">
        <SiteLogo />
        <Nav />
        <SocialIcons />
    </header>
</template>
  
<script>
    import Hamburger from './Hamburger.vue';
    import SiteLogo from './SiteLogo.vue';
    import Nav from './Nav.vue';
    import SocialIcons from './SocialIcons.vue';
  
    export default {
        name: 'Header',
        components: {
            Hamburger,
            Nav,
            SiteLogo,
            SocialIcons
        },
        data() {
            return {
                isVisible: false, // Initially hidden
            };
        },
        methods: {
            toggleHeaderVisibility() {
                this.isVisible = !this.isVisible;
            },
            handleResize() {
                // Check if we are above 768px and update visibility
                this.isAbove768 = window.innerWidth >= 768;
                this.isVisible = this.isAbove768; // Make the header visible for large screens
            },
        },
        mounted() {
            // Add event listener for resizing
            window.addEventListener('resize', this.handleResize);
            // Initial check on mount
            this.handleResize();
        },
        beforeDestroy() {
            // Remove event listener to prevent memory leaks
            window.removeEventListener('resize', this.handleResize);
        },
    };
</script>

<style> 
    .header {
        visibility: hidden;
        display: flex;
        position: absolute;
        opacity: 0;
        flex-direction: column;
        padding: 10vh 0 0 0;
        align-items: center;
        width: 100vw;
        height: 90vh;
        z-index: 10;
        transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
        background-color: var(--header-grey);
    }
    .header > * {
        margin: 40px 0 0 0;
    }
    .header.visible {
        visibility: visible;
        opacity: 1;
    }

    @media (min-width: 768px) {
        .header {
            display: flex;
            visibility: visible;
            position: sticky;
            top: 0;
            width: 100%;
        }
    }
</style>