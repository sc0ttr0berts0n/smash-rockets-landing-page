<template>
    <div id="hero" class="hero-wrapper">
        <logo></logo>
        <h2 class="subheadline">A physics-driven, 2d platform brawler</h2>
        <a href="http://dev.smashrockets.com/" class="button"><span class="button-text">Play the Demo</span></a>
    </div>
</template>

<script>
import RocketTick from './RocketTick.vue';
import Logo from './Logo.vue';

export default {
  name: 'Hero',
  components: {
      RocketTick, Logo
  }
}
</script>

<style scoped>
.hero-wrapper {
    margin: 2rem 0.75rem 0;
    display: flex;
    justify-content: center;
    flex-basis: 375px;
    flex-wrap: wrap;
}
.logo {
    flex-basis: 100%;
    width: 200px;
    margin-bottom: 0.25rem;
}
.subheadline {
    margin-top: 0.25rem;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 0.75rem;
}
.button {
    position: relative;
    display: inline-block;
    margin-top: 1rem;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    background-color: #de9316;
    border-bottom: 5px solid #815405;
    line-height: 48px;
    padding: 0 20px;
    text-decoration: none;
    color: #381c26;
    border-radius: 12px;
    transition: 100ms;
    text-align: center;
    transform: skew(-20deg);
}
.button:hover {
    background-color: #efa427;
    border-bottom-width: 3px;
    transform: skew(-20deg) translateY(2px);
    margin-bottom: 2px;
}
.button:active {
    background-color: #faca77;
    border-bottom-width: 1px;
    transform: skew(-20deg) translateY(4px);
    margin-bottom: 4px;
}

.button-text {
    display: inline-block;
    transform: skew(20deg);
}
</style>
