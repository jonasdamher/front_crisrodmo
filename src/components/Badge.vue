<template>
	<router-link v-if="urlBadge!=null" class="badge text-dark" :title="titleBadge + nameBadge.toLowerCase()" :to="urlBadge">
		{{ nameBadge }}
	</router-link>
	<div v-else class="badge" :title="titleBadge + nameBadge.toLowerCase()">
		{{ nameBadge }}
	</div>
</template>
<script>
export default {
	name: 'Badge',
	props: {
		urlBadge: {
			type: String,
			default: null
		},
		nameBadge: {
			type: String,
			required: true
		},
		titleBadge: {
			type: String,
			required: true
		}
	}
}
</script>
<style scoped>
a.badge, div.badge {
	margin-bottom: .5rem;
	display: inline-block;
  text-decoration: none;
	font-weight: bold;
	font-family: PlayfairDisplay;
	color: #ff6347;
}

.badge:nth-child(n+1) {
margin-right: 1em;
}

a.badge:hover {
	color:rgb(223, 84, 60);
  transition: .2s;
  -moz-transition: .2s;
  -webkit-transition: .2s;
  -o-transition: .2s;
}
</style>