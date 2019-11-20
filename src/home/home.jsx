import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import * as actions from "./actions";
import App from "../charts/FirstChart";


class Home extends Component {
    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return <div>
            <h1>test</h1>
            <App/>
            {

                this.props.usersData != null &&
                this.props.usersData.result != null &&
                this.props.usersData.result.filter((data) => data.id <= 10).map((item) => {
                    return (
                        <li> {item.id}---{item.title}</li>)
                })
            }
        </div>

    }
}

const mapStateToProps = (state) => ({
    usersData: state.users
});


export default connect(mapStateToProps, actions)(Home);