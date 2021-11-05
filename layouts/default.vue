<template>
	<div>
		<Nav />

		<slot name="header" />

		<slot />
	</div>
</template>

<script>
	export default {
		layout: 'default',
	}
</script>
