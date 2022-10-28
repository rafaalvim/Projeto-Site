import Vue from 'vue'
import './components/index.js'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	methods: {
		formAjax(event) {
			if(window.formAjax) {
				window.formAjax(event.target)
			}
		}
	}
})
