import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/pizza.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const featuredRestaurants = [
    {
      id: 1,
      name: "Spice Kingdom",
      cuisine: "Indian",
      rating: 4.5,
      deliveryTime: "30-40 mins",
      image: "🏪",
    },
    {
      id: 2,
      name: "Pizza Paradise",
      cuisine: "Italian",
      rating: 4.3,
      deliveryTime: "25-35 mins",
      image: "🍕",
    },
    {
      id: 3,
      name: "Dragon Wok",
      cuisine: "Chinese",
      rating: 4.6,
      deliveryTime: "35-45 mins",
      image: "🥢",
    },
    {
      id: 4,
      name: "Burger Haven",
      cuisine: "American",
      rating: 4.4,
      deliveryTime: "20-30 mins",
      image: "🍔",
    },
  ];

  const popularDishes = [
    {
      id: 1,
      name: "Butter Chicken",
      restaurant: "Spice Kingdom",
      price: 299,
      rating: 4.7,
      image: "🍛",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      restaurant: "Pizza Paradise",
      price: 349,
      rating: 4.5,
      image: "🍕",
    },
    {
      id: 3,
      name: "Hakka Noodles",
      restaurant: "Dragon Wok",
      price: 249,
      rating: 4.6,
      image: "🍜",
    },
    {
      id: 4,
      name: "Classic Burger",
      restaurant: "Burger Haven",
      price: 199,
      rating: 4.4,
      image: "🍔",
    },
    {
      id: 5,
      name: "Tandoori Chicken",
      restaurant: "Spice Kingdom",
      price: 279,
      rating: 4.8,
      image: "🍖",
    },
    {
      id: 6,
      name: "Garlic Bread",
      restaurant: "Pizza Paradise",
      price: 99,
      rating: 4.3,
      image: "🥖",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary/30 text-primary-content py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Order Your Favorite Food
              </h1>

              <p className="text-lg md:text-xl text-secondary">
                Discover delicious meals from the best restaurants in your area.
                Fast delivery, great quality, amazing taste!
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => navigate("/order-now")}
                  className="px-8 py-3 bg-base-100 text-primary font-semibold rounded-lg hover:bg-secondary-hover transition"
                >
                  Order Now
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-3 bg-secondary/50 text-secondary-content font-semibold rounded-lg hover:bg-secondary-hover transition border border-secondary"
                >
                  Contact Us
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p>Restaurants</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p>Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p>Support</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <img src={img} className="  animate-pulse " alt="" />
              <img src={img} className="  animate-pulse " alt="" />
              <img src={img} className="  animate-pulse " alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED RESTAURANTS */}
      <section className="py-16 bg-primary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Featured Restaurants
            </h2>
            <p className="text-secondary">Explore our top-rated restaurants</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-base-100 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer"
              >
                <div className="h-40 bg-primary flex items-center justify-center">
                  <span className="text-6xl">{restaurant.image}</span>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-base-content">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-secondary">{restaurant.cuisine}</p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold">
                      {restaurant.rating} ⭐
                    </span>
                    <p className="text-sm text-secondary">
                      {restaurant.deliveryTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR DISHES */}
      <section className="py-16 bg-accent/70">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Popular Dishes
            </h2>
            <p className="text-secondary">Most loved meals by our customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-base-100 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="h-48 bg-primary flex items-center justify-center">
                  <span className="text-8xl">{dish.image}</span>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-base-content">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-secondary">{dish.restaurant}</p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold">₹{dish.price}</span>
                    <span>{dish.rating} ⭐</span>
                  </div>

                  <button className="w-full mt-3 px-4 py-2 bg-primary text-primary-content rounded-md hover:bg-primary-hover transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>

          <p className="text-secondary mb-8">
            Join thousands of satisfied customers and enjoy delicious food
            delivered to your doorstep
          </p>

          <button
            onClick={() => navigate("/order-now")}
            className="px-8 py-3 bg-base-100 text-primary font-semibold rounded-lg hover:bg-secondary-hover transition"
          >
            Order Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
