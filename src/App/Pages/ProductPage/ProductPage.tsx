import React from 'react';
import { Product } from './Product/Product';
import { ProductPageHeader } from './ProductPageHeader/ProductPageHeader';
import { RelatedProducts } from './RelatedProducts/RelatedProducts';

interface IProductPageProps {
    type: "women" | "men"
}

const ProductPage: React.FC<IProductPageProps> = ({ type }) => {
    return (
        <div data-test-id={`product-page-${type}`}>
            <ProductPageHeader />
            <Product />
            <RelatedProducts type={type} />
        </div>
    )
}

export { ProductPage }