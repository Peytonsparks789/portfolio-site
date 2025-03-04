<template>
    <div class="hamburger" @click="$emit('toggleHeader')">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
  
<script>
    document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            hamburger.classList.remove("active");
        }
    });
    });



    export default {
        name: 'Hamburger'
    }
</script>

  
<style>
    .hamburger {
        position: fixed;
        top: 15px;
        right: 15px;
        cursor: pointer;
        width: 30px;
        height: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.3s ease;
        z-index: 999;
    }
    
    .hamburger span {
        display: block;
        height: 3px;
        background-color: white;
        border-radius: 3px;
        transition: all 0.3s ease;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg);
        transform-origin: center;
        top: 11px; /* Adjust for positioning */
        position: relative;
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0; /* Hide the middle line */
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg);
        transform-origin: center;
        top: -11px; /* Adjust for positioning */
        position: relative;
    }
  
    @media (min-width: 768px) {
        .hamburger {
            display: none;
        }
    }
</style>
  