import Layout from "@theme/Layout";
import React from "react";
import HomeTIU from "../components/ai-funpice/HomeTIU";


export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Funpice AI Generator`}
      description="Informasi dan latihan untuk tes CPNS."
    >
      <div className="max-6xl px-5  md:mx-auto mt-10">
        <h1 className="text-3xl font-extrabold md:text-5xl text-green-600 text-left md:text-center">
          <strong className="font-extrabold sm:block">
            {" "}
            🤖<span className="">Funpice</span> AI Generator{" "}
          </strong>
        </h1>
        <p className="text-gray-500 text-lg  md:text-2xl font-semibold text-left md:text-center">
          Latihan Soal Tes CPNS 2024 Dengan{" "}
          <span className="font-extrabold text-green-600">AI </span>
        </p>
        <p className="text-gray-500 text-sm max-w-xl text-left md:text-center">
          Materi soal latihan disusun sesuai dengan Keputusan Menteri
          Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 321 Tahun
          2024, dan didukung oleh AI untuk membantu kamu mempersiapkan ujian
          dengan lebih efektif.{" "}
          <a href="https://www.bkn.go.id/regulasi/keputusan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-republik-indonesia-nomor-321-tahun-2024/">
            link website
          </a>
        </p>
      </div>
      <HomeTIU></HomeTIU>
    </Layout>
  );
}
