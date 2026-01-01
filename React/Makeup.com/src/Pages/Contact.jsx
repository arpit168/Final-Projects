import React, { useState } from "react";
import { data } from "react-router-dom";
import kit from "../assets/Makeupkit.jpg";
import bg from "../assets/aboutmakeup.jpeg";
import arp from "../assets/signmakeup.jpeg";
import toast from "react-hot-toast";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });
  console.log(contactData);

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setContactData((previousData) => {
        let updateSkill = [...previousData.skill];

        if (checked) {
          updateSkill.push(value);
        } else {
          updateSkill = updateSkill.filter((skill) => skill !== value);
        }
        return {
          ...previousData,
          skill: updateSkill,
        };
      });
      return;

      setContactData((previousData) => ({
        ...previousData,
        [name]: value,
      }));
    }
    // if (type === "checkbox") {
    //   let temp = contactData.skill;
    //   if (checked) {
    //     console.log(temp);

    //     temp = Object.values(temp);
    //     temp.push(value);
    //     setContactData((previousData) => ({ ...previousData, [name]: temp }));
    //   } else {
    //     temp = Object.values(temp); //convert to Array
    //     temp = temp.filter((word) => word !== value); //Remove the undesired value
    //     setContactData((perviousData) => ({ ...perviousData, [name]: temp }));
    //   }
    // }
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = {};
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    console.log(contactData);
    toast.success("Congrats");
    
    handleClearForm();
  };

  return (
    <>
      <div className="bg-gray-700">
        <img src={bg} alt="" className="absolute opacity-55" />
        <h1
          className="text-center text-4xl pt-5 text-gray-200 font-bold animate-bounce"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <span className="border-b-2 border-gray-400">
            Contact <span className="text-red-700">Us</span>
          </span>
        </h1>
        <section className="min-h-screen flex items-center justify-center px-5 shadow-2xl opacity-98">
          <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">
            <div
              className="bg-gray-600 text-white p-8"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className="text-3xl font-bold mb-4 animate-bounce border-b-2 border-gray-500">
                Get in Touch
              </h2>
              <p className="mb-6 text-indigo-100">
                Have questions or need help? Fill out the form and our team will
                get back to you shortly.
              </p>

              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  📍 <span>Bhopal, India</span>
                </p>
                <p className="flex items-center gap-3">
                  📧 <span>Makeup@example.com</span>
                </p>
                <p className="flex items-center gap-3 border-b-2 pb-2">
                  📞 +91 9516010142
                </p>
                <img
                  src={kit}
                  alt=""
                  className="rounded-2xl  h-75 animate-pulse hover:animate-none"
                  data-aos="fade-left"
                />
                <img
                  src={arp}
                  alt=""
                  className="rounded-2xl object-cover w-125 h-100 animate-pulse hover:animate-none"
                />
              </div>
            </div>

            <div
              className="p-8 bg-gray-300"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="3 00"
              data-aos-duration="500"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 animate-pulse">
                Contact Form
              </h3>

              <form
                className="space-y-5"
                onReset={handleClearForm}
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-gray-600 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={contactData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-600 mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={contactData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-600 mb-1">
                    Phone
                  </label>
                  <input
                    required
                    type="phone"
                    name="phone"
                    id="phone"
                    value={contactData.phone}
                    onChange={handleChange}
                    placeholder="Enter your Contact number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="religion"
                    className="block text-gray-600 mb-1"
                  >
                    Religion
                  </label>
                  <select
                    name="religion"
                    id="religion"
                    onChange={handleChange}
                    value={contactData.religion}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">--Select Religion--</option>
                    <option value="islam">Islam</option>
                    <option value="hinduism">Hinduism</option>
                    <option value="christianity">Christianity</option>
                    <option value="buddhism">Buddhism</option>
                    <option value="jainism">Jainism</option>
                    <option value="sikhism">Sikhism</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="gender" className="block text-gray-600 mb-1">
                    Gender
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={contactData.gender === "male"}
                    className="p-5 mt-2 "
                  />{" "}
                  <span className="border px-3 py-1 cursor-pointer me-3 rounded">
                    {" "}
                    Male
                  </span>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={contactData.gender === "female"}
                  />{" "}
                  <span className="border px-3 py-1 cursor-pointer me-3 rounded">
                    Female
                  </span>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleChange}
                    checked={contactData.gender === "other"}
                  />{" "}
                  <span className="border px-3 py-1 cursor-pointer me-3 rounded">
                    {" "}
                    Other
                  </span>
                </div>
                <div>
                  <label htmlFor="skill" className="block text-gray-600 mb-1">
                    Skill known
                  </label>
                  <input
                    type="checkbox"
                    name="skill"
                    value="html"
                    onChange={handleChange}
                    checked={contactData.skill.includes("html")}
                  />{" "}
                  <span className="border  px-3 py-1">HTML</span>
                  <input
                    type="checkbox"
                    name="skill"
                    value="css"
                    onChange={handleChange}
                    checked={contactData.skill.includes("css")}
                  />{" "}
                  <span className="border  px-3 py-1">CSS</span>
                  <input
                    type="checkbox"
                    name="skill"
                    value="js"
                    onChange={handleChange}
                    checked={contactData.skill.includes("js")}
                  />{" "}
                  <span className="border  px-3 py-1">JS</span>
                  <input
                    type="checkbox"
                    name="skill"
                    value="react"
                    onChange={handleChange}
                    checked={contactData.skill.includes("react")}
                  />{" "}
                  <span className="border  px-3 py-1">React</span>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-600 mb-1">
                    Subject
                  </label>
                  <input
                    required
                    type="subject"
                    name="subject"
                    id="subject"
                    value={contactData.subject}
                    onChange={handleChange}
                    placeholder="Enter your subject"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-gray-600 mb-1">
                    City
                  </label>
                  <input
                    required
                    type="city"
                    name="city"
                    id="city"
                    value={contactData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-600 mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    id="message"
                    value={contactData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <button
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  type="submit"
                  className="w-75 bg-indigo-950 hover:bg-indigo-800 text-white py-2 rounded-lg font-semibold transition "
                >
                  {isLoading ? "Loading" : "Submit"}
                </button>
                <button
                  type="reset"
                  className="w-25 bg-red-800 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition "
                >
                  Clear
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
