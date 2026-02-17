import React from "react";
import { motion } from "motion/react";
import { FaUtensils, FaTruck, FaUsers, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-slate-800 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Welcome to Craving Food Zone
        </motion.h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Delivering happiness, one meal at a time. We connect food lovers with
          the best restaurants around them — fast, fresh, and flavorful.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-down">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

            <p className="mb-4 text-gray-600">
              At Craving Food Zone, our mission is simple — to satisfy every
              craving with quality food and lightning-fast delivery.
            </p>

            <p className="text-gray-600">
              We partner with top-rated restaurants to ensure that every bite
              you take is fresh, hygienic, and delicious.
            </p>
          </div>

          <div
            data-aos="fade-down"
            className="bg-cyan-900 text-white p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>

            <ul className="space-y-4">
              <li>✔ Fast & Reliable Delivery</li>
              <li>✔ Top Rated Restaurants</li>
              <li>✔ Easy Online Payments</li>
              <li>✔ 24/7 Customer Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-orange-50">
        <h2 className="text-3xl font-bold text-center mb-16">
          What Makes Us Special
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">
          <div data-aos="flip-left">
            <FeatureCard
              icon={<FaUtensils size={28} />}
              title="Quality Food"
              desc="Only trusted restaurants with top hygiene standards."
            />
          </div>
          <div data-aos="flip-left">
            <FeatureCard
              icon={<FaTruck size={28} />}
              title="Fast Delivery"
              desc="Get your food delivered in record time."
            />
          </div>
          <div data-aos="flip-left">
            <FeatureCard
              icon={<FaUsers size={28} />}
              title="Happy Customers"
              desc="Thousands of satisfied food lovers."
            />
          </div>
          <div data-aos="flip-left">
            <FeatureCard
              icon={<FaStar size={28} />}
              title="Top Ratings"
              desc="Highly rated service and restaurants."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div
         
          className="grid md:grid-cols-3 gap-10 text-center"
        >
          <div  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
            <StatCard number="10K+" label="Orders Delivered" />
          </div>
          <div  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
            <StatCard number="500+" label="Partner Restaurants" />
          </div>
          <div  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
            <StatCard number="98%" label="Customer Satisfaction" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-slate-900 text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ready to Satisfy Your Cravings?
        </h2>

        <button className="px-10 py-4 rounded-2xl bg-cyan-700 hover:bg-cyan-900 transition font-semibold">
         <Link to="/order-now"> Explore Restaurants</Link>
        </button>
      </section>
    </div>
  );
};

/* Feature Card */
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-3xl shadow-md transition"
  >
    <div className="flex justify-center mb-4 text-orange-500">{icon}</div>

    <h3 className="font-semibold text-lg mb-3">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </motion.div>
);

/* Stat Card */
const StatCard = ({ number, label }) => (
  <div className="bg-orange-500 text-white p-10 rounded-3xl shadow-md">
    <h3 className="text-3xl font-bold mb-3">{number}</h3>
    <p>{label}</p>
  </div>
);

export default About;
