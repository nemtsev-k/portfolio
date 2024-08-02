import{skills}from"./data/skills.js";import{fadeIn,fadeOut}from"./utils.js";function initSkillsContainer(){const e=document.querySelector(".skills__list"),t=document.querySelector("#skill").content.querySelector(".skills__item"),l=document.createDocumentFragment(),a=({currentTarget:e})=>{setModal(skills.find((t=>t.name===e.name)))};skills.forEach((e=>{const{name:a,text:n,title:s,about:o}=e,i=t.cloneNode(!0),c=getImagePath(e),r=!1===o?"div":"button",d=!1===o?"skills__item-content":"skills__item-button",m=document.createElement(r),u=document.createElement("img"),k=document.createElement("span");m.classList.add(d),!1!==o&&(m.name=a),m.title=s,u.classList.add("skills__item-image"),u.src=c,u.alt=s,m.append(u),k.classList.add("skills__item-text"),k.textContent=n,m.append(k),i.prepend(m),l.append(i)})),e.append(l);e.querySelectorAll(".skills__item-button").forEach((e=>e.addEventListener("click",a)))}function setModal(e){const{title:t,about:l}=e,a=document.querySelector(".page"),n=document.querySelector(".modal"),s=n.querySelector(".modal__image"),o=n.querySelector(".modal__title"),i=n.querySelector(".modal__about"),c=n.querySelector(".modal__close"),r=()=>{fadeOut(n,200,(()=>{n.close(),o.innerText="",i.innerText="",a.classList.remove("page--scroll-lock")}))},d=()=>r(),m=({currentTarget:e,target:t})=>{t===e&&r()},u=e=>{"Escape"===e.code&&r()};a.classList.add("page--scroll-lock"),fadeIn(n,200,(()=>{n.showModal(),s.src=getImagePath(e),s.alt=t,o.innerText=t,l.forEach((e=>{const t=document.createElement("li");t.classList.add("modal__about-item"),t.innerText=e,i.appendChild(t)})),n.addEventListener("click",m),n.addEventListener("keydown",u),c.addEventListener("click",d)}),"flex")}function setSkillsImage(){document.querySelectorAll(".skills__item-image").forEach(((e,t)=>{e.src=getImagePath(skills[t])}))}function getImagePath(e){const{image:t,darkTheme:l}=e;return!0===("dark"===window.localStorage.getItem("theme"))&&!0===l?t.replace(/(\w+)\.svg$/,"$1-dark.svg"):t}export{initSkillsContainer,setSkillsImage};