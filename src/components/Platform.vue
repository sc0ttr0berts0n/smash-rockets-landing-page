<template>
    <div id="platform" class="wrapper" :style="{top: top + 'px', height: 517 + 'px'}">
        <img ref="platformImg" src="../assets/platform.png" alt="The games platform" class="platform">
        <rocketMine></rocketMine>
    </div>
</template>

<script>
import RocketMine from './RocketMine.vue'

export default {
    name: "Platform",
    props: ['top'],
    components: {
        RocketMine
    },
    data() {
        return {
            platfromHeight: false
        }
    },
    created () { // would work in 'ready', 'attached', etc.
        window.addEventListener('load', () => {
            this.platfromHeight = this.$refs.platformImg.clientHeight;
        })
    }
}
</script>

<style>
.wrapper {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    overflow: hidden;
}
.platform {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
}
</style>
