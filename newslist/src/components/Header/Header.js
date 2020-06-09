import React, {Component} from 'react';


class Header extends Component {
		state = {
			keywords: "",
			active: false
		}

		render(){			
			const inputChangeHandler = (event) => {
				const value = event.target.value === '' ? false : true;
				this.setState({
					keywords: event.target.value,
					active: value
				})
			}
			return (
				<header style={{background: `${this.state.active ? 'red' : 'blue'}`, transition: 'all .5s ease-in'}}>
					<div className="logo" onClick={(e)=>{alert('Logo')}}>Logo</div>
					<input type="text" onChange={this.props.keywords}/>
				</header>
			)
		}
	}
export default Header;