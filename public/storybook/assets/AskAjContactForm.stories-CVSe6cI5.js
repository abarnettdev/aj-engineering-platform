import{t as e}from"./jsx-runtime-BBNe6-Ph.js";import{fn as t}from"./dist-C6xiV65B.js";import{n,t as r}from"./contact-contracts-BHTCf6-Y.js";var i=e(),a={title:`Features/Ask A.J./Contact Form`,component:n,parameters:{layout:`centered`},argTypes:{state:{control:`select`,options:[`idle`,`submitting`,`success`,`error`]},error:{control:`text`},values:{control:`object`},errors:{control:`object`},onChange:{action:`field changed`},onSubmit:{action:`submitted`}},args:{values:r,errors:{},state:`idle`,onChange:t(),onSubmit:t()},decorators:[e=>(0,i.jsx)(`div`,{className:`w-[min(100vw-2rem,26rem)] border border-border bg-surface p-5`,children:(0,i.jsx)(e,{})})]},o={},s={args:{values:{...r,name:`Morgan Lee`,email:`morgan@example.com`,roleCompany:`Engineering recruiter, Northstar`,message:`I'd like to discuss a senior engineering role.

Shift + Enter keeps this second paragraph in the message.`}}},c={args:{state:`submitting`,values:{...r,name:`Morgan Lee`,email:`morgan@example.com`,roleCompany:`Engineering recruiter, Northstar`,message:`I'd like to discuss a staff engineering opportunity.`}}},l={args:{state:`success`}},u={args:{state:`error`,error:`Please review the highlighted fields and try again.`,errors:{email:`Enter a valid email address.`,message:`Add a short message so AJ has useful context.`}}},d={args:{state:`error`,error:`Your message could not be sent. Please try again shortly.`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    values: {
      ...emptyContactFormValues,
      name: "Morgan Lee",
      email: "morgan@example.com",
      roleCompany: "Engineering recruiter, Northstar",
      message: "I'd like to discuss a senior engineering role.\\n\\nShift + Enter keeps this second paragraph in the message."
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    error: "Please review the highlighted fields and try again.",
    errors: {
      email: "Enter a valid email address.",
      message: "Add a short message so AJ has useful context."
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    error: "Your message could not be sent. Please try again shortly."
  }
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`KeyboardSubmissionReady`,`Submitting`,`Success`,`ValidationError`,`ServerError`];export{o as Default,s as KeyboardSubmissionReady,d as ServerError,c as Submitting,l as Success,u as ValidationError,f as __namedExportsOrder,a as default};