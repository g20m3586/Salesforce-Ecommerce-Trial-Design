"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import {
  FaHome,
  FaBars,
  FaHeart,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaKey,
  FaBuilding,
  FaPaperPlane,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [favorites, setFavorites] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className={`${inter.className} bg-light`}>
      {/* HEADER */}
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-secondary flex items-center">
            <FaHome className="text-primary mr-2" /> the
            <span className="text-primary">Stable</span>
          </h1>

          {/* NAV (desktop) */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Properties", "Services", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-secondary hover:text-primary font-medium"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center space-x-4">
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition hidden md:block">
              Sign Up
            </button>
            <button
              className="md:hidden text-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="pt-32 pb-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,46,94,0.7), rgba(15,46,94,0.7)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1973&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Property With Ease
          </h2>
          <p className="text-xl mb-8">
            Discover the perfect home, apartment, or commercial space from our
            curated listings.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition">
              Browse Properties
            </button>
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition">
              List Your Property
            </button>
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section id="properties" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties that match
              various lifestyles and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "villa",
                img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=784&q=80",
                title: "Luxury Villa",
                price: "$425,000",
                address: "123 Estate Avenue, Beverly Hills",
                beds: 4,
                baths: 3,
                area: "2,800 sqft",
              },
              {
                id: "apartment",
                img: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=780&q=80",
                title: "Modern Apartment",
                price: "$1,800/mo",
                address: "45 Urban Street, New York",
                beds: 2,
                baths: 2,
                area: "1,200 sqft",
              },
              {
                id: "office",
                img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=783&q=80",
                title: "Office Space",
                price: "$3,200/mo",
                address: "Business Tower, Downtown LA",
                beds: 6,
                baths: 2,
                area: "3,500 sqft",
              },
            ].map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl overflow-hidden shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white text-sm font-medium px-3 py-1 rounded">
                    For {p.id === "villa" ? "Sale" : "Rent"}
                  </div>
                  <button
                    onClick={() => toggleFavorite(p.id)}
                    className="absolute top-4 right-4 bg-white text-primary p-2 rounded-full"
                  >
                    <FaHeart
                      className={favorites[p.id] ? "text-accent" : ""}
                    />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-secondary">
                      {p.title}
                    </h3>
                    <span className="text-xl font-bold text-primary">
                      {p.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{p.address}</p>
                  <div className="flex justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <FaBed className="text-primary mr-2" /> {p.beds} Beds
                    </div>
                    <div className="flex items-center">
                      <FaBath className="text-primary mr-2" /> {p.baths} Baths
                    </div>
                    <div className="flex items-center">
                      <FaRulerCombined className="text-primary mr-2" />{" "}
                      {p.area}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-primary border border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate services tailored to meet your unique
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaKey className="text-4xl mb-4 text-primary" />,
                title: "Property Sales",
                desc: "We help you buy and sell residential and commercial properties with ease.",
              },
              {
                icon: <FaBuilding className="text-4xl mb-4 text-primary" />,
                title: "Property Management",
                desc: "Comprehensive management services to maintain and enhance property value.",
              },
              {
                icon: <FaPaperPlane className="text-4xl mb-4 text-primary" />,
                title: "Consulting",
                desc: "Expert advice and market insights for informed real estate decisions.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition"
              >
                {s.icon}
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from happy clients who found their dream property
              with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Thompson",
                role: "Home Buyer",
                feedback:
                  "TheStable made the process of finding our dream home so smooth and stress-free.",
                stars: 5,
              },
              {
                name: "James Carter",
                role: "Property Owner",
                feedback:
                  "Their property management services have been exceptional, ensuring my investments are well-maintained.",
                stars: 4.5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  {[...Array(Math.floor(t.stars))].map((_, i) => (
                    <FaStar key={i} className="text-accent mr-1" />
                  ))}
                  {t.stars % 1 !== 0 && (
                    <FaStarHalfAlt className="text-accent mr-1" />
                  )}
                </div>
                <p className="text-gray-600 mb-4">{t.feedback}</p>
                <h4 className="font-semibold text-secondary">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">theStable</h3>
              <p className="text-gray-300">
                Your trusted partner in finding the perfect property.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Properties", "Services", "About", "Contact"].map(
                  (l) => (
                    <li key={l}>
                      <a
                        href={`#${l.toLowerCase()}`}
                        className="hover:text-accent"
                      >
                        {l}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300">
                123 Main Street, Johannesburg, SA
              </p>
              <p className="text-gray-300">Email: info@thestable.com</p>
              <p className="text-gray-300">Phone: +27 123 456 789</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <FaFacebookF className="hover:text-accent cursor-pointer" />
                <FaTwitter className="hover:text-accent cursor-pointer" />
                <FaInstagram className="hover:text-accent cursor-pointer" />
                <FaLinkedinIn className="hover:text-accent cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="text-center border-t border-gray-700 pt-6 mt-6">
            <p>&copy; 2025 theStable. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
