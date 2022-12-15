import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80"
        alt=""
        className="-mb-20 md:mb:0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-center">
          Here is a{" "}
          <span className="underline decoration-[#0474bc]/60">little</span>{" "}
          background
        </h4>
        <p className="text-base text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed
          asperiores delectus distinctio dignissimos voluptatum nostrum nam
          fugiat laudantium incidunt. Architecto vero ea ipsam quod expedita
          perferendis ipsum aliquam vel?
        </p>
      </div>
    </motion.div>
  );
}

export default About;
