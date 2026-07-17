import{t as e}from"./jsx-runtime-BQAsMLu1.js";import{fn as t}from"./dist-CoHkoRSp.js";import{n,t as r}from"./contact-contracts-CU0J1fXM.js";var i=e(),a={title:`Features/Ask A.J./Contact Form`,component:n,parameters:{layout:`centered`},argTypes:{state:{control:`select`,options:[`idle`,`submitting`,`success`,`error`]},error:{control:`text`},values:{control:`object`},errors:{control:`object`},onChange:{action:`field changed`},onSubmit:{action:`submitted`}},args:{values:r,errors:{},state:`idle`,onChange:t(),onSubmit:t()},decorators:[e=>(0,i.jsx)(`div`,{className:`w-[min(100vw-2rem,26rem)] border border-border bg-surface p-5`,children:(0,i.jsx)(e,{})})]},o={},s={args:{state:`submitting`,values:{...r,name:`Morgan Lee`,email:`morgan@example.com`,roleCompany:`Engineering recruiter, Northstar`,message:`I'd like to discuss a staff engineering opportunity.`}}},c={args:{state:`success`}},l={args:{state:`error`,error:`Please review the highlighted fields and try again.`,errors:{email:`Enter a valid email address.`,message:`Add a short message so AJ has useful context.`}}},u={args:{state:`error`,error:`Your message could not be sent. Please try again shortly.`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "submitting",
    values: {
      ...emptyContactFormValues,
      name: "Morgan Lee",
      email: "morgan@example.com",
      roleCompany: "Engineering recruiter, Northstar",
      message: "I'd like to discuss a staff engineering opportunity."
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    error: "Please review the highlighted fields and try again.",
    errors: {
      email: "Enter a valid email address.",
      message: "Add a short message so AJ has useful context."
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    error: "Your message could not be sent. Please try again shortly."
  }
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`Submitting`,`Success`,`ValidationError`,`ServerError`];export{o as Default,u as ServerError,s as Submitting,c as Success,l as ValidationError,d as __namedExportsOrder,a as default};