/* صفحة الأسئلة */
const host   = document.getElementById('options-host');
const btnOk  = document.getElementById('btnCheck');
const btnNext= document.getElementById('btnNext');
const result = document.getElementById('result');

const choices = [
  { id:'a1', text:'٩٥', correct:true },
  { id:'a2', text:'٩٤' },
  { id:'a3', text:'٩٣' },
  { id:'a4', text:'٩٢' }
];

function render(){
  const frag = new DocumentFragment();
  choices.forEach((c, idx) => {
    const label = document.createElement('label');
    label.className = 'option';
    label.innerHTML = `
      <input type="radio" name="opt" value="${c.id}" aria-label="${c.text}">
      <span>${c.text}</span>
    `;
    frag.append(label);
  });
  host.append(frag);
}
render();

function getPicked(){
  const el = host.querySelector('input[name="opt"]:checked');
  return el ? el.value : null;
}

btnOk?.addEventListener('click', ()=>{
  const picked = getPicked();
  if(!picked){
    result.textContent = 'اختر إجابة من فضلك.';
    return;
  }
  host.querySelectorAll('.option').forEach(l => l.classList.remove('correct','wrong'));
  choices.forEach(c=>{
    const label = [...host.querySelectorAll('.option')]
      .find(l => l.querySelector('input').value === c.id);
    if(!label) return;
    if(c.correct) label.classList.add('correct');
    if(picked === c.id && !c.correct) label.classList.add('wrong');
  });

  if(choices.find(c=>c.id===picked)?.correct){
    result.textContent = 'إجابة صحيحة 👏';
    btnNext.hidden = false;
  }else{
    result.textContent = 'إجابة غير صحيحة، جرّب مرة أخرى.';
  }
});

btnNext?.addEventListener('click', ()=>{
  // الانتقال إلى الصفحة الرئيسية وقسم الفعاليات
  location.href = 'index.html#schedule';
});