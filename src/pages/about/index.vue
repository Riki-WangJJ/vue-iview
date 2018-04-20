<template>
	<div>
		关于
	</div>
</template>

<script>
  import {mapState} from 'vuex'
	export default {
    computed: {
      ...mapState({
        info: state => state.about.info
      })
    },
    mounted () {
      console.log(this.info)
    }
	}
</script>

<style scoped>

</style>