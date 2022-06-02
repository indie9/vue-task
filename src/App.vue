<template>
			<div id="root">
					<Header />
					<section class="main__wrapper" v-if="!loginFlag">	
						
						
					</section>
					<router-view v-else></router-view>	
			</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    data() {
        return {
          
        };
    },
    computed: {
       	loginFlag(){
		   return localStorage.getItem('userId');
		},
		...mapGetters("userprofile", ["userProfileData"]),
    },
	watch:{
		
	},
    mounted() {
		
		if (!this.loginFlag) {
			this.login({
						"login": "indie777",
						"password": "123"
						})
						

		}
		
    },
    methods: {
       ...mapActions('userprofile',["login"]),
    },
    
}
</script>

<style lang="scss" scoped>
	.main__wrapper{
		width: 100%;
		height: 93vh;
		background-color: #E3E3E3;
		padding: 30px 80px 0px 80px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
</style>
