
function updateThemeButton(){
  const btn = document.getElementById("themeBtn");
  if(!btn) return;

  if(document.body.classList.contains("dark")){
    btn.textContent = "☀️";
  }else{
    btn.textContent = "🌙";
  }
}

function applySystemTheme(){
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if(prefersDark){
    document.body.classList.add("dark");
  }else{
    document.body.classList.remove("dark");
  }

  updateThemeButton();
}

function toggleDarkMode(){
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
  }

  updateThemeButton();
}

/* ===== أولوية الاختيار ===== */
/* 1️⃣ إذا المستخدم اختار يدوي */
if(localStorage.getItem("theme")){
  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
  }
}else{
  /* 2️⃣ إذا ما اختار → حسب الجهاز */
  applySystemTheme();
}

/* تحديث الزر */
updateThemeButton();

/* إذا الجهاز غير وضعه أثناء التصفح */
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  if(!localStorage.getItem("theme")){
    applySystemTheme();
  }
});
