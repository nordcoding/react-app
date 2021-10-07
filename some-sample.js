/* const Header = ()=> { // components VSEGDA pishem s BOLSHOI bukvi !!! //
	return <h2>Hello World</h2>
}

const Field = ()=> {
	const holder = "Enter here" 
	const styledField = { // inline styles , no obichno primenyautsya css classi // 
		width: '300px',
	}
	return <input 
				style = {styledField}
				type = 'text' 
				placeholder ={holder} 
				autoComplete = "" 
				className = "some class"
				htmlFor = ""/>
}

const Button = () => {
	const logged = true; 
	const text = "Logged"
	// eslint-disable-next-line
	const res = () => {
		return "Login, please!"
	}
	const p = <p>Login</p>
	return <button>{logged ? "Login pls" : text}</button> // Nelzya dobavlyat objects !!! // 
}

const testApp = () => {
	return (
		<div>
			<Header/>
			<Field/>
			<Button/>
		</div>
	)
} */



// WhoAmI functionality //

class WhoAmI extends Component{
	constructor (props){ // props - eto svoistvo componenta // 
		super(props);
		this.state = {
			years:26
		}
		/* this.nextYear = () => { // 1i sposob //
			this.setState(state => ({
				years: ++state.years
			}))
		} */
		//this.nextYear = this.nextYear.bind(this);  // 2oi sposob//
	}

	nextYear = () => { // 3i sposob, noveishi standard ES9 //
		this.setState(state => ({
			years: ++state.years
		}))
	}

	/* nextYear(){ // 2oi sposob //
		console.log(1); 
		this.setState(state => ({
			years: ++state.years
		}))
	} */
	render(){
		const {name, surname, link} = this.props; 
		const {years} = this.state; 
		return(
			// ili tazhe mozhno prostyo ostavit pustie tegi //
			<React.Fragment> 
				<button onClick = {this.nextYear}>+</button>
				<h1>My name is {name} ,surname - {surname}, years = {years} </h1> 
				<a href = {link}>My profile</a>
			</React.Fragment>
		)
	}
}

const All = () => {
	return(
		<>
			<WhoAmI name = "John" surname = "Smith" link = "facebook.com"/>
			<WhoAmI name = "Ivan" surname = "Smith" link = "twitter.com"/>
			<WhoAmI name = "Greg" surname = "Smith" link = "linkedin.com"/>
		</>
	)
}