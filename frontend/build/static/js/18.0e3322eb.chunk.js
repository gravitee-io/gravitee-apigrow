(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1612:function(e,a,t){"use strict";var o=t(71);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t(0)),r=(0,o(t(97)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),n.default.createElement("g",null,n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),n.default.createElement("path",{d:"M16.59 7.58L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}))),"CheckCircleOutlined");a.default=r},1749:function(e,a,t){"use strict";t.r(a);var o=t(16),n=t(17),r=t(19),l=t(18),i=t(20),c=t(0),d=t.n(c),s=t(56),m=t(607),p=t(188),u=t.n(p),g=t(595),b=t(890),h=t(1612),v=t.n(h),f=t(241),y=t.n(f),x=t(9),C=t(39).a.bodyContainer,k=function(e){return{bodyContainer:C,profileTitle:{fontSize:"36px",display:"table",margin:"auto",paddingTop:"30px",paddingBottom:"0px",color:"rgb(50, 65, 87)",fontWeight:"bold"},accountSection:{border:"1px solid rgb(234, 238, 251)",borderRadius:"4px",padding:"10px",height:"auto",backgroundColor:"#fff",boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04)",width:"517.5px",margin:"auto",marginBottom:"5px",textAlign:"center"},accountSectionTitle:{fontSize:"20px",color:"#324157"},accountForm:{border:"1px solid rgb(234, 238, 251)",borderRadius:"4px",padding:"24px",height:"auto",marginBottom:"50px",width:"490px",backgroundColor:"#fff",boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04)",margin:"auto"},accountFormContainer:{display:"grid",margin:"auto",width:"220px"},teamMemberForm:{border:"1px solid rgb(234, 238, 251)",borderRadius:"4px",padding:"24px",height:"auto",marginBottom:"50px",width:"490px",backgroundColor:"#fff",boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04)",margin:"auto"},teamMemberFormContainer:{marginLeft:"40px",width:"auto",display:"grid",margin:"auto"},loading:{marginTop:"20px",marginBottom:"20px",marginLeft:"-10px"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},profileGlobalContainer:{display:"flex",width:"100%",overflow:"auto"},profileContainer:{margin:"auto"},dense:{marginTop:16},menu:{width:200},margin:{margin:"20px"},button:{margin:"16px",width:"55px",height:"56px",minWidth:"0px"},buttonSend:{margin:"16px",width:"190px",minWidth:"0px",backgroundColor:"#324157"},chipContainer:{margin:"auto",paddingTop:"15px"},chipDone:{backgroundColor:"#43c56b",color:"white"},chipPending:{backgroundColor:"#bd0c25e6",color:"white"},iconPending:{color:"white"},iconDone:{color:"white"},validateTextSuccess:{textAlign:"-webkit-center",marginTop:"10px"},validateTextError:{textAlign:"-webkit-center",marginTop:"10px",width:"200px",margin:"auto"},containerText:{textAlign:"-webkit-center"},validateLoading:{margin:"auto",textAlign:"-webkit-center"},sendIcon:{marginLeft:"5px"},sendText:{marginTop:"15px",marginBottom:"unset"}}},S=t(185),E=t(166),O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(r.a)(this,Object(l.a)(a).call(this,e))).sendEmail=function(){t.setState({validationLoading:!0}),S.a.send().then((function(e){var a=e.message;t.setState({validationSent:!0,validationLoading:!1,validationMessage:a,validationError:null})})).catch((function(e){t.setState({validationSent:!1,validationLoading:!1,validationMessage:null,validationError:e.response.data.message})}))},t.state={firstname:"",lastname:"",username:"",validated:!1,validationSent:!1,validationLoading:!1,validationMessage:null,validationError:null,changeEmail:!0},t.inputFocus=null,t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){this.getCurrentUser()}},{key:"onClickFocusEmail",value:function(){var e=this;this.setState({changeEmail:!1},(function(){return e.setFocus()}))}},{key:"getCurrentUser",value:function(){var e=this;E.a.getCurrentUser().then((function(a){var t=a.firstname,o=a.lastname,n=a.username,r=a.isValidated;e.setState({firstname:t,lastname:o,username:n,validated:r})})).catch((function(){s.Notification.error({title:"Error",message:"An error occurred while retrieving user data."})}))}},{key:"setFocus",value:function(){this.inputFocus.focus()}},{key:"disableInput",value:function(){this.setState({changeEmail:!0})}},{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state,o=t.firstname,n=t.lastname,r=t.username,l=t.changeEmail,i=t.validated,c=t.validationError,p=t.validationLoading,h=t.validationMessage,f=t.validationSent;return d.a.createElement("div",{className:"".concat(a.profileGlobalContainer," ").concat(a.bodyContainer)},d.a.createElement("div",{className:a.profileContainer},d.a.createElement("div",{className:a.accountSection},d.a.createElement("span",{className:a.accountSectionTitle},"Account")),d.a.createElement("form",{className:a.accountForm},d.a.createElement("div",{className:a.accountFormContainer},d.a.createElement(m.a,{disabled:!0,id:"outlined-helperText",label:"Firstname",value:o||"",className:a.textField,margin:"normal",variant:"outlined"}),d.a.createElement(m.a,{disabled:!0,id:"outlined-helperText",label:"Lastname",value:n||"",className:a.textField,margin:"normal",variant:"outlined"}),d.a.createElement(m.a,{disabled:l,id:"outlined-helperText",label:"Email",onBlur:function(){return e.disableInput()},inputRef:function(a){return e.inputFocus===a},value:r||"",className:a.textField,margin:"normal",variant:"outlined"}),""!==o&&d.a.createElement("div",{className:a.chipContainer},i?d.a.createElement(b.a,{className:a.chipDone,icon:d.a.createElement(v.a,{className:a.iconDone}),label:"Account validated"}):d.a.createElement(b.a,{className:a.chipPending,icon:d.a.createElement(y.a,{className:a.iconPending}),label:"Account not validated"})),!i&&!f&&d.a.createElement("div",{className:a.validateLoading},p&&d.a.createElement(s.Loading,{className:a.loading}),!p&&!c&&d.a.createElement(d.a.Fragment,null,d.a.createElement("p",{className:a.sendText},"Send the verification mail :","  "),d.a.createElement(g.a,{variant:"contained",color:"primary",className:a.buttonSend,onClick:this.sendEmail},"Send",d.a.createElement(u.a,{className:a.sendIcon})))),!i&&h&&d.a.createElement("div",{className:a.containerText},d.a.createElement("strong",{className:a.validateTextSuccess},h)," ","Check your spam if you don't see it in your inbox."),!i&&c&&d.a.createElement("strong",{className:a.validateTextError},c)))))}}]),a}(c.Component);a.default=Object(x.a)(k)(O)},890:function(e,a,t){"use strict";var o=t(1),n=t(2),r=t(0),l=(t(11),t(8)),i=t(176),c=Object(i.a)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),d=t(9),s=t(21),m=t(14),p=t(13),u=t(173);function g(e){return"Backspace"===e.key||"Delete"===e.key}var b=r.forwardRef((function(e,a){var t=e.avatar,i=e.classes,d=e.className,s=e.clickable,b=e.color,h=void 0===b?"default":b,v=e.component,f=e.deleteIcon,y=e.disabled,x=void 0!==y&&y,C=e.icon,k=e.label,S=e.onClick,E=e.onDelete,O=e.onKeyDown,w=e.onKeyUp,j=e.size,T=void 0===j?"medium":j,N=e.variant,L=void 0===N?"default":N,F=Object(n.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),I=r.useRef(null),R=Object(m.a)(I,a),$=function(e){e.stopPropagation(),E&&E(e)},z=!(!1===s||!S)||s,P="small"===T,D=v||(z?u.a:"div"),M=D===u.a?{component:"div"}:{},A=null;if(E){var B=Object(l.a)("default"!==h&&("default"===L?i["deleteIconColor".concat(Object(p.a)(h))]:i["deleteIconOutlinedColor".concat(Object(p.a)(h))]),P&&i.deleteIconSmall);A=f&&r.isValidElement(f)?r.cloneElement(f,{className:Object(l.a)(f.props.className,i.deleteIcon,B),onClick:$}):r.createElement(c,{className:Object(l.a)(i.deleteIcon,B),onClick:$})}var K=null;t&&r.isValidElement(t)&&(K=r.cloneElement(t,{className:Object(l.a)(i.avatar,t.props.className,P&&i.avatarSmall,"default"!==h&&i["avatarColor".concat(Object(p.a)(h))])}));var U=null;return C&&r.isValidElement(C)&&(U=r.cloneElement(C,{className:Object(l.a)(i.icon,C.props.className,P&&i.iconSmall,"default"!==h&&i["iconColor".concat(Object(p.a)(h))])})),r.createElement(D,Object(o.a)({role:z||E?"button":void 0,className:Object(l.a)(i.root,d,"default"!==h&&[i["color".concat(Object(p.a)(h))],z&&i["clickableColor".concat(Object(p.a)(h))],E&&i["deletableColor".concat(Object(p.a)(h))]],"default"!==L&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[h]],x&&i.disabled,P&&i.sizeSmall,z&&i.clickable,E&&i.deletable),"aria-disabled":!!x||void 0,tabIndex:z||E?0:void 0,onClick:S,onKeyDown:function(e){e.currentTarget===e.target&&g(e)&&e.preventDefault(),O&&O(e)},onKeyUp:function(e){e.currentTarget===e.target&&(E&&g(e)?E(e):"Escape"===e.key&&I.current&&I.current.blur()),w&&w(e)},ref:R},M,F),K||U,r.createElement("span",{className:Object(l.a)(i.label,P&&i.labelSmall)},k),A)}));a.a=Object(d.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(s.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(s.b)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(s.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(s.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(s.b)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(s.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(s.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.c)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(s.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(s.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(s.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(s.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(b)}}]);
//# sourceMappingURL=18.0e3322eb.chunk.js.map