(()=>{var t={789:()=>{const t=document.querySelector(".container__project"),e=document.querySelectorAll(".project");t.addEventListener("click",(t=>{t.target.classList.contains("project")&&(e.forEach((t=>t.classList.remove("project_active"))),t.target.classList.add("project_active"))}))}},e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}(()=>{"use strict";const t=[],e=["ALL","FINANCE","GROCERY"];function a(){const t=document.querySelector(".container__project");t.innerHTML="",e.forEach((e=>{const n=document.createElement("button");n.classList.add("project"),n.innerText=e,t.appendChild(n)}))}document.getElementsByClassName("task");const s=document.getElementsByClassName("container__tasks")[0],c=document.getElementsByClassName("new-button")[0];function r(){""!==this.style.maxHeight&&"7rem"!==this.style.maxHeight||(this.style.height="35rem")}const o=t=>{if(t.target.classList.contains("fa-check-circle")){const n=t.target.closest(".task").querySelectorAll('input[type="text"]')[1].value.toUpperCase()||"ALL";e.includes(n)||(e.push(n),a())}};function i(){switch(this.parentElement.className="task",this.value){case"Normal":this.parentElement.classList.add("task_normal");break;case"Timely":this.parentElement.classList.add("task_medium");break;case"Urgent":this.parentElement.classList.add("task_urgent")}}function l(){const e=document.createElement("div");e.classList.add("task","task_fading"),e.setAttribute("data-key",Date.now()),e.innerHTML='\n\t\t\t\t<div class="task__first-line">\n\t\t\t\t\t<input readonly type="text" placeholder="> Title">\n\t\t\t\t\t<label class="checkbox">\n\t\t\t\t\t\t<span class="checkbox__input">\n\t\t\t\t\t\t\t<input type="checkbox" name="checked">\n\t\t\t\t\t\t\t<span class="checkbox__control">\n\t\t\t\t\t\t\t\t<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' aria-hidden="true" focusable="false">\n\t\t\t\t\t\t\t\t\t<path fill=\'none\' stroke=\'currentColor\' stroke-width=\'3\' d=\'M1.73 12.91l6.37 6.37L22.79 4.59\' />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</label>\n\t\t\t\t\t\x3c!-- <input type="checkbox"> --\x3e\n\t\t\t\t</div>\n\t\t\t\t<select disabled>\n\t\t\t\t\t<option selected disabled>> Priority</option>\n\t\t\t\t\t<option>Normal</option>\n\t\t\t\t\t<option>Timely</option>\n\t\t\t\t\t<option>Urgent</option>\n\t\t\t\t</select>\n\t\t\t\t<input readonly type="date">\n\t\t\t\t<textarea readonly placeholder="> Description"></textarea>\n\t\t\t\t<input type=\'text\' placeholder=\'> Project\' readonly>\n\t\t\t\t<div class="task__edit">\n\t\t\t\t\t<a href="#"><i class="far fa-check-circle"></i></a>\n\t\t\t\t\t<a href="#"><i class="far fa-edit"></i></a>\n\t\t\t\t</div>';const n=e.querySelector('input[type="checkbox"]'),a=e.getElementsByTagName("input")[0],c=e.querySelector("select");let o;a.addEventListener("click",r.bind(e)),n.addEventListener("change",(()=>{clearTimeout(o),!0===n.checked?n.closest(".task").classList.add("task_erasing"):n.closest(".task").classList.remove("task_erasing"),o=setTimeout((()=>{n.checked&&n.closest(".task").remove(),t.splice(t.findIndex((t=>t.id!==e.dataset.key)),1)}),3e3)})),c.addEventListener("change",i),s.prepend(e),setTimeout((()=>e.classList.remove("task_fading")),100),console.log(t)}l(),a(),s.addEventListener("click",(e=>{!function(t){t.target.classList.contains("fa-check-circle")&&(t.target.closest(".task").style.height="")}(e),function(t){if(t.target.classList.contains("fa-edit")){const e=t.target.closest(".task"),n=[e.querySelector('input[type="text"]'),e.querySelector("select"),e.querySelector('input[type="date"]'),e.querySelector("textarea"),e.querySelectorAll('input[type="text"]')[1]];for(const t of n)t.removeAttribute("disabled"),t.removeAttribute("readonly"),t.classList.add("task_edit-active")}}(e),function(e){if(e.target.classList.contains("fa-check-circle")){const n=e.target.closest(".task"),a=n.querySelector('input[type="text"]'),s=n.querySelector("select"),c=[a,s,n.querySelector('input[type="date"]'),n.querySelector("textarea"),n.querySelectorAll('input[type="text"]')[1]];s.setAttribute("disabled","");for(const t of c)t.setAttribute("readonly",""),t.classList.remove("task_edit-active");!function(e){const n=e.target.closest(".task"),a=n.querySelector("input").value,s=n.querySelector("select").value,c=n.querySelector('input[type="date"]').value,r=n.querySelector("textarea").value,o=n.querySelectorAll('[type="text"]')[1].value.toUpperCase(),{checked:i}=n.querySelector("[type='checkbox']"),l=function(t,e,n,a,s,c,r){return{title:t,priority:e,date:n,description:a,project:s,checked:c,id:r}}(a,s,c,r,o,i,n.dataset.key);if(t.findIndex((t=>t.id===n.dataset.key))>-1){const e=t.findIndex((t=>t.id===n.dataset.key));t[e]=l}else t.push(l)}(e),o(e)}}(e)})),c.addEventListener("click",l),n(789),document.querySelector(".fa-calendar-alt").addEventListener("click",(()=>{t.forEach((t=>{!function(t){const e=document.querySelector(".container__tasks"),n=document.createElement("div");n.classList.add("task","task_fading"),n.innerHTML='\n\t\t\t\t<div class="task__first-line">\n\t\t\t\t<input readonly type="text" placeholder="> Title">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t\t<span class="checkbox__input">\n\t\t\t\t\t\t<input type="checkbox" name="checked">\n\t\t\t\t\t\t<span class="checkbox__control">\n\t\t\t\t\t\t\t<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' aria-hidden="true" focusable="false">\n\t\t\t\t\t\t\t\t<path fill=\'none\' stroke=\'currentColor\' stroke-width=\'3\' d=\'M1.73 12.91l6.37 6.37L22.79 4.59\' />\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</label>\n\t\t\t\t\x3c!-- <input type="checkbox"> --\x3e\n\t\t\t</div>\n\t\t\t<select disabled>\n\t\t\t\t<option selected disabled>> Priority</option>\n\t\t\t\t<option>Normal</option>\n\t\t\t\t<option>Timely</option>\n\t\t\t\t<option>Urgent</option>\n\t\t\t</select>\n\t\t\t<input readonly type="date">\n\t\t\t<textarea readonly placeholder="Description"></textarea>\n\t\t\t<input type=\'text\' placeholder=\' Project\' readonly>\n\t\t\t<div class="task__edit">\n\t\t\t\t<a href="#"><i class="far fa-check-circle"></i></a>\n\t\t\t\t<a href="#"><i class="far fa-edit"></i></a>\n\t\t\t</div>',e.prepend(n),setTimeout((()=>n.classList.remove("task_fading")),100);const a=n.querySelector("input"),s=n.querySelector("select"),c=n.querySelector('input[type="date"]'),r=n.querySelector("textarea"),o=n.querySelectorAll('[type="text"]')[1],i=n.querySelector("[type='checkbox']"),l=n.dataset;a.value=t.title,s.value=t.priority,c.value=t.date,r.value=t.description,i.checked=t.checked,l.key=t.id,o.value=t.project}(t)}))}))})()})();