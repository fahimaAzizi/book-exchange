import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { BookCard } from '@/components/BookCard';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-20 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Book Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The book you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/shop">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b bg-secondary/30">
          <div className="container py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-primary">Shop</Link>
              <span>/</span>
              <span className="text-foreground">{product.title}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-book bg-secondary">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">{product.category}</Badge>
                  <Badge variant="outline">{product.condition}</Badge>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                  {product.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  by {product.author}
                </p>
                
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-4xl font-bold text-primary">
                    ₹{product.price}
                  </span>
                  <span className="text-muted-foreground">
                    {product.edition}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>In Stock - Ready to Ship</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Condition: {product.condition}</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full md:w-auto"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>

                <div className="mt-12 pt-8 border-t">
                  <h2 className="font-serif text-2xl font-bold mb-4">About This Book</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-20 bg-secondary/30">
            <div className="container">
              <h2 className="font-serif text-3xl font-bold mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <BookCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Product;
