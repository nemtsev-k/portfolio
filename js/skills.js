import{skills}from"./data/skills.js";function initSkillsContainer(){const e=document.querySelector(".skills__list"),t=document.querySelector("#skill").content.querySelector(".skills__item"),l=document.createDocumentFragment();skills.forEach((e=>{const{name:o,title:s,image:a}=e,i=t.cloneNode(!0);i.querySelector(".skills__item-button").name=o,i.querySelector(".skills__item-button").title=s,i.querySelector(".skills__item-button").ariaLabel=o,i.querySelector(".skills__item-button").style.backgroundImage=`url("${a}")`,l.appendChild(i)})),e.appendChild(l),e.addEventListener("click",(({target:e})=>{if("BUTTON"===e.tagName){setModal(skills.find((t=>t.name===e.name)))}})),setSkillsImage()}function setModal({title:e,image:t,about:l}){const o=document.querySelector(".page"),s=document.querySelector(".modal"),a=s.querySelector(".modal__image"),i=s.querySelector(".modal__title"),r=s.querySelector(".modal__about"),n=s.querySelector(".modal__close"),c=()=>{s.close(),i.innerText="",r.innerText="",o.classList.remove("page--scroll-lock")};o.classList.add("page--scroll-lock"),s.showModal(),a.src=t,a.alt=e,i.innerText=e,l.forEach((e=>{const t=document.createElement("li");t.classList.add("modal__about-item"),t.innerText=e,r.appendChild(t)})),s.addEventListener("click",(({currentTarget:e,target:t})=>{t===e&&c()})),s.addEventListener("keydown",(e=>{"Escape"===e.code&&c()})),n.addEventListener("click",(()=>c()))}function setSkillsImage(){const e="dark"===window.localStorage.getItem("theme");document.querySelectorAll(".skills__item-button").forEach(((t,l)=>{let o;o=!0===e&&!0===skills[l].darkTheme?skills[l].image.replace(/(\w+)\.svg$/,"$1-dark.svg"):skills[l].image,t.style.backgroundImage=`url("${o}")`}))}export{initSkillsContainer,setSkillsImage};