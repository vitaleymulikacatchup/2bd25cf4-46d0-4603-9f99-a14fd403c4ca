"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Leaf, Star, Edit } from 'lucide-react';

const assetMap = [
  { id: 'hero-image', url: 'https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere.' },
  { id: 'about-image', url: 'https://images.pexels.com/photos/5908216/pexels-photo-5908216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Smiling Asian woman spreading tomato sauce on pizza dough while looking at funny female covering eyes with tomato slices in kitchen' },
  { id: 'feature-image', url: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Appetizing gourmet pizza cooked in a wood-fired oven, showcasing artisanal toppings.' },
  { id: 'product-image-1', url: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal.' },
  { id: 'product-image-2', url: 'https://images.pexels.com/photos/5848245/pexels-photo-5848245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Delicious gourmet pizza in an open cardboard box, shot from above for a classic flat lay presentation.' },
  { id: 'product-image-3', url: 'https://images.pexels.com/photos/6605418/pexels-photo-6605418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A cheerful chef presents delicious pizzas in a cozy pizzeria setting, showcasing culinary skills.' },
  { id: 'contact-image', url: 'https://images.pexels.com/photos/4473496/pexels-photo-4473496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Side view of smiling young Asian female cashier wearing apron using modern cash desk with computer screen in cafe with rustic wooden interior' },
  { id: 'logo-white', url: 'https://images.pexels.com/photos/7317349/pexels-photo-7317349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Neon sign reading "Pizzeria Pera" on a textured wall, captured in Istanbul\u0027s urban environment.' }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/pizzeria-logo.svg"
          brandName="Delicious Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-yellow-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Delicious Pizzeria"
            description="Home of the best pizzas in town, baked to perfection."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[{
              text: 'Order Now',
              href: 'contact',
              props: { className: 'bg-yellow-500 text-black' },
            }]}
            className="bg-yellow-100 text-gray-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-yellow-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: 'Fresh Ingredients', description: 'We source the freshest ingredients locally.', icon: Leaf },
              { title: 'Family Tradition', description: 'Recipes passed down through generations.' },
            ]}
            imageSrc={assetMap.find(a => a.id === 'about-image')?.url}
            className="bg-yellow-100 text-gray-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-yellow-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: 'Gourmet Toppings', description: 'Unique tastes with premium toppings', icon: Star },
              { title: 'Custom Orders', description: 'Personalized pizzas just for you', icon: Edit },
            ]}
            title="Our Specialties"
            imageSrc={assetMap.find(a => a.id === 'feature-image')?.url}
            className="bg-yellow-100 text-gray-900"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-yellow-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              { id: '1', brand: 'Delicious Pizzas', name: 'Pepperoni Delight', price: '$15.99', rating: 4.5, reviewCount: '204', imageSrc: assetMap.find(a => a.id === 'product-image-1')?.url },
              { id: '2', brand: 'Delicious Pizzas', name: 'Veggie Supreme', price: '$12.99', rating: 4.7, reviewCount: '316', imageSrc: assetMap.find(a => a.id === 'product-image-2')?.url },
              { id: '3', brand: 'Delicious Pizzas', name: 'Margarita Classic', price: '$10.99', rating: 4.8, reviewCount: '185', imageSrc: assetMap.find(a => a.id === 'product-image-3')?.url },
            ]}
            title="Our Menu"
            className="bg-yellow-100 text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-yellow-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Order Your Favorite Pizza"
            description="Delicious pizzas just a call away. Contact us for custom orders!"
            imageSrc={assetMap.find(a => a.id === 'contact-image')?.url}
            className="bg-yellow-100 text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-yellow-100 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: 'Menu', items: [{ label: 'Classic', href: 'product' }, { label: 'Specialty', href: 'feature' }] },
              { title: 'Contact', items: [{ label: 'Order Now', href: 'contact' }, { label: 'Location', href: '#location' }] },
            ]}
            logoSrc={assetMap.find(a => a.id === 'logo-white')?.url}
            copyrightText="© 2025 Delicious Pizzeria"
            className="bg-yellow-100 text-gray-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
