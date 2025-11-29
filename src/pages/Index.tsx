import { Button } from '@/components/ui/button';
import { BookCard } from '@/components/BookCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Shield, Truck } from 'lucide-react';

const Index = () => {
  const featuredBooks = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your Next
              <span className="text-primary"> Great Read</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Curated collection of timeless classics, thought-provoking non-fiction, 
              and captivating stories. Every book tells a story, find yours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="group">
                  Browse Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Curated Selection</h3>
                <p className="text-muted-foreground">
                  Every book handpicked for quality and lasting value
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-muted-foreground">
                  All books inspected and graded for condition
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Your books delivered safely to your doorstep
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Featured Books
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of exceptional reads across various genres
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredBooks.map(product => (
              <BookCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/shop">
              <Button size="lg" variant="outline">
                View All Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Donate/Sell Books CTA */}
      <section className="py-20 border-b">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center shadow-book border">
            <div className="max-w-3xl mx-auto">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Have Books to Share?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We welcome book donations and offer fair prices if you'd like to sell your books at half price. 
                Help us grow our collection and make books accessible to more readers.
              </p>
              <Link to="/contact">
                <Button size="lg" className="group">
                  Contact Us to Donate or Sell
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground py-20">
        <div className="container text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Join Our Reading Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to get updates on new arrivals, special offers, and reading recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/contact" className="flex-1">
              <Button size="lg" variant="secondary" className="w-full">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
