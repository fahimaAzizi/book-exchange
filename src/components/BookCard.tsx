import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface BookCardProps {
  product: Product;
}

export const BookCard = ({ product }: BookCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden border-border hover:shadow-hover transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif font-bold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.author}</p>
        
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {product.condition}
          </Badge>
        </div>
        
        <p className="font-bold text-primary text-xl">₹{product.price}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addToCart(product)}
          className="w-full"
          variant="default"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
