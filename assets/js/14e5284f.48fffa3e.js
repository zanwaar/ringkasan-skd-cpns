"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[950],{4859:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>x,contentTitle:()=>h,default:()=>b,frontMatter:()=>g,metadata:()=>m,toc:()=>f});var i=e(4848),t=e(8453),s=e(6540),r=e(3540);const d=r.Ay.div`
  display: flex;
  align-items: center; /* Vertikal center */
  gap: 10px; /* Jarak antara gambar dan teks */
`,l=r.Ay.img`
  max-width: 10%;
  height: auto;
`,u=r.Ay.h2`
  color: #2e8555;
  margin: 0; /* Menghilangkan margin default dari h2 */
`,c=r.Ay.input`
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
`,o=r.Ay.button`
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
`,()=>{const[n,a]=(0,s.useState)(""),[e,t]=(0,s.useState)(""),[r,k]=(0,s.useState)(""),[g,h]=(0,s.useState)(!0),[m,x]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const n=localStorage.getItem("id_funpice");n&&(h(!1),t(`ID FUNPICE : ${n}`))}),[]);return(0,i.jsxs)("div",{children:[g&&(0,i.jsxs)(p,{children:[(0,i.jsx)(c,{type:"text",value:n,onChange:n=>{a(n.target.value)},placeholder:"Masukkan nama"}),(0,i.jsx)(o,{onClick:async()=>{if(g){x(!0),k("");try{const a=await fetch("https://funpice.fun/api/idfunpice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nama:n})});if(!a.ok){const n=await a.json();return t(""),void k(n.message||"Error")}const e=await a.json();e.id_funpice&&(localStorage.setItem("id_funpice",e.id_funpice),h(!1),t(`ID FUNPICE: ${e.id_funpice}`)),k("")}catch(a){t(""),k("Network Error")}finally{x(!1)}}else k("POST tidak diizinkan. ID sudah ada di localStorage.")},disabled:m,children:m?"Proses...":"Generate ID"})]}),e&&(0,i.jsxs)(d,{children:[(0,i.jsx)(l,{src:"/ringkasan-skd-cpns/img/fun.png",alt:"Descriptive Alt Text"}),(0,i.jsx)(u,{children:e})]}),r&&(0,i.jsxs)("p",{children:["Error: ",r]})]})}),g={id:"id-funpice",title:"Funpice ID Generator",sidebar_label:"\ud83e\udd16 Funpice ID Generator"},h="Funpice ID Generator",m={id:"id-funpice",title:"Funpice ID Generator",description:"Selamat datang di halaman Funpice ID Generator! Di sini, Anda dapat mendapatkan ID Funpice unik yang diperlukan untuk mengakses berbagai fitur dan layanan eksklusif di situs Funpice.",source:"@site/docs/id_funpice.md",sourceDirName:".",slug:"/id-funpice",permalink:"/ringkasan-skd-cpns/docs/id-funpice",draft:!1,unlisted:!1,editUrl:"https://github.com/zanwaar/ringkasan-cpns-skd/tree/main/docs/id_funpice.md",tags:[],version:"current",frontMatter:{id:"id-funpice",title:"Funpice ID Generator",sidebar_label:"\ud83e\udd16 Funpice ID Generator"},sidebar:"panduan",previous:{title:"\ud83d\udc96 Dukungan dan Sponsor",permalink:"/ringkasan-skd-cpns/docs/dukungan-sponsor"}},x={},f=[{value:"Cara Mendapatkan ID Funpice",id:"cara-mendapatkan-id-funpice",level:2},{value:"Catatan Penting",id:"catatan-penting",level:2},{value:"Dapatkan ID Anda Sekarang!",id:"dapatkan-id-anda-sekarang",level:2}];function j(n){const a={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"funpice-id-generator",children:"Funpice ID Generator"})}),"\n",(0,i.jsxs)(a.p,{children:["Selamat datang di halaman ",(0,i.jsx)(a.strong,{children:"Funpice ID Generator"}),"! Di sini, Anda dapat mendapatkan ",(0,i.jsx)(a.strong,{children:"ID Funpice"})," unik yang diperlukan untuk mengakses berbagai fitur dan layanan eksklusif di situs ",(0,i.jsx)(a.strong,{children:"Funpice"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"cara-mendapatkan-id-funpice",children:"Cara Mendapatkan ID Funpice"}),"\n",(0,i.jsx)(a.p,{children:"Ikuti langkah-langkah berikut untuk mendapatkan ID Funpice:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Masukkan Nama Anda"}),": Di halaman utama situs Funpice, ada kolom input di mana Anda dapat memasukkan nama atau informasi yang relevan. Isi kolom ini sesuai dengan instruksi yang diberikan."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:'Klik "Generate ID"'}),": Setelah memasukkan nama, klik tombol ",(0,i.jsx)(a.strong,{children:'"Generate ID"'}),". Sistem di situs Funpice akan memproses permintaan Anda dan menghasilkan ID unik untuk Anda."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Dapatkan dan Simpan ID"}),": ID Funpice yang dihasilkan akan ditampilkan di situs web. Pastikan untuk menyimpan ID ini dengan aman karena ID ini digunakan untuk mengakses berbagai fitur dan layanan di situs Funpice."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Gunakan ID"}),": Gunakan ID Funpice yang Anda terima untuk login atau mengakses fitur di ",(0,i.jsx)(a.a,{href:"https://funpice.fun/",children:"Funpice"}),". Masukan ID Funpice dan password dengan ID unik yang Anda dapatkan."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"catatan-penting",children:"Catatan Penting"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"ID Unik"}),": Setiap pengguna hanya dapat memiliki satu ID Funpice."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Masalah Teknis"}),": Jika Anda mengalami masalah saat mendapatkan ID atau mengakses fitur, pastikan koneksi internet Anda stabil. Untuk bantuan lebih lanjut, hubungi tim dukungan kami."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"dapatkan-id-anda-sekarang",children:"Dapatkan ID Anda Sekarang!"}),"\n",(0,i.jsxs)("div",{style:{display:"flex",alignItems:"start",justifyContent:"space-between"},children:[(0,i.jsx)("img",{src:"/ringkasan-skd-cpns/img/fun.jpg",alt:"Fun Image",style:{maxWidth:"30%",height:"auto"}}),(0,i.jsx)("div",{style:{flex:1},children:(0,i.jsx)(k,{})})]})]})}function b(n={}){const{wrapper:a}={...(0,t.R)(),...n.components};return a?(0,i.jsx)(a,{...n,children:(0,i.jsx)(j,{...n})}):j(n)}}}]);