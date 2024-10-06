"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[627],{"./stories/Heading.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading1:()=>Heading1,Heading2:()=>Heading2,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_src_Heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/src/Heading.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Common/TwixtHeading",component:_react_src_Heading__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"text"}},args:{children:"Default Heading",type:"h1"}};var TwixtHeadingTemplate=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Heading__WEBPACK_IMPORTED_MODULE_1__.A,args)},Heading1=TwixtHeadingTemplate.bind({});Heading1.args={type:"h1",children:"Heading1"};var Heading2=TwixtHeadingTemplate.bind({});Heading2.args={type:"h2",children:"Heading2"};const __namedExportsOrder=["Heading1","Heading2"];Heading1.parameters={...Heading1.parameters,docs:{...Heading1.parameters?.docs,source:{originalSource:"args => <TwixtHeading {...args} />",...Heading1.parameters?.docs?.source}}},Heading2.parameters={...Heading2.parameters,docs:{...Heading2.parameters?.docs,source:{originalSource:"args => <TwixtHeading {...args} />",...Heading2.parameters?.docs?.source}}}},"../react/src/Heading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtHeading});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function TwixtHeading(param){var _param_type=param.type,type=void 0===_param_type?"h6":_param_type,children=param.children;switch(type){case"h1":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"text-4xl font-bold text-gray-900"},children);case"h2":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"text-3xl font-bold text-gray-800"},children);case"h3":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"text-2xl font-bold text-gray-700"},children);case"h4":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",{className:"text-xl font-semibold text-gray-600"},children);case"h5":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5",{className:"text-lg font-medium text-gray-500"},children);case"h6":return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6",{className:"text-base font-normal text-gray-400"},children)}return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,children)}TwixtHeading.__docgenInfo={description:"",methods:[],displayName:"TwixtHeading",props:{type:{defaultValue:{value:'"h6"',computed:!1},required:!1}}}}}]);