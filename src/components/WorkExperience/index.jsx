import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { experience } from "../../data";
import "./style.scss";

const WorkExperience = () => {
  const [openId, setOpenId] = useState(experience[0].id);

  return (
    <section className="section experience" id="experience">
      <div className="container experience-grid">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Where I've worked</h2>
          <p>Six years across product companies, agencies and freelance.</p>
        </div>

        <ul className="xp-list">
          {experience.map((item) => {
            const open = openId === item.id;
            return (
              <li key={item.id} className={`xp-item ${open ? "open" : ""}`}>
                <button
                  className="xp-head"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span className="xp-title">
                    <span className="role">{item.role}</span>
                    <span className="company">
                      {item.company} · {item.location}
                    </span>
                  </span>
                  <span className="xp-meta">
                    <span className="period">{item.period}</span>
                    {open ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="xp-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span className="period-mobile">{item.period}</span>
                      <ul>
                        {item.desc.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                      <div className="tags">
                        {item.tech.map((t) => (
                          <span className="tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
