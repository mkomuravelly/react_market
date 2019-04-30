import React,{Component, Fragment} from "react";
import {connect} from "react-redux";
import  * as actions  from "./actions";
import App from "../charts/FirstChart";

class Home extends Component {
    componentDidMount(){
        this.props.getUser();
    }
    render() {
        return (
            <Fragment>
                <h4>First Chart</h4>
              <App />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    usersData: state.usersData
});




export default connect(mapStateToProps, actions)(Home);