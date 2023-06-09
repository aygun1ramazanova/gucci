import { Component } from "react";
import Select from "./Select"


export default class Home extends Component {
    render() {
        return (
            <div className="model">
                <div className="content">
                <h1 className="gucci">GUCCI</h1>
                <p className="welcome">Welcome to Gucci</p>
                <p className="please">Please, select a location to continue</p>
                <Select />
                </div>
            </div>
        )
    }
}
