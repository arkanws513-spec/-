const novels=[
 {title:"البخلاء",author:"الجاحظ",genre:"أدب عربي • تراث",icon:"📜",source:"عمل تراثي",link:"novels/al-bukhala.html"},
 {title:"رسالة الغفران",author:"أبو العلاء المعري",genre:"أدب عربي • كلاسيكي",icon:"✒",source:"عمل تراثي",link:"novels/risalat-al-ghufran.html"},
 {title:"صعود قديس العوالم السبع",author:"عالم الروايات",genre:"فانتازيا • مغامرة",icon:"✦",source:"أصلية",link:"novels/saint-of-seven-worlds.html"},
 {title:"رحلة إلى المجهول",author:"عالم الروايات",genre:"مغامرة • خيال",icon:"✦",source:"تجريبية"},
 {title:"مدينة تحت القمر",author:"عالم الروايات",genre:"غموض • خيال",icon:"☾",source:"تجريبية"},
 {title:"آخر حارس",author:"عالم الروايات",genre:"مغامرة • فانتازيا",icon:"⚔",source:"تجريبية"},
 {title:"رسائل من الماضي",author:"عالم الروايات",genre:"تاريخية • دراما",icon:"✉",source:"تجريبية"},
 {title:"بوابة العوالم",author:"عالم الروايات",genre:"خيال • مغامرة",icon:"◈",source:"تجريبية"},
 {title:"سر القصر القديم",author:"عالم الروايات",genre:"غموض • رعب",icon:"♜",source:"تجريبية"},
 {title:"أحلام بعيدة",author:"عالم الروايات",genre:"دراما • اجتماعية",icon:"✧",source:"تجريبية"},
 {title:"مملكة الرماد",author:"عالم الروايات",genre:"فانتازيا • مغامرة",icon:"♢",source:"تجريبية"}
];
const books=document.getElementById("books"),search=document.getElementById("search");
function render(list=novels){
 books.innerHTML=list.map(function(n){
   const action=n.link ? "location.href='"+n.link+"'" : "";
   const status=n.link ? "اقرأ الآن" : "قريبًا";
   return '<article class="book" tabindex="0" onclick="'+action+'"><div class="cover">'+n.icon+'</div><div class="book-info"><h3>'+n.title+'</h3><p>'+n.author+' — '+n.genre+'</p><small>'+status+'</small></div></article>';
 }).join("");
}
search.addEventListener("input",function(e){const q=e.target.value.trim();render(novels.filter(function(n){return (n.title+n.genre+n.author).includes(q)}))});
document.getElementById("showAll").addEventListener("click",function(){search.value="";render()});
render();