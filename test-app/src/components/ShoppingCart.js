import "./ShoppingCart.scss"
import {useEffect, useState} from "react";
import {ShoppingCard} from "./ShoppingCard";
import {OrderCardForm} from "./OrderDetailsForm";
import {Breadcrumbs} from "./Breadcrumbs";

const ShoppingCart = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    //this is temporary solution
    localStorage.setItem("selectedProducts", JSON.stringify([{
        categoryId: 1,
        createdAt: "2022-10-02T14:43:29.000Z",
        description: "Angelonia angustifolia Archangel™ White displays pristine white blossoms arranged on tall stems that sparkle above clean, glossy, dark green foliage. These sturdy, well-branched plants add texture and commanding presence to borders, containers, and flower arrangements.",
        discont_price: null,
        id: 2,
        image: "/product_img/2.jpeg",
        price: 10.75,
        title: "Angelonia angustifolia Archangel™ White",
        updatedAt: "2022-10-02T14:43:29.000Z",
    }]));

    useEffect(() => {
        const selectedProductsList = JSON.parse(localStorage.getItem("selectedProducts"));
        setSelectedProducts(selectedProductsList);
    }, []);

    return (
        <div className="shopping-cart-container">
            <div className="shopping-cart-container__title">Shopping Cart
                <div className="line"></div>
                <Breadcrumbs breadcrumbsList={["Back to the store"]}/></div>
            <div className="shopping-cart-container__main-content">
                <div>
                    {selectedProducts && selectedProducts.map((product, index) => {
                        return (
                            <ShoppingCard selectedProduct={product}/>
                        );
                    })}
                </div>
                <OrderCardForm/>
            </div>
        </div>
    );
}

export {ShoppingCart};