(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[0],{11:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},12:function(e,t,n){e.exports={Header:"Header_Header__2PA5r",Logo:"Header_Logo__29ViQ",ButtonToggler:"Header_ButtonToggler__2irqb"}},14:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},15:function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},25:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},26:function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},27:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2O1l9"}},28:function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},29:function(e,t,n){e.exports={Modal:"Modal_Modal__2WBTT"}},31:function(e,t,n){e.exports={Loader:"Spinner_Loader__2hakv",load2:"Spinner_load2__XNvqU"}},38:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(24),i=n.n(c),o=(n(38),n(3)),d=n(4),l=n(6),u=n(5),j=n(9),b=n.n(j),h=function(e){return e.children},p=n(12),g=n.n(p),O=n(14),x=n.n(O),_=function(e){var t=e.active,n=e.link,a=e.children;return Object(r.jsx)("li",{className:x.a.NavigationItem,children:Object(r.jsx)("a",{className:t?x.a.active:null,href:n,children:a})})},v=n(25),f=n.n(v),m=function(){return Object(r.jsxs)("ul",{className:f.a.NavigationItems,children:[Object(r.jsx)(_,{link:"/",active:"true",children:"BurgerBuilder"}),Object(r.jsx)(_,{children:"Checkout"})]})},B=function(){return Object(r.jsx)("nav",{children:Object(r.jsx)(m,{})})},C=n.p+"static/media/burger-logo.ec69c7f6.png",S=n(26),y=n.n(S),N=function(e){var t=e.openedSideDrawer;return Object(r.jsx)("div",{className:y.a.Logo,children:Object(r.jsx)("img",{src:C,alt:"logo burger",style:{transform:t?"rotateZ(-180deg)":"rotateZ(0deg)"}})})},k=function(e){var t=e.clickedLogo,n=e.openedSideDrawer;return Object(r.jsxs)("header",{className:g.a.Header,children:[Object(r.jsx)("div",{className:g.a.ButtonToggler,onClick:t,children:"Menu"}),Object(r.jsx)("div",{className:g.a.Logo,children:Object(r.jsx)(N,{openedSideDrawer:n})}),Object(r.jsx)(B,{})]})},w=n(11),T=n.n(w),L=n(27),I=n.n(L),D=function(e){var t=e.show,n=e.children,a=e.clicked;return t?Object(r.jsx)("div",{className:I.a.Backdrop,onClick:a,children:n}):null},P=function(e){var t=e.opened,n=e.closed;return Object(r.jsxs)(h,{children:[Object(r.jsx)(D,{show:t,clicked:n}),Object(r.jsxs)("div",{className:"".concat(T.a.SideDrawer," ").concat(t?T.a.Open:T.a.Close),children:[Object(r.jsx)("div",{className:T.a.Logo,children:Object(r.jsx)(N,{})}),Object(r.jsx)(B,{})]})]})},M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isVisibleSideDrawer:!1},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{isVisibleSideDrawer:!e.isVisibleSideDrawer}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(k,{clickedLogo:this.sideDrawerToggleHandler,openedSideDrawer:this.state.isVisibleSideDrawer}),Object(r.jsx)(P,{opened:this.state.isVisibleSideDrawer,closed:this.sideDrawerToggleHandler}),Object(r.jsx)("main",{children:this.props.children})]})}}]),n}(a.Component),A=n(10),H=n(8),F=n.n(H),q=function(e){var t=e.label,n=e.added,a=e.removed,s=e.disabledNote;return Object(r.jsxs)("div",{className:F.a.BuildControl,children:[Object(r.jsx)("div",{className:F.a.Label,children:t}),Object(r.jsx)("button",{className:F.a.More,onClick:n,children:"more"}),Object(r.jsx)("button",{className:F.a.Less,disabled:s,onClick:a,children:"less"})]})},U=[{label:"Salad",type:"salad"},{label:"Meat",type:"meat"},{label:"Chesse",type:"chesse"},{label:"Onion",type:"onion"},{label:"Bacon",type:"bacon"}],R=function(e){var t=e.ingredientAdded,n=e.ingredientRemoved,a=e.disabled,s=e.totalPrice,c=e.canPurchase,i=e.order;return Object(r.jsxs)("div",{className:b.a.TextCenter,children:[Object(r.jsxs)("p",{className:b.a.TextCenter,children:["Total price: ",Object(r.jsx)("strong",{children:s})]}),U.map((function(e){return Object(r.jsx)(q,{added:function(){return t(e.type)},removed:function(){return n(e.type)},label:e.label,type:e.type,disabledNote:a[e.type]},e.label)})),Object(r.jsx)("button",{className:F.a.OrderButton,disabled:c,onClick:i,children:"Order burger"})]})},X=n(32),V=n(7),Y=n.n(V),J=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-top":e=Object(r.jsxs)("div",{className:Y.a.BreadTop,children:[Object(r.jsx)("div",{className:Y.a.Seeds1}),Object(r.jsx)("div",{className:Y.a.Seeds2})]});break;case"bread-bottom":e=Object(r.jsx)("div",{className:Y.a.BreadBottom});break;case"meat":e=Object(r.jsx)("div",{className:Y.a.Meat});break;case"chesse":e=Object(r.jsx)("div",{className:Y.a.Cheese});break;case"salad":e=Object(r.jsx)("div",{className:Y.a.Salad});break;case"onion":e=Object(r.jsx)("div",{className:Y.a.Onion});break;case"bacon":e=Object(r.jsx)("div",{className:Y.a.Bacon});break;default:e=null}return e}}]),n}(a.Component),K=n(28),Z=n.n(K),E=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(X.a)(Array(Math.max(0,e.ingredients[t]))).map((function(e,n){return Object(r.jsx)(J,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{className:b.a.TextCenter,children:"no ingredients"})),Object(r.jsxs)("div",{className:Z.a.Burger,children:[Object(r.jsx)(J,{type:"bread-top"}),t,Object(r.jsx)(J,{type:"bread-bottom"})]})},W=n(29),z=n.n(W),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){var e=this.props,t=e.show,n=e.modalClose,a=e.children;return Object(r.jsxs)(h,{children:[Object(r.jsx)(D,{show:t,clicked:n}),Object(r.jsx)("div",{className:z.a.Modal,style:{transform:t?"translateY(0)":"translateY(-1000px)"},children:a}),";"]})}}]),n}(a.Component),Q=n(15),$=n.n(Q),ee=function(e){var t=e.children,n=e.clicked,a=e.btnType;return Object(r.jsx)("button",{className:[$.a.Button,$.a[a]].join(" "),onClick:n,children:t})},te=function(e){var t=e.ingredients,n=e.purchaseCancelled,a=e.purchaseProceed,s=e.price,c=Object.keys(t).map((function(e){return Object(r.jsxs)("li",{children:[e,": ",t[e]]},e)}));return Object(r.jsxs)(h,{children:[Object(r.jsx)("h3",{children:"Your order: "}),Object(r.jsx)("ul",{style:{listStyleType:"none",paddingLeft:"0"},children:c}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total price: ",s]})}),Object(r.jsx)(ee,{btnType:"Danger",clicked:n,children:"CANCEL"}),Object(r.jsx)(ee,{btnType:"Success",clicked:a,children:"CONTINUE"})]})},ne=n(30),re=n.n(ne).a.create({baseURL:"https://react-burger-701-default-rtdb.firebaseio.com/"}),ae=n(31),se=n.n(ae),ce=function(){return Object(r.jsx)("div",{className:se.a.Loader})},ie={meat:2,salad:.5,chesse:1,onion:.4,bacon:.9},oe=function(e,t){return function(n){Object(l.a)(s,n);var a=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null,request:null,response:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.requestInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.responseInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.requestInterceptor),t.interceptors.response.eject(this.responseInterceptor)}},{key:"render",value:function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(G,{show:this.state.error,modalClose:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(A.a)({},this.props)),";"]})}}]),s}(a.Component)}(function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:null,totalPrice:"",canPurchase:!1,purchasing:!1,loading:!1,error:!1},e.ingredientAdd=function(t){var n=e.state.ingredients[t]+1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var a=ie[t],s=e.state.totalPrice,c=parseFloat(a+s).toFixed(2);e.setState({ingredients:r,totalPrice:Number(c)}),e.updatePurchaseState(r)},e.ingredientRemove=function(t){var n=e.state.ingredients[t]-1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var a=ie[t],s=e.state.totalPrice,c=parseFloat(s-a).toFixed(2);e.setState({ingredients:r,totalPrice:Number(c)}),e.updatePurchaseState(r)},e.updatePurchaseState=function(t){e.setState({canPurchase:Object.values(t).some((function(e){return e}))})},e.purchase=function(){e.setState({purchasing:!0})},e.purchaseCancel=function(){e.setState({purchasing:!1})},e.purchaseContinue=function(){e.setState({loading:!0});var t={ingredients:e.state.ingredients,price:e.state.totalPrice,customer:{name:"Marcin Gromek",address:{street:"teststreet",zipCode:"00-3323",country:"Poland"},email:"test@test.com"},deliveryMethod:"fast"};re.post("/orders.json",t).then((function(t){e.setState({loading:!1,purchasing:!1}),console.log(t)})).catch((function(t){e.setState({loading:!1,purchasing:!1})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;re.get("/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?Object(r.jsx)("p",{style:{marginTop:"50px",textAlign:"center"},children:"ingredients can't be loaded"}):Object(r.jsx)(ce,{});return this.state.ingredients&&(a=Object(r.jsxs)(h,{children:[Object(r.jsx)(E,{ingredients:this.state.ingredients}),Object(r.jsx)(R,{ingredientAdded:this.ingredientAdd,ingredientRemoved:this.ingredientRemove,disabled:e,totalPrice:this.state.totalPrice,canPurchase:!this.state.canPurchase,order:this.purchase})]}),n=Object(r.jsx)(te,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancel,purchaseProceed:this.purchaseContinue,price:this.state.totalPrice})),this.state.loading&&(n=Object(r.jsx)(ce,{})),Object(r.jsxs)(h,{children:[Object(r.jsx)(G,{show:this.state.purchasing,modalClose:this.purchaseCancel,children:n}),a]})}}]),n}(a.Component),re),de=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)(M,{children:Object(r.jsx)(oe,{})})}}]),n}(a.Component),le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(de,{})}),document.getElementById("root")),le()},7:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Onion:"BurgerIngredient_Onion__1vjxT",Bacon:"BurgerIngredient_Bacon__1KK6n"}},8:function(e,t,n){e.exports={BuildControl:"BurgerControl_BuildControl__2dY5M",Label:"BurgerControl_Label__2bTIX",Less:"BurgerControl_Less__1Zoe8",More:"BurgerControl_More__15bc5",OrderButton:"BurgerControl_OrderButton__3KnM6",enable:"BurgerControl_enable__1LxsX"}},9:function(e,t,n){e.exports={TextCenter:"App_TextCenter__1OttC"}}},[[57,1,2]]]);
//# sourceMappingURL=main.28287e4c.chunk.js.map