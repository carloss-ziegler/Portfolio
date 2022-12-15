import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[350px] md:w-[400px] xl:w-[650px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front-End Developer (Student)</h4>
        <p className="font-bold text-2xl mt-1">
          Universidade Católica de Brasília
        </p>
        <div className="flex space-x-2 mt-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.gstatic.com/devrel-devsite/prod/vdbc400b97a86c8815ab6ee057e8dc91626aee8cf89b10f7d89037e5a33539f53/firebase/images/touchicon-180.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://blog.fellyph.com.br/wp-content/uploads/2016/06/react-js.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU"
            alt=""
          />
        </div>

        <ul className="list-disc mt-2 space-y-3 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
