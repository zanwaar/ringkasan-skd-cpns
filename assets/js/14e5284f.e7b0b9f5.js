"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[950],{9676:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>y,contentTitle:()=>j,default:()=>w,frontMatter:()=>f,metadata:()=>b,toc:()=>D});var i=e(4848),t=e(8453),s=e(6540),r=e(3540);const d=r.Ay.div`
  display: flex;
  align-items: center; /* Vertikal center */
  gap: 10px; /* Jarak antara gambar dan teks */
`,l=r.Ay.img`
  max-width: 10%;
  height: auto;
`,c=r.Ay.h2`
  color: #2e8555;
  margin: 0; /* Menghilangkan margin default dari h2 */
`,o=r.Ay.input`
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #2e8555;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0056b3;
  }
`,u=r.Ay.button`
  padding: 10px 20px;
  background-color: #2e8555;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #a9a9a9;
    cursor: not-allowed;
  }
`,p=r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,k=(r.Ay.p`
  color: #0056b3;
  font-size: 16px;
  font-weight: bold;
`,()=>{const[a,n]=(0,s.useState)(""),[e,t]=(0,s.useState)(""),[r,k]=(0,s.useState)(""),[g,m]=(0,s.useState)(!0),[h,x]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const a=localStorage.getItem("id_funpice");a&&(m(!1),t(`ID FUNPICE : ${a}`))}),[]);return(0,i.jsxs)("div",{children:[g&&(0,i.jsxs)(p,{children:[(0,i.jsx)(o,{type:"text",value:a,onChange:a=>{n(a.target.value)},placeholder:"Masukkan nama"}),(0,i.jsx)(u,{onClick:async()=>{if(g){x(!0),k("");try{const n=await fetch("https://funpice.fun/api/idfunpice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nama:a})});if(!n.ok){const a=await n.json();return t(""),void k(a.message||"Error")}const e=await n.json();e.id_funpice&&(localStorage.setItem("id_funpice",e.id_funpice),m(!1),t(`ID FUNPICE: ${e.id_funpice}`)),k("")}catch(n){t(""),k("Network Error")}finally{x(!1)}}else k("POST tidak diizinkan. ID sudah ada di localStorage.")},disabled:h,children:h?"Proses...":"FunpiceID"})]}),e&&(0,i.jsxs)(d,{children:[(0,i.jsx)(l,{src:"/ringkasan-skd-cpns/img/fun.png",alt:"Descriptive Alt Text"}),(0,i.jsx)(c,{children:e})]}),r&&(0,i.jsxs)("p",{children:["Error: ",r]})]})}),g=r.Ay.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap; /* Menambahkan wrapping jika konten terlalu lebar */

  @media (max-width: 768px) {
    flex-direction: column; /* Mengatur layout menjadi kolom pada layar kecil */
    align-items: center; /* Menyelaraskan item di tengah pada layar kecil */
    justify-content: center; /* Menyelaraskan item di tengah secara vertikal */
  }
`,m=r.Ay.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 50%; /* Lebar gambar lebih besar pada layar kecil */
  }
`,h=r.Ay.div`
  flex: 1;
  margin-top: 20px; /* Margin atas untuk jarak antara gambar dan konten */

  @media (max-width: 768px) {
    text-align: center; /* Menyelaraskan teks di tengah pada layar kecil */
  }
`,x=()=>(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["Selamat datang di halaman ",(0,i.jsx)("strong",{children:"Funpice ID Generator"}),"! Di sini, Anda dapat mendapatkan ",(0,i.jsx)("strong",{children:"ID Funpice"})," unik yang diperlukan untuk mengakses berbagai fitur dan layanan eksklusif di situs ",(0,i.jsx)("strong",{children:"Funpice"}),"."]}),(0,i.jsx)("h2",{children:"Cara Mendapatkan ID Funpice"}),(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Masukkan Nama Anda"}),": Memasukkan nama atau informasi yang relevan."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:'Klik "FunpiceID"'}),": Setelah memasukkan nama, klik tombol ",(0,i.jsx)("strong",{children:'"FunpiceID"'}),". Sistem di situs Funpice akan memproses permintaan Anda dan menghasilkan ID unik untuk Anda."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Dapatkan dan Simpan ID"}),": ID Funpice yang dihasilkan akan ditampilkan di situs web. Pastikan untuk menyimpan ID ini dengan aman karena ID ini digunakan untuk mengakses berbagai fitur dan layanan di situs Funpice."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Ujian Online"}),": Gunakan ID Funpice yang Anda terima untuk login atau mengakses fitur di ",(0,i.jsx)("a",{href:"https://funpice.fun/",children:"Ujian Online"}),". Masukan ID Funpice dan password dengan ID unik yang Anda dapatkan."]})]}),(0,i.jsx)("h2",{children:"Catatan Penting"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"ID Unik"}),": Setiap pengguna hanya dapat memiliki satu ID Funpice."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Masalah Teknis"}),": Jika Anda mengalami masalah saat mendapatkan ID atau mengakses fitur, pastikan koneksi internet Anda stabil. Untuk bantuan lebih lanjut, hubungi tim dukungan kami."]})]}),(0,i.jsx)("h2",{children:"Dapatkan ID Anda Sekarang!"}),(0,i.jsxs)(g,{children:[(0,i.jsx)(m,{src:"/ringkasan-skd-cpns/img/funpice-id.png",alt:"Fun Image"}),(0,i.jsx)(h,{children:(0,i.jsx)(k,{})})]})]}),f={id:"id-funpice",title:"\ud83e\udd16 Funpice ID Generator",sidebar_label:"\ud83e\udd16 Funpice ID Generator"},j=void 0,b={id:"id-funpice",title:"\ud83e\udd16 Funpice ID Generator",description:"",source:"@site/docs/id_funpice.md",sourceDirName:".",slug:"/id-funpice",permalink:"/ringkasan-skd-cpns/docs/id-funpice",draft:!1,unlisted:!1,editUrl:"https://github.com/zanwaar/ringkasan-cpns-skd/tree/main/docs/id_funpice.md",tags:[],version:"current",frontMatter:{id:"id-funpice",title:"\ud83e\udd16 Funpice ID Generator",sidebar_label:"\ud83e\udd16 Funpice ID Generator"},sidebar:"panduan",previous:{title:"\ud83d\udc96 Dukungan dan Sponsor",permalink:"/ringkasan-skd-cpns/docs/dukungan-sponsor"}},y={},D=[];function I(a){return(0,i.jsx)(x,{})}function w(a={}){const{wrapper:n}={...(0,t.R)(),...a.components};return n?(0,i.jsx)(n,{...a,children:(0,i.jsx)(I,{...a})}):I()}}}]);