<template>
<div id="app">
    <Nav />
    <Obhavo />
</div>
</template>

<script>
import Obhavo from './components/Obhavo'
import Nav from './components/nav'
export default {
    name: 'App',
    components: {
        Obhavo,
        Nav
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
    background: url('./assets/cloud.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
