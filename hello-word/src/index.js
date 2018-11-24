import React from "react";
import ReactDOM from "react-dom";
// Components
import Welcome from './components/welcome';
import ListPersons from './components/listPersons';
import ListProducts from './components/products/listProducts';
import Event from './components/events/events';
// Services
import ProductService from './services/products';
// Models
import Product from './models/products';
// Styles
import "./style.css";

class WelcomeMultiple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "https://api.myjson.com/bins/1gbraw", // URL to get products, move value to config,
            lPersons: [{ _id: 1, name: "Andres" }, { _id: 2, name: "Natha" }, { _id: 3, name: "Thomas" }],
            lPersonsValue: 1,
            lProducts: []
        };
        // let lPersons = ["Andres", "Natha", "Thomas"];
    }

    // Lifecycle
    componentDidMount() {
        console.log("componentDidMount...");
        const sProduct = new ProductService();
        // const lProducts = sProduct.getProductsByURL();
        sProduct.getProductsByURL()
            .then((response) => {
                const lProducts = response;
                this.setState({ lProducts });
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate...");
        if (this.state.lProducts !== prevState.lProducts) {
            // this.fetchData(this.state.lProducts);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount...");
    }

    // Render
    render() {
        return (
            <div className="grid-container">
                {/* HEADER */}
                <div className="layout-header">
                    <h1>Header</h1>
                </div>
                {/* MAIN */}
                <div className="layout-main">
                    <Event />
                    {/* <ListPersons lPersons={this.state.lPersons} /> */}
                    <ListProducts lProducts={this.state.lProducts} />
                </div>
                {/* FOOTER */}
                <div className="layout-footer">
                    <h4>Footer</h4>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<WelcomeMultiple />, document.getElementById('index'));