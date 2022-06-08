<template>
			<div id="root">
					<Header />
					<section class="main__wrapper" v-if="!loginFlag">	
						<form @submit="loginSend" class="login_window" >
							<p>Авторизация</p>
							<label for="login" class='title'>Логин</label>
							<Input type="text" placeholder='Логин' v-model="form.login" name="login" />
							<label for="password" class='title'>Пароль</label>
							<Input type="password" placeholder='Пароль' v-model="form.password" name="password" />
							<Button class='btn success' type='submit'>Вход</Button>
						</form>
					</section>
					<router-view v-else></router-view>	
			</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    data() {
        return {
			form: {
				login: "",
				password: ""
			}
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
		
		if (this.loginFlag){
			this.getUserData(this.loginFlag)
		}
    },
    methods: {
       ...mapActions('userprofile',["login","getUserData"]),
	   loginSend(e){
		   e.preventDefault();
		   this.login(this.form);
			 
	   },
	   
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
	.login_window{
		width: 288px;
		height: 300px;
		background: #FFFFFF;
		box-shadow: 0px 0px 5px 3px #B5B5B5;
		border-radius: 5px;
		margin: auto;
		display: flex;
		flex-direction: column;
		padding: 0 30px;
		& p{
			font-weight: 300;
			font-size: 24px;
			margin: 30px 0;
			text-align: center;
		}
		& .title{
			color: $label-text;
			text-align: left;
			margin: 0;
		}
		& input{
			box-sizing: border-box;
			padding: 5px 10px;
			height: 24px;
			background: #FFFFFF;
			border: 1px solid $primary;
			box-shadow: inset 0px 0px 2px 1px #B5B5B5;
			border-radius: 3px;
			margin: 5px 0 30px 0;
		}
		& button{
			margin: 0 0 30px 0;
		}
	}
</style>
