import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BookOpen, Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground">
                A passion for books that turned into a mission to connect readers 
                with stories that matter
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  BookNook began in 2020 with a simple idea: every book deserves a reader, 
                  and every reader deserves access to quality literature. What started as a 
                  small collection in a neighborhood corner has grown into a curated bookstore 
                  serving thousands of book lovers.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  We believe in the transformative power of reading. Each book in our collection 
                  is carefully selected for its ability to educate, inspire, or entertain. From 
                  timeless classics to contemporary bestsellers, we pride ourselves on offering 
                  books that leave a lasting impact.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our commitment goes beyond selling books. We're building a community of 
                  readers who share a love for stories and knowledge. Whether you're seeking 
                  personal growth, entertainment, or enlightenment, we're here to help you 
                  find your next great read.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              What Drives Us
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  Every book carefully inspected and graded for condition
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  Genuine love for literature drives everything we do
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building connections between readers and stories
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Curation</h3>
                <p className="text-muted-foreground">
                  Handpicked selection of meaningful and impactful reads
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl font-bold mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                A dedicated group of book enthusiasts committed to helping you discover 
                your next favorite read. We're here to provide recommendations, answer 
                questions, and share in your literary journey.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
