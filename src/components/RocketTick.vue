<template>
    <div class="rocket-tick-wrapper">
        <img class="rocket-part rocket-tick-body" src="../assets/rocket-tick-body.png" alt="">
        <img class="rocket-part rocket-tick-ythrust" src="../assets/rocket-tick-ythrust.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'RocketTick'
}
</script>

<style>
.rocket-tick-wrapper {
    position: relative;
    align-self: flex-start;
    animation: hover 1000ms ease-in-out alternate infinite;
}
.rocket-tick-body {
    position: relative;
    width: 3rem;
    height: 3rem;
    z-index: 1;
}
.rocket-tick-ythrust {
    position: absolute;
    z-index: 0;
    transform-origin: center top;
    left: 50%;
    top: 80%;
    /* transform: scaleY(0.8) translateX(-50%); */
    animation: blah 150ms ease-in-out infinite;
}

@keyframes hover {
    to {
        transform: translateY(3rem);
    }
}

@keyframes blah {
    from {
        transform: translateX(-50%) scaleY(1);
    }
    to {
        transform: translateX(-50%) scaleY(0.8);
    }
}
</style>
