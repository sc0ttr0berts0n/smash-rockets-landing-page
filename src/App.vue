<template>
  <div id="app">
    <topbar></topbar>
    <div class="content">
        <hero></hero>
        <platform></platform>
        <well></well>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue';
import Hero from './components/Hero.vue';
import Platform from './components/Platform.vue';
import Well from './components/Well.vue';
import BottomBar from './components/BottomBar.vue';
import { page } from 'vue-analytics';
require('./assets/css/reset.css');

export default {
    name: 'app',
    components: {
        Topbar, Hero, Platform, Well, BottomBar
    },
    metaInfo: {
      title: 'Smash Rockets 💥🚀 ', // set a title
      htmlAttrs: {
        lang: 'en',
        amp: undefined // "amp" has no value
      },
      meta: [
        {
            name: 'description', 
            content: 'An in development, physics-driven, 2d platform brawler. Play the Demo Today!'
        },
        {
            name: 'twitter:site',
            content: '@smashrockets'
        },
        {
            property: 'og:url',
            content: 'https://play.smashrockets.com'
        },
        {
            property: 'og:title',
            content: 'Smash Rockets'
        },
        {
            property: 'og:description',
            content:
                'An in development, physics-driven, 2d platform brawler'
        },
        {
            property: 'og:image',
            content: 'https://smashrockets.com/assets/og-banner.png'
        }
      ],
      link: [
        { rel: 'favicon', href: './favicon.ico' }
      ]
    },
    methods: {
        track() {
            page('/');
        }
    }
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
html {
    background: linear-gradient(170deg, #592f3d 30%, #b24a4a 75%, #f5985b 90%);
    background-attachment: fixed;
    color: #e6dbe1;
}
body {
    font-family: 'Roboto', helvetica, arial, sans-serif;
    display: flex;
    justify-content: center;
}
#app {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-basis: 100%;
}
.content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    margin-top: 2rem;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
