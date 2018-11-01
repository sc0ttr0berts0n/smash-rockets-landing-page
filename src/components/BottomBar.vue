<template>
    <div class="footer-wrapper">
        &copy; HyperFuel Games
    </div>
</template>

<script>

export default {
    name: 'BottomBar'
}
</script>

<style>
.footer-wrapper {
    margin-top: 3rem;
    position: relative;
    flex-basis: 100%;
    background-color: #271926;
    background-image: url('../assets/stripes.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}
</style>
