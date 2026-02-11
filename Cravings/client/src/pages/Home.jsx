import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/pizza.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const featuredRestaurants = [
    { id: 1, name: "Spice Kingdom", cuisine: "Indian", rating: 4.5, deliveryTime: "30-40 mins", image: "🏪" },
    { id: 2, name: "Pizza Paradise", cuisine: "Italian", rating: 4.3, deliveryTime: "25-35 mins", image: "🍕" },
    { id: 3, name: "Dragon Wok", cuisine: "Chinese", rating: 4.6, deliveryTime: "35-45 mins", image: "🥢" },
    { id: 4, name: "Burger Haven", cuisine: "American", rating: 4.4, deliveryTime: "20-30 mins", image: "🍔" },
  ];

  const popularDishes = [
    { id: 1, name: "Butter Chicken", restaurant: "Spice Kingdom", price: 299, rating: 4.7, image: "🍛" },
    { id: 2, name: "Margherita Pizza", restaurant: "Pizza Paradise", price: 349, rating: 4.5, image: "🍕" },
    { id: 3, name: "Hakka Noodles", restaurant: "Dragon Wok", price: 249, rating: 4.6, image: "🍜" },
    { id: 4, name: "Classic Burger", restaurant: "Burger Haven", price: 199, rating: 4.4, image: "🍔" },
    { id: 5, name: "Tandoori Chicken", restaurant: "Spice Kingdom", price: 279, rating: 4.8, image: "🍖" },
    { id: 6, name: "Garlic Bread", restaurant: "Pizza Paradise", price: 99, rating: 4.3, image: "🥖" },
  ];

  return (
    <div className="bg-[#F1F5F9] text-[#1E293B] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-28 bg-[#1E293B] text-white relative">
        <div className="absolute inset-0 bg-[#10B981] opacity-5"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Order Your <span className="text-[#10B981]">Favorite Food</span>
            </h1>

            <p className="text-lg text-slate-300">
              Discover delicious meals from the best restaurants in your area.
              Fast delivery, premium quality, unforgettable taste.
            </p>

            <div className="flex gap-5 pt-4">
              <button
                onClick={() => navigate("/order-now")}
                className="px-10 py-4 bg-[#10B981] text-white rounded-2xl font-bold hover:bg-[#059669] transition shadow-lg"
              >
                Order Now
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="px-10 py-4 border-2 border-[#10B981] text-[#10B981] rounded-2xl font-semibold hover:bg-[#10B981] hover:text-white transition"
              >
                Contact Us
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              <Stat number="500+" label="Restaurants" />
              <Stat number="50K+" label="Happy Customers" />
              <Stat number="24/7" label="Support" />
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={img}
              alt="food"
              className="rounded-3xl shadow-2xl border-4 border-[#10B981] hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-24 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeader
            title="Featured Restaurants"
            subtitle="Explore our top-rated restaurants"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-md hover:-translate-y-3 hover:shadow-lg transition cursor-pointer"
              >
                <div className="h-32 flex items-center justify-center bg-[#F1F5F9] rounded-2xl mb-5">
                  <span className="text-5xl">{restaurant.image}</span>
                </div>

                <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                <p className="text-sm text-[#64748B]">{restaurant.cuisine}</p>

                <div className="flex justify-between mt-4 text-sm">
                  <span>{restaurant.rating} ⭐</span>
                  <span className="text-[#64748B]">{restaurant.deliveryTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= POPULAR ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeader
            title="Popular Dishes"
            subtitle="Most loved meals by our customers"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {popularDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-md hover:-translate-y-3 transition hover:shadow-lg"
              >
                <div className="h-44 flex items-center justify-center bg-[#F1F5F9]">
                  <span className="text-8xl">{dish.image}</span>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg">{dish.name}</h3>
                  <p className="text-sm text-[#64748B]">{dish.restaurant}</p>

                  <div className="flex justify-between mt-4">
                    <span className="font-bold text-[#10B981]">₹{dish.price}</span>
                    <span>{dish.rating} ⭐</span>
                  </div>

                  <button className="w-full mt-6 py-3 bg-[#1E293B] text-white rounded-xl hover:bg-[#0F172A] transition font-semibold shadow">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-[#1E293B] text-white text-center">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Order?
        </h2>

        <p className="text-slate-300 mb-10 text-lg">
          Join thousands of satisfied customers and enjoy premium food
          delivered to your doorstep.
        </p>

        <button
          onClick={() => navigate("/order-now")}
          className="px-12 py-4 bg-[#10B981] text-white rounded-2xl font-bold hover:bg-[#059669] transition shadow-xl"
        >
          Order Now
        </button>
      </section>
    </div>
  );
};

/* ---------- Components ---------- */

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-[#1E293B]">
      {title}
    </h2>
    <p className="mt-3 text-[#64748B]">
      {subtitle}
    </p>
  </div>
);

const Stat = ({ number, label }) => (
  <div>
    <p className="text-4xl font-extrabold text-[#10B981]">{number}</p>
    <p className="text-slate-300 mt-2 text-sm">{label}</p>
  </div>
);

export default Home;
