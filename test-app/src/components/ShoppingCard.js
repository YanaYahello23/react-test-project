import "./ShoppingCard.scss";
import {Counter} from "./Counter";

const ShoppingCard = ({selectedProduct}) => {
    return (
        <div className="shopping-card-block">
            <div><img src={"http://localhost:3333" + selectedProduct.image} alt="product-img"/></div>
            <div className="shopping-card-content">
                <div className="shopping-card-content__title-container">
                    <div className="shopping-card-content__title">{selectedProduct.title}</div>
                    <div className="shopping-card-content__close-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#282828" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="#282828" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="shopping-card__info">
                    <Counter/>
                    <div>{selectedProduct.price}</div>
                    <div>{selectedProduct.discont_price}</div>
                </div>
            </div>
        </div>
    );
}

export {ShoppingCard};