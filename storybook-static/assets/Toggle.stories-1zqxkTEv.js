import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-Y0gaZlcC.js";const q="_wrapper_ch418_66",U="_labelRow_ch418_70",W="_textContent_ch418_78",F="_label_ch418_70",$="_description_ch418_91",z="_input_ch418_103",G="_track_ch418_113",H="_thumb_ch418_125",s={wrapper:q,labelRow:U,textContent:W,label:F,description:$,switch:"_switch_ch418_97",input:z,track:G,thumb:H};function p({label:t,description:a,id:i,checked:v,defaultChecked:y,disabled:T,className:I,onChange:R,...A}){const B=S.useId(),d=i??B,m=a?`${d}-description`:void 0;return e.jsx("div",{className:[s.wrapper,I].filter(Boolean).join(" "),children:e.jsxs("label",{htmlFor:d,className:s.labelRow,children:[e.jsxs("span",{className:s.textContent,children:[e.jsx("span",{className:s.label,children:t}),a&&e.jsx("span",{id:m,className:s.description,children:a})]}),e.jsxs("span",{className:s.switch,children:[e.jsx("input",{id:d,type:"checkbox",role:"switch",className:s.input,checked:v,defaultChecked:y,disabled:T,"aria-describedby":m,onChange:R,...A}),e.jsx("span",{className:s.track,"aria-hidden":"true",children:e.jsx("span",{className:s.thumb})})]})]})})}p.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!0,tsType:{name:"string"},description:"Accessible label for the toggle"},description:{required:!1,tsType:{name:"string"},description:"Optional description shown below the label"}},composes:["Omit"]};const L={title:"Components/Toggle",component:p,tags:["autodocs"]},r={args:{label:"Enable notifications"}},o={args:{label:"Dark mode",description:"Use a dark color scheme across the application"}},n={args:{label:"Auto-save",defaultChecked:!0}},c={args:{label:"Beta features",disabled:!0}},l={render:()=>{const[t,a]=S.useState(!1);return e.jsx(p,{label:"Controlled toggle",description:t?"On":"Off",checked:t,onChange:i=>a(i.target.checked)})}};var u,h,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,_,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    description: 'Use a dark color scheme across the application'
  }
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var x,k,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Auto-save',
    defaultChecked: true
  }
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var w,j,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Beta features',
    disabled: true
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var D,E,O;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return <Toggle label="Controlled toggle" description={enabled ? 'On' : 'Off'} checked={enabled} onChange={event => setEnabled(event.target.checked)} />;
  }
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const M=["Default","WithDescription","Checked","Disabled","Controlled"];export{n as Checked,l as Controlled,r as Default,c as Disabled,o as WithDescription,M as __namedExportsOrder,L as default};
