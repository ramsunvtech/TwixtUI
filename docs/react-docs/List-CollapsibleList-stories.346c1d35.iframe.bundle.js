"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[2092],{"./stories/List/CollapsibleList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EcommerceProductListing:()=>EcommerceProductListing,NotificationCenter:()=>NotificationCenter,UserManagementDashboard:()=>UserManagementDashboard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CollapsibleList_stories});var react=__webpack_require__("./node_modules/react/index.js"),Link=__webpack_require__("../react/src/CallsToAction/Link/index.js"),ProfilePic=__webpack_require__("../react/src/Communications/ProfilePic/index.js"),Icon=__webpack_require__("../react/src/Icon.js"),List=__webpack_require__("../react/src/List/List/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var CollapsibleList=function(param){var _param_width=param.width,width=void 0===_param_width?200:_param_width,_param_collpased=param.collpased,collpased=void 0===_param_collpased||_param_collpased,header=param.header,children=param.children,_param_hasDivider=param.hasDivider,hasDivider=void 0!==_param_hasDivider&&_param_hasDivider,_useState=_sliced_to_array((0,react.useState)(collpased),2),isOpen=_useState[0],setIsOpen=_useState[1];return react.createElement("div",{className:"transition-all duration-300 ease-in-out"},react.createElement("div",{className:"flex justify-between items-center cursor-pointer p-4 bg-gray-100 rounded-md w-".concat(width,"\ntransition-all duration-300 ease-in-out"),onClick:function(){setIsOpen(!isOpen)},style:{overflow:"hidden"}},react.createElement("h3",{className:"font-semibold text-lg"},header),react.createElement(Icon.A,{type:isOpen?"chevronDown":"chevronLeft",variant:"outline"})),react.createElement("div",{className:"transition-all duration-300 ease-in-out ".concat(isOpen?"max-h-screen":"max-h-0"," overflow-hidden")},react.createElement(List.A,{hasDivider},children)))};const CollapsibleList_CollapsibleList=CollapsibleList;CollapsibleList.__docgenInfo={description:"",methods:[],displayName:"CollapsibleList",props:{width:{defaultValue:{value:"200",computed:!1},required:!1},collpased:{defaultValue:{value:"true",computed:!1},required:!1},hasDivider:{defaultValue:{value:"false",computed:!1},required:!1}}};var ListItem=__webpack_require__("../react/src/List/List/ListItem.js");const CollapsibleList_stories={title:"List/Collapsible List",component:CollapsibleList_CollapsibleList,subcomponents:{ListItem:ListItem.A},tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A collapsible list component that reuses the List and ListItem components."}}}};var Template=function(args){return react.createElement(CollapsibleList_CollapsibleList,args)},UserManagementDashboard=Template.bind({});UserManagementDashboard.args={hasDivider:!0,header:"User Management",children:react.createElement(react.Fragment,null,react.createElement(ListItem.A,{label:"John Doe",sublabel:"Admin",leftContent:react.createElement(ProfilePic.A,{label:"JD",shortName:!0}),rightContent:react.createElement("div",null,react.createElement(Link.A,{label:"Edit",link:"#"})," / ",react.createElement(Link.A,{label:"Delete",link:"#"}))}),react.createElement(ListItem.A,{label:"Jane Smith",sublabel:"Editor",leftContent:react.createElement(ProfilePic.A,{label:"VR",shortName:!0}),rightContent:react.createElement("div",null,react.createElement(Link.A,{label:"Edit",link:"#"})," / ",react.createElement(Link.A,{label:"Delete",link:"#"}))}),react.createElement(ListItem.A,{label:"Mark Johnson",sublabel:"Viewer",leftContent:react.createElement(ProfilePic.A,{label:"MJ",shortName:!0}),rightContent:react.createElement("div",null,react.createElement(Link.A,{label:"Edit",link:"#"})," / ",react.createElement(Link.A,{label:"Delete",link:"#"}))}))};var EcommerceProductListing=Template.bind({});EcommerceProductListing.args={hasDivider:!0,header:"Product List",children:react.createElement(react.Fragment,null,react.createElement(ListItem.A,{label:"Wireless Headphones",sublabel:"High-quality noise-cancelling headphones",leftContent:react.createElement(Icon.A,{type:"headphone",variant:"filled",size:"24",color:"green"}),rightContent:react.createElement("div",null,react.createElement("span",{className:"text-sm font-medium text-gray-700"},"$150"),react.createElement(Link.A,{label:"Add to Cart",link:"#",overwriteClass:"pl-2 hover:underline"}))}),react.createElement(ListItem.A,{label:"Smart Watch",sublabel:"Water-resistant with health tracking features",leftContent:react.createElement(Icon.A,{type:"watch",variant:"filled",size:"24",color:"green"}),rightContent:react.createElement("div",null,react.createElement("span",{className:"text-sm font-medium text-gray-700"},"$200"),react.createElement(Link.A,{label:"Add to Cart",link:"#",overwriteClass:"pl-2 hover:underline"}))}),react.createElement(ListItem.A,{label:"Bluetooth Speaker",sublabel:"Portable speaker with high-quality sound",leftContent:react.createElement(Icon.A,{type:"speaker",variant:"filled",size:"24",color:"green"}),rightContent:react.createElement("div",null,react.createElement("span",{className:"text-sm font-medium text-gray-700"},"$75"),react.createElement(Link.A,{label:"Add to Cart",link:"#",overwriteClass:"pl-2 hover:underline"}))}))};var NotificationCenter=Template.bind({});NotificationCenter.args={hasDivider:!0,header:"Notifications",children:react.createElement(react.Fragment,null,react.createElement(ListItem.A,{label:"System Update",sublabel:"A new system update is available. Please update your software.",leftContent:react.createElement("div",{className:"h-4 w-4 bg-blue-500 rounded-full"}),rightContent:react.createElement("div",null,react.createElement("span",{className:"text-xs text-gray-500"},"2 hours ago"),react.createElement(Link.A,{label:"Read More",link:"#",overwriteClass:"pl-2 hover:underline"}))}),react.createElement(ListItem.A,{label:"Password Expiry",sublabel:"Your password will expire in 3 days. Please update it.",leftContent:react.createElement("div",{className:"h-4 w-4 bg-red-500 rounded-full"}),rightContent:react.createElement("div",null,react.createElement("span",{className:"text-xs text-gray-500"},"1 day ago"),react.createElement(Link.A,{label:"Update Password",link:"#",overwriteClass:"pl-2 hover:underline"}))}),react.createElement(ListItem.A,{label:"New Message",sublabel:"You have received a new message from John Doe.",leftContent:react.createElement("div",{className:"h-4 w-4 bg-green-500 rounded-full"}),rightContent:react.createElement("div",null,react.createElement("span",{className:"text-xs text-gray-500"},"30 mins ago"),react.createElement(Link.A,{label:"View Message",link:"#",overwriteClass:"pl-2 hover:underline"}))}))};const __namedExportsOrder=["UserManagementDashboard","EcommerceProductListing","NotificationCenter"];UserManagementDashboard.parameters={...UserManagementDashboard.parameters,docs:{...UserManagementDashboard.parameters?.docs,source:{originalSource:"args => <CollapsibleList {...args} />",...UserManagementDashboard.parameters?.docs?.source}}},EcommerceProductListing.parameters={...EcommerceProductListing.parameters,docs:{...EcommerceProductListing.parameters?.docs,source:{originalSource:"args => <CollapsibleList {...args} />",...EcommerceProductListing.parameters?.docs?.source}}},NotificationCenter.parameters={...NotificationCenter.parameters,docs:{...NotificationCenter.parameters?.docs,source:{originalSource:"args => <CollapsibleList {...args} />",...NotificationCenter.parameters?.docs?.source}}}},"../react/src/CallsToAction/Link/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtLink});var react=__webpack_require__("./node_modules/react/index.js");function TwixtLink(param){var _param_background=param.background,background=void 0===_param_background?"":_param_background,_param_color=param.color,color=void 0===_param_color?"text-blue-500":_param_color,_param_link=param.link,link=void 0===_param_link?"#":_param_link,onClick=param.onClick,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,label=param.label,leftIcon=param.leftIcon,rightIcon=param.rightIcon,rightContent=param.rightContent,target=param.target;return label?react.createElement("a",{href:link,className:"inline-flex items-center gap-4 ".concat(background," ").concat(color," ").concat(overwriteClass),onClick,target},leftIcon&&react.createElement("span",null,leftIcon),react.createElement("span",null,label),rightIcon&&react.createElement("span",null,rightIcon),rightContent&&react.createElement("span",null,rightContent)):null}TwixtLink.__docgenInfo={description:"",methods:[],displayName:"TwixtLink",props:{background:{defaultValue:{value:"''",computed:!1},required:!1},color:{defaultValue:{value:"'text-blue-500'",computed:!1},required:!1},link:{defaultValue:{value:"'#'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/Communications/ProfilePic/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ProfilePic_ProfilePic});var react=__webpack_require__("./node_modules/react/index.js");function ProfilePic(param){var label=param.label,_param_shortName=param.shortName;return label&&(void 0!==_param_shortName&&_param_shortName)?react.createElement("div",{className:"h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white"},label):react.createElement(react.Fragment,null,"ProfilePic goes here.")}const ProfilePic_ProfilePic=ProfilePic;ProfilePic.__docgenInfo={description:"",methods:[],displayName:"ProfilePic",props:{shortName:{defaultValue:{value:"false",computed:!1},required:!1}}}},"../react/src/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/node_modules/react-icons/fa/index.mjs"),react_icons_ci__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/node_modules/react-icons/ci/index.mjs"),react_icons_pi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/node_modules/react-icons/pi/index.mjs"),iconTypes={notification:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jNV,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.CzP},terminal:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.iuJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTerminalSlash},help:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.gZZ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaQuestionCircleSlash},magnifier:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KSO,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.onj},hamburger:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OXb,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hcp},verticalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v},horizontalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM},pin:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.LBY,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaThumbtackSlash},delete:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.qbC,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.RCe},add:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OiG,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hw0},chevronUp:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs},chevronDown:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3},chevronLeft:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj},chevronRight:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T},note:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie},pencil:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp},refresh:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Swo,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KP4},learn:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.vd0,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.hko},monitor:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Wqt,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaDesktopAlt},import:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR},export:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn},filter:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.YsJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFilterAlt},userAvatar:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.NBi},clipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N},checkedClipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA},headphone:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.tLl,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_2__.WLS},watch:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.CqA,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.V3h},speaker:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.e8f,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.lvJ},speakerSlashed:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.$3T,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.TVP}};function TwixtIcon(param){var _iconTypes_type,_iconTypes_type1,_param_type=param.type,type=void 0===_param_type?"notification":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"filled":_param_variant,_param_size=param.size,size=void 0===_param_size?12:_param_size,_param_color=param.color,color=void 0===_param_color?"black":_param_color;if(!iconTypes[type]||!(null===(_iconTypes_type=iconTypes[type])||void 0===_iconTypes_type?void 0:_iconTypes_type[variant]))return null;var IconComponent=(null===(_iconTypes_type1=iconTypes[type])||void 0===_iconTypes_type1?void 0:_iconTypes_type1[variant])||iconTypes.notification[filled];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{size,color})}TwixtIcon.__docgenInfo={description:"",methods:[],displayName:"TwixtIcon",props:{type:{defaultValue:{value:"'notification'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},size:{defaultValue:{value:"12",computed:!1},required:!1},color:{defaultValue:{value:"'black'",computed:!1},required:!1}}}},"../react/src/List/List/ListContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ListContext,T:()=>useListContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ListContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),useListContext=function(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ListContext);if(!context)throw new Error("useListContext must be used within a ListProvider");return context}},"../react/src/List/List/ListItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ListContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/src/List/List/ListContext.js"),ListItem=function(param){var label=param.label,sublabel=param.sublabel,leftContent=param.leftContent,rightContent=param.rightContent,hasDivider=(0,_ListContext__WEBPACK_IMPORTED_MODULE_1__.T)().hasDivider;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center ".concat(hasDivider?"py-4":"py-2")},leftContent&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"mr-4"},leftContent),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex-1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-sm font-medium"},label),sublabel&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-xs text-gray-500"},sublabel)),rightContent&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"ml-4"},rightContent))};const __WEBPACK_DEFAULT_EXPORT__=ListItem;ListItem.__docgenInfo={description:"",methods:[],displayName:"ListItem"}},"../react/src/List/List/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>List_List});var react=__webpack_require__("./node_modules/react/index.js"),ListContext=__webpack_require__("../react/src/List/List/ListContext.js"),List=function(param){var _param_hasDivider=param.hasDivider,hasDivider=void 0!==_param_hasDivider&&_param_hasDivider,_param_header=param.header,header=void 0===_param_header?null:_param_header,children=param.children;return react.createElement(ListContext.E.Provider,{value:{hasDivider}},react.createElement("div",{className:"list-container"},header&&react.createElement("div",{className:"list-header mb-2 font-bold"},header),react.createElement("div",{className:"list-items ".concat(hasDivider?"divide-y divide-gray-200":"")},children)))};const List_List=List;List.__docgenInfo={description:"",methods:[],displayName:"List",props:{hasDivider:{defaultValue:{value:"false",computed:!1},required:!1},header:{defaultValue:{value:"null",computed:!1},required:!1}}}}}]);