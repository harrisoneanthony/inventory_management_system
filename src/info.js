import React from "react";
// import { propTypes } from "prop-types";

class Info extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
        // this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed(){
        this.setState({
            count: this.state.count + 1,
        });
    }

    render(){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.buttonPressed()}>Click me!</button>
            </div>
        )
        // const title= this.props.title;
        // const showTitle = true;

        // if(showTitle){
        //     return (
        //         <div>
        //         <h1>{showTitle ? title : ""}</h1>
        //         <p>Mannage your stuff.</p>
        //     </div>
        //     );
        // } else {
        //     return <p>empty</p>
        // }
    }
}    

// Info.defaultProps = {
//     title: "Default"
// }

// Info.propTypes = {
//     title: propTypes.string,
// }

export default Info
