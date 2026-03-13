"use client";
import { useState, useEffect, useRef } from "react";

function useInView(ref, t=0.12){const[v,setV]=useState(false);useEffect(()=>{if(!ref.current)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(ref.current);return()=>o.disconnect()},[ref,t]);return v}
function R({children,d=0}){const r=useRef(null);const v=useInView(r);return<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(40px)",transition:`all 0.9s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}

const P={bg:"#F7FAF9",card:"#FFFFFF",emerald:"#059669",emeraldLight:"#ECFDF5",emeraldDark:"#047857",gold:"#D97706",goldLight:"#FFFBEB",rose:"#E11D48",roseLight:"#FFF1F2",navy:"#134E4A",text:"#0F172A",textMid:"#475569",textLight:"#94A3B8",shadow:"0 2px 16px rgba(5,150,105,0.06)",shadowLg:"0 8px 32px rgba(5,150,105,0.1)"};

const causes=[{icon:"🎓",name:"Education",missions:42,bg:"linear-gradient(135deg,#059669,#34D399)"},{icon:"🏠",name:"Housing",missions:31,bg:"linear-gradient(135deg,#D97706,#FBBF24)"},{icon:"❤️",name:"Health",missions:56,bg:"linear-gradient(135deg,#E11D48,#FB7185)"},{icon:"🍎",name:"Food Access",missions:38,bg:"linear-gradient(135deg,#EA580C,#FB923C)"},{icon:"👶",name:"Youth",missions:27,bg:"linear-gradient(135deg,#7C3AED,#A78BFA)"},{icon:"🌍",name:"Community",missions:45,bg:"linear-gradient(135deg,#0891B2,#22D3EE)"}];

const missions=[{name:"Atlanta Youth Mentoring Coalition",goal:"$8,500/mo",progress:72,supporters:234,verified:true,urgent:false},{name:"Feed The Westside Initiative",goal:"$4,200/mo",progress:89,supporters:156,verified:true,urgent:true},{name:"Maternal Health Network — South ATL",goal:"$6,000/mo",progress:45,supporters:89,verified:true,urgent:false}];

const updates=[{mission:"Youth Mentoring",text:"47 students completed fall program",time:"2h ago",emoji:"🏆",bg:P.emeraldLight},{mission:"Feed The Westside",text:"12,000 meals distributed in Feb",time:"1d ago",emoji:"💛",bg:P.goldLight},{mission:"Maternal Health",text:"New prenatal support center opened",time:"3d ago",emoji:"📢",bg:P.roseLight}];

export default function Mission365(){
  const[tab,setTab]=useState("home");const[ready,setReady]=useState(false);
  useEffect(()=>{setTimeout(()=>setReady(true),150)},[]);

  return(
    <div style={{background:P.bg,color:P.text,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet"/>

      <nav style={{position:"sticky",top:0,zIndex:100,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",backdropFilter:"blur(20px)",background:"rgba(247,250,249,0.88)",borderBottom:"1px solid rgba(5,150,105,0.08)"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#059669,#34D399)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:900,color:"#fff",boxShadow:"0 4px 12px rgba(5,150,105,0.3)"}}>M</div>
          <span style={{fontSize:14,fontWeight:800,color:P.navy}}>MISSION 365</span>
        </div>
        <div style={{display:"flex",gap:8}}>
          <div style={{width:36,height:36,borderRadius:12,background:P.emeraldLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>🔔</div>
          <div style={{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#05966920,#34D39920)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,color:P.emerald}}>DD</div>
        </div>
      </nav>

      <div style={{maxWidth:480,margin:"0 auto",padding:"0 20px 120px"}}>

        {/* HERO */}
        <div style={{paddingTop:24,opacity:ready?1:0,transform:ready?"translateY(0)":"translateY(30px)",transition:"all 1s cubic-bezier(0.16,1,0.3,1)"}}>
          <div style={{padding:"28px 24px",borderRadius:28,background:"linear-gradient(135deg,#059669,#0D9488,#34D399)",color:"#fff",position:"relative",overflow:"hidden",boxShadow:"0 12px 40px rgba(5,150,105,0.25)",marginBottom:24}}>
            <div style={{position:"absolute",top:-40,right:-40,width:140,height:140,borderRadius:"50%",background:"rgba(255,255,255,0.12)"}}/>
            <div style={{position:"absolute",bottom:-30,left:-20,width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,0.08)"}}/>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",opacity:0.85,marginBottom:10}}>GIVING MADE CONSISTENT</div>
            <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(28px,7.5vw,42px)",fontWeight:600,lineHeight:1.1,marginBottom:10}}>Subscribe to<br/>impact.</h1>
            <p style={{fontSize:13,lineHeight:1.5,opacity:0.85,maxWidth:280,marginBottom:18}}>Support verified causes monthly. See real outcomes. Stay connected.</p>
            <div style={{display:"flex",gap:10}}>
              <div style={{padding:"10px 18px",borderRadius:14,background:"#fff",color:P.emerald,fontSize:12,fontWeight:800,cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"}}>Start Giving</div>
              <div style={{padding:"10px 18px",borderRadius:14,background:"rgba(255,255,255,0.2)",fontSize:12,fontWeight:700,cursor:"pointer"}}>Explore Causes</div>
            </div>
          </div>
        </div>

        {/* GIVING SUMMARY */}
        <R>
          <div style={{borderRadius:24,background:"#fff",border:"1px solid rgba(5,150,105,0.08)",padding:22,boxShadow:P.shadow,marginBottom:28}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,textAlign:"center"}}>
              {[{val:"$45",label:"Monthly"},{val:"3",label:"Missions"},{val:"8",label:"Streak"}].map(s=>(
                <div key={s.label}>
                  <div style={{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:700,color:P.navy}}>{s.val}</div>
                  <div style={{fontSize:9,color:P.textLight,letterSpacing:"0.1em",textTransform:"uppercase"}}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{marginTop:16,padding:"12px 0",borderRadius:14,background:"linear-gradient(135deg,#059669,#34D399)",textAlign:"center",fontSize:12,fontWeight:800,color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(5,150,105,0.25)"}}>MANAGE GIVING</div>
          </div>
        </R>

        {/* CATEGORIES */}
        <R>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:600,color:P.navy,marginBottom:14}}>Discover Causes</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:32}}>
            {causes.map(c=>(
              <div key={c.name} style={{borderRadius:18,background:c.bg,padding:"18px 12px",textAlign:"center",color:"#fff",cursor:"pointer",boxShadow:P.shadow}}>
                <div style={{fontSize:26,marginBottom:6}}>{c.icon}</div>
                <div style={{fontSize:11,fontWeight:800,marginBottom:2}}>{c.name}</div>
                <div style={{fontSize:10,opacity:0.8}}>{c.missions}</div>
              </div>
            ))}
          </div>
        </R>

        {/* MISSIONS */}
        <R>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:600,color:P.navy,marginBottom:14}}>Featured Missions</h2>
          <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:32}}>
            {missions.map(m=>(
              <div key={m.name} style={{borderRadius:22,background:"#fff",border:"1px solid rgba(5,150,105,0.06)",padding:20,boxShadow:P.shadow,position:"relative",overflow:"hidden"}}>
                {m.urgent&&<div style={{position:"absolute",top:14,right:14,padding:"4px 10px",borderRadius:8,background:P.roseLight,color:P.rose,fontSize:9,fontWeight:800}}>URGENT</div>}
                <div style={{display:"inline-flex",alignItems:"center",gap:4,padding:"4px 10px",borderRadius:8,background:P.emeraldLight,color:P.emerald,fontSize:9,fontWeight:700,marginBottom:10}}>✓ Verified</div>
                <div style={{fontSize:15,fontWeight:700,color:P.navy,lineHeight:1.3,marginBottom:8}}>{m.name}</div>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}>
                  <span style={{fontSize:11,color:P.textLight}}>{m.supporters} supporters</span>
                  <span style={{fontSize:12,fontWeight:800,color:P.emerald}}>{m.goal}</span>
                </div>
                <div style={{height:6,borderRadius:6,background:P.emeraldLight,overflow:"hidden",marginBottom:14}}>
                  <div style={{height:"100%",borderRadius:6,background:"linear-gradient(90deg,#059669,#34D399)",width:`${m.progress}%`,transition:"width 1.5s cubic-bezier(0.16,1,0.3,1)"}}/>
                </div>
                <div style={{display:"flex",gap:8}}>
                  <div style={{flex:1,padding:"10px 0",borderRadius:12,background:"linear-gradient(135deg,#059669,#34D399)",textAlign:"center",fontSize:11,fontWeight:800,color:"#fff",cursor:"pointer",boxShadow:"0 4px 10px rgba(5,150,105,0.2)"}}>SUBSCRIBE</div>
                  <div style={{padding:"10px 14px",borderRadius:12,background:P.emeraldLight,fontSize:11,fontWeight:700,color:P.emerald,cursor:"pointer"}}>Follow</div>
                </div>
              </div>
            ))}
          </div>
        </R>

        {/* IMPACT FEED */}
        <R>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:600,color:P.navy,marginBottom:14}}>Impact Updates</h2>
          <div style={{borderRadius:22,background:"#fff",border:"1px solid rgba(5,150,105,0.06)",padding:20,boxShadow:P.shadow,marginBottom:32}}>
            {updates.map((u,i)=>(
              <div key={i} style={{padding:"12px 0",borderBottom:i<updates.length-1?"1px solid rgba(5,150,105,0.06)":"none",display:"flex",gap:12}}>
                <div style={{width:36,height:36,borderRadius:12,background:u.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{u.emoji}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color:P.navy,marginBottom:3}}>{u.text}</div>
                  <div style={{fontSize:10,color:P.textLight}}>{u.mission} • {u.time}</div>
                </div>
              </div>
            ))}
          </div>
        </R>

        {/* BUSINESS CTA */}
        <R>
          <div style={{borderRadius:24,background:"linear-gradient(135deg,#134E4A,#0D9488)",padding:28,color:"#fff",textAlign:"center",boxShadow:P.shadowLg,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:-30,right:-30,width:100,height:100,borderRadius:"50%",background:"rgba(255,255,255,0.08)"}}/>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.15em",color:"#FBBF24",marginBottom:10}}>FOR BUSINESSES</div>
            <div style={{fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:600,lineHeight:1.2,marginBottom:12}}>Run structured impact<br/>for your company.</div>
            <p style={{fontSize:12,opacity:0.8,marginBottom:18}}>Recurring giving, employee matching, transparent reporting.</p>
            <div style={{padding:"12px 24px",borderRadius:14,background:"rgba(255,255,255,0.2)",display:"inline-block",fontSize:11,fontWeight:800,cursor:"pointer",backdropFilter:"blur(8px)"}}>START CSR PROGRAM →</div>
          </div>
        </R>
      </div>

      <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:100,backdropFilter:"blur(24px)",background:"rgba(255,255,255,0.92)",borderTop:"1px solid rgba(5,150,105,0.06)",padding:"8px 0 env(safe-area-inset-bottom, 8px)",boxShadow:"0 -4px 20px rgba(0,0,0,0.04)"}}>
        <div style={{maxWidth:480,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",textAlign:"center"}}>
          {[{icon:"🏠",label:"Home",key:"home"},{icon:"🔍",label:"Discover",key:"discover"},{icon:"💚",label:"Giving",key:"giving"},{icon:"📊",label:"Impact",key:"impact"},{icon:"👤",label:"Profile",key:"profile"}].map(t=>(
            <div key={t.key} onClick={()=>setTab(t.key)} style={{cursor:"pointer",padding:"6px 0"}}>
              <div style={{fontSize:20,marginBottom:1,opacity:tab===t.key?1:0.4,transform:tab===t.key?"scale(1.15)":"scale(1)",transition:"all 0.3s cubic-bezier(0.16,1,0.3,1)"}}>{t.icon}</div>
              <div style={{fontSize:9,fontWeight:700,color:tab===t.key?P.emerald:P.textLight}}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
