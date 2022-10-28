<template>
	<div class="v-select dropdown">
		<input
			type="hidden"
			:name="name"
			:id="id"
			v-model="value"
			@onchange="selected"
		>

		<button
			class="form-control v-select-output"
			type="button"
			data-toggle="dropdown"
			aria-haspopup="listbox"
			:id="id+'Button'"
		>
			{{ text }}
		</button>

		<ul
			v-if="optionList"
			class="dropdown-menu v-options"
			role="listbox"
			:aria-labelledby="id+'Button'"
		>
			<v-option
				v-for="option in optionList"
				:key="option.id"
				:value="option.value"
				:id="option.id"
				:selected="option.checked"
				:disabled="option.disabled"
			>{{ option.text }}</v-option>
		</ul>

		<ul class="dropdown-menu v-options" v-else>
			<slot></slot>
		</ul>
	</div>
</template>

<script>
import EventBus  from '../../utils/EventBus.js'

export default {
	props: {
		id: String,
		name: String,
		placeholder: String,
		options: {
			type: Array,
			default: null
		}
	},
	data() {
		return {
			focus : false,
			text  : this.placeholder || 'Selecione',
			value : '',
			optionList: this.options
		}
	},
	methods: {
		selected() {}
	},
	mounted() {
		window.customSelects = window.customSelects || {}

		window.customSelects[this.id] = this;

		EventBus.$on('vselect-change', payload => {
			if(payload.target == this.id) {
				this.value = payload.value
				this.text = payload.text
			}
		})

		EventBus.$on('vselect-refresh', payload => {
			if(payload.id == this.id) {
				this.optionList = payload.options
				this.text = this.placeholder || 'Selecione'
				this.value = ''
			}
		})
	}
}
</script>

<style lang="scss">

.v-select-output{
	text-align: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	&:before{
		content:'';
		border-left: 0.5em solid transparent;
		border-right: 0.5em solid transparent;
		border-top: 0.5em solid currentColor;
		display: block;
		float: right;
		margin-left: 0.75rem;
		margin-top: 0.5rem;
	}
}

.v-options{
	width: 100%;
	min-width: 180px;
	padding-top: 0;
	padding-bottom: 0;
	max-height: 220px;
	overflow: auto;
}
</style>
