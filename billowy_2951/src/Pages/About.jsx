import React from "react";
import styles from "../Styles/About.module.css";

const about = () => {
  return (
      <div>
        <div className={styles.container}>
          <h2 className={styles.story}>
            Our Story
          </h2>
          <p className={styles.para}>
            Fitness Blender was created by a husband and wife team of personal
            trainers who felt that there was a lack of reliable health and
            fitness information on the web. They were frustrated that too many
            people in the fitness industry were more focused on monetary gain or
            outward appearance than on good, achievable, long-term health. Now,
            more than 10 years later, Kelli and Daniel Segars, are still focused
            on their original goals and approach for the company:
          </p>
          <ul className={styles.list}>
            <li>
              Make health and fitness attainable, affordable, and
              approachable—for as many people as possible.
            </li>
            <li>
              Endorse eating unprocessed, whole foods, and working out for a
              strong, healthy body.
            </li>
            <li>
              Encourage a personal, mindful approach to eating and exercise.
            </li>
            <li>
              Promote the fact that overall wellness looks different for each
              individual.
            </li>
          </ul>
        </div>
      </div>
  );
};

export default about;
