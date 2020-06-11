import React, {PureComponent} from "react";

class Footer extends PureComponent {

    render() {
        return <footer>{this.props.text}</footer>
    }
}

export default Footer;
