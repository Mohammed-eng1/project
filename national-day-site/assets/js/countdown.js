// سؤال: ما هو اليوم الوطني الحالي؟
(function(){
  const wrap = document.querySelector(".options");
  const check = document.getElementById("check");
  const result = document.getElementById("result");
  if (!wrap || !check || !result) return;

  const baseYear = 2025, baseND = 95;
  const year = new Date().getFullYear();
  const currentND = baseND + (year - baseYear);

  const choices = Array.from(new Set([currentND, currentND - 1, currentND + 1]));
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }

  wrap.textContent = "";
  const btns = choices.map(n=>{
    const b = document.createElement("button");
    b.className = "btn"; b.style.minHeight="44px"; b.style.borderRadius="12px";
    b.dataset.val = String(n); b.textContent = String(n);
    wrap.appendChild(b);
    return b;
  });

  let selected = null;
  btns.forEach(b => b.addEventListener("click", () => {
    btns.forEach(x => x.classList.remove("outline"));
    b.classList.add("outline");
    selected = Number(b.dataset.val);
  }));

  check.addEventListener("click", ()=>{
    if (selected === null){ result.textContent = "اختر إجابة أولًا."; result.style.color=""; return; }
    if (selected === currentND){ result.textContent = "إجابة صحيحة! 🇸🇦"; result.style.color="#0b1f17"; }
    else { result.textContent = "إجابة غير صحيحة، جرّب مرة أخرى."; result.style.color="#a4372c"; }
  });
})();
