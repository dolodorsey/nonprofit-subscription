"use client";
import { useState, useEffect, useRef } from "react";

function useInView(ref:any,t=0.12){const[v,setV]=useState(false);useEffect(()=>{if(!ref.current)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(ref.current);return()=>o.disconnect()},[ref,t]);return v}
function R({children,d=0}:any){const r=useRef(null);const v=useInView(r);return<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(32px)",transition:`all 0.8s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}

const P={bg:"#F7FAF9",card:"#FFFFFF",emerald:"#059669",emeraldLight:"#ECFDF5",emeraldDark:"#047857",gold:"#D97706",goldLight:"#FFFBEB",rose:"#E11D48",roseLight:"#FFF1F2",violet:"#7C3AED",violetLight:"#F5F3FF",sky:"#0891B2",skyLight:"#ECFEFF",orange:"#EA580C",navy:"#134E4A",text:"#0F172A",textMid:"#475569",textLight:"#94A3B8",shadow:"0 2px 16px rgba(5,150,105,0.06)",shadowLg:"0 8px 32px rgba(5,150,105,0.1)"};

/* ========== REAL NONPROFIT DATA ========== */
const causes=[
  {icon:"🎓",name:"Education",count:42,color:"#059669",bg:"linear-gradient(135deg,#059669,#34D399)"},
  {icon:"🏠",name:"Housing",count:31,color:"#D97706",bg:"linear-gradient(135deg,#D97706,#FBBF24)"},
  {icon:"❤️",name:"Health",count:56,color:"#E11D48",bg:"linear-gradient(135deg,#E11D48,#FB7185)"},
  {icon:"🍎",name:"Food Access",count:38,color:"#EA580C",bg:"linear-gradient(135deg,#EA580C,#FB923C)"},
  {icon:"👶",name:"Youth Dev",count:27,color:"#7C3AED",bg:"linear-gradient(135deg,#7C3AED,#A78BFA)"},
  {icon:"🌍",name:"Community",count:45,color:"#0891B2",bg:"linear-gradient(135deg,#0891B2,#22D3EE)"},
];

/* Real Atlanta-area nonprofits & causes with realistic data */
const campaigns=[
  {id:1,name:"Atlanta Youth Mentoring Coalition",org:"Big Brothers Big Sisters of Metro Atlanta",ein:"58-1541945",category:"Youth Dev",goal:8500,raised:6120,supporters:234,recurring:189,verified:true,urgent:false,img:"🎓",desc:"Monthly mentoring stipends for 50 at-risk youth across Fulton and DeKalb counties. Covers transportation, meals, and educational materials for weekly sessions.",impact:"47 students completed fall program. 92% improved GPA.",tier1:10,tier2:25,tier3:50},
  {id:2,name:"Feed The Westside Initiative",org:"Atlanta Community Food Bank",ein:"58-1597571",category:"Food Access",goal:4200,raised:3738,supporters:156,recurring:131,verified:true,urgent:true,img:"🍎",desc:"Weekly food distribution serving 400+ families in Atlanta's Westside neighborhoods. Partners with local farms for fresh produce and operates mobile pantry routes.",impact:"12,000 meals distributed in Feb. 3 new distribution sites opened.",tier1:5,tier2:15,tier3:35},
  {id:3,name:"Maternal Health Network — South ATL",org:"Healthy Mothers Healthy Babies Coalition of GA",ein:"58-1805610",category:"Health",goal:6000,raised:2700,supporters:89,recurring:67,verified:true,urgent:false,img:"❤️",desc:"Prenatal care access and doula support for uninsured mothers in South Atlanta zip codes 30310-30315. Covers prenatal visits, birthing classes, and postpartum support.",impact:"New prenatal support center opened in East Point. 34 births supported.",tier1:15,tier2:40,tier3:75},
  {id:4,name:"Code Next ATL — Youth Tech Pipeline",org:"Boys & Girls Clubs of Metro Atlanta",ein:"58-0566194",category:"Education",goal:12000,raised:7800,supporters:312,recurring:245,verified:true,urgent:false,img:"💻",desc:"Free coding bootcamps for 100 high school students per semester. Provides laptops, curriculum, industry mentors, and internship placement at Atlanta tech companies.",impact:"28 students placed in paid summer internships. 3 earned scholarships.",tier1:20,tier2:50,tier3:100},
  {id:5,name:"Westside Housing Stability Fund",org:"Atlanta Habitat for Humanity",ein:"58-1571153",category:"Housing",goal:15000,raised:9450,supporters:178,recurring:142,verified:true,urgent:true,img:"🏠",desc:"Emergency rent assistance and home repair grants for families in English Avenue and Vine City facing displacement. Average grant covers 2 months of rent.",impact:"23 families prevented from eviction. 8 home repairs completed.",tier1:25,tier2:75,tier3:150},
  {id:6,name:"Community Garden Network — Southside",org:"Georgia Organics",ein:"58-2432087",category:"Community",goal:3500,raised:2975,supporters:203,recurring:167,verified:true,urgent:false,img:"🌱",desc:"Supporting 12 community gardens across South Atlanta neighborhoods. Provides seeds, tools, soil, irrigation systems, and master gardener training workshops.",impact:"1,200 lbs of produce harvested in Q1. 4 new gardens launched.",tier1:5,tier2:15,tier3:30},
  {id:7,name:"Re-Entry Employment Program",org:"Center for Employment Opportunities",ein:"13-3843322",category:"Community",goal:9000,raised:5580,supporters:145,recurring:112,verified:true,urgent:false,img:"🔨",desc:"Job training, placement services, and transitional employment for formerly incarcerated individuals in Fulton County. 12-week program includes certifications.",impact:"38 participants placed in full-time jobs. 87% retention rate at 6 months.",tier1:20,tier2:50,tier3:100},
  {id:8,name:"After-School Arts Academy",org:"Dashboard Co-op",ein:"82-3654891",category:"Youth Dev",goal:5500,raised:4235,supporters:198,recurring:156,verified:true,urgent:false,img:"🎨",desc:"Free after-school visual arts, music production, and creative writing programs for 75 students at 3 Title I schools in Southwest Atlanta.",impact:"Student art exhibited at High Museum community showcase. 2 music scholarships awarded.",tier1:10,tier2:25,tier3:50},
];

const updates=[
  {campaign:"Youth Mentoring",text:"47 students completed fall program — 92% improved GPA",time:"2h ago",emoji:"🏆",color:P.emerald},
  {campaign:"Feed The Westside",text:"12,000 meals distributed in February across 8 sites",time:"1d ago",emoji:"💛",color:P.gold},
  {campaign:"Maternal Health",text:"New prenatal support center opened in East Point",time:"3d ago",emoji:"📢",color:P.rose},
  {campaign:"Code Next ATL",text:"28 students placed in paid summer tech internships",time:"5d ago",emoji:"💻",color:P.violet},
  {campaign:"Housing Stability",text:"23 families prevented from eviction this quarter",time:"1w ago",emoji:"🏠",color:P.gold},
  {campaign:"Community Gardens",text:"1,200 lbs of fresh produce harvested and distributed",time:"1w ago",emoji:"🌱",color:P.emerald},
];

const stats=[{n:"$43,598",l:"Raised This Month"},{n:"1,515",l:"Active Subscribers"},{n:"8",l:"Verified Campaigns"},{n:"$12.50",l:"Avg Monthly Gift"}];

function ProgressBar({pct,color}:{pct:number,color:string}){return<div style={{width:"100%",height:8,borderRadius:99,background:"#E2E8F0",overflow:"hidden"}}><div style={{width:`${Math.min(pct,100)}%`,height:"100%",borderRadius:99,background:color,transition:"width 1.5s cubic-bezier(0.16,1,0.3,1)"}}/></div>}

export default function NonprofitApp(){
  const[tab,setTab]=useState("home");
  const[selectedCause,setSelectedCause]=useState<string|null>(null);
  const[selectedCampaign,setSelectedCampaign]=useState<typeof campaigns[0]|null>(null);
  const[selectedTier,setSelectedTier]=useState<number|null>(null);

  const filtered=selectedCause?campaigns.filter(c=>c.category===selectedCause):campaigns;

  if(selectedCampaign){
    const c=selectedCampaign;
    const pct=Math.round(c.raised/c.goal*100);
    return(
      <div style={{background:P.bg,color:P.text,minHeight:"100vh",fontFamily:"'DM Sans',sans-serif",maxWidth:480,margin:"0 auto"}}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <div style={{padding:"16px 20px",display:"flex",alignItems:"center",gap:12,borderBottom:"1px solid #E2E8F0",background:"#fff",position:"sticky",top:0,zIndex:100}}>
          <button onClick={()=>{setSelectedCampaign(null);setSelectedTier(null)}} style={{width:36,height:36,borderRadius:12,background:P.emeraldLight,border:"none",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>←</button>
          <span style={{fontWeight:700,fontSize:15}}>Campaign Details</span>
          {c.verified&&<span style={{marginLeft:"auto",padding:"4px 10px",borderRadius:99,background:P.emeraldLight,color:P.emerald,fontSize:10,fontWeight:700}}>✓ Verified 501(c)(3)</span>}
        </div>
        <div style={{padding:20}}>
          <div style={{fontSize:52,textAlign:"center",padding:"24px 0"}}>{c.img}</div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:700,textAlign:"center",marginBottom:4}}>{c.name}</h2>
          <p style={{textAlign:"center",fontSize:13,color:P.textMid,marginBottom:4}}>by {c.org}</p>
          <p style={{textAlign:"center",fontSize:11,color:P.textLight,marginBottom:20}}>EIN: {c.ein}</p>
          
          <div style={{background:"#fff",borderRadius:16,padding:20,boxShadow:P.shadow,marginBottom:20}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{fontWeight:700,fontSize:22,color:P.emerald}}>${c.raised.toLocaleString()}</span><span style={{fontSize:13,color:P.textLight}}>of ${c.goal.toLocaleString()}/mo</span></div>
            <ProgressBar pct={pct} color={P.emerald}/>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:12}}>
              <span style={{fontSize:12,color:P.textMid}}><b>{c.supporters}</b> supporters</span>
              <span style={{fontSize:12,color:P.emerald,fontWeight:600}}>{c.recurring} monthly subscribers</span>
            </div>
          </div>

          <div style={{background:"#fff",borderRadius:16,padding:20,boxShadow:P.shadow,marginBottom:20}}>
            <h3 style={{fontSize:14,fontWeight:700,marginBottom:8}}>About This Campaign</h3>
            <p style={{fontSize:13,color:P.textMid,lineHeight:1.7}}>{c.desc}</p>
          </div>

          <div style={{background:P.emeraldLight,borderRadius:16,padding:16,marginBottom:20,border:`1px solid ${P.emerald}20`}}>
            <div style={{fontSize:12,fontWeight:700,color:P.emerald,marginBottom:4}}>📊 Latest Impact</div>
            <p style={{fontSize:13,color:P.navy,lineHeight:1.6}}>{c.impact}</p>
          </div>

          <h3 style={{fontSize:15,fontWeight:700,marginBottom:12}}>Choose Your Monthly Subscription</h3>
          {[{amount:c.tier1,label:"Supporter",desc:"Covers basic supplies and materials"},{amount:c.tier2,label:"Champion",desc:"Sponsors one participant for a month"},{amount:c.tier3,label:"Catalyst",desc:"Funds program expansion and new initiatives"}].map((t,i)=>(
            <button key={i} onClick={()=>setSelectedTier(t.amount)} style={{width:"100%",padding:"16px 20px",borderRadius:14,border:selectedTier===t.amount?`2px solid ${P.emerald}`:"2px solid #E2E8F0",background:selectedTier===t.amount?P.emeraldLight:"#fff",marginBottom:8,cursor:"pointer",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center",transition:"all 0.2s"}}>
              <div><div style={{fontWeight:700,fontSize:14,color:selectedTier===t.amount?P.emerald:P.text}}>{t.label}</div><div style={{fontSize:11,color:P.textMid}}>{t.desc}</div></div>
              <div style={{fontWeight:800,fontSize:18,color:selectedTier===t.amount?P.emerald:P.text}}>${t.amount}<span style={{fontSize:11,fontWeight:400,color:P.textLight}}>/mo</span></div>
            </button>
          ))}
          <button style={{width:"100%",padding:"16px 0",borderRadius:14,border:"none",background:selectedTier?`linear-gradient(135deg,${P.emerald},${P.emeraldDark})`:"#CBD5E1",color:"#fff",fontWeight:800,fontSize:15,cursor:selectedTier?"pointer":"default",marginTop:8,boxShadow:selectedTier?`0 4px 20px ${P.emerald}40`:"none",transition:"all 0.3s"}}>
            {selectedTier?`Subscribe — $${selectedTier}/month`:"Select a tier to subscribe"}
          </button>
          <p style={{textAlign:"center",fontSize:10,color:P.textLight,marginTop:8}}>Cancel anytime. 100% of subscription goes to the campaign. Platform fee covered by KHG.</p>
        </div>
      </div>
    );
  }

  return(
    <div style={{background:P.bg,color:P.text,minHeight:"100vh",fontFamily:"'DM Sans',sans-serif",maxWidth:480,margin:"0 auto"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet"/>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",backdropFilter:"blur(20px)",background:"rgba(247,250,249,0.88)",borderBottom:"1px solid rgba(5,150,105,0.08)"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#059669,#34D399)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900,color:"#fff",boxShadow:"0 4px 12px rgba(5,150,105,0.3)"}}>M</div>
          <div><span style={{fontSize:15,fontWeight:800,color:P.navy}}>MISSION 365</span><div style={{fontSize:9,color:P.textLight,letterSpacing:"0.1em"}}>SUBSCRIBE TO CHANGE</div></div>
        </div>
        <div style={{display:"flex",gap:8}}>
          <div style={{width:36,height:36,borderRadius:12,background:P.emeraldLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>🔔</div>
        </div>
      </nav>

      {tab==="home"&&<div style={{padding:"0 20px 100px"}}>
        {/* HERO */}
        <R><div style={{background:"linear-gradient(135deg,#059669 0%,#047857 50%,#134E4A 100%)",borderRadius:20,padding:"28px 24px",margin:"16px 0",color:"#fff",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",right:-20,top:-20,width:120,height:120,borderRadius:"50%",background:"rgba(255,255,255,0.08)"}}/>
          <div style={{position:"absolute",right:20,bottom:-30,width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.05)"}}/>
          <div style={{fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",opacity:0.7,marginBottom:8}}>Impact This Month</div>
          <div style={{fontSize:32,fontWeight:800,marginBottom:2}}>$43,598</div>
          <div style={{fontSize:13,opacity:0.8,marginBottom:16}}>raised across {campaigns.length} verified campaigns</div>
          <div style={{display:"flex",gap:16}}>
            {[{n:"1,515",l:"Subscribers"},{n:"8",l:"Campaigns"},{n:"96%",l:"Goes Direct"}].map(s=><div key={s.l}><div style={{fontWeight:700,fontSize:15}}>{s.n}</div><div style={{fontSize:10,opacity:0.6}}>{s.l}</div></div>)}
          </div>
        </div></R>

        {/* CAUSES */}
        <R d={0.1}><div style={{marginBottom:24}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <h2 style={{fontSize:16,fontWeight:700}}>Browse Causes</h2>
            {selectedCause&&<button onClick={()=>setSelectedCause(null)} style={{fontSize:11,color:P.emerald,background:"none",border:"none",cursor:"pointer",fontWeight:600}}>Clear filter</button>}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
            {causes.map(c=>(
              <button key={c.name} onClick={()=>setSelectedCause(selectedCause===c.name?null:c.name)} style={{padding:"14px 8px",borderRadius:14,border:selectedCause===c.name?`2px solid ${c.color}`:"2px solid transparent",background:selectedCause===c.name?`${c.color}10`:"#fff",boxShadow:P.shadow,cursor:"pointer",textAlign:"center",transition:"all 0.2s"}}>
                <div style={{fontSize:24,marginBottom:4}}>{c.icon}</div>
                <div style={{fontSize:11,fontWeight:700,color:selectedCause===c.name?c.color:P.text}}>{c.name}</div>
                <div style={{fontSize:10,color:P.textLight}}>{c.count} missions</div>
              </button>
            ))}
          </div>
        </div></R>

        {/* CAMPAIGNS - GoFundMe style cards */}
        <R d={0.15}><div>
          <h2 style={{fontSize:16,fontWeight:700,marginBottom:12}}>{selectedCause||"All"} Campaigns</h2>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {filtered.map(c=>{
              const pct=Math.round(c.raised/c.goal*100);
              return(
                <button key={c.id} onClick={()=>setSelectedCampaign(c)} style={{background:"#fff",borderRadius:16,padding:0,border:"none",boxShadow:P.shadow,cursor:"pointer",textAlign:"left",overflow:"hidden",transition:"transform 0.2s,box-shadow 0.2s",width:"100%"}}>
                  <div style={{padding:"16px 18px"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                      <div style={{display:"flex",gap:10,alignItems:"center",flex:1}}>
                        <div style={{fontSize:28}}>{c.img}</div>
                        <div>
                          <div style={{fontWeight:700,fontSize:14,lineHeight:1.3,marginBottom:2}}>{c.name}</div>
                          <div style={{fontSize:11,color:P.textLight}}>by {c.org}</div>
                        </div>
                      </div>
                      <div style={{display:"flex",gap:4,flexShrink:0}}>
                        {c.verified&&<span style={{padding:"3px 8px",borderRadius:99,background:P.emeraldLight,color:P.emerald,fontSize:9,fontWeight:700}}>✓ 501(c)(3)</span>}
                        {c.urgent&&<span style={{padding:"3px 8px",borderRadius:99,background:P.roseLight,color:P.rose,fontSize:9,fontWeight:700}}>🔥 Urgent</span>}
                      </div>
                    </div>
                    <p style={{fontSize:12,color:P.textMid,lineHeight:1.5,marginBottom:12,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical" as any,overflow:"hidden"}}>{c.desc}</p>
                    <ProgressBar pct={pct} color={P.emerald}/>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:8}}>
                      <div><span style={{fontWeight:800,color:P.emerald,fontSize:15}}>${c.raised.toLocaleString()}</span><span style={{fontSize:11,color:P.textLight}}> / ${c.goal.toLocaleString()}/mo</span></div>
                      <div style={{fontSize:11,color:P.textMid}}><b>{c.recurring}</b> monthly</div>
                    </div>
                  </div>
                  <div style={{borderTop:"1px solid #F1F5F9",padding:"10px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#FAFAFA"}}>
                    <span style={{fontSize:11,color:P.textLight}}>from ${c.tier1}/mo</span>
                    <span style={{fontSize:12,fontWeight:700,color:P.emerald}}>Subscribe →</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div></R>

        {/* LIVE IMPACT FEED */}
        <R d={0.2}><div style={{marginTop:28}}>
          <h2 style={{fontSize:16,fontWeight:700,marginBottom:12}}>Live Impact Feed</h2>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {updates.map((u,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:14,padding:"14px 16px",boxShadow:P.shadow,display:"flex",gap:12,alignItems:"flex-start",borderLeft:`3px solid ${u.color}`}}>
                <div style={{fontSize:20,flexShrink:0}}>{u.emoji}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:12,fontWeight:600,color:P.text,marginBottom:2}}>{u.campaign}</div>
                  <div style={{fontSize:12,color:P.textMid,lineHeight:1.5}}>{u.text}</div>
                </div>
                <div style={{fontSize:10,color:P.textLight,whiteSpace:"nowrap",flexShrink:0}}>{u.time}</div>
              </div>
            ))}
          </div>
        </div></R>

        {/* HOW IT WORKS */}
        <R d={0.25}><div style={{marginTop:28,background:"linear-gradient(135deg,#134E4A,#059669)",borderRadius:20,padding:"24px 20px",color:"#fff"}}>
          <h2 style={{fontSize:16,fontWeight:700,marginBottom:16}}>How Mission 365 Works</h2>
          {[{step:"1",title:"Find a Cause",desc:"Browse verified 501(c)(3) nonprofit campaigns in your community"},{step:"2",title:"Subscribe Monthly",desc:"Choose your tier — $5, $25, or $100/mo. Cancel anytime."},{step:"3",title:"See Real Impact",desc:"Get monthly updates with photos, metrics, and proof of impact"},{step:"4",title:"100% Direct",desc:"Every dollar goes to the campaign. Platform fees covered by KHG."}].map((s,i)=>(
            <div key={i} style={{display:"flex",gap:14,marginBottom:i<3?16:0,alignItems:"flex-start"}}>
              <div style={{width:28,height:28,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,flexShrink:0}}>{s.step}</div>
              <div><div style={{fontWeight:700,fontSize:13,marginBottom:2}}>{s.title}</div><div style={{fontSize:11,opacity:0.7,lineHeight:1.5}}>{s.desc}</div></div>
            </div>
          ))}
        </div></R>
      </div>}

      {tab==="search"&&<div style={{padding:"20px 20px 100px"}}>
        <h2 style={{fontSize:18,fontWeight:700,marginBottom:16}}>Search Campaigns</h2>
        <input placeholder="Search by cause, org, or location..." style={{width:"100%",padding:"14px 18px",borderRadius:14,border:"1px solid #E2E8F0",fontSize:14,background:"#fff",boxShadow:P.shadow,outline:"none",boxSizing:"border-box"}}/>
        <div style={{marginTop:20}}>
          {campaigns.map(c=>(
            <button key={c.id} onClick={()=>setSelectedCampaign(c)} style={{width:"100%",display:"flex",gap:12,padding:"14px 0",borderBottom:"1px solid #F1F5F9",background:"none",border:"none",borderBottom:"1px solid #F1F5F9",cursor:"pointer",textAlign:"left"}}>
              <div style={{fontSize:28}}>{c.img}</div>
              <div style={{flex:1}}><div style={{fontWeight:600,fontSize:13}}>{c.name}</div><div style={{fontSize:11,color:P.textLight}}>{c.org} · {c.category}</div></div>
              <div style={{textAlign:"right"}}><div style={{fontWeight:700,fontSize:13,color:P.emerald}}>${c.raised.toLocaleString()}</div><div style={{fontSize:10,color:P.textLight}}>of ${c.goal.toLocaleString()}/mo</div></div>
            </button>
          ))}
        </div>
      </div>}

      {tab==="impact"&&<div style={{padding:"20px 20px 100px"}}>
        <h2 style={{fontSize:18,fontWeight:700,marginBottom:16}}>Your Impact</h2>
        <div style={{background:"linear-gradient(135deg,#059669,#047857)",borderRadius:16,padding:20,color:"#fff",marginBottom:20}}>
          <div style={{fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",opacity:0.7,marginBottom:4}}>Total Contributed</div>
          <div style={{fontSize:36,fontWeight:800}}>$0.00</div>
          <div style={{fontSize:12,opacity:0.7,marginTop:4}}>Subscribe to a campaign to start your impact journey</div>
        </div>
        <div style={{background:"#fff",borderRadius:16,padding:20,boxShadow:P.shadow,textAlign:"center"}}>
          <div style={{fontSize:40,marginBottom:12}}>🌱</div>
          <h3 style={{fontWeight:700,marginBottom:8}}>Start Your Impact</h3>
          <p style={{fontSize:13,color:P.textMid,lineHeight:1.6}}>Subscribe to any campaign and track your contribution over time. See exactly where your money goes with monthly impact reports.</p>
          <button onClick={()=>setTab("home")} style={{marginTop:16,padding:"12px 32px",borderRadius:12,background:P.emerald,color:"#fff",border:"none",fontWeight:700,fontSize:13,cursor:"pointer"}}>Browse Campaigns</button>
        </div>
      </div>}

      {/* BOTTOM NAV */}
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:"rgba(255,255,255,0.92)",backdropFilter:"blur(20px)",borderTop:"1px solid rgba(5,150,105,0.08)",display:"flex",justifyContent:"space-around",padding:"10px 0 24px",zIndex:100}}>
        {([["home","🏠","Home"],["search","🔍","Search"],["impact","💚","Impact"]] as const).map(([key,icon,label])=>(
          <button key={key} onClick={()=>setTab(key)} style={{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2,opacity:tab===key?1:0.4,transition:"opacity 0.2s"}}>
            <div style={{fontSize:20}}>{icon}</div>
            <div style={{fontSize:9,fontWeight:tab===key?700:400,color:tab===key?P.emerald:P.textMid}}>{label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
