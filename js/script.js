
new Vue({
  el: '#app',
  data: {
    mailList:[]
  },
  mounted() {
    const self = this;
    for (var i = 1; i <= 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(resp) {
        console.log('risposta vue', resp.data);
        self.mailList.push(resp.data.response);
      });
    }
  }

})
Vue.config.devtools = true
