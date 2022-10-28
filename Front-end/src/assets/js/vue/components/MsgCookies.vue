<template lang="pug">
	.msg__cookies(
		v-if="show"
	)
		.content
			slot
		//- .content

		button(
			type="button"
			role="button"
			aria-label="Aceitar termos"
			@click.prevent="aceitar"
		).btn Aceitar e fechar
	//- .msg__cookies
</template>

<script>
export default {
	data() {
		return {
			show: true
		}
	},
	beforeMount() {
		let aceito = localStorage.getItem('cookies');

		if(aceito) {
			this.show = false
		}
	},
	methods: {
		aceitar() {
			localStorage.setItem('cookies', `{"aceito": true}`)
			this.show = false
		}
	}
}
</script>

<style lang="scss">
@import '../utils/core.scss';

.msg__cookies{
	background: #FFF;
	position: fixed;
	bottom: 15px;
	left: 50%;
	transform: translateX(-50%);
	padding: 15px;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(#000,.8);
	width: 100%;
	z-index: 999999999;
	border: 1px solid rgba(#000,.2);

	a{
		color: #4b73dd;
		text-decoration: underline;
	}

	.btn{
		background: #4b73dd;
		color: #fff;
		font-weight: bold;
		transition: background .3s linear;
	}

	.btn:hover{
		color: #fff;
		background: darken(#4b73dd, 10%);
	}

	@include media-breakpoint-down(sm){
		max-width: calc(100% - 30px);
		font-size: 12px;
		text-align: center;

		a{
			display: inline-block;
		}

		.content{
			margin-bottom: 10px;
		}
	}

	@include media-breakpoint-up(md){
		display: grid;
		grid-template-columns: 1fr min-content;
		grid-column-gap: 10px;
		align-items: center;

		.btn{
			white-space: nowrap;
		}
	}

	@include media-breakpoint-only(md) {
		max-width: map-get($container-max-widths, md);
	}

	@include media-breakpoint-only(lg) {
		max-width: map-get($container-max-widths, lg);
	}

	@include media-breakpoint-only(xl) {
		max-width: map-get($container-max-widths, xl);
	}
}
</style>
