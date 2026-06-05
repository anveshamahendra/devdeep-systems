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
