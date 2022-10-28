/**
	Forma de usar:

	<form-group
		tag="input|textarea"
		name="name"
		id="id"
		placeholder="Placeholder Text"
		label="Label Text"
		type="text|number|file|password|etc"
		sr-only
	></form-group>

	Obs:
	* O attr [sr-only] adiciona [class="sr-only"] à label.

 */

<template>
	<div class="form-group">
		<label :for="id" :class="{'sr-only': srOnly}">{{ label }}</label>
		<input :type="type" v-if="tag === 'input'" :name="name" :id="id" class="form-control" :placeholder="placeholder" />
		<textarea v-else :name="name" :id="id" :placeholder="placeholder" class="form-control"></textarea>
	</div>
</template>

<script>
export default {
	name: 'form-group',
	props: {
		name: {
			type: String
		},
		id: {
			type: String
		},
		placeholder: {
			type: String
		},
		tag: {
			type: String,
			default: 'input'
		},
		label: {
			type: String
		},
		srOnly: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		}
	}
}
</script>
