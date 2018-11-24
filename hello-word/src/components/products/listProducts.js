import React from "react";

class ListProducts extends React.Component {
    constructor(props) {
        super(props);
        console.log("props:" + props.lProducts);
        this.state = { lProducts: props.lProducts };
        // let lPersons = ["Andres", "Natha", "Thomas"];
    }

    componentDidMount() {
        console.log("componentDidMount listPorducts...");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate listPorducts...");
        // this.setState({ lProducts: this.props.lProducts });
    }


    showList() {
        let list = [];
        let products = [];
        this.props.lProducts.forEach(element => {
            products.push(<li key={element._id}>{element.productName + ' - ' + element.productPrice}</li>)
        });
        list.push(<ol key="lProducts">{products}</ol>);
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

export default ListProducts;