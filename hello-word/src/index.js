import React from "react";
import ReactDOM from "react-dom";
import Welcome from './components/welcome';
import ListPersons from './components/listPersons';
import Event from './components/events/events';

class WelcomeMultiple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lPersons: [{ _id: 1, name: "Andres" }, { _id: 2, name: "Natha" }, { _id: 3, name: "Thomas" }],
            lPersonsValue: 1
        };
        // let lPersons = ["Andres", "Natha", "Thomas"];
    }

    render() {
        return (
            <div>
                <Event />
                <ListPersons lPersons={this.state.lPersons} />
            </div>
        );
    }
}

ReactDOM.render(<WelcomeMultiple />, document.getElementById('index'));