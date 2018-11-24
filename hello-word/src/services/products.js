import Product from '../models/products'

class ProductService {

    constructor() {
        this.url = "https://api.myjson.com/bins/1gbraw"; // URL to get products, move value to config 
    }

    getProductsByURL() {
        return fetch(this.url)
            .then((response) => response.json())
            .then((responseJson) => {
                // const products = responseJson.retailer.products.sort((a, b) => a.price - b.price);
                // console.log(responseJson.retailer.products); 
                const products = responseJson.retailer.products.map((productJson) => {
                    const a = new Product(
                        (productJson._id === undefined) ? productJson.objectID : productJson._id,
                        productJson.name, 
                        (productJson.price === undefined) ? 0 : productJson.price,
                        productJson.image_url
                    );
                    return a;
                });

                return products;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default ProductService;