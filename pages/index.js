import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";
import MasonryGrid from "../components/ui/MasonryGrid";
import Input from "../components/ui/Input";
import Checkbox from "../components/ui/Checkbox";
import Button from "../components/ui/Button";
import { BsArrowRight, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";

export default function Home() {
  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <div className="sm:flex items-center justify-between py-8  px-28">
        <Hero />
        <MasonryGrid/>
      </div>
      {/* <LogoGrid /> */}
      <GradientWrapper>
        <Features />
        </GradientWrapper>
        <GradientWrapper>
        <CTA />
        </GradientWrapper>        


      {/* <ToolKit /> */}
      {/* <GradientWrapper>
        <Testimonials />
      </GradientWrapper> */}
      {/* <FooterCTA /> */}

      <div className='pt-28 pb-12 px-28 '>
        <div className=' text-gray-600'>
          <div className=' mx-auto gap-x-48 justify-center flex '>
            <div className=' sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl text-center mb-8 font-semibold sm:text-4xl'>
                Skontaktuj się
              </h1>
              <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center bg-slate-500/20 xl:px-20 py-4 "
      >
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="p-4"
        >
          <BsFillTelephoneFill className="mx-auto mb-4" size={40} />
          <a href="tel:+4879078993">+48 790 782 993</a>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="p-4"
        >
          <AiOutlineMail className="mx-auto mb-4" size={40} />
          <a href="mailto:biuro@fp-solutions.pl">biuro@fp-solutions.pl</a>
        </motion.div>
      </motion.div>
            </div>

            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="Imię i nazwisko"
                  className="input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email  "
                  className="input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Temat"
                className="input"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                placeholder="Wiadomość"
                className="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full border  max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Wyślij
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </div>

            {/* <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              <form
                onSubmit={(e) => e.preventDefault()}
                className='space-y-5 font-medium'>
                <div>
                  <label>Full name</label>
                  <Input
                    aria-label='Full name'
                    type='text'
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    aria-label='Email'
                    type='email'
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    aria-label='Message'
                    required
                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'></textarea>
                </div>
                <div>
                  <label>Service</label>
                  <ul className='mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16'>
                    {servicesItems.map((item, idx) => (
                      <li key={idx} className='flex gap-x-2 items-center'>
                        <Checkbox id={`service-${idx}`} />
                        <label htmlFor={`service-${idx}`} className='text-sm'>
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='pt-1'>
                  <Button className='w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring'>
                    Submit
                  </Button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>

    </>
  );
}
