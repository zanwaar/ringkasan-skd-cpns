"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[950],{9676:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>y,contentTitle:()=>j,default:()=>w,frontMatter:()=>f,metadata:()=>b,toc:()=>D});var i=e(4848),t=e(8453),r=e(6540),s=e(3540);const d=s.Ay.div`
  display: flex;
  align-items: center; /* Vertikal center */
  gap: 10px; /* Jarak antara gambar dan teks */
`,l=s.Ay.img`
  max-width: 15%;
  height: auto;
`,o=s.Ay.h2`
  color: #2e8555;
  margin: 0; /* Menghilangkan margin default dari h2 */
`,c=s.Ay.input`
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
`,u=s.Ay.button`
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
`,p=s.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`,k=(s.Ay.p`
  color: #0056b3;
  font-size: 16px;
  font-weight: bold;
`,()=>{const[a,n]=(0,r.useState)(""),[e,t]=(0,r.useState)(""),[s,k]=(0,r.useState)(""),[g,h]=(0,r.useState)(!0),[m,x]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const a=localStorage.getItem("id_funpice");a&&(h(!1),t(`ID FUNPICE : ${a}`))}),[]);return(0,i.jsxs)("div",{children:[g&&(0,i.jsxs)(p,{children:[(0,i.jsx)(c,{type:"text",value:a,onChange:a=>{n(a.target.value)},placeholder:"Masukkan nama"}),(0,i.jsx)(u,{onClick:async()=>{if(g){x(!0),k("");try{const n=await fetch("https://funpice.fun/api/idfunpice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nama:a})});if(!n.ok){const a=await n.json();return t(""),void k(a.message||"Error")}const e=await n.json();e.id_funpice&&(localStorage.setItem("id_funpice",e.id_funpice),h(!1),t(`ID FUNPICE: ${e.id_funpice}`)),k("")}catch(n){t(""),k("Network Error")}finally{x(!1)}}else k("POST tidak diizinkan. ID sudah ada di localStorage.")},disabled:m,children:m?"Proses...":"FunpiceID"})]}),e&&(0,i.jsxs)(d,{children:[(0,i.jsx)(l,{src:"/ringkasan-skd-cpns/img/fun.png",alt:"Descriptive Alt Text"}),(0,i.jsx)(o,{children:e})]}),s&&(0,i.jsxs)("p",{children:["Error: ",s]})]})}),g=s.Ay.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap; /* Menambahkan wrapping jika konten terlalu lebar */

  @media (max-width: 768px) {
    flex-direction: column; /* Mengatur layout menjadi kolom pada layar kecil */
    align-items: center; /* Menyelaraskan item di tengah pada layar kecil */
    justify-content: center; /* Menyelaraskan item di tengah secara vertikal */
  }
`,h=s.Ay.img`
  max-width: 55%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 50%; /* Menyesuaikan lebar gambar pada layar kecil */
  }
`,m=s.Ay.div`
  flex: 1;
  margin-top: 20px; /* Margin atas untuk jarak antara gambar dan konten */

  @media (max-width: 768px) {
    text-align: center; /* Menyelaraskan teks di tengah pada layar kecil */
  }
`,x=()=>(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["Selamat datang di halaman ",(0,i.jsx)("strong",{children:"Funpice ID Generator"}),"! Di sini, Anda dapat memperoleh ",(0,i.jsx)("strong",{children:"ID Funpice"})," unik yang diperlukan untuk mengakses berbagai fitur dan layanan eksklusif di situs"," ",(0,i.jsx)("strong",{children:"Funpice"}),"."]}),(0,i.jsx)("h2",{children:"Cara Mendapatkan ID Funpice"}),(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Masukkan Nama Anda"}),": Masukkan nama atau informasi relevan pada kolom yang tersedia."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:'Klik "Generate ID"'}),": Setelah memasukkan nama, klik tombol ",(0,i.jsx)("strong",{children:'"Generate ID"'}),". Sistem akan memproses permintaan Anda dan menghasilkan ID unik."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Dapatkan dan Simpan ID"}),": ID Funpice yang dihasilkan akan ditampilkan. Pastikan untuk menyimpan ID ini dengan aman karena digunakan untuk mengakses berbagai fitur dan layanan di situs Funpice."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Gunakan ID"}),": Gunakan ID Funpice yang Anda terima untuk login atau mengakses fitur di"," ",(0,i.jsx)("a",{href:"https://funpice.fun/",target:"_blank",rel:"noopener noreferrer",children:"situs Funpice"}),". Masukkan ID dan password yang sesuai."]})]}),(0,i.jsx)("h2",{children:"Catatan Penting"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"ID Unik"}),": Setiap pengguna hanya dapat memiliki satu ID Funpice."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Masalah Teknis"}),": Jika mengalami masalah saat mendapatkan ID atau mengakses fitur, pastikan koneksi internet Anda stabil. Untuk bantuan lebih lanjut, hubungi tim dukungan kami melalui",(0,i.jsxs)("a",{href:"/ringkasan-skd-cpns/docs/dukungan-sponsor",children:[" ","kontak Dan Dukungan"]}),"."]})]}),(0,i.jsx)("a",{href:"/ringkasan-skd-cpns/docs/ujian-online",rel:"noopener noreferrer",children:"Cara Akses Ujian Online"}),(0,i.jsx)("h2",{children:"Dapatkan ID Anda Sekarang!"}),(0,i.jsxs)(g,{children:[(0,i.jsx)(h,{src:"/ringkasan-skd-cpns/img/funpice-id.png",alt:"Gambar Funpice ID"}),(0,i.jsx)(m,{children:(0,i.jsx)(k,{})})]})]}),f={id:"id-funpice",title:"\ud83e\udd16 Funpice ID Generator",sidebar_label:"\ud83e\udd16 Funpice ID Generator"},j=void 0,b={id:"id-funpice",title:"\ud83e\udd16 Funpice ID Generator",description:"",source:"@site/docs/id_funpice.md",sourceDirName:".",slug:"/id-funpice",permalink:"/ringkasan-skd-cpns/docs/id-funpice",draft:!1,unlisted:!1,editUrl:"https://github.com/zanwaar/ringkasan-cpns-skd/tree/main/docs/id_funpice.md",tags:[],version:"current",frontMatter:{id:"id-funpice",title:"\ud83e\udd16 Funpice ID Generator",sidebar_label:"\ud83e\udd16 Funpice ID Generator"},sidebar:"panduan",previous:{title:"\ud83d\udc96  Kontak Dan Dukungan",permalink:"/ringkasan-skd-cpns/docs/dukungan-sponsor"},next:{title:"\ud83c\udf96\ufe0f Rangking List",permalink:"/ringkasan-skd-cpns/docs/rangking-list"}},y={},D=[];function I(a){return(0,i.jsx)(x,{})}function w(a={}){const{wrapper:n}={...(0,t.R)(),...a.components};return n?(0,i.jsx)(n,{...a,children:(0,i.jsx)(I,{...a})}):I()}}}]);