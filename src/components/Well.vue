<template>
    <div class="well">
        <section class="panel">
            <h2>Smash Rockets is in pre-alpha</h2>
            <p>We expect bugs. Bugs are good. Mobile Support is not in yet. Google Chrome is where we work, and is our primary target browser right now. We're actively putting this game together, and occasionally, stuff is going to break. Let us know on <a href="https://discordapp.com/invite/tzqdP69" target="_blank">Discord</a> or <a href="https://twitter.com/smashrockets" target="_blank">Twitter</a> if you see anything notable. We love to hear from you guys and your feedback is what keeps us moving forward.</p>
        </section>
        <section class="panel">
            <h2>We are going to Gameacon in NYC!</h2>
            <p>We are excited to announce we will be at <a href="https://www.gameaconnyc.com/queens-nyc-home">Gameacon NYC</a> on November 17th and 18th. Hope you can make it and see you there!</p>
        </section>
        <section class="panel">
            <h2>How to Play</h2>
            <h3>Gameplay</h3>
            <p>Your goal Shitty Rockets is to force your opponent to fall off the bottom of the screen and be the last man standing on the platform</p>

            <h3>Controls</h3>
            <ul>
                <li><code class="code">W or ↑</code> Fly towards the Attractor (The circle in the top center)</li>
                <li><code class="code">S or ↓</code> Fly towards your Opponent (Invite a friend!)</li>
            </ul>

            <h3>The Attractor</h3>
            <img src="https://imgur.com/ZJjCBAo.png">
            <p>To keep you rocket from falling off the platform, you can use the <code class="code">Fly at Attractor</code> key. Doing so draws you towards the attractor overhead.</p>

            <h3>The Platform</h3>
            <img src="https://imgur.com/ZV5V7y5.png" width="600">
            <p>The platform is all you have standing between yourself and the bottomless pit. Be careful to keep yourself on its top side, once you fall below, it is tough to get back up.</p>

            <h3>The Opponent</h3>
            <img src="https://imgur.com/VaoMQLa.png">
            <p>While anyone other than you is your opponent, the opponent you target is marked with a crosshair over them. Press the <code class="code">Fly at Opponent</code> Key to Smash them off the platform.</p>

            <h4>Enemy Assignment</h4>
            <p>Each player pursues one other player, and each player has one player pursuing them. Depending on the number of players, you will not necessarily be chasing the person chasing you.</p>

            <h4>Collisions</h4>
            <p>To defeat your opponent, you must knock him off the bottom of the screen. When two players collide, the faster player will send the slower player rocketing off the platform. So build up momentum with the <code class="code">Fly at Opponent</code> Key and smash them off the platform.</p>
        </section>
        <section class="panel">
            <h2>Meet the Team</h2>
            <p>Smash Rockets is being developed by HyperFuel Games, a small international team with expertise in Graphic Design, Software Engineering, Animation, and Front End Development.</p>
        </section>
    </div>
</template>

<script>

export default {
    name: "Well"
}
</script>

<style scope>
.well {
    max-width: 600px;
}
.panel {
    background-color: #271926;
    margin: 0.75rem;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    border: 1px solid #9a6885;
    border-bottom: 4px solid #c3b5be;
    border-top-left-radius: 4px;
}
.panel:first-of-type {
    margin-top: 0;
}
.panel h2 {
    color: #de9316;
    font-size: 1.75rem;
}
.panel h3 {
    margin-top: 1.75rem;
    color: #de9316;
    font-size: 1.25rem;
}
.panel h4 {
    font-size: 1.125rem;
    margin-top: 1.25rem;
    font-weight: 700;
}
.panel ul {
    list-style-type: square;
    margin-left: 1.25rem;
}
.panel code {
    display: inline-block;
    font-family: monospace;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 0.25rem;
    padding: 0.0625rem;
}
.panel code::before {
    content: '\00a0';
}
.panel code::after {
    content: '\00a0';
}
.panel img {
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border-bottom: 2px solid #de9316;
}
.panel a {
    color: #de9316;
}
.panel p,
.panel li {
    font-size: 1rem;
    line-height: 1.8;
    margin-top: 0.5rem;
}
</style>
