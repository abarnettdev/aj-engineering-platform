import{t as e}from"./ask-aj-status-DsIhrTnT.js";var t={title:`Features/Ask A.J./Status`,component:e,argTypes:{label:{control:`text`},isLoading:{control:`boolean`},reducedMotion:{control:`boolean`}},args:{label:`Thinking through AJ's experience...`,isLoading:!0,reducedMotion:!1}},n={},r={args:{label:`Writing a concise response...`}},i={args:{label:`Almost ready...`,reducedMotion:!0}},a={args:{label:`Ready for a follow-up`,isLoading:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Writing a concise response..."
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Almost ready...",
    reducedMotion: true
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Ready for a follow-up",
    isLoading: false
  }
}`,...a.parameters?.docs?.source}}};var o=[`Waiting`,`Writing`,`ReducedMotion`,`Ready`];export{a as Ready,i as ReducedMotion,n as Waiting,r as Writing,o as __namedExportsOrder,t as default};