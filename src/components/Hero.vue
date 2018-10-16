<template>
    <div id="hero" class="hero-wrapper">
        <div class="text-container">
            <logo></logo>
            <h2 class="subheadline">A physics-driven, 2d platform brawler</h2>
            <a href="http://play.smashrockets.com/" class="button">Play the Demo</a>
        </div>
        <rocketTick></rocketTick>
    </div>
</template>

<script>
import RocketTick from './RocketTick.vue';

export default {
  name: 'Hero',
  components: {
      RocketTick
  }
}
</script>

<style scoped>
.hero-wrapper {
    position: realtive;
    z-index: 10;
    margin: 2rem 2.5rem 0;
    display: flex;
    flex-basis: 1000px;
    justify-content: space-between;
}
.headline {
    font-size: 60px;
    font-weight: 700;
    font-style: italic;
}
.subheadline {
    margin-top: 0.25rem;
    font-size: 18px;
    font-weight: 400;
}
.button {
    position: relative;
    display: inline-block;
    margin-top: 1rem;
    font-size: 24px;
    font-weight: 700;
    background-color: #de9316;
    border-bottom: 5px solid #815405;
    line-height: 48px;
    padding: 0 20px;
    text-decoration: none;
    /* color: #271926; */
    color: #381c26;
    border-radius: 12px;
    /* text-shadow: 0px 1px 2px rgba(216, 216, 216, 0.5); */
    transition: 100ms;
}
.button:hover {
    background-color: #efa427;
    border-bottom-width: 3px;
    transform: translateY(2px);
}
</style>
