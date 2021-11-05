<template>
	<div>
		<Nav />
		<slot name="header" />
	</div>
</template>

<script>
	export default {
		layout: 'default',
	}
</script>
