class SignUp extends React.Component {

  constructor(props) {
    super(props);
  
    this.handleSignUp = this.handleSignUp.bind(this)
  }


  handleSignUp (e) {
  	e.preventDefault()
  	$.ajax({
  		url: '/users/create',
  		type: 'POST',
  		dataType: 'json',
  		data: {email: this.refs.email.value, username: this.refs.username.value, password: this.refs.password.value, confirm_password:this.refs.confirmPassword.value},
  	})
  	.done(function(response) {
  		debugger
  		console.log("success");
  	})
  	.fail(function() {
  		console.log("error");
  	})
  	.always(function() {
  		console.log("complete");
  	});
  	

  }


  render () {
    return (
    	<div className="body-splash">

    		<div className="sign-in-up-container sign-up-container">
	    		<form onSubmit={this.handleSignUp}>
	    			<div className="form-group">
	    			    <label htmlFor="username">username:</label>
	    			    <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" ref="username"/>
	    			 
				    </div>

				    <div className="form-group">
				        <label htmlFor="emailInput">Email address</label>
				        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" ref="email"/>
				        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				      </div>

	    			  
	    			<div className="form-group">
	    			    <label htmlFor="passwordinput">Password</label>
	    			    <input type="password" className="form-control" id="passwordinput" placeholder="password" ref="password"/>
	    			</div>

	    			<div className="form-group">
	    			    <label htmlFor="passwordinput">Confirm Password</label>
	    			    <input type="password" className="form-control" id="confirmpasswordinput" placeholder="password" ref="confirmPassword"/>
	    			</div>

	    			<button type="submit" className="btn btn-primary">Sign Up</button>

	    		</form>
    		</div>

        <div>

          <a href="/users/auth/facebook">Sign Up With Facebook Here</a>

        </div>

    		<div>
    			<span>
    				<a href="signin" onClick={this.props.signIn}>Already a user? Sign In Here</a>
    			</span>
    		</div>
    	</div>
    )
  }
}

