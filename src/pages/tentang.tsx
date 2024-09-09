import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function About(): JSX.Element {
  return (
    <Layout
      title="Informasi"
      description="Pelajari lebih lanjut tentang proyek kami dan fitur-fiturnya"
    >
      <div className={styles.aboutContainer}>
        <header className={styles.heroBanner}>
          <h1>Informasi Proyek</h1>
        </header>
        <main>
          <section className={styles.aboutSection}>
            <h2>Tujuan Proyek</h2>
            <p>
              Proyek ini bertujuan untuk menyediakan platform komprehensif bagi
              para calon peserta CPNS untuk mempersiapkan diri secara efektif.
              Kami menawarkan ringkasan materi, latihan soal, dan evaluasi untuk
              membantu Anda memahami dan menguasai setiap bagian dari tes CPNS.
            </p>
          </section>
       
        </main>
      </div>
    </Layout>
  );
}
