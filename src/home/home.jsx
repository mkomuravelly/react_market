import React,{Component} from "react";
import {connect} from "react-redux";
import  * as actions  from "./actions";

class Home extends Component {
    componentDidMount(){
        this.props.getUser();
    }
    render() {
        return <h1>Hello</h1>
    }
}

const mapStateToProps = (state) => ({
    usersData: state.usersData
});




export default connect(mapStateToProps, actions)(Home);