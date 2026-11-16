const API='https://make.fun/api';
const cache=new Map();
// The browser HTTP cache retains ETags and revalidates with no-cache. Let it
// manage conditional headers: explicit If-None-Match fails the live API's CORS check.
async function get(path){const hit=cache.get(path);if(hit&&Date.now()-hit.at<30000)return hit.value;const headers={Accept:'application/json'};const r=await fetch(API+path,{method:'GET',headers,cache:'no-cache'});if(!r.ok)throw Error(`API ${r.status}`);const value=await r.json();cache.set(path,{at:Date.now(),value});return value}
export const getBounties=()=>get('/competitions?status=open&activity=times');
export const getBounty=slug=>get('/competitions/'+encodeURIComponent(slug));
export const getLeaderboard=slug=>get('/competitions/'+encodeURIComponent(slug)+'/leaderboard');
export const getProfile=handle=>get('/profiles/'+encodeURIComponent(handle));
