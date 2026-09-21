const novels=[
 {title:"البخلاء",author:"الجاحظ",genre:"أدب عربي • تراث",icon:"📜",source:"ويكي مصدر"},
 {title:"رسالة الغفران",author:"أبو العلاء المعري",genre:"أدب عربي • كلاسيكي",icon:"✒",source:"ويكي مصدر"},
 {title:"رحلة إلى المجهول",author:"عالم الروايات",genre:"مغامرة • خيال",icon:"✦",source:"رواية تجريبية"},
 {title:"مدينة تحت القمر",author:"عالم الروايات",genre:"غموض • خيال",icon:"☾",source:"رواية تجريبية"},
 {title:"آخر حارس",author:"عالم الروايات",genre:"مغامرة • فانتازيا",icon:"⚔",source:"رواية تجريبية"},
 {title:"رسائل من الماضي",author:"عالم الروايات",genre:"تاريخية • دراما",icon:"✉",source:"رواية تجريبية"},
 {title:"بوابة العوالم",author:"عالم الروايات",genre:"خيال • مغامرة",icon:"◈",source:"رواية تجريبية"},
 {title:"سر القصر القديم",author:"عالم الروايات",genre:"غموض • رعب",icon:"♜",source:"رواية تجريبية"},
 {title:"أحلام بعيدة",author:"عالم الروايات",genre:"دراما • اجتماعية",icon:"✧",source:"رواية تجريبية"},
 {title:"مملكة الرماد",author:"عالم الروايات",genre:"فانتازيا • مغامرة",icon:"♢",source:"رواية تجريبية"}
];
const books=document.getElementById("books"),search=document.getElementById("search");
function render(list=novels){
 books.innerHTML=list.map(n=>`<article class="book"><div class="cover">${n.icon}</div><div class="book-info"><h3>${n.title}</h3><p>${n.author} — ${n.genre}</p><small>${n.source}</small></div></article>`).join("")
}
search.addEventListener("input",e=>{const q=e.target.value.trim();render(novels.filter(n=>n.title.includes(q)||n.genre.includes(q)||n.author.includes(q)))});
document.getElementById("showAll").addEventListener("click",()=>{search.value="";render()});
render();