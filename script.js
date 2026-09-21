const novels=[
 {title:"رحلة إلى المجهول",genre:"مغامرة • خيال",icon:"✦"},
 {title:"مدينة تحت القمر",genre:"غموض • خيال",icon:"☾"},
 {title:"آخر حارس",genre:"مغامرة • فانتازيا",icon:"⚔"},
 {title:"رسائل من الماضي",genre:"تاريخية • دراما",icon:"✉"},
 {title:"بوابة العوالم",genre:"خيال • مغامرة",icon:"◈"},
 {title:"سر القصر القديم",genre:"غموض • رعب",icon:"♜"},
 {title:"أحلام بعيدة",genre:"دراما • اجتماعية",icon:"✧"},
 {title:"مملكة الرماد",genre:"فانتازيا • مغامرة",icon:"♢"}
];
const books=document.getElementById("books"),search=document.getElementById("search");
function render(list=novels){books.innerHTML=list.map(n=>`<article class="book"><div class="cover">${n.icon}</div><div class="book-info"><h3>${n.title}</h3><p>${n.genre}</p></div></article>`).join("")}
search.addEventListener("input",e=>{const q=e.target.value.trim();render(novels.filter(n=>n.title.includes(q)||n.genre.includes(q)))});
document.getElementById("showAll").addEventListener("click",()=>{search.value="";render()});
render();