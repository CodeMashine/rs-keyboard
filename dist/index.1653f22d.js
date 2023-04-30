(()=>{"use strict";let e=new class{constructor(){this.language=localStorage.getItem("language")||"EN",this.symbols=["`","~","1","!","2","@","3","#","4","$","5","%","6","^","7","&","8","*","9","(","0",")","_","-","=","+","[","{","}","}","\\","|","/",":",";","'",'"',",","<",".",">","/","?"],this.case="normal",this.alphabetEN={Backquote:{normal:"`",upperCase:"~"},Digit1:{normal:"1",upperCase:"!"},Digit2:{normal:"2",upperCase:"@"},Digit3:{normal:"3",upperCase:"#"},Digit4:{normal:"4",upperCase:"$"},Digit5:{normal:"5",upperCase:"%"},Digit6:{normal:"6",upperCase:"^"},Digit7:{normal:"7",upperCase:"&"},Digit8:{normal:"8",upperCase:"*"},Digit9:{normal:"9",upperCase:"("},Digit0:{normal:"0",upperCase:")"},Minus:{normal:"-",upperCase:"_"},Equal:{normal:"=",upperCase:"+"},Backspace:{normal:"Backspace",upperCase:"Backspace"},Tab:{normal:"Tab",upperCase:"Tab"},KeyQ:{normal:"q",upperCase:"Q"},KeyW:{normal:"w",upperCase:"W"},KeyE:{normal:"e",upperCase:"E"},KeyR:{normal:"r",upperCase:"R"},KeyT:{normal:"t",upperCase:"T"},KeyY:{normal:"y",upperCase:"Y"},KeyU:{normal:"u",upperCase:"U"},KeyI:{normal:"i",upperCase:"I"},KeyO:{normal:"o",upperCase:"O"},KeyP:{normal:"p",upperCase:"P"},BracketLeft:{normal:"[",upperCase:"{"},BracketRight:{normal:"[",upperCase:"}"},Backslash:{normal:"\\",upperCase:"|"},Delete:{normal:"Del",upperCase:"Del"},CapsLock:{normal:"CapsLock",upperCase:"CapsLock"},KeyA:{normal:"a",upperCase:"A"},KeyS:{normal:"s",upperCase:"S"},KeyD:{normal:"d",upperCase:"D"},KeyF:{normal:"f",upperCase:"F"},KeyG:{normal:"g",upperCase:"G"},KeyH:{normal:"h",upperCase:"H"},KeyJ:{normal:"j",upperCase:"J"},KeyK:{normal:"k",upperCase:"K"},KeyL:{normal:"l",upperCase:"L"},Semicolon:{normal:";",upperCase:":"},Quote:{normal:"'",upperCase:'"'},Enter:{normal:"Enter",upperCase:"Enter"},ShiftLeft:{normal:"Shift",upperCase:"Shift"},KeyZ:{normal:"z",upperCase:"Z"},KeyX:{normal:"x",upperCase:"X"},KeyC:{normal:"c",upperCase:"C"},KeyV:{normal:"v",upperCase:"V"},KeyB:{normal:"b",upperCase:"B"},KeyN:{normal:"n",upperCase:"N"},KeyM:{normal:"m",upperCase:"M"},Comma:{normal:",",upperCase:"<"},Period:{normal:"/",upperCase:">"},Slash:{normal:".",upperCase:"?"},ArrowUp:{normal:"↑",upperCase:"↑"},ShiftRight:{normal:"Shift",upperCase:"Shift"},ControlLeft:{normal:"Ctrl",upperCase:"Ctrl"},Super:{normal:"Super",upperCase:"Super"},AltLeft:{normal:"Alt",upperCase:"Alt"},Space:{normal:"    ",upperCase:"    "},AltRight:{normal:"Alt",upperCase:"Alt"},ControlRight:{normal:"Ctrl",upperCase:"Ctrl"},ArrowLeft:{normal:"←",upperCase:"←"},ArrowDown:{normal:"↓",upperCase:"↓"},ArrowRight:{normal:"→",upperCase:"→"}},this.alphabetRU={Backquote:{normal:"ё",upperCase:"Ё"},Digit1:{normal:"1",upperCase:"!"},Digit2:{normal:"2",upperCase:'"'},Digit3:{normal:"3",upperCase:"№"},Digit4:{normal:"4",upperCase:";"},Digit5:{normal:"5",upperCase:"%"},Digit6:{normal:"6",upperCase:":"},Digit7:{normal:"7",upperCase:"?"},Digit8:{normal:"8",upperCase:"*"},Digit9:{normal:"9",upperCase:"("},Digit0:{normal:"0",upperCase:")"},Minus:{normal:"-",upperCase:"_"},Equal:{normal:"=",upperCase:"+"},Backspace:{normal:"Backspace",upperCase:"Backspace"},Tab:{normal:"Tab",upperCase:"Tab"},KeyQ:{normal:"й",upperCase:"Й"},KeyW:{normal:"ц",upperCase:"Ц"},KeyE:{normal:"у",upperCase:"У"},KeyR:{normal:"к",upperCase:"К"},KeyT:{normal:"е",upperCase:"Е"},KeyY:{normal:"н",upperCase:"Н"},KeyU:{normal:"г",upperCase:"Г"},KeyI:{normal:"ш",upperCase:"Ш"},KeyO:{normal:"щ",upperCase:"Щ"},KeyP:{normal:"з",upperCase:"З"},BracketLeft:{normal:"х",upperCase:"Х"},BracketRight:{normal:"ъ",upperCase:"Ъ"},Backslash:{normal:"\\",upperCase:"/"},Delete:{normal:"Del",upperCase:"Del"},CapsLock:{normal:"CapsLock",upperCase:"CapsLock"},KeyA:{normal:"ф",upperCase:"Ф"},KeyS:{normal:"ы",upperCase:"Ы"},KeyD:{normal:"в",upperCase:"В"},KeyF:{normal:"а",upperCase:"А"},KeyG:{normal:"п",upperCase:"П"},KeyH:{normal:"р",upperCase:"Р"},KeyJ:{normal:"о",upperCase:"О"},KeyK:{normal:"л",upperCase:"Л"},KeyL:{normal:"д",upperCase:"Д"},Semicolon:{normal:"ж",upperCase:"Ж"},Quote:{normal:"э",upperCase:"Э"},Enter:{normal:"Enter",upperCase:"Enter"},ShiftLeft:{normal:"Shift",upperCase:"Shift"},KeyZ:{normal:"я",upperCase:"Я"},KeyX:{normal:"ч",upperCase:"Ч"},KeyC:{normal:"с",upperCase:"С"},KeyV:{normal:"м",upperCase:"М"},KeyB:{normal:"и",upperCase:"И"},KeyN:{normal:"т",upperCase:"Т"},KeyM:{normal:"ь",upperCase:"Ь"},Comma:{normal:"б",upperCase:"Б"},Period:{normal:"ю",upperCase:"Ю"},Slash:{normal:".",upperCase:","},ArrowUp:{normal:"↑",upperCase:"↑"},ShiftRight:{normal:"Shift",upperCase:"Shift"},ControlLeft:{normal:"Ctrl",upperCase:"Ctrl"},Super:{normal:"Super",upperCase:"Super"},AltLeft:{normal:"Alt",upperCase:"Alt"},Space:{normal:"    ",upperCase:"    "},AltRight:{normal:"Alt",upperCase:"Alt"},ControlRight:{normal:"Ctrl",upperCase:"Ctrl"},ArrowLeft:{normal:"←",upperCase:"←"},ArrowDown:{normal:"↓",upperCase:"↓"},ArrowRight:{normal:"→",upperCase:"→"}}}renderRoot(){const e=document.querySelector("body"),a=document.createElement("div");a.className="keyboard";const r=document.createElement("textarea");r.className="keyboard__text-field";const p=document.createElement("div");p.className="keyboard__area";const t=document.createElement("div");t.className="keyboard__description",a.append(r,p,t),e.append(a),r.focus()}alphabetCreator(){return this["alphabet"+this.language]}renderKeyboard(){let e=this.alphabetCreator(),a=document.querySelector(".keyboard__area");for(let r in e){let p=document.createElement("div");p.className=`keyboard__square keyboard__square__${r} `,p.dataset.key=r,p.innerText=e[r].normal,a.append(p)}return a}listener(){let e=this.alphabetCreator(),a=Object.keys(e),r=document.querySelector(".keyboard__text-field");function p(e,a=!1){let r=e.alphabetCreator(),p=document.querySelectorAll(".keyboard__square");for(let t=0;t<p.length;t++)a&&!e.symbols.includes(p[t].innerText)?p[t].innerText=r[p[t].dataset.key][e.case]:a||(p[t].innerText=r[p[t].dataset.key][e.case])}function t(e){let a=document.querySelector(".keyboard__square__CapsLock"),r=document.querySelector(".keyboard__square__ShiftRight"),t=document.querySelector(".keyboard__square__ShiftLeft"),s=r.classList.contains("pressed")||t.classList.contains("pressed"),o=a.classList.contains("pressed");o&&s?(e.case="normal",p(e)):o?(e.case="upperCase",p(e,!0)):s?(e.case="upperCase",p(e)):(e.case="normal",p(e))}function s(e){let a=document.querySelector(`.keyboard__square__${e}`);a&&a.classList.toggle("pressed")}function o(e,a,r,p=0){let t=Array.from(e.value);t.splice(a,p,r),e.value=t.join("");let s=a+1;0!=p&&(s=a),e.selectionStart=s,e.selectionEnd=s}window.addEventListener("keydown",(e=>{e.preventDefault(),function(e,n){let l=r.selectionStart,{code:u}=e,m=n.alphabetCreator();if(a.includes(u)&&(s(u),"Super"!==u))if(e.preventDefault(),"Backspace"===u)o(r,l-1,"",1);else if("Delete"===u)o(r,l,"",1);else if("Tab"===u)o(r,l,"\t");else if("Space"===u)o(r,l," ");else if("CapsLock"===u)t(n),s(u);else if(u.includes("Shift"))t(n);else if("Enter"===u)o(r,l,"\n");else if(u.includes("Control")||u.includes("Alt"))!function(e){let a=document.querySelector(".keyboard__square__ControlLeft"),r=document.querySelector(".keyboard__square__AltLeft");a.classList.contains("pressed")&&r.classList.contains("pressed")&&("EN"===e.language?e.language="RU":e.language="EN",p(e)),e.showDescription(),localStorage.setItem("language",e.language)}(n);else{let e=m[u][n.case];o(r,l,e)}}(e,this)})),window.addEventListener("keyup",(e=>{s(e.code),t(this)}));let n=document.querySelector(".keyboard__area");n.addEventListener("pointerdown",(e=>{if(e.preventDefault(),!e.target.classList.contains("keyboard__square"))return;let a=new Event("keydown");a.key=e.target.dataset.key,a.code=e.target.dataset.key,window.dispatchEvent(a)})),n.addEventListener("pointerup",(e=>{e.preventDefault(),e.target.classList.contains("keyboard__square")&&(s(document.querySelector(`.${e.target.classList[1]}`).dataset.key),t(this))}))}showDescription(){let e=document.querySelector(".keyboard__description");e.innerHTML="";let a=document.createElement("p");a.className="keyboard__made-in";let r=document.createElement("p2");r.className="keyboard__switch-lang";let p,t,{language:s}=this;"RU"===s?(p="Клавиатура создана в Ubuntu 22.04",t="Для смены языка нажмите левые Ctrl + Alt"):(p="Keboard created in Ubuntu 22.04",t="Press left Ctrl + Alt to change the language"),a.innerText=p,r.innerText=t,e.append(a,r)}};e.renderRoot(),e.renderKeyboard(),e.showDescription(),e.listener()})();