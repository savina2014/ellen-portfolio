const toggle = document.querySelector('.mobile-toggle');
const links = document.querySelector('.nav-links');
if(toggle && links){toggle.addEventListener('click',()=>links.classList.toggle('open'));}

/* RESUME button: currently NOT linked (no PDF attached).
   To activate it later: upload the new PDF (e.g. assets/docs/Ellen_Hwang_Resume.pdf) and put its path below.
   This one line updates the button on all six pages. */
const RESUME_PDF = "";
document.querySelectorAll('.resume-btn').forEach(btn=>{
  if(RESUME_PDF){btn.href=RESUME_PDF;btn.target='_blank';btn.rel='noopener';btn.removeAttribute('aria-disabled');}
});
