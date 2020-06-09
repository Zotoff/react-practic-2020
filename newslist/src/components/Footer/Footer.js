import React, {Component} from 'react';

class Footer extends Component {

    constructor(props){
        super();
        console.log(this.props);
    }

    render(){
        return(
            <footer>
                This is a footer
                {this.props.footerCopyright}
            </footer>
        )
    }
}

export default Footer;