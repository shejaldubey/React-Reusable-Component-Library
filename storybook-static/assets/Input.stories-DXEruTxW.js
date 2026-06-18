import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-Y0gaZlcC.js";const H="_wrapper_yhop8_66",M="_label_yhop8_73",V="_required_yhop8_80",J="_srOnly_yhop8_85",U="_inputContainer_yhop8_97",$="_error_yhop8_110",k="_disabled_yhop8_113",A="_startIcon_yhop8_133",G="_input_yhop8_97",K="_hint_yhop8_158",L="_hintError_yhop8_165",e={wrapper:H,label:M,required:V,srOnly:J,inputContainer:U,error:$,disabled:k,"size-sm":"_size-sm_yhop8_118","size-md":"_size-md_yhop8_123","size-lg":"_size-lg_yhop8_128",startIcon:A,input:G,hint:K,hintError:L},O=h.forwardRef(function({label:R,hint:i,hasError:a=!1,size:T="md",startIcon:p,id:C,disabled:u,required:d,type:S="text",className:F,...P},W){const B=h.useId(),c=C??B,m=i?`${c}-hint`:void 0;return r.jsxs("div",{className:[e.wrapper,F].filter(Boolean).join(" "),children:[r.jsxs("label",{htmlFor:c,className:e.label,children:[R,d&&r.jsx("span",{className:e.required,"aria-hidden":"true",children:"*"}),d&&r.jsx("span",{className:e.srOnly,children:"(required)"})]}),r.jsxs("div",{className:[e.inputContainer,e[`size-${T}`],a?e.error:"",u?e.disabled:""].filter(Boolean).join(" "),children:[p&&r.jsx("span",{className:e.startIcon,"aria-hidden":"true",children:p}),r.jsx("input",{ref:W,id:c,type:S,disabled:u,required:d,"aria-invalid":a||void 0,"aria-describedby":m,className:e.input,...P})]}),i&&r.jsx("p",{id:m,className:[e.hint,a?e.hintError:""].filter(Boolean).join(" "),role:a?"alert":void 0,children:i})]})});O.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!0,tsType:{name:"string"},description:"Field label"},hint:{required:!1,tsType:{name:"string"},description:"Helper or error message"},hasError:{required:!1,tsType:{name:"boolean"},description:"Marks the field as invalid",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Input size",defaultValue:{value:"'md'",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon rendered before the input"},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit"]};const Z={title:"Components/Input",component:O,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},s={args:{label:"Email address",placeholder:"you@example.com",type:"email"}},t={args:{label:"Username",hint:"Must be at least 3 characters",placeholder:"Enter username"}},n={args:{label:"Password",hasError:!0,hint:"Password must be at least 8 characters",type:"password"}},o={args:{label:"Disabled field",disabled:!0,value:"Read only"}},l={args:{label:"Full name",required:!0,placeholder:"Jane Doe"}};var _,y,b;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    hint: 'Must be at least 3 characters',
    placeholder: 'Enter username'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,I,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    hasError: true,
    hint: 'Password must be at least 8 characters',
    type: 'password'
  }
}`,...(j=(I=n.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var q,E,w;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Disabled field',
    disabled: true,
    value: 'Read only'
  }
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var z,N,D;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Full name',
    required: true,
    placeholder: 'Jane Doe'
  }
}`,...(D=(N=l.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};const ee=["Default","WithHint","WithError","Disabled","Required"];export{s as Default,o as Disabled,l as Required,n as WithError,t as WithHint,ee as __namedExportsOrder,Z as default};
