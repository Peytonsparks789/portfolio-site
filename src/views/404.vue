<template>
  <main>
    <div class="question-mark">?</div>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/">Go Back Home</router-link>
  </main>
</template>

<style scoped>
  main {
    align-items: center;
    justify-content: center;
  }

.question-mark {
    font-size: 80px;
    color: #4A90E2; /* Cool blue color */
    font-weight: bold;
    animation: bounce 3.4s infinite, glow 1.5s infinite;
}

/* Bounce Animation */
@keyframes bounce {
    0% {
        transform: translateY(0); /* Start at the original position */
    }
    50% {
        transform: translateY(-20px); /* Move up */
    }
    100% {
        transform: translateY(0); /* Return to the original position */
    }
}


/* Glow Effect Animation */
@keyframes glow {
    0%, 100% {
        text-shadow: 0 0 5px #4A90E2, 0 0 10px #4A90E2, 0 0 20px #4A90E2;
    }
    50% {
        text-shadow: 0 0 10px #4A90E2, 0 0 20px #4A90E2, 0 0 40px #4A90E2;
    }
}

</style>