// 🔁 تحديث حالة الكارت (Active / Inactive)
document.querySelectorAll(".card").forEach((card) => {
  const checkBox = card.querySelector("input[type='checkbox']");
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      card.classList.add("active");
      card.classList.remove("inactive");
    } else {
      card.classList.add("inactive");
      card.classList.remove("active");
    }
  });
});

// filter
const allBtn = document.getElementById("all");
const activeBtn = document.getElementById("active");
const inactiveBtn = document.getElementById("inactive");
function showAll() {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = "block";
  });
}

function showActive(){
    document.querySelectorAll(".card").forEach(card=>{
        if(card.classList.contains("active")){
    card.style.display = "block";
            
        }else{
    card.style.display = "none";

        }
    });
}
function showInactive(){
    document.querySelectorAll(".card").forEach(card=>{
        if(card.classList.contains("inactive")){
    card.style.display = "block";
            
        }else{
    card.style.display = "none";

        }
    });
}

allBtn.addEventListener("click", showAll);
activeBtn.addEventListener("click", showActive);
inactiveBtn.addEventListener("click", showInactive);