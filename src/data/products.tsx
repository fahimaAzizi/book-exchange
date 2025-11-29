export interface Product {
  id: number;
  title: string;
  author: string;
  edition: string;
  price: number;
  condition: string;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    edition: "1st Edition",
    price: 1500,
    condition: "Like New",
    category: "History",
    image: "/images/sapiens.jpg",
    description: "A groundbreaking narrative of humanity's creation and evolution that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be human."
  },
  {
    id: 2,
    title: "21 Lessons for the 21st Century",
    author: "Yuval Noah Harari",
    edition: "1st Edition",
    price: 1400,
    condition: "Very Good",
    category: "Philosophy",
    image: "/images/21-lessons.jpg",
    description: "Harari's third book explores the most pressing issues of the present moment and offers guidance on how to navigate an unpredictable future with clarity and wisdom."
  },
  {
    id: 3,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    edition: "Classic Edition",
    price: 800,
    condition: "Good",
    category: "Self-Help",
    image: "/images/win-friends.jpg",
    description: "The timeless classic that has sold millions of copies worldwide. Learn fundamental techniques for handling people, ways to make people like you, and how to win people to your way of thinking."
  },
  {
    id: 4,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    edition: "1st Edition",
    price: 1600,
    condition: "Very Good",
    category: "Psychology",
    image: "/images/48-laws.jpg",
    description: "A definitive manual for anyone interested in gaining, observing, or defending against ultimate control. Drawing on ancient philosophers and contemporary leaders alike."
  },
  {
    id: 5,
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    edition: "1st Edition",
    price: 1700,
    condition: "Like New",
    category: "Psychology",
    image: "/images/human-nature.jpg",
    description: "Robert Greene turns to the most important subject of all - understanding people's drives and motivations, even when they are unconscious of them themselves."
  },
  {
    id: 6,
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi & Fumitake Koga",
    edition: "International Edition",
    price: 1100,
    condition: "Very Good",
    category: "Philosophy",
    image: "/images/courage-disliked.jpg",
    description: "A life-changing book that shows you how to unlock the power within yourself to become your best and truest self, change your future, and find lasting happiness."
  },
  {
    id: 7,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    edition: "Guide to Spiritual Enlightenment",
    price: 1200,
    condition: "Good",
    category: "Spirituality",
    image: "/images/power-now.jpg",
    description: "A groundbreaking book that has already helped millions of readers find a new way of living free from anxiety and stress in the present moment."
  },
  {
    id: 8,
    title: "The Ride of a Lifetime",
    author: "Robert Iger",
    edition: "1st Edition",
    price: 1300,
    condition: "Like New",
    category: "Business",
    image: "/images/ride-lifetime.jpg",
    description: "Lessons in leadership from the CEO of The Walt Disney Company, offering personal and professional principles to help nurture curiosity, confidence, and optimism."
  },
  {
    id: 9,
    title: "Oliver Twist",
    author: "Charles Dickens",
    edition: "Classic Edition",
    price: 600,
    condition: "Acceptable",
    category: "Classic Literature",
    image: "/images/oliver-twist.jpg",
    description: "The classic story of the orphan Oliver Twist, one of Dickens's most popular works, known for its vivid characters and dramatic depiction of social injustice."
  },
  {
    id: 10,
    title: "Diary of a Wimpy Kid (Book 3)",
    author: "Jeff Kinney",
    edition: "Third Book",
    price: 500,
    condition: "Good",
    category: "Children",
    image: "/images/wimpy-kid.jpg",
    description: "The third book in the wildly popular series about Greg Heffley and his middle school misadventures. Perfect for young readers who love humor and relatable stories."
  },
  {
    id: 11,
    title: "Five Survive",
    author: "Holly Jackson",
    edition: "1st Edition",
    price: 1400,
    condition: "Like New",
    category: "Young Adult",
    image: "/images/five-survive.jpg",
    description: "A gripping thriller about five friends on a road trip that turns into a nightmare when they become trapped and must fight to survive against an unknown sniper."
  },
  {
    id: 12,
    title: "On Anarchism",
    author: "Noam Chomsky",
    edition: "Essential Edition",
    price: 900,
    condition: "Very Good",
    category: "Political Science",
    image: "/images/anarchism.jpg",
    description: "A vital and wide-ranging introduction to Noam Chomsky's political philosophy, offering a powerful insight into his anarchist thinking and vision of a free society."
  },
  {
    id: 13,
    title: "Joey Pigza Swallowed the Key",
    author: "Jack Gantos",
    edition: "1st Edition",
    price: 550,
    condition: "Good",
    category: "Children",
    image: "/images/joey-pigza.jpg",
    description: "A National Book Award Finalist about a boy with attention-deficit disorder who can't sit still but has a big heart and is trying to do his best in a challenging world."
  },
  {
    id: 14,
    title: "Learning to Fly",
    author: "Various Authors",
    edition: "Inspirational Edition",
    price: 750,
    condition: "Very Good",
    category: "Self-Help",
    image: "/images/learning-fly.jpg",
    description: "An inspiring collection of stories and lessons about personal growth, overcoming challenges, and finding the courage to pursue your dreams against all odds."
  },
  {
    id: 15,
    title: "The Art of Laziness",
    author: "Library Mindset",
    edition: "Productivity Edition",
    price: 850,
    condition: "Like New",
    category: "Self-Help",
    image: "/images/art-laziness.jpg",
    description: "Discover how to work smarter, not harder. This book teaches you how to achieve more by doing less through strategic thinking and efficient productivity methods."
  },
  {
    id: 16,
    title: "Manipulation Techniques",
    author: "Psychology Experts",
    edition: "Advanced Edition",
    price: 1200,
    condition: "Very Good",
    category: "Psychology",
    image: "/images/manipulation.jpg",
    description: "A comprehensive guide to understanding psychological manipulation techniques, how to recognize them, and how to protect yourself from being manipulated."
  },
  {
    id: 17,
    title: "The Power",
    author: "Rhonda Byrne",
    edition: "Sequel to The Secret",
    price: 1300,
    condition: "Like New",
    category: "Self-Help",
    image: "/images/the-power.jpg",
    description: "From the bestselling author of The Secret, this book reveals the greatest power in the universe - the power to have anything you want in life."
  },
  {
    id: 18,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    edition: "20th Anniversary Edition",
    price: 1200,
    condition: "Very Good",
    category: "Personal Finance",
    image: "/images/rich-dad.jpg",
    description: "What the rich teach their kids about money that the poor and middle class do not. Learn how to make money work for you and achieve financial independence."
  },
  {
    id: 19,
    title: "Homo Deus: A Brief History of Tomorrow",
    author: "Yuval Noah Harari",
    edition: "1st Edition",
    price: 1600,
    condition: "Like New",
    category: "Future Studies",
    image: "/images/homo-deus.jpg",
    description: "Harari's visionary examination of humanity's future, exploring the projects, dreams, and nightmares that will shape the 21st century and beyond."
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.title.toLowerCase().includes(lowerQuery) ||
    product.author.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
};

export const getFeaturedProducts = (count: number = 8) => {
  return [...products].sort(() => Math.random() - 0.5).slice(0, count);
};

export const getCategories = () => {
  const categories = new Set(products.map(p => p.category));
  return Array.from(categories).sort();
};
