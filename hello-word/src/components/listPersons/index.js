import React from "react";

class ListPersons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lPersons: props.lPersons };
        // let lPersons = ["Andres", "Natha", "Thomas"];
    }

    showList() {
        let list = [];
        let persons = [];
        this.state.lPersons.forEach(element => {
            persons.push(<option value={element._id} key={element._id}>{element.name}</option >)
        });
        list.push(<select key="lPersons">{persons}</select>);
        return list;
    }

    render() {
        return (
            <div>
                {this.showList()}
            </div>
        );
    }
}

export default ListPersons;