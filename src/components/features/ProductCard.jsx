import Card from '../ui/Card';
import Button from '../ui/Button';

const ProductCard = ({ 
    product,
    onAddToCart,
    onViewDetails,
}) => {
    return (
        <Card
            title={product.title}
            description={product.description}
            image={product.image}
            classname="product-card"
        >

            <div className="product-card__meta">
                <span className="product-card__price">$ {product.price}</span>
                <span className="product-card__category">{product.category}</span>
                {product.raiting && (
                    <span className="product-card__raiting">★ {product.raiting}</span>
                )}
            </div>

            <div className="product-card__actions">
                <Button
                    variant="primary"
                    onClick={() => onAddToCart(product)}
                    disabled={product.stock === 0}
                >
                    Добавить в корзину
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => onViewDetails(product)}
                >
                    Подробнее
                </Button>
            </div>
        </Card>
    );
};

export default ProductCard;
