(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__1eshH",Logo:"Toolbar_Logo__1uoQc",DesktopOnly:"Toolbar_DesktopOnly__3BD4p"}},13:function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__Bv7Ns",active:"NavigationItem_active__rL816"}},14:function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__2NjDp",OrderButton:"BuildControls_OrderButton__3LmuU",enable:"BuildControls_enable__277J1"}},15:function(e,t,a){e.exports={Button:"Button_Button__1_jjz",Success:"Button_Success__2Y9-R",Danger:"Button_Danger__38izs"}},23:function(e,t,a){e.exports={Content:"Layout_Content__xmOoC"}},24:function(e,t,a){e.exports={Logo:"Logo_Logo__W60iz"}},25:function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},26:function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__3pBzA"}},27:function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3U41B"}},28:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__1wvQo"}},29:function(e,t,a){e.exports={Burger:"Burger_Burger__1dh52"}},30:function(e,t,a){e.exports={Modal:"Modal_Modal__1vpXU"}},32:function(e,t,a){e.exports={Loader:"Spinner_Loader__3oPtP",load2:"Spinner_load2__3Kxfc"}},34:function(e,t,a){e.exports=a(75)},39:function(e,t,a){},7:function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__aUAYF",BreadTop:"BurgerIngredient_BreadTop__3gh7L",Seeds1:"BurgerIngredient_Seeds1__3u0q8",Seeds2:"BurgerIngredient_Seeds2__2YlxL",Meat:"BurgerIngredient_Meat__9dt0z",Cheese:"BurgerIngredient_Cheese__VdYt5",Salad:"BurgerIngredient_Salad__un8aY",Bacon:"BurgerIngredient_Bacon__3QRfR"}},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a.n(o),i=(a(39),a(1)),c=a(2),s=a(4),u=a(3),d=a(5),m=function(e){return e.children},p=a(23),h=a.n(p),g=a(10),_=a.n(g),f=a(24),b=a.n(f),v=a(25),E=a.n(v),C=function(e){return r.a.createElement("div",{className:b.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:E.a,alt:"MyBurger"}))},y=a(26),B=a.n(y),k=a(13),w=a.n(k),O=function(e){return r.a.createElement("li",{className:w.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?w.a.active:null},e.children))},j=function(){return r.a.createElement("ul",{className:B.a.NavigationItems},r.a.createElement(O,{link:"#",active:!0},"BurgerBuilder"),r.a.createElement(O,{link:"#"},"Checkout"))},S=a(27),N=a.n(S),D=function(e){return r.a.createElement("div",{onClick:e.clicked,className:N.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},I=function(e){return r.a.createElement("header",{className:_.a.Toolbar},r.a.createElement(D,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:_.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",{className:_.a.DesktopOnly},r.a.createElement(j,null)))},L=a(28),x=a.n(L),T=function(e){return e.show?r.a.createElement("div",{className:x.a.Backdrop,onClick:e.clicked}):null},H=a(8),M=a.n(H),P=function(e){var t=[M.a.SideDrawer,M.a.Close];return e.open&&(t=[M.a.SideDrawer,M.a.Open]),r.a.createElement(m,null,r.a.createElement(T,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:M.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",null,r.a.createElement(j,null))))},U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerCloseHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(I,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),t}(n.Component),W=a(11),A=a(14),Y=a.n(A),R=a(9),z=a.n(R),q=function(e){return r.a.createElement("div",{className:z.a.BuildControl},r.a.createElement("div",{className:z.a.Label},e.label),r.a.createElement("button",{className:z.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:z.a.More,onClick:e.added},"More"))},J=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],F=function(e){return r.a.createElement("div",{className:Y.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),J.map(function(t){return r.a.createElement(q,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:Y.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},Q=a(33),K=a(29),V=a.n(K),X=a(7),Z=a.n(X),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Z.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Z.a.BreadTop},r.a.createElement("div",{className:Z.a.Seeds1}),r.a.createElement("div",{className:Z.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Z.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Z.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:Z.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:Z.a.Salad});break;default:e=null}return e}}]),t}(n.Component),G=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(Q.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement($,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add some ingredients")),r.a.createElement("div",{className:V.a.Burger},r.a.createElement($,{type:"bread-top"}),t,r.a.createElement($,{type:"bread-bottom"}))},ee=a(30),te=a.n(ee),ae=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(T,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),ne=a(15),re=a.n(ne),oe=function(e){return r.a.createElement("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},le=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary] WillUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.props.ingredients[t])});return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(oe,{btnType:"Danger",clicked:this.props.purchaseCanceled},"CANCEL"),r.a.createElement(oe,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(n.Component),ie=a(31),ce=a.n(ie).a.create({baseURL:"https://react-my-burger-ff638.firebaseio.com/"}),se=a(32),ue=a.n(se),de=function(){return r.a.createElement("div",{className:ue.a.Loader},"Loading...")},me={salad:.5,cheese:.4,meat:1.3,bacon:.7},pe=function(e,t){return function(a){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(d.a)(n,a),Object(c.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(ae,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)}(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(W.a)({},a.state.ingredients);n[e]=t;var r=me[e],o=a.state.totalPrice+r;a.setState({totalPrice:o,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e],n=t-1,r=Object(W.a)({},a.state.ingredients);r[e]=n;var o=me[e],l=a.state.totalPrice-o;a.setState({totalPrice:l,ingredients:r}),a.updatePurchaseState(r)},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchasecancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){a.setState({loading:!0});var e={ingredients:a.state.ingredients,price:a.state.totalPrice,customer:{name:"Sailesh",address:{street:"Mahanadi Vihar, Cuttack",zipCode:"753004",country:"India"},email:"saileshpatra10@gmail.com"},deliveryMethod:"fastest"};ce.post("/orders.json",e).then(function(e){a.setState({loading:!1,purchasing:!1})}).catch(function(e){a.setState({loading:!1,purchasing:!1})})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;ce.get("https://react-my-burger-ff638.firebaseio.com/ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(W.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null," Ingredients can't be loaded"):r.a.createElement(de,null);return this.state.ingredients&&(n=r.a.createElement(m,null,r.a.createElement(G,{ingredients:this.state.ingredients}),r.a.createElement(F,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice})),a=r.a.createElement(le,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCanceled:this.purchasecancelHandler,purchaseContinued:this.purchaseContinueHandler})),this.state.loading&&(a=r.a.createElement(de,null)),r.a.createElement(m,null,r.a.createElement(ae,{show:this.state.purchasing,modalClosed:this.purchasecancelHandler},a),n)}}]),t}(n.Component),ce),he=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,null,r.a.createElement(pe,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__1BsAb",Open:"SideDrawer_Open__1DJNY",Close:"SideDrawer_Close__rIP--",Logo:"SideDrawer_Logo__1r0nm"}},9:function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__3d4Le",Label:"BuildControl_Label__HZcWE",Less:"BuildControl_Less__16_CK",More:"BuildControl_More__2Wj6d"}}},[[34,2,1]]]);
//# sourceMappingURL=main.ba3c0b77.chunk.js.map