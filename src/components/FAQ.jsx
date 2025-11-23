import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/useAppContext";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation();
  const { theme } = useAppContext();

  const faqs = [
    { question: t("question1"), answer: t("answer1") },
    { question: t("question2"), answer: t("answer2") },
    { question: t("question3"), answer: t("answer3") },
    { question: t("question4"), answer: t("answer4") },
    { question: t("question5"), answer: t("answer5") },
    { question: t("question6"), answer: t("answer6") },
    { question: t("question7"), answer: t("answer7") },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingShape = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative py-16 px-8 max-w-3xl mx-auto overflow-hidden">
      <Motion.div
        variants={floatingShape}
        animate="animate"
        className="absolute top-0 -left-10 w-32 h-32 md:w-38 md:h-38 bg-[#84F668] rounded-full z-0 opacity-80"
      />
      <Motion.div
        animate={{ y: [0, 15, 0], rotate: [45, 55, 45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -left-6 w-16 h-16 bg-[#9F55FF] z-0 opacity-80"
        // style={{ backgroundColor: "var(--secondary)" }}
      />
      <Motion.div
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -right-6 w-10 h-10 bg-[#9F55FF] rotate-12 z-0 opacity-60"
      />
      <Motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [28, 10, 28] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-10 w-15 h-15 bg-[#281344] z-0 opacity-40"
      />

      <div className="relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold font-900 mb-4 dark:text-white transition-colors duration-300"
            style={{
              fontFamily: "var(--font-primary)",
              color: "var(--text-main)",
            }}
          >
            {t("faq_title")}
          </h2>
        </Motion.div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              style={{
                background: theme === "dark" ? "#111217" : "#fff",
                border: theme === "dark" ? "1px solid #fff" : "1px solid #000",
              }}
              className={`rounded-lg overflow-hidden hover:border-gray-200 transition-all duration-300 
    ${openIndex === index ? "shadow-md" : ""}
    text-black dark:text-white
  `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className="text-lg font-900 transition-colors duration-300 dark:text-white"
                  style={{
                    fontFamily: "var(--font-secondary)",
                    color: "var(--text-main)",
                  }}
                >
                  {faq.question}
                </span>

                <span className="shrink-0 ml-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300
    ${
      theme === "dark"
        ? "border border-white/20 bg-white/10"
        : "border border-gray-800 bg-white"
    }`}
                  >
                    <Motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={theme === "dark" ? "white" : "black"}
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </Motion.svg>
                  </div>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="p-6 pt-0 font-600 leading-relaxed border-t border-gray-200/50 dark:border-white/10 mt-2 dark:text-white transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-secondary)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default FAQ;
