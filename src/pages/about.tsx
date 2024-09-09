import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Us"
      description="Learn more about our project and team"
    >
      <div className={styles.aboutContainer}>
        <header className={styles.heroBanner}>
          <h1>Latihan Soal</h1>
        </header>
        <main>
          <section className={styles.aboutSection}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide the best tools and resources for
              developers to create amazing projects. We believe in open source
              and community-driven development.
            </p>
          </section>
          <section className={styles.aboutSection}>
            <h2>Our Team</h2>
            <p>
              We are a group of passionate developers, designers, and project
              managers committed to building tools that make a difference.
            </p>
          </section>
          <section className={styles.aboutSection}>
            <h2>Get Involved</h2>
            <p>
              Interested in contributing? Check out our GitHub repository or
              join our community forum to start collaborating.
            </p>
          </section>
        </main>
      </div>
    </Layout>
  );
}
