/* Builds the page from js/config.js. You shouldn't need to edit this file. */
(()=>{
const S=SITE,$=s=>document.querySelector(s);
const T={about:"About me",timeline:"Project timeline",projects:"Projects",skills:"Skills and tools",awards:"Awards and activities",contact:"Contact"};
document.documentElement.dataset.theme=S.theme;
document.title=`${S.name} | Engineering portfolio`;
const fmt=d=>{const[y,m]=d.split("-");return m?new Date(y,m-1).toLocaleString("en",{month:"short",year:"numeric"}):y};
const sec=(id,h)=>`<div class="wrap"><h2>${T[id]}</h2>${h}</div>`;
const P=[...S.projects].sort((a,b)=>a.date.localeCompare(b.date));

const media=m=>{
  const el=m.youtube?`<iframe loading="lazy" src="https://www.youtube.com/embed/${m.youtube}" title="${m.caption||"Video"}" allowfullscreen></iframe>`
   :!m.src?`<div class="ph">Add an image or video here</div>`
   :m.type==="video"?`<video controls preload="metadata" src="${m.src}"></video>`
   :`<img loading="lazy" src="${m.src}" alt="${m.caption||""}">`;
  return `<figure>${el}${m.caption?`<figcaption>${m.caption}</figcaption>`:""}</figure>`;
};
const tags=p=>`<div class="tags">${p.status?`<span class="tag ok">${p.status}</span>`:""}${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("")}</div>`;

const R={
 hero:()=>`<div class="wrap"><div>
  <p class="chip"><i></i>${S.currently}</p><h1>${S.name}</h1>
  <div class="dim">${S.heroDimension}</div>
  <p class="lead">${S.tagline}</p>
  <div class="cta"><a class="btn" href="#projects">See my projects</a><a class="btn ghost" href="#contact">Get in touch</a></div></div>
  <div class="tb">${S.titleBlock.map(([k,v])=>`<div><b>${k}</b><span>${v}</span></div>`).join("")}</div></div>`,
 about:()=>sec("about",`<div class="about"><div>${S.about.text.map(t=>`<p>${t}</p>`).join("")}</div>
  <aside>${S.about.photo?`<img class="me" src="${S.about.photo}" alt="${S.name}">`:""}<h3>Fun facts</h3><ul>${S.about.funFacts.map(f=>`<li>${f}</li>`).join("")}</ul></aside></div>`),
 timeline:()=>sec("timeline",`<ol class="tl">${P.map(p=>`<li><button data-open="${p.id}"><span class="when">${fmt(p.date)}</span><h3>${p.title}</h3><span class="muted">${p.summary}</span></button></li>`).join("")}</ol>`),
 projects:()=>sec("projects",`<div class="grid">${[...P].reverse().map(p=>`<button class="card" data-open="${p.id}">
  <div class="cover" ${p.cover?`style="background-image:url('${p.cover}')"`:""}></div>
  <div class="body"><h3>${p.title}</h3><p>${p.summary}</p>${tags(p)}</div></button>`).join("")}</div>`),
 skills:()=>sec("skills",`<div class="skills">${S.skills.map(g=>`<div><h3>${g.group}</h3><div class="tags">${g.items.map(i=>`<span class="tag">${i}</span>`).join("")}</div></div>`).join("")}</div>`),
 awards:()=>sec("awards",`<ul class="awards">${S.awards.map(a=>`<li><b>${a.year}</b><div><h3>${a.title}</h3><span class="muted">${a.note||""}</span></div></li>`).join("")}</ul>`),
 contact:()=>sec("contact",`<a class="mail" href="mailto:${S.contact.email}">${S.contact.email}</a>
  <div class="links">${S.contact.links.map(l=>`<a href="${l.url}">${l.label}</a>`).join("")}${S.contact.resume?`<a href="${S.contact.resume}">Resume (PDF)</a>`:""}</div>
  <footer>&copy; ${new Date().getFullYear()} ${S.name}</footer>`)
};

$("#brand").textContent=S.name;
$("#nav").innerHTML=S.sections.map(id=>`<a href="#${id}">${T[id]}</a>`).join("");
["hero",...Object.keys(T)].forEach(id=>{
  const el=$("#"+id);
  if(id!=="hero"&&!S.sections.includes(id))return el.remove();
  el.innerHTML=R[id]();
});
/* backgrounds: any CSS background value, per section */
Object.entries(S.backgrounds).forEach(([k,v])=>{const el=k==="page"?document.body:$("#"+k);if(el&&v)el.style.background=v});

const dlg=$("#modal");
document.addEventListener("click",e=>{
  const t=e.target.closest("[data-open]"); if(!t)return;
  const p=S.projects.find(x=>x.id===t.dataset.open);
  dlg.innerHTML=`<button class="x" aria-label="Close">&times;</button><div class="mbody">
   <p class="muted">${fmt(p.date)}</p><h2>${p.title}</h2><p>${p.description||p.summary}</p>${tags(p)}
   ${(p.links||[]).length?`<div class="links">${p.links.map(l=>`<a href="${l.url}">${l.label}</a>`).join("")}</div>`:""}
   <ol class="stages">${(p.stages||[]).map(s=>`<li><h3>${s.title}</h3>${s.date?`<p class="when">${fmt(s.date)}</p>`:""}<p>${s.text}</p>
     <div class="media">${(s.media||[]).map(media).join("")}</div></li>`).join("")}</ol></div>`;
  dlg.showModal();
});
dlg.addEventListener("click",e=>{if(e.target===dlg||e.target.closest(".x"))dlg.close()});
})();
