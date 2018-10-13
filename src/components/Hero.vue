<template>
    <div id="hero" class="hero-wrapper">
        <div class="text-container">
            <h1 class="headline">Smash Rockets</h1>
            <h2 class="subheadline">A physics-driven, 2d platform brawler</h2>
            <a href="http://shitty-rockets-dev.herokuapp.com/" class="button">Play the Demo</a>
        </div>
        <rocketTick></rocketTick>
    </div>
</template>

<script>
import RocketTick from './RocketTick.vue'

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
    margin: 5rem 2.5rem 0;
    display: flex;
    width: 1000px;
    justify-content: space-between;
}
.headline {
    font-size: 60px;
    font-weight: 700;
    font-style: italic;
}
.subheadline {
    margin-top: 0.25rem;
    font-size: 24px;
    font-weight: 400;
}
.button {
    position: relative;
    display: inline-block;
    margin-top: 1rem;
    font-size: 24px;
    font-weight: 700;
    background-color: #de9316;
    line-height: 48px;
    padding: 0 20px 16px;
    text-decoration: none;
    color: #271926;
    border-radius: 12px;
    transition: 200ms;
}
.button:hover {
    background-color: #efa427;
}
.button::after {
    display: block;
    content: 'prealpha';
    position: absolute;
    bottom: -4px;
    left: 0px;
    font-weight: 400;
    font-size: 16px;
    opacity: 0.7;
    width: 100%;
    padding-top: 0.25rem;
    transform: skew(-10deg);
    background-color: rgba(0, 0, 0, 0.25);
}
</style>
