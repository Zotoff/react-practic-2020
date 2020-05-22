import React, {Component} from 'react';


class Header extends Component {
		render(){

			state = {
				keywords: ""
			}

			const inputChangeHandler = (event) => {
				this.setState({
					keywords: event.target.value
				})
			}
			return (
				<header>
					<div className="logo" onClick={(e)=>{alert('Logo')}}>Logo</div>
					<input type="text" onChange={inputChangeHandler}/>
				</header>
			)
		}
	}
export default Header;