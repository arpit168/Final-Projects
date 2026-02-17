import React from "react";
import { motion } from "motion/react";
import { FaUtensils, FaTruck, FaUsers, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200">

      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-[#1e293b]">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Welcome to Craving Food Zone
        </motion.h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-3xl mx-auto text-lg text-gray-400"
        >
          Delivering happiness, one meal at a time. We connect food lovers with
          the best restaurants around them — fast, fresh, and flavorful.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-20 bg-[#0f172a]">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="mb-4 text-gray-400">
              At Craving Food Zone, our mission is simple — to satisfy every
              craving with quality food and lightning-fast delivery.
            </p>
            <p className="text-gray-400">
              We partner with top-rated restaurants to ensure that every bite
              you take is fresh, hygienic, and delicious.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="bg-[#1e293b] border border-gray-700 p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Fast & Reliable Delivery</li>
              <li>✔ Top Rated Restaurants</li>
              <li>✔ Easy Online Payments</li>
              <li>✔ 24/7 Customer Support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-[#111827]">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-16 text-white"
        >
          What Makes Us Special
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <FeatureCard
            icon={<FaUtensils size={28} />}
            title="Quality Food"
            desc="Only trusted restaurants with top hygiene standards."
            delay="0"
          />

          <FeatureCard
            icon={<FaTruck size={28} />}
            title="Fast Delivery"
            desc="Get your food delivered in record time."
            delay="100"
          />

          <FeatureCard
            icon={<FaUsers size={28} />}
            title="Happy Customers"
            desc="Thousands of satisfied food lovers."
            delay="200"
          />

          <FeatureCard
            icon={<FaStar size={28} />}
            title="Top Ratings"
            desc="Highly rated service and restaurants."
            delay="300"
          />

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-20 bg-[#0f172a]">
        <div className="grid md:grid-cols-3 gap-10 text-center">

          <StatCard
            number="10K+"
            label="Orders Delivered"
            delay="0"
          />

          <StatCard
            number="500+"
            label="Partner Restaurants"
            delay="150"
          />

          <StatCard
            number="98%"
            label="Customer Satisfaction"
            delay="300"
          />

        </div>
      </section>

      {/* CTA */}
      <section
        data-aos="zoom-in"
        className="py-24 text-center bg-[#1e293b] px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Ready to Satisfy Your Cravings?
        </h2>

        <Link
          to="/order-now"
          className="inline-block px-10 py-4 rounded-2xl bg-cyan-600 hover:bg-cyan-500 transition font-semibold text-white"
        >
          Explore Restaurants
        </Link>
      </section>

    </div>
  );
};

/* Feature Card */
const FeatureCard = ({ icon, title, desc, delay }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    data-aos="flip-left"
    data-aos-delay={delay}
    className="bg-[#1e293b] border border-gray-700 p-8 rounded-3xl shadow-lg transition"
  >
    <div className="flex justify-center mb-4 text-orange-400">
      {icon}
    </div>

    <h3 className="font-semibold text-lg mb-3 text-white">
      {title}
    </h3>

    <p className="text-sm text-gray-400">
      {desc}
    </p>
  </motion.div>
);

/* Stat Card */
const StatCard = ({ number, label, delay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
    className="bg-orange-600/90 text-white p-10 rounded-3xl shadow-lg"
  >
    <h3 className="text-3xl font-bold mb-3">{number}</h3>
    <p className="text-gray-100">{label}</p>
  </div>
);

export default About;
