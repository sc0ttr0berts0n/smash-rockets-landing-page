<template>
    <div class="topbar-wrapper">
        <span class="warning">This game is currently in <span class="game-status">Pre-Alpha</span></span>
        <div class="social-strip">
            <a href="https://discord.gg/tzqdP69" target="_blank"><img class="social-link discord" src="../assets/social-icon-discord.svg" alt=""></a>
            <a href="https://twitter.com/smashrockets" target="_blank"><img class="social-link twitter" src="../assets/social-icon-twitter.svg" alt=""></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topbar',
}
</script>

<style scoped>
.topbar-wrapper {
    position: relative;
    flex-basis: 100%;
    background-color: #271926;
    background-image: url('../assets/stripes.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 5rem;
    padding-top: 5px;
    padding-bottom: 5px;
}
.social-link {
    margin-right: 1rem;
    width: 1.5rem;
    height: auto;
}
.social-strip a:last-child .social-link {
    margin-right: 0;
}
.social-strip a {
    display: inline-block;
}
.discord {
    transform: translateY(3px);
}
.warning {
    margin-left: 2rem;
}
.warning .game-status {
    color: #de9316;
}
@media screen and (max-width: 500px) {
    .topbar-wrapper {
        justify-content: space-between;
        padding-right: 4rem;
    }
    .social-strip {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        transform: translateY(2px);
    }
    .social-link {
        margin-right: 0.75rem;
    }
    .discord {
        transform: translateY(1px);
    }
    .warning {
        font-size: 0.75rem;
    }
}
</style>
