import{n as x,r as N,j as H,i as A,k as I,l as z,m as Z,p as tt,q as et,v as nt,w as O,x as it,y as st,z as rt}from"./scheduler.ILyNqTRB.js";const G=typeof window<"u";let F=G?()=>window.performance.now():()=>Date.now(),R=G?t=>requestAnimationFrame(t):x;const g=new Set;function U(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&R(U)}function V(t){let e;return g.size===0&&R(U),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let D=!1;function lt(){D=!0}function at(){D=!1}function ot(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let o=0;o<e.length;o++){const u=e[o];u.claim_order!==void 0&&a.push(u)}e=a}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let a=0;a<e.length;a++){const o=e[a].claim_order,u=(i>0&&e[n[i]].claim_order<=o?i+1:ot(1,i,_=>e[n[_]].claim_order,o))-1;s[a]=n[u]+1;const f=u+1;n[f]=a,i=Math.max(f,i)}const r=[],l=[];let c=e.length-1;for(let a=n[i]+1;a!=0;a=s[a-1]){for(r.push(e[a-1]);c>=a;c--)l.push(e[c]);c--}for(;c>=0;c--)l.push(e[c]);r.reverse(),l.sort((a,o)=>a.claim_order-o.claim_order);for(let a=0,o=0;a<l.length;a++){for(;o<r.length&&l[a].claim_order>=r[o].claim_order;)o++;const u=o<r.length?r[o]:null;t.insertBefore(l[a],u)}}function ft(t,e){t.appendChild(e)}function W(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=j("style");return e.textContent="/* empty */",_t(W(t),e),e.sheet}function _t(t,e){return ft(t.head||t,e),e.sheet}function dt(t,e){if(D){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){t.insertBefore(e,n||null)}function mt(t,e,n){D&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function pt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function Mt(){return k(" ")}function Pt(){return k("")}function Lt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Rt(t){return t.dataset.svelteH}function $t(t){return Array.from(t.childNodes)}function J(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function K(t,e,n,s,i=!1){J(t);const r=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const c=t[l];if(e(c)){const a=n(c);return a===void 0?t.splice(l,1):t[l]=a,i||(t.claim_info.last_index=l),c}}for(let l=t.claim_info.last_index-1;l>=0;l--){const c=t[l];if(e(c)){const a=n(c);return a===void 0?t.splice(l,1):t[l]=a,i?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,c}}return s()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function yt(t,e,n,s){return K(t,i=>i.nodeName===e,i=>{const r=[];for(let l=0;l<i.attributes.length;l++){const c=i.attributes[l];n[c.name]||r.push(c.name)}r.forEach(l=>i.removeAttribute(l))},()=>s(e))}function jt(t,e,n){return yt(t,e,n,j)}function gt(t,e){return K(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>k(e),!0)}function kt(t){return gt(t," ")}function q(t,e,n){for(let s=n;s<t.length;s+=1){const i=t[s];if(i.nodeType===8&&i.textContent.trim()===e)return s}return-1}function Bt(t,e){const n=q(t,"HTML_TAG_START",0),s=q(t,"HTML_TAG_END",n+1);if(n===-1||s===-1)return new P(e);J(t);const i=t.splice(n,s-n+1);v(i[0]),v(i[i.length-1]);const r=i.slice(1,i.length-1);if(r.length===0)return new P(e);for(const l of r)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new P(e,r)}function zt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ot(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function xt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}function qt(t,e){const n=[];let s=0;for(const i of e.childNodes)if(i.nodeType===8){const r=i.textContent.trim();r===`HEAD_${t}_END`?(s-=1,n.push(i)):r===`HEAD_${t}_START`&&(s+=1,n.push(i))}else s>0&&n.push(i);return n}class wt{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=pt(n.nodeName):this.e=j(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class P extends wt{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}}function It(t,e){return new t(e)}const b=new Map;let S=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:ut(e),rules:{}};return b.set(t,n),n}function Q(t,e,n,s,i,r,l,c=0){const a=16.666/s;let o=`{
`;for(let $=0;$<=1;$+=a){const p=e+(n-e)*r($);o+=$*100+`%{${l(p,1-p)}}
`}const u=o+`100% {${l(n,1-n)}}
}`,f=`__svelte_${vt(u)}_${c}`,_=W(t),{stylesheet:d,rules:h}=b.get(_)||Nt(_,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${s}ms linear ${i}ms 1 both`,S+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),S-=i,S||Tt())}function Tt(){R(()=>{S||(b.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&v(e)}),b.clear())})}let w;function X(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function C(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const E=new Set;let y;function Gt(){y={r:0,c:[],p:y}}function Ft(){y.r||N(y.c),y=y.p}function Et(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Ut(t,e,n,s){if(t&&t.o){if(E.has(t))return;E.add(t),y.c.push(()=>{E.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Y={duration:0};function Vt(t,e,n){const s={direction:"in"};let i=e(t,n,s),r=!1,l,c,a=0;function o(){l&&L(t,l)}function u(){const{delay:_=0,duration:d=300,easing:h=I,tick:m=x,css:$}=i||Y;$&&(l=Q(t,0,1,d,_,h,$,a++)),m(0,1);const p=F()+_,T=p+d;c&&c.abort(),r=!0,A(()=>C(t,!0,"start")),c=V(M=>{if(r){if(M>=T)return m(1,0),C(t,!0,"end"),o(),r=!1;if(M>=p){const B=h((M-p)/d);m(B,1-B)}}return r})}let f=!1;return{start(){f||(f=!0,L(t),H(i)?(i=i(s),X().then(u)):u())},invalidate(){f=!1},end(){r&&(o(),r=!1)}}}function Wt(t,e,n){const s={direction:"out"};let i=e(t,n,s),r=!0,l;const c=y;c.r+=1;let a;function o(){const{delay:u=0,duration:f=300,easing:_=I,tick:d=x,css:h}=i||Y;h&&(l=Q(t,1,0,f,u,_,h));const m=F()+u,$=m+f;A(()=>C(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),V(p=>{if(r){if(p>=$)return d(0,1),C(t,!1,"end"),--c.r||N(c.c),!1;if(p>=m){const T=_((p-m)/f);d(1-T,T)}}return r})}return H(i)?X().then(()=>{i=i(s),o()}):o(),{end(u){u&&"inert"in t&&(t.inert=a),u&&i.tick&&i.tick(1,0),r&&(l&&L(t,l),r=!1)}}}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function At(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),A(()=>{const r=t.$$.on_mount.map(it).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),i.forEach(A)}function bt(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function St(t,e){t.$$.dirty[0]===-1&&(st.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,s,i,r,l=null,c=[-1]){const a=nt;O(t);const o=t.$$={fragment:null,ctx:[],props:r,update:x,not_equal:i,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:z(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};l&&l(o.root);let u=!1;if(o.ctx=n?n(t,e.props||{},(f,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&i(o.ctx[f],o.ctx[f]=h)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](h),u&&St(t,f)),_}):[],o.update(),u=!0,N(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){lt();const f=$t(e.target);o.fragment&&o.fragment.l(f),f.forEach(v)}else o.fragment&&o.fragment.c();e.intro&&Et(t.$$.fragment),At(t,e.target,e.anchor),at(),Z()}O(a)}class Xt{$$=void 0;$$set=void 0;$destroy(){bt(this,1),this.$destroy=x}$on(e,n){if(!H(n))return x;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ct);export{Vt as A,Wt as B,Dt as C,Bt as D,P as H,Xt as S,mt as a,Ft as b,kt as c,Et as d,Pt as e,v as f,j as g,jt as h,Qt as i,$t as j,Lt as k,Ot as l,k as m,gt as n,zt as o,Gt as p,It as q,Jt as r,Mt as s,Ut as t,Kt as u,At as v,bt as w,dt as x,Rt as y,qt as z};
