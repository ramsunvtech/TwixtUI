"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[1711],{"./stories/Link.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultLink:()=>DefaultLink,LinkWithBadge:()=>LinkWithBadge,LinkWithBorder:()=>LinkWithBorder,LinkWithLefticon:()=>LinkWithLefticon,LinkWithRighticon:()=>LinkWithRighticon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_src_Badges__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/src/Badges.js"),_react_src_CallsToAction_Link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/src/CallsToAction/Link/index.js"),_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/src/Icon.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Call To Action/TwixtLink",component:_react_src_CallsToAction_Link__WEBPACK_IMPORTED_MODULE_2__.A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{type:{name:"string",required:!1},description:"Tailwind text color class",defaultValue:"text-blue-500"},onClick:{action:"clicked",description:"Function to be called when the link is clicked"},background:{type:{name:"string",required:!1},description:"Tailwind background color class",defaultValue:""},link:{type:{name:"string",required:!1},description:"URL the link points to",defaultValue:"#"},label:{type:{name:"string",required:!0},description:"The content of the link",defaultValue:"Link"},overwriteClass:{type:{name:"string",required:!1},description:"Additional CSS classes to overwrite the default ones",defaultValue:""}}};var DefaultLink={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI"}},LinkWithLefticon={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI",leftIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{type:"pin",variant:"filled",size:"12",color:"color"})}},LinkWithRighticon={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI",rightIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{type:"chevronDown",variant:"filled",size:"12",color:"color"})}},LinkWithBadge={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI",leftIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{type:"pin",variant:"filled",size:"12",color:"color"}),rightContent:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Badges__WEBPACK_IMPORTED_MODULE_1__.A,{text:"2"})}},LinkWithBorder={args:{label:"Go to TwixtUI",link:"https://github.com/web-slate/TwixtUI",leftIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{type:"pin",variant:"filled",size:"12",color:"color"}),rightContent:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Badges__WEBPACK_IMPORTED_MODULE_1__.A,{text:"2"}),overwriteClass:"rounded border"}};const __namedExportsOrder=["DefaultLink","LinkWithLefticon","LinkWithRighticon","LinkWithBadge","LinkWithBorder"];DefaultLink.parameters={...DefaultLink.parameters,docs:{...DefaultLink.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Go to TwixtUI',\n    link: 'https://github.com/web-slate/TwixtUI'\n  }\n}",...DefaultLink.parameters?.docs?.source}}},LinkWithLefticon.parameters={...LinkWithLefticon.parameters,docs:{...LinkWithLefticon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Go to TwixtUI\',\n    link: \'https://github.com/web-slate/TwixtUI\',\n    leftIcon: <TwixtIcon type="pin" variant="filled" size="12" color="color" />\n  }\n}',...LinkWithLefticon.parameters?.docs?.source}}},LinkWithRighticon.parameters={...LinkWithRighticon.parameters,docs:{...LinkWithRighticon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Go to TwixtUI\',\n    link: \'https://github.com/web-slate/TwixtUI\',\n    rightIcon: <TwixtIcon type="chevronDown" variant="filled" size="12" color="color" />\n  }\n}',...LinkWithRighticon.parameters?.docs?.source}}},LinkWithBadge.parameters={...LinkWithBadge.parameters,docs:{...LinkWithBadge.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Go to TwixtUI\',\n    link: \'https://github.com/web-slate/TwixtUI\',\n    leftIcon: <TwixtIcon type="pin" variant="filled" size="12" color="color" />,\n    rightContent: <TwixtBadges text="2" />\n  }\n}',...LinkWithBadge.parameters?.docs?.source}}},LinkWithBorder.parameters={...LinkWithBorder.parameters,docs:{...LinkWithBorder.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: \'Go to TwixtUI\',\n    link: \'https://github.com/web-slate/TwixtUI\',\n    leftIcon: <TwixtIcon type="pin" variant="filled" size="12" color="color" />,\n    rightContent: <TwixtBadges text="2" />,\n    overwriteClass: \'rounded border\'\n  }\n}',...LinkWithBorder.parameters?.docs?.source}}}},"../react/src/Badges.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),TwixtBadges=function(param){var text=param.text,overwriteClass=param.overwriteClass,_param_variant=param.variant,badgeClass="violet"===(void 0===_param_variant?"violet":_param_variant)?"cursor-pointer w-8 h-8 grid place-items-center text-base rounded-full text-white bg-violet-700":"cursor-pointer max-w-16 px-4 py-2 flex items-center text-base rounded-full text-indigo-500 border border-indigo-500";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:overwriteClass||badgeClass},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"p-1"},text))};const __WEBPACK_DEFAULT_EXPORT__=TwixtBadges;TwixtBadges.__docgenInfo={description:"",methods:[],displayName:"TwixtBadges",props:{variant:{defaultValue:{value:"'violet'",computed:!1},required:!1}}}},"../react/src/CallsToAction/Link/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtLink});var react=__webpack_require__("./node_modules/react/index.js");function TwixtLink(param){var _param_background=param.background,background=void 0===_param_background?"":_param_background,_param_color=param.color,color=void 0===_param_color?"text-blue-500":_param_color,_param_link=param.link,link=void 0===_param_link?"#":_param_link,onClick=param.onClick,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,label=param.label,leftIcon=param.leftIcon,rightIcon=param.rightIcon,rightContent=param.rightContent,target=param.target;return label?react.createElement("a",{href:link,className:"inline-flex items-center gap-4 ".concat(background," ").concat(color," ").concat(overwriteClass),onClick,target},leftIcon&&react.createElement("span",null,leftIcon),react.createElement("span",null,label),rightIcon&&react.createElement("span",null,rightIcon),rightContent&&react.createElement("span",null,rightContent)):null}TwixtLink.__docgenInfo={description:"",methods:[],displayName:"TwixtLink",props:{background:{defaultValue:{value:"''",computed:!1},required:!1},color:{defaultValue:{value:"'text-blue-500'",computed:!1},required:!1},link:{defaultValue:{value:"'#'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/node_modules/react-icons/fa/index.mjs"),react_icons_ci__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/node_modules/react-icons/ci/index.mjs"),react_icons_pi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/node_modules/react-icons/pi/index.mjs"),iconTypes={notification:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jNV,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.CzP},terminal:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.iuJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTerminalSlash},help:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.gZZ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaQuestionCircleSlash},magnifier:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KSO,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.onj},hamburger:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OXb,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hcp},verticalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v},horizontalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM},pin:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.LBY,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaThumbtackSlash},delete:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.qbC,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.RCe},add:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OiG,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hw0},chevronUp:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs},chevronDown:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3},chevronLeft:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj},chevronRight:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T},note:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie},pencil:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp},refresh:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Swo,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KP4},learn:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.vd0,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.hko},monitor:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Wqt,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaDesktopAlt},import:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR},export:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn},filter:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.YsJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFilterAlt},userAvatar:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.NBi},clipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N},checkedClipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA},headphone:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.tLl,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_2__.WLS},watch:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.CqA,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.V3h},speaker:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.e8f,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.lvJ},speakerSlashed:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.$3T,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.TVP}};function TwixtIcon(param){var _iconTypes_type,_iconTypes_type1,_param_type=param.type,type=void 0===_param_type?"notification":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"filled":_param_variant,_param_size=param.size,size=void 0===_param_size?12:_param_size,_param_color=param.color,color=void 0===_param_color?"black":_param_color;if(!iconTypes[type]||!(null===(_iconTypes_type=iconTypes[type])||void 0===_iconTypes_type?void 0:_iconTypes_type[variant]))return null;var IconComponent=(null===(_iconTypes_type1=iconTypes[type])||void 0===_iconTypes_type1?void 0:_iconTypes_type1[variant])||iconTypes.notification[filled];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{size,color})}TwixtIcon.__docgenInfo={description:"",methods:[],displayName:"TwixtIcon",props:{type:{defaultValue:{value:"'notification'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},size:{defaultValue:{value:"12",computed:!1},required:!1},color:{defaultValue:{value:"'black'",computed:!1},required:!1}}}}}]);