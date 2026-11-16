export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>`&#${c.charCodeAt(0)};`);
export const money=v=>{const n=Number(v||0);return n.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:n%1?2:0})};
export const date=v=>v?new Date(v).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}):'—';
export const timeLeft=v=>{const ms=new Date(v).getTime()-Date.now();if(!v||!Number.isFinite(ms))return '—';if(ms<=0)return 'ended';const d=Math.floor(ms/864e5),h=Math.floor(ms%864e5/36e5),m=Math.floor(ms%36e5/6e4);return d?`${d}d ${h}h left`:h?`${h}h ${m}m left`:`${m}m left`};
export const arr=x=>Array.isArray(x)?x:(x?.items||x?.entries||x?.results||[]);
export const pick=(o,...ks)=>{for(const k of ks)if(o?.[k]!=null)return o[k];return null};
