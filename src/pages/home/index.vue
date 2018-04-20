<template>
	<div>
		<i-circle :percent="80">
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </i-circle>

		<Row>
			<i-col span="12">
				<DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
			</i-col>
			<i-col span="12">
				<DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
			</i-col>
    </Row>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
	export default {
    computed: {
      ...mapState({
        user: state => state.user,
        myHome: state => state.home.myHome
      })
    },
    mounted () {
      console.log(this.$store)
      console.log(this.user)
      console.log(this.myHome)
      this.$store.dispatch('home_fetchSomething', {token: 'A59446F4-6744-4F3B-ADC0-ACFD81D0247C'})
    }
	}

</script>

<style scoped>

</style>