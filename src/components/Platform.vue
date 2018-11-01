<template>
    <div id="platform" class="wrapper">
        <img ref="platformImg" src="../assets/platform.png" alt="The games platform" class="platform">
    </div>
</template>

<script>

export default {
    name: "Platform"
}
</script>

<style>
.wrapper {
    flex-basis: 100%;
    flex-shrink: 1;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 2rem;
}
.platform {
    width: 100%;
}
</style>
