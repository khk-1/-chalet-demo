// Smooth reveal for gallery cards
const items = document.querySelectorAll('.gallery img');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';observer.unobserve(e.target)}})
},{threshold:.08});
items.forEach(img=>{img.style.opacity='0';img.style.transform='translateY(15px)';img.style.transition='opacity .6s ease, transform .6s ease';observer.observe(img)});
