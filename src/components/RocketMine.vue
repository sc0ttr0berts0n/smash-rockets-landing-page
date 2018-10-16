<template>
    <div class="rocket-mine-wrapper">
        <img class="rocket-part rocket-body" src="../assets/rocket-mine-body.png" alt="">
        <img class="rocket-part rocket-mine-ythrust" src="../assets/rocket-mine-ythrust.png" alt="">
        <img class="rocket-part rocket-mine-xthrust" src="../assets/rocket-mine-xthrust.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'RocketMine',
    data() {
        return {
            pw: false
        }
    }
}
</script>

<style>
.rocket-mine-wrapper {
    width: 90%;
    opacity: 0;
    /* animation: fly-through 4800ms ease-in-out infinite; */
}
.rocket-body {
    width: 3rem;
    height: 3rem;
    position: relative;
    z-index: 1;
}
.rocket-mine-ythrust {
    position: absolute;
    z-index: 0;
    transform-origin: center top;
    left: calc(1.5rem - 13px);
    top: 36px;
    /* animation: thrustY 200ms infinite ease-in-out; */
}
.rocket-mine-xthrust {
    position: absolute;
    z-index: 0;
    transform-origin: right center;
    left: -50px;
    top: 14px;
    animation: thrustX 150ms infinite ease-in-out;
}

@keyframes fly-through {
    0% {
        opacity: 0;
    }
    2.5% {
        opacity: 1;
    }
    22.5% {
        opacity: 1;
    }
    25% {
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        transform: translateX(100%);
    }
}

@keyframes thrustX {
    to {
        transform: scaleX(0.8);
    }
}

@keyframes thrustY {
    to {
        transform: scaleY(0.7);
    }
    from {
        transform: scaleY(0.6);
    }
}
</style>
