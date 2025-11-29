import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-20">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-serif text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start adding some books to your collection!
            </p>
            <Link to="/shop">
              <Button size="lg">Browse Books</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-secondary/30 py-12 border-b">
          <div className="container">
            <h1 className="font-serif text-5xl font-bold">Shopping Cart</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map(item => (
                  <Card key={item.id} className="p-6">
                    <div className="flex gap-6">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-32 object-cover rounded shadow-book hover:opacity-80 transition-opacity"
                        />
                      </Link>
                      
                      <div className="flex-1">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-serif font-bold text-xl mb-1 hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground mb-2">{item.author}</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Condition: {item.condition}
                        </p>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="px-4 font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-bold text-xl text-primary">
                          ₹{item.price * item.quantity}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ₹{item.price} each
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
                
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full"
                >
                  Clear Cart
                </Button>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="p-6 sticky top-24">
                  <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>₹{getCartTotal()}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">₹{getCartTotal()}</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full mb-3">
                    Proceed to Checkout
                  </Button>
                  
                  <Link to="/shop">
                    <Button variant="outline" size="lg" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
