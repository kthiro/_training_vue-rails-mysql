<template>
  <div id="app">
    <HelloWorld :title="promptMsg" @callNameInput="showMsgFromHelloWorld" />
    <hr>
    <p>{{ msgFromHelloWorld }}</p>
    <hr>
    <button @click="callPrompt">タイトル変更</button>
    <Collapse />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Collapse from './components/Collapse.vue'

export default {
  name: 'app', 
  components: {
    HelloWorld, 
    Collapse, 
  }, 
  data: function() {
    return {
      promptMsg: 'Hello Vue!', 
      msgFromHelloWorld: 'fromHW', 
    }
  }, 
  methods: {
    callPrompt: function() {
      this.promptMsg = prompt('new title:');
    }, 
    showMsgFromHelloWorld: function(nameInput) {
      this.msgFromHelloWorld = nameInput;
    }
  }, 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
