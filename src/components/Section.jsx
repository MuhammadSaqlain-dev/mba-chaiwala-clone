import React from "react";
import { motion, transform } from "framer-motion";

const Section = ({
  h3,
  text,
  btnText,
  hasBtn = true,
  imgSrc,
  backgroundColor,
  headingColor,
  textColor,
  btnColor,
  btnBackground,
  imgSize = "70%",
}) => {
  const headingOption = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
  const textOption = {
    ...headingOption,
    transition: {
      delay: 0.2
    }
  }
  const buttonOption ={
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn"
    }
  }
  const imageOption = {
    initial: {
      opacity: 0,
      scale: 0.1
    },
    whileInView: {
      opacity: 1,
      scale: 1
    },
    transition: {
      delay: 0.5
    },
  }
  return (
    <section
      className="section"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div>
        <motion.h3
          style={{
            color: headingColor,
          }}
          data-cursorpointer={true}
          {...headingOption}
        >
          {h3}
        </motion.h3>
        <motion.p
          style={{
            color: textColor,
          }}
          data-cursorpointer={true}
          {...textOption}
        >
          {text}
        </motion.p>
        {hasBtn && <motion.div {...buttonOption}>
        
          <button
            style={{
              color: btnColor,
              backgroundColor: btnBackground,
            }}
            data-cursorpointer={true}
            
          >
            {btnText}
          </button>
        
        </motion.div>}
        <motion.div {...imageOption}>
          <img
            src={imgSrc}
            alt="MBAChaiwala"
            style={{
              width: imgSize,
            }}
            data-cursorpointer={true}
            
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
