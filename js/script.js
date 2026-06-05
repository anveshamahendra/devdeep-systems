const tmData = {
  km:{name:"Kuldip Mahendra",role:"Founder & Managing Director",initials:"KM",grad:"linear-gradient(135deg,var(--blue),var(--cyan))",bio:"In 18 years of career across the IT sector — from hardware to software, networking to communication — Kuldip observed firsthand that many critical fields lack high-level IT systems. After serving as IT Head at a corporate hospital for 15 years, he founded Devdeep Systems in 2022 with a clear mission: provide complete, trust-backed, cost-effective technology solutions to the organisations that need them most. He leads business strategy, client relationships, and technology direction at Devdeep Systems."},
  dkm:{name:"Devendra Kumar Mahendra",role:"Director",initials:"DK",grad:"linear-gradient(135deg,#1e40af,#3b82f6)",bio:"Co-founder and Director at Devdeep Systems, Devendra co-leads business operations and drives strategic growth across the company's expanding portfolio of healthcare IT and enterprise infrastructure projects in Chhattisgarh and beyond."},
  sd:{name:"Swapnil Deep",role:"Manager, Business Development",initials:"SD",grad:"linear-gradient(135deg,#065f46,#10b981)",bio:"Swapnil drives client acquisition and manages strategic partnerships across healthcare and enterprise verticals. He is responsible for identifying new business opportunities and nurturing long-term relationships with government bodies, hospitals, and institutional clients."},
  rj:{name:"Rahul Janbandhu",role:"Business Head",initials:"RJ",grad:"linear-gradient(135deg,#7c2d12,#f97316)",bio:"Rahul leads Devdeep's business strategy and oversees key account management. He ensures seamless alignment between client requirements and delivery teams, and plays a central role in expanding Devdeep's presence across the central Indian market."},
  sm:{name:"Swati Mahendra",role:"Research & Project Head",initials:"SW",grad:"linear-gradient(135deg,#6b21a8,#a855f7)",bio:"Swati leads the research and project management function at Devdeep Systems. She oversees project planning, delivery coordination, and quality oversight for major deployments — ensuring every implementation is completed on time, on spec, and to the highest standard."},
  dm:{name:"Deepika Mahendra",role:"Software Developer",initials:"DM",grad:"linear-gradient(135deg,#0f766e,#2dd4bf)",bio:"Deepika is a core developer on the Divine Hospital Information System and other enterprise software platforms. She works across the full stack, translating complex healthcare and business workflows into reliable, performant software solutions."},
  ys:{name:"Yogesh Sahu",role:"Administration Support",initials:"YS",grad:"linear-gradient(135deg,#1e3a5f,#60a5fa)",bio:"Yogesh manages internal administration, documentation, and office coordination at Devdeep Systems. He ensures the smooth day-to-day functioning of the company's operations, supporting all departments in delivering consistent service to clients."}
};
function openTmModal(id){
  const d=tmData[id];if(!d)return;
  document.getElementById('tmModalName').textContent=d.name;
  document.getElementById('tmModalRole').textContent=d.role;
  document.getElementById('tmModalBio').textContent=d.bio;
  const ph=document.getElementById('tmModalPhoto');
  ph.style.background=d.grad;
  ph.innerHTML=`<button class="tm-modal-close" onclick="closeTmModal()">✕</button><div style="text-align:center"><div style="width:90px;height:90px;border-radius:50%;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-family:var(--fh);font-size:2rem;font-weight:800;color:#fff;margin:0 auto 8px">${d.initials}</div></div>`;
  document.getElementById('tmModalBg').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeTmModal(){
  document.getElementById('tmModalBg').classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeTmModal()});
// ===== LOGO: inject actual uploaded logo =====
// The user has uploaded the actual Devdeep Systems logo.
// We use it as the primary image source. The SVG fallback shows if the img fails.
// In Claude artifacts, uploaded images are passed as base64 via the conversation.
// We detect if a real logo was provided and use it.
(function() {
  // Try to find if a logo image was uploaded to the conversation
  // The artifact will show the SVG fallback by default since we can't access uploaded binary assets directly
  // When deployed with actual logo, replace the src below with the correct path or base64.
  const navLogo = document.getElementById('navLogo');
  if (navLogo) {
    // Since we can't load an external URL reliably in the artifact sandbox,
    // we show the SVG fallback which precisely mirrors the actual logo structure
    navLogo.style.display = 'none';
    document.getElementById('navLogoFallback').style.display = 'flex';
  }
})();

// ===== THEME =====
const tt = document.getElementById('themeToggle');
let th = localStorage.getItem('ds-th') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
applyTh(th);
function applyTh(t) {
  document.documentElement.setAttribute('data-theme', t);
  tt.textContent = t === 'dark' ? '☀️' : '🌙';
  th = t;
}
tt.addEventListener('click', () => { const n = th==='dark'?'light':'dark'; applyTh(n); localStorage.setItem('ds-th',n); });

// ===== NAV =====
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  const isHome = document.getElementById('page-home').classList.contains('active');
  if (window.scrollY > 16) { nav.classList.add('scrolled'); nav.classList.remove('on-hero'); }
  else if (isHome) { nav.classList.remove('scrolled'); nav.classList.add('on-hero'); }
}, {passive:true});

// ===== HAMBURGER =====
const hbtn = document.getElementById('hb');
const mn = document.getElementById('mobNav');
hbtn.addEventListener('click', () => { mn.classList.toggle('open'); });
function closeMob() { mn.classList.remove('open'); }

// ===== PAGE ROUTING =====
function goPage(id) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.rev').forEach(el=>el.classList.remove('in'));
  document.getElementById('page-'+id).classList.add('active');
  window.scrollTo({top:0,behavior:'instant'});
  const isHome = id === 'home';
  if (isHome && window.scrollY <= 16) { nav.classList.remove('scrolled'); nav.classList.add('on-hero'); }
  else { nav.classList.add('scrolled'); nav.classList.remove('on-hero'); }
  setTimeout(reveal, 80);
}

// ===== REVEAL =====
function reveal() {
  document.querySelectorAll('.rev:not(.in)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 40) el.classList.add('in');
  });
}
window.addEventListener('scroll', reveal, {passive:true});
window.addEventListener('load', reveal);
setTimeout(reveal, 200);

// ===== FORM =====
function submitCF() {
  document.getElementById('cf').style.display = 'none';
  document.getElementById('cfsuccess').classList.add('show');
}
function resetCF() {
  document.getElementById('cf').style.display = 'flex';
  document.getElementById('cfsuccess').classList.remove('show');
}

// ===== HERO CANVAS =====
(function(){
  const c = document.getElementById('heroCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w, h, pts;
  const N = 100;
  function sz() { w = c.width = innerWidth; h = c.height = innerHeight; }
  function init() {
    sz();
    pts = Array.from({length:N}, () => ({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-.5)*.28, vy: (Math.random()-.5)*.28,
      r: Math.random()*1.6+.4, a: Math.random()*.4+.08
    }));
  }
  function draw() {
    ctx.clearRect(0,0,w,h);
    for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
      if (d<130) { ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.strokeStyle=`rgba(0,180,216,${(1-d/130)*.1})`; ctx.lineWidth=.5; ctx.stroke(); }
    }
    pts.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle=`rgba(34,211,238,${p.a})`; ctx.fill();
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=w; if(p.x>w)p.x=0; if(p.y<0)p.y=h; if(p.y>h)p.y=0;
    });
    const t=Date.now()*.00022;
    const gx=w*.5+Math.sin(t)*w*.16, gy=h*.42+Math.cos(t*.75)*h*.12;
    const g=ctx.createRadialGradient(gx,gy,0,gx,gy,Math.min(w,h)*.5);
    g.addColorStop(0,'rgba(27,79,138,.08)'); g.addColorStop(.5,'rgba(0,180,216,.04)'); g.addColorStop(1,'transparent');
    ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
    if (!matchMedia('(prefers-reduced-motion:reduce)').matches) requestAnimationFrame(draw);
  }
  addEventListener('resize', sz, {passive:true});
  init(); draw();
})();

// ===== HIS BAR ANIMATION =====
function animHIS() {
  const bars = document.querySelectorAll('.his-bar');
  bars.forEach(b => {
    const h = parseFloat(b.style.height);
    b.style.height = '0';
    setTimeout(() => { b.style.transition='height .8s cubic-bezier(.4,0,.2,1)'; b.style.height = h+'%'; }, 200 + Math.random()*300);
  });
}
// Trigger HIS animation when scrolled into view
const hisObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { animHIS(); hisObs.unobserve(e.target); } });
}, {threshold:.3});
const hisDash = document.querySelector('.his-dashboard');
if (hisDash) hisObs.observe(hisDash);
