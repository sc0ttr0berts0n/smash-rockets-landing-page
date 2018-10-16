<template>
  <div id="app">
    <topbar></topbar>
    <div class="content">
        <hero></hero>
        <platform :top="platformTop"></platform>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue';
import Hero from './components/Hero.vue';
import Platform from './components/Platform.vue';

export default {
  name: 'app',
  components: {
    Topbar, Hero, Platform
  },
  data() {
    return {
        platformTop: 0
    }
  },
  methods: {
    findHeroBottom: function() {
        const heroOffset = -70;
        const heroBottom = document.getElementById('hero').getBoundingClientRect().bottom;
        this.platformTop = heroBottom + heroOffset;
    }
  },
  mounted() {
      this.findHeroBottom();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Exo+2:400,700,700i');
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
html {
    background: linear-gradient(170deg, #592f3d 30%, #b24a4a 75%, #f5985b 90%);
    font-family: 'Exo 2', helvetica, arial, sans-serif;
    color: #e6dbe1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
body {
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
}
</style>
