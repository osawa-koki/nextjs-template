(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{861:function(e,t,n){"use strict";n.d(t,{FT:function(){return i}});var r=n(7294),a=n(5893);let o=["as","disabled"];function i({tagName:e,disabled:t,href:n,target:r,rel:a,role:o,onClick:i,tabIndex:s=0,type:l}){e||(e=null!=n||null!=r||null!=a?"a":"button");let u={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},u];let c=r=>{var a;if(!t&&("a"!==e||(a=n)&&"#"!==a.trim())||r.preventDefault(),t){r.stopPropagation();return}null==i||i(r)},f=e=>{" "===e.key&&(e.preventDefault(),c(e))};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:f},u]}let s=r.forwardRef((e,t)=>{let{as:n,disabled:r}=e,s=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o),[l,{tagName:u}]=i(Object.assign({tagName:n,disabled:r},s));return(0,a.jsx)(u,Object.assign({},s,l,{ref:t}))});s.displayName="Button"},4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()},1143:function(e){"use strict";e.exports=function(e,t,n,r,a,o,i,s){if(!e){var l;if(void 0===t)l=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,s],c=0;(l=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},2703:function(e,t,n){"use strict";var r=n(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7269:function(e,t,n){"use strict";n.d(t,{Z:function(){return en}});var r=n(4184),a=n.n(r),o=n(7294);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function l(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}n(1143);var c=function(e){var t=(0,o.useRef)(e);return(0,o.useEffect)(function(){t.current=e},[e]),t};function f(e){var t=c(e);return(0,o.useCallback)(function(){return t.current&&t.current.apply(t,arguments)},[t])}var p=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!=typeof document||p?o.useLayoutEffect:o.useEffect,new WeakMap;var d=n(861),m=n(5893);let v=["onKeyDown"],h=o.forwardRef((e,t)=>{var n;let{onKeyDown:r}=e,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,v),[o]=(0,d.FT)(Object.assign({tagName:"a"},a)),i=f(e=>{o.onKeyDown(e),null==r||r(e)});return(n=a.href)&&"#"!==n.trim()&&"button"!==a.role?(0,m.jsx)("a",Object.assign({ref:t},a,{onKeyDown:r})):(0,m.jsx)("a",Object.assign({ref:t},a,o,{onKeyDown:i}))});h.displayName="Anchor";var x=n(6792);function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var y=n(3935),E={disabled:!1},g=o.createContext(null),C="unmounted",N="exited",w="entering",k="entered",j="exiting",O=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=N,r.appearStatus=w):a=k:a=t.unmountOnExit||t.mountOnEnter?C:N,r.state={status:a},r.nextCallback=null,r}(n=t).prototype=Object.create(e.prototype),n.prototype.constructor=n,b(n,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===C?{status:N}:null};var n,r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==w&&n!==k&&(t=w):(n===w||n===k)&&(t=j)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===w){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:y.findDOMNode(this);n&&n.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===N&&this.setState({status:C})},r.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[y.findDOMNode(this),r],o=a[0],i=a[1],s=this.getTimeouts(),l=r?s.appear:s.enter;if(!e&&!n||E.disabled){this.safeSetState({status:k},function(){t.props.onEntered(o)});return}this.props.onEnter(o,i),this.safeSetState({status:w},function(){t.props.onEntering(o,i),t.onTransitionEnd(l,function(){t.safeSetState({status:k},function(){t.props.onEntered(o,i)})})})},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:y.findDOMNode(this);if(!t||E.disabled){this.safeSetState({status:N},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:j},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:N},function(){e.props.onExited(r)})})})},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:y.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===C)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,s(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(g.Provider,{value:null},"function"==typeof n?n(e,r):o.cloneElement(o.Children.only(n),r))},t}(o.Component);function R(){}O.contextType=g,O.propTypes={},O.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:R,onEntering:R,onEntered:R,onExit:R,onExiting:R,onExited:R},O.UNMOUNTED=C,O.EXITED=N,O.ENTERING=w,O.ENTERED=k,O.EXITING=j;var S=/([A-Z])/g,T=/^ms-/;function $(e){return e.replace(S,"-$1").toLowerCase().replace(T,"-ms-")}var L=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,F=function(e,t){var n,r,a,o="",i="";if("string"==typeof t){return e.style.getPropertyValue($(t))||((a=(n=e)&&n.ownerDocument||document)&&a.defaultView||window).getComputedStyle(n,void 0).getPropertyValue($(t))}Object.keys(t).forEach(function(n){var r=t[n];r||0===r?n&&L.test(n)?i+=n+"("+r+") ":o+=$(n)+": "+r+";":e.style.removeProperty($(n))}),i&&(o+="transform: "+i+";"),e.style.cssText+=";"+o},P=!!("undefined"!=typeof window&&window.document&&window.document.createElement),_=!1,D=!1;try{var I={get passive(){return _=!0},get once(){return D=_=!0}};P&&(window.addEventListener("test",I,I),window.removeEventListener("test",I,!0))}catch(e){}var M=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!D){var a=r.once,o=r.capture,i=n;!D&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,_?r:o)}e.addEventListener(t,n,r)},A=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)},U=function(e,t,n,r){return M(e,t,n,r),function(){A(e,t,n,r)}};function Z(e,t){let n=F(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function V(e,t){var n,r,a,o,i,s,l,u,c,f,p,d;let m=Z(e,"transitionDuration"),v=Z(e,"transitionDelay"),h=(n=e,r=n=>{n.target===e&&(h(),t(n))},null==(a=m+v)&&(s=-1===(i=F(n,"transitionDuration")||"").indexOf("ms")?1e3:1,a=parseFloat(i)*s||0),p=(u=!1,c=setTimeout(function(){u||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(n,"transitionend",!0)},a+5),f=U(n,"transitionend",function(){u=!0},{once:!0}),function(){clearTimeout(c),f()}),d=U(n,"transitionend",r),function(){p(),d()})}var G=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};let H=o.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,onExited:i,addEndListener:s,children:l,childRef:u,...c},f)=>{let p=(0,o.useRef)(null),d=(0,o.useMemo)(function(){var e,t;return e=G(p),t=G(u),function(n){e&&e(n),t&&t(n)}},[p,u]),v=e=>{d(e&&"setState"in e?y.findDOMNode(e):null!=e?e:null)},h=e=>t=>{e&&p.current&&e(p.current,t)},x=(0,o.useCallback)(h(e),[e]),b=(0,o.useCallback)(h(t),[t]),E=(0,o.useCallback)(h(n),[n]),g=(0,o.useCallback)(h(r),[r]),C=(0,o.useCallback)(h(a),[a]),N=(0,o.useCallback)(h(i),[i]),w=(0,o.useCallback)(h(s),[s]);return(0,m.jsx)(O,{ref:f,...c,onEnter:x,onEntered:E,onEntering:b,onExit:g,onExited:N,onExiting:C,addEndListener:w,nodeRef:p,children:"function"==typeof l?(e,t)=>l(e,{...t,ref:v}):o.cloneElement(l,{ref:v})})}),B={[w]:"show",[k]:"show"},K=o.forwardRef(({className:e,children:t,transitionClasses:n={},...r},i)=>{let s=(0,o.useCallback)((e,t)=>{e.offsetHeight,null==r.onEnter||r.onEnter(e,t)},[r]);return(0,m.jsx)(H,{ref:i,addEndListener:V,...r,onEnter:s,childRef:t.ref,children:(r,i)=>o.cloneElement(t,{...i,className:a()("fade",e,t.props.className,B[r],n[r])})})});K.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},K.displayName="Fade";var W=n(5697),z=n.n(W);let X={"aria-label":z().string,onClick:z().func,variant:z().oneOf(["white"])},Y=o.forwardRef(({className:e,variant:t,...n},r)=>(0,m.jsx)("button",{ref:r,type:"button",className:a()("btn-close",t&&`btn-close-${t}`,e),...n}));Y.displayName="CloseButton",Y.propTypes=X,Y.defaultProps={"aria-label":"Close"};var q=n(6611);let J=o.forwardRef((e,t)=>(0,m.jsx)("div",{...e,ref:t,className:a()(e.className,"h4")}));J.displayName="DivStyledAsH4";let Q=(0,q.Z)("alert-heading",{Component:J}),ee=(0,q.Z)("alert-link",{Component:h}),et=o.forwardRef((e,t)=>{var n;let{bsPrefix:r,show:c,closeLabel:p,closeVariant:d,className:v,children:h,variant:b,onClose:y,dismissible:E,transition:g,...C}=Object.keys(n={show:"onClose"}).reduce(function(t,r){var a,c,f,p,d,m,v,h,x=t[l(r)],b=t[r],y=s(t,[l(r),r].map(u)),E=n[r],g=(a=e[E],c=(0,o.useRef)(void 0!==b),p=(f=(0,o.useState)(x))[0],d=f[1],m=void 0!==b,v=c.current,c.current=m,!m&&v&&p!==x&&d(x),[m?b:p,(0,o.useCallback)(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a&&a.apply(void 0,[e].concat(n)),d(e)},[a])]),C=g[0],N=g[1];return i({},y,((h={})[r]=C,h[E]=N,h))},e),N=(0,x.vE)(r,"alert"),w=f(e=>{y&&y(!1,e)}),k=!0===g?K:g,j=(0,m.jsxs)("div",{role:"alert",...k?void 0:C,ref:t,className:a()(v,N,b&&`${N}-${b}`,E&&`${N}-dismissible`),children:[E&&(0,m.jsx)(Y,{onClick:w,"aria-label":p,variant:d}),h]});return k?(0,m.jsx)(k,{unmountOnExit:!0,...C,ref:void 0,in:c,children:j}):c?j:null});et.displayName="Alert",et.defaultProps={variant:"primary",show:!0,transition:K,closeLabel:"Close alert"};var en=Object.assign(et,{Link:ee,Heading:Q})},5005:function(e,t,n){"use strict";var r=n(4184),a=n.n(r),o=n(7294),i=n(861),s=n(6792),l=n(5893);let u=o.forwardRef(({as:e,bsPrefix:t,variant:n,size:r,active:o,className:u,...c},f)=>{let p=(0,s.vE)(t,"btn"),[d,{tagName:m}]=(0,i.FT)({tagName:e,...c});return(0,l.jsx)(m,{...d,...c,ref:f,className:a()(u,p,o&&"active",n&&`${p}-${n}`,r&&`${p}-${r}`,c.href&&c.disabled&&"disabled")})});u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=u},1676:function(e,t,n){"use strict";n.d(t,{Z:function(){return $}});var r=n(4184),a=n.n(r),o=n(5697),i=n.n(o),s=n(7294),l=n(5893);let u={type:i().string,tooltip:i().bool,as:i().elementType},c=s.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:r=!1,...o},i)=>(0,l.jsx)(e,{...o,ref:i,className:a()(t,`${n}-${r?"tooltip":"feedback"}`)}));c.displayName="Feedback",c.propTypes=u;let f=s.createContext({});var p=n(6792);let d=s.forwardRef(({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:o=!1,isInvalid:i=!1,as:u="input",...c},d)=>{let{controlId:m}=(0,s.useContext)(f);return t=(0,p.vE)(t,"form-check-input"),(0,l.jsx)(u,{...c,ref:d,type:r,id:e||m,className:a()(n,t,o&&"is-valid",i&&"is-invalid")})});d.displayName="FormCheckInput";let m=s.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...r},o)=>{let{controlId:i}=(0,s.useContext)(f);return e=(0,p.vE)(e,"form-check-label"),(0,l.jsx)("label",{...r,ref:o,htmlFor:n||i,className:a()(t,e)})});m.displayName="FormCheckLabel";let v=s.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:o=!1,disabled:i=!1,isValid:u=!1,isInvalid:v=!1,feedbackTooltip:h=!1,feedback:x,feedbackType:b,className:y,style:E,title:g="",type:C="checkbox",label:N,children:w,as:k="input",...j},O)=>{t=(0,p.vE)(t,"form-check"),n=(0,p.vE)(n,"form-switch");let{controlId:R}=(0,s.useContext)(f),S=(0,s.useMemo)(()=>({controlId:e||R}),[R,e]),T=!w&&null!=N&&!1!==N||s.Children.toArray(w).some(e=>s.isValidElement(e)&&e.type===m),$=(0,l.jsx)(d,{...j,type:"switch"===C?"checkbox":C,ref:O,isValid:u,isInvalid:v,disabled:i,as:k});return(0,l.jsx)(f.Provider,{value:S,children:(0,l.jsx)("div",{style:E,className:a()(y,T&&t,r&&`${t}-inline`,o&&`${t}-reverse`,"switch"===C&&n),children:w||(0,l.jsxs)(l.Fragment,{children:[$,T&&(0,l.jsx)(m,{title:g,children:N}),x&&(0,l.jsx)(c,{type:b,tooltip:h,children:x})]})})})});v.displayName="FormCheck";var h=Object.assign(v,{Input:d,Label:m});n(2473);let x=s.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:r,id:o,className:i,isValid:u=!1,isInvalid:c=!1,plaintext:d,readOnly:m,as:v="input",...h},x)=>{let b;let{controlId:y}=(0,s.useContext)(f);return e=(0,p.vE)(e,"form-control"),b=d?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${n}`]:n},(0,l.jsx)(v,{...h,type:t,size:r,ref:x,readOnly:m,id:o||y,className:a()(i,b,u&&"is-valid",c&&"is-invalid","color"===t&&`${e}-color`)})});x.displayName="FormControl";var b=Object.assign(x,{Feedback:c}),y=(0,n(6611).Z)("form-floating");let E=s.forwardRef(({controlId:e,as:t="div",...n},r)=>{let a=(0,s.useMemo)(()=>({controlId:e}),[e]);return(0,l.jsx)(f.Provider,{value:a,children:(0,l.jsx)(t,{...n,ref:r})})});E.displayName="FormGroup";let g=s.forwardRef((e,t)=>{let[{className:n,...r},{as:o="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,p.vE)(t,"col");let o=(0,p.pi)(),i=(0,p.zG)(),s=[],l=[];return o.forEach(e=>{let n,a,o;let u=r[e];delete r[e],"object"==typeof u&&null!=u?{span:n,offset:a,order:o}=u:n=u;let c=e!==i?`-${e}`:"";n&&s.push(!0===n?`${t}${c}`:`${t}${c}-${n}`),null!=o&&l.push(`order${c}-${o}`),null!=a&&l.push(`offset${c}-${a}`)}),[{...r,className:a()(n,...s,...l)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,l.jsx)(o,{...r,ref:t,className:a()(n,!s.length&&i)})});g.displayName="Col";let C=s.forwardRef(({as:e="label",bsPrefix:t,column:n,visuallyHidden:r,className:o,htmlFor:i,...u},c)=>{let{controlId:d}=(0,s.useContext)(f);t=(0,p.vE)(t,"form-label");let m="col-form-label";"string"==typeof n&&(m=`${m} ${m}-${n}`);let v=a()(o,t,r&&"visually-hidden",n&&m);return(i=i||d,n)?(0,l.jsx)(g,{ref:c,as:"label",className:v,htmlFor:i,...u}):(0,l.jsx)(e,{ref:c,className:v,htmlFor:i,...u})});C.displayName="FormLabel",C.defaultProps={column:!1,visuallyHidden:!1};let N=s.forwardRef(({bsPrefix:e,className:t,id:n,...r},o)=>{let{controlId:i}=(0,s.useContext)(f);return e=(0,p.vE)(e,"form-range"),(0,l.jsx)("input",{...r,type:"range",ref:o,className:a()(t,e),id:n||i})});N.displayName="FormRange";let w=s.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:r,isValid:o=!1,isInvalid:i=!1,id:u,...c},d)=>{let{controlId:m}=(0,s.useContext)(f);return e=(0,p.vE)(e,"form-select"),(0,l.jsx)("select",{...c,size:n,ref:d,className:a()(r,e,t&&`${e}-${t}`,o&&"is-valid",i&&"is-invalid"),id:u||m})});w.displayName="FormSelect";let k=s.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:r,...o},i)=>(e=(0,p.vE)(e,"form-text"),(0,l.jsx)(n,{...o,ref:i,className:a()(t,e,r&&"text-muted")})));k.displayName="FormText";let j=s.forwardRef((e,t)=>(0,l.jsx)(h,{...e,ref:t,type:"switch"}));j.displayName="Switch";var O=Object.assign(j,{Input:h.Input,Label:h.Label});let R=s.forwardRef(({bsPrefix:e,className:t,children:n,controlId:r,label:o,...i},s)=>(e=(0,p.vE)(e,"form-floating"),(0,l.jsxs)(E,{ref:s,className:a()(t,e),controlId:r,...i,children:[n,(0,l.jsx)("label",{htmlFor:r,children:o})]})));R.displayName="FloatingLabel";let S={_ref:i().any,validated:i().bool,as:i().elementType},T=s.forwardRef(({className:e,validated:t,as:n="form",...r},o)=>(0,l.jsx)(n,{...r,ref:o,className:a()(e,t&&"was-validated")}));T.displayName="Form",T.propTypes=S;var $=Object.assign(T,{Group:E,Control:b,Floating:y,Check:h,Switch:O,Label:C,Text:k,Range:N,Select:w,FloatingLabel:R})},6792:function(e,t,n){"use strict";n.d(t,{pi:function(){return l},vE:function(){return s},zG:function(){return u}});var r=n(7294);n(5893);let a=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:o,Provider:i}=a;function s(e,t){let{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}function l(){let{breakpoints:e}=(0,r.useContext)(a);return e}function u(){let{minBreakpoint:e}=(0,r.useContext)(a);return e}},6611:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4184),a=n.n(r),o=/-(.)/g,i=n(7294),s=n(6792),l=n(5893);let u=e=>e[0].toUpperCase()+e.replace(o,function(e,t){return t.toUpperCase()}).slice(1);function c(e,{displayName:t=u(e),Component:n,defaultProps:r}={}){let o=i.forwardRef(({className:t,bsPrefix:r,as:o=n||"div",...i},u)=>{let c=(0,s.vE)(r,e);return(0,l.jsx)(o,{ref:u,className:a()(t,c),...i})});return o.defaultProps=r,o.displayName=t,o}},2473:function(e){"use strict";e.exports=function(){}}}]);