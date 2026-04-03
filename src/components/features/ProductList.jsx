import ProductCard from './ProductCard';

const ProductList = ({ products, filterText, onAddToCart, onViewDetails }) => {
    const filteredProducts = products.filter((product) => 
        product.title.toLowerCase().includes(filterText.toLowerCase()) ||
        product.description.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredProducts.length === 0) {
        return (
            <div className="product-list__empty">
                {filterText ? 'Товары по вашему запросу не найдены' : 'Товары не найдены'}
            </div>
        );
    }
    
    return (
        <div className="product-list">
            <div className="product-list__grid">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                        onViewDetails={onViewDetails}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
