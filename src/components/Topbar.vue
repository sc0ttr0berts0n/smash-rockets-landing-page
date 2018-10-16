<template>
    <div class="topbar-wrapper">
        <logo></logo>
        <div class="social-strip">
            <a href="https://discord.gg/tzqdP69" target="_blank"><img class="social-link discord" src="../assets/social-icon-discord.svg" alt=""></a>
            <a href="https://twitter.com/smashrockets" target="_blank"><img class="social-link twitter" src="../assets/social-icon-twitter.svg" alt=""></a>
        </div>
    </div>
</template>

<script>
import Logo from './Logo.vue';
export default {
    name: 'Topbar',
    components: {
        Logo
    }
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
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5rem;
}
.social-link {
    margin-left: 1rem;
    width: 2rem;
    height: auto;
}
.discord {
    transform: translateY(4px);
}
.logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 125px;
    height: auto;
}
</style>
