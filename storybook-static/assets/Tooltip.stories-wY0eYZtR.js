import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as m}from"./Button-CUKq9Kfd.js";import{r as o}from"./index-Y0gaZlcC.js";const S="_wrapper_p4ze7_66",z="_tooltip_p4ze7_72",u={wrapper:S,tooltip:z,"placement-top":"_placement-top_p4ze7_88","placement-bottom":"_placement-bottom_p4ze7_94","placement-left":"_placement-left_p4ze7_100","placement-right":"_placement-right_p4ze7_106"};function j({children:a,content:q,placement:R="top",delay:d=200}){const v=o.useId(),s=o.useRef(null),[g,E]=o.useState(!1),f=o.useCallback(()=>{s.current=setTimeout(()=>E(!0),d)},[d]),h=o.useCallback(()=>{s.current&&(clearTimeout(s.current),s.current=null),E(!1)},[]);if(!o.isValidElement(a))throw new Error("Tooltip requires a single valid React element as its child.");const N=o.cloneElement(a,{"aria-describedby":g?v:void 0,onMouseEnter:n=>{var e,t;(t=(e=a.props).onMouseEnter)==null||t.call(e,n),f()},onMouseLeave:n=>{var e,t;(t=(e=a.props).onMouseLeave)==null||t.call(e,n),h()},onFocus:n=>{var e,t;(t=(e=a.props).onFocus)==null||t.call(e,n),f()},onBlur:n=>{var e,t;(t=(e=a.props).onBlur)==null||t.call(e,n),h()}});return r.jsxs("span",{className:u.wrapper,children:[N,g&&r.jsx("span",{id:v,role:"tooltip",className:[u.tooltip,u[`placement-${R}`]].join(" "),children:q})]})}j.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{\r
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;\r
  onMouseLeave?: (event: MouseEvent<HTMLElement>) => void;\r
  onFocus?: (event: FocusEvent<HTMLElement>) => void;\r
  onBlur?: (event: FocusEvent<HTMLElement>) => void;\r
  'aria-describedby'?: string;\r
}`,signature:{properties:[{key:"onMouseEnter",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}},required:!1}},{key:"onMouseLeave",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}},required:!1}},{key:"onFocus",value:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLElement"}],raw:"FocusEvent<HTMLElement>"},name:"event"}],return:{name:"void"}},required:!1}},{key:"onBlur",value:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLElement"}],raw:"FocusEvent<HTMLElement>"},name:"event"}],return:{name:"void"}},required:!1}},{key:"aria-describedby",value:{name:"string",required:!1}}]}}],raw:"ReactElement<TooltipTriggerProps>"},description:"Element that triggers the tooltip on hover and focus"},content:{required:!0,tsType:{name:"ReactNode"},description:"Tooltip content"},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Preferred placement relative to the trigger",defaultValue:{value:"'top'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"Delay before showing the tooltip (ms)",defaultValue:{value:"200",computed:!1}}}};const C={title:"Components/Tooltip",component:j,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right"]}}},i={args:{content:"This action saves your changes",placement:"top",children:r.jsx(m,{variant:"secondary",children:"Save"})}},l={args:{content:"Additional details appear here",placement:"bottom",children:r.jsx(m,{variant:"secondary",children:"Info"})}},c={args:{content:"Navigate back",placement:"left",children:r.jsx(m,{variant:"secondary",children:"Back"})}},p={args:{content:"Proceed to next step",placement:"right",children:r.jsx(m,{variant:"secondary",children:"Next"})}};var T,y,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: 'This action saves your changes',
    placement: 'top',
    children: <Button variant="secondary">Save</Button>
  }
}`,...(M=(y=i.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var b,L,_;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 'Additional details appear here',
    placement: 'bottom',
    children: <Button variant="secondary">Info</Button>
  }
}`,...(_=(L=l.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var w,B,H;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    content: 'Navigate back',
    placement: 'left',
    children: <Button variant="secondary">Back</Button>
  }
}`,...(H=(B=c.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var x,F,k;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: 'Proceed to next step',
    placement: 'right',
    children: <Button variant="secondary">Next</Button>
  }
}`,...(k=(F=p.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const A=["Top","Bottom","Left","Right"];export{l as Bottom,c as Left,p as Right,i as Top,A as __namedExportsOrder,C as default};
