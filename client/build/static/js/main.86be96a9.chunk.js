(this.webpackJsonpwhatsthetea=this.webpackJsonpwhatsthetea||[]).push([[0],{62:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(63),s=a.n(c),r=a(12),i=a(15),j=a(11),l=a(70),d=a(97),o=a(98),b=a(96),u=a(68),O=a(24),m=a(71),h=a(48),x="ADD_TO_CART",p="UPDATE_CART_QUANTITY",f="TOGGLE_CART",v=function(e,t){switch(t.type){case x:return Object(r.a)(Object(r.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(h.a)(e.cart),[t.purchasedItem])});case"ADD_MULTIPLE_TO_CART":return Object(r.a)(Object(r.a)({},e),{},{cart:[].concat(Object(h.a)(e.cart),Object(h.a)(t.purchasedItems))});case p:return Object(r.a)(Object(r.a)({},e),{},{cart:e.cart.map((function(e){return t._id===e._id&&(e.quantity=t.quantity),e}))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(r.a)(Object(r.a)({},e),{},{cartOpen:a.length>0,cart:a});case"CLEAR_CART":return Object(r.a)(Object(r.a)({},e),{},{cartOpen:!1,cart:[]});case f:return Object(r.a)(Object(r.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var g=a(1),N=["value"],_=Object(n.createContext)(),y=_.Provider,T=function(e){e.value;var t,a=Object(m.a)(e,N),c=(t={cart:[],cartOpen:!0},Object(n.useReducer)(v,t)),s=Object(O.a)(c,2),i=s[0],j=s[1];return Object(g.jsx)(y,Object(r.a)({value:[i,j]},a))},I=function(){return Object(n.useContext)(_)};function $(e){return Object(g.jsx)("section",{children:Object(g.jsx)("h1",{children:"This is the Account Settings Page"})})}function k(e){return Object(g.jsx)("section",{children:Object(g.jsx)("h1",{children:"This is the Login Page"})})}function q(e){return Object(g.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light pb-0",children:Object(g.jsxs)("div",{className:"container-fluid ps-4 align-items-end",children:[Object(g.jsx)(i.b,{to:"/",className:"navbar-brand fs-1",children:Object(g.jsxs)("p",{className:"title",children:["What's The Tea? ",Object(g.jsx)("i",{className:"fas fa-mug-hot"})]})}),Object(g.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(g.jsx)("span",{className:"navbar-toggler-icon"})}),Object(g.jsx)("div",{className:"collapse navbar-collapse justify-content-end align-items-end",id:"navbarNav",children:Object(g.jsxs)("ul",{className:"navbar-nav pe-3",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(i.b,{to:"/account",className:"nav-link p-3",href:"#account",children:"Account"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(i.b,{to:"/address",className:"nav-link p-3",href:"#account",children:"Address"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(i.b,{to:"/login",className:"nav-link p-3",href:"#account",children:"Sign In"})})]})})]})})}var w,C,S,A,D,E,R,F,P,L=a(91),U=a(25),M=a(99),W=Object(M.a)(w||(w=Object(U.a)(["\nquery checkout($cart: [PurchasedItemData]!) {\n  checkout(cart: $cart) {\n    session\n  } \n}\n"]))),Y=(Object(M.a)(C||(C=Object(U.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),Object(M.a)(S||(S=Object(U.a)(["\nquery allRestaurants{\n  allRestaurants{\n    name\n    location\n    tags\n    menu{\n      name\n      price\n    }\n  }\n}\n"]))),Object(M.a)(A||(A=Object(U.a)(["\nquery restaurants($searchTerm: String, $tag: String){\n  restaurants(searchTerm: $searchTerm, tag: $tag){\n    _id\n    name\n    description\n    logo\n  }\n}\n"])))),B=Object(M.a)(D||(D=Object(U.a)(["\nquery restaurant($_id: ID!){\n  restaurant(_id : $_id){\n    name\n    menu{\n      _id\n      name\n      description\n      image\n      price\n    }\n  }\n}\n"]))),G=Object(M.a)(E||(E=Object(U.a)(["\nquery menuItem($_id: ID!){\n  menuItem(_id: $_id){\n    _id\n    name\n    image\n    description\n    price\n    reviews{\n      user{\n        username\n        email\n        profileImg\n      }\n      content\n      rating\n    }\n  }\n}\n"])));function J(e){var t=Object(n.useState)([]),a=Object(O.a)(t,2),c=a[0],s=a[1],r=Object(L.a)(Y),j=Object(O.a)(r,2),l=j[0],d=j[1].data,o=Object(n.useState)(""),b=Object(O.a)(o,2),u=b[0],m=b[1];Object(n.useEffect)((function(){d&&d.restaurants&&s(d.restaurants)}),[d]),Object(n.useEffect)((function(){l({variables:{searchTerm:"",tag:""}})}),[]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),l({variables:{searchTerm:u,tag:""}})},children:[Object(g.jsxs)("p",{className:"control has-icons-right",children:[Object(g.jsx)("input",{type:"text",name:"text",placeholder:"What are you in the mood for...",className:"search-bar column input is-medium",value:u,onChange:function(e){var t=e.target;m(t.value)}}),Object(g.jsx)("span",{className:"icon is-small is-right",children:Object(g.jsx)("i",{className:"fas fa-mug-hot"})})]}),Object(g.jsx)("span",{className:"buttons is-centered",children:Object(g.jsx)("button",{className:"button is-info",children:"Search"})})]}),Object(g.jsx)("br",{}),c.map((function(e,t){return Object(g.jsx)(i.b,{to:"/menu/".concat(e._id),className:"card text-decoration-none",children:Object(g.jsx)("div",{className:"card-content",children:Object(g.jsxs)("div",{className:"media",children:[Object(g.jsx)("span",{className:"media-left",children:Object(g.jsx)("figure",{className:"image is-128x128",children:Object(g.jsx)("img",{src:e.logo,alt:"Placeholder img"})})}),Object(g.jsxs)("article",{className:"media-content",children:[Object(g.jsx)("p",{className:"title is-4",children:e.name}),Object(g.jsx)("p",{className:"content",children:e.description})]})]})})},t)}))]})}Object(M.a)(R||(R=Object(U.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Object(M.a)(F||(F=Object(U.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      order {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(M.a)(P||(P=Object(U.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var Q=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Success!"}),Object(g.jsx)("h2",{children:"Thank you for your purchase!"}),Object(g.jsx)("h2",{children:"You will now be redirected to the home page"})]})},z=a(67);function V(e){var t=Object(z.a)("pk_test_TYooMQauvdEDq54NiTphI7jx"),a=I(),c=Object(O.a)(a,2),s=c[0],r=c[1],i=Object(L.a)(W),j=Object(O.a)(i,2),l=j[0],d=j[1].data;return Object(n.useEffect)((function(){d&&t.then((function(e){e.redirectToCheckout({sessionId:d.checkout.session})}))}),[d]),Object(g.jsxs)("section",{children:[Object(g.jsx)("h1",{children:"This is a Test page that will be removed later"}),Object(g.jsx)("h1",{children:s.cartOpen?"true":"false"}),Object(g.jsx)("div",{onClick:function(){r({type:f})},children:"Click me to toggle!"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Cart"}),s.cart.map((function(e){return Object(g.jsxs)("section",{className:"border",children:[Object(g.jsxs)("div",{children:["name:",e.name]}),Object(g.jsxs)("div",{children:["price:",e.price]}),Object(g.jsxs)("div",{children:["quantity:",e.quantity]}),Object(g.jsxs)("div",{children:["quantity:",e._id]})]})}))]}),Object(g.jsx)("button",{onClick:function(){var e=[];s.cart.forEach((function(t){e.push({addon:t.addon,quantity:t.quantity,menuItem:t._id})})),l({variables:{cart:e}})},children:"Checkout"})]})}a(62);var H=a(92);function K(e){var t=I(),a=Object(O.a)(t,2),n=a[0],c=a[1],s=n.cart,l=Object(j.f)().restaurantId,d=Object(H.a)(B,{variables:{_id:l}}),o=d.loading,b=d.data;return o?Object(g.jsx)("h1",{children:"Loading ..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:b.restaurant.name}),b.restaurant.menu.map((function(e,t){return Object(g.jsx)("section",{className:"card",children:Object(g.jsxs)("div",{className:"card-content",children:[Object(g.jsxs)("div",{className:"media",children:[Object(g.jsx)("span",{className:"media-left",children:Object(g.jsx)("figure",{className:"image is-128x128",children:Object(g.jsx)("img",{src:e.image,alt:"Placeholder img"})})}),Object(g.jsxs)("article",{className:"media-content",children:[Object(g.jsx)("p",{className:"title is-4",children:e.name}),Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("p",{children:e.description}),Object(g.jsxs)("p",{children:["$",e.price]})]}),Object(g.jsxs)("div",{className:"rate",children:[Object(g.jsx)("input",{type:"radio",id:"star5",name:"rate",value:"5"}),Object(g.jsx)("label",{htmlFor:"star5",title:"text",children:"5 stars"}),Object(g.jsx)("input",{type:"radio",id:"star4",name:"rate",value:"4"}),Object(g.jsx)("label",{htmlFor:"star4",title:"text",children:"4 stars"}),Object(g.jsx)("input",{type:"radio",id:"star3",name:"rate",value:"3"}),Object(g.jsx)("label",{htmlFor:"star3",title:"text",children:"3 stars"}),Object(g.jsx)("input",{type:"radio",id:"star2",name:"rate",value:"2"}),Object(g.jsx)("label",{htmlFor:"star2",title:"text",children:"2 stars"}),Object(g.jsx)("input",{type:"radio",id:"star1",name:"rate",value:"1"}),Object(g.jsx)("label",{htmlFor:"star1",title:"text",children:"1 star"})]})]})]}),Object(g.jsxs)("footer",{className:"card-footer",children:[Object(g.jsx)("a",{href:"#",value:t,onClick:function(){return function(e){var t=Object(r.a)({},b.restaurant.menu[e]);console.log(t);var a=s.find((function(e){return e._id===t._id}));c(a?{type:p,_id:a._id,quantity:parseInt(a.quantity)+1}:{type:x,purchasedItem:Object(r.a)({quantity:1,addon:"no addon"},t)})}(t)},className:"button card-footer-item",children:"Add to cart"}),Object(g.jsx)(i.b,{to:"/fooditem/".concat(b.restaurant.name,"/").concat(e._id),href:"#",className:"button card-footer-item",children:"Whats the tea?"})]})]})},t)}))]})}function X(e){var t=Object(j.f)(),a=t.restaurant,n=t.foodItemId,c=Object(H.a)(G,{variables:{_id:n}}),s=c.loading,r=c.data;return s?Object(g.jsx)("h1",{children:"Loading ..."}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h1",{className:"is-centered",children:["The Tea On... ",r.menuItem.name," from ",a]}),r.menuItem.reviews.map((function(e,t){return Object(g.jsx)("section",{className:"card",children:Object(g.jsx)("div",{className:"card-content",children:Object(g.jsxs)("div",{className:"media",children:[Object(g.jsx)("span",{className:"media-left",children:Object(g.jsx)("figure",{className:"image is-128x128",children:Object(g.jsx)("img",{src:e.user.profileImg,alt:"Placeholder img"})})}),Object(g.jsxs)("article",{className:"media-content",children:[Object(g.jsxs)("p",{className:"title is-4",children:["posted by: ",e.user.username]}),Object(g.jsx)("p",{className:"content",children:e.content}),Object(g.jsxs)("div",{class:"rate",children:[Object(g.jsx)("input",{type:"radio",id:"star5",name:"rate",value:"5"}),Object(g.jsx)("label",{for:"star5",title:"text",children:"5 stars"}),Object(g.jsx)("input",{type:"radio",id:"star4",name:"rate",value:"4"}),Object(g.jsx)("label",{for:"star4",title:"text",children:"4 stars"}),Object(g.jsx)("input",{type:"radio",id:"star3",name:"rate",value:"3"}),Object(g.jsx)("label",{for:"star3",title:"text",children:"3 stars"}),Object(g.jsx)("input",{type:"radio",id:"star2",name:"rate",value:"2"}),Object(g.jsx)("label",{for:"star2",title:"text",children:"2 stars"}),Object(g.jsx)("input",{type:"radio",id:"star1",name:"rate",value:"1"}),Object(g.jsx)("label",{for:"star1",title:"text",children:"1 star"})]})]})]})})})}))]})}var Z=Object(l.a)({uri:"/graphql"}),ee=Object(u.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(r.a)(Object(r.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),te=new d.a({link:ee.concat(Z),cache:new o.a});var ae=function(){return Object(g.jsx)(b.a,{client:te,children:Object(g.jsx)(i.a,{children:Object(g.jsx)("div",{children:Object(g.jsxs)(T,{children:[Object(g.jsx)(q,{}),Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/",component:J}),Object(g.jsx)(j.a,{exact:!0,path:"/account",component:$}),Object(g.jsx)(j.a,{exact:!0,path:"/address",component:V}),Object(g.jsx)(j.a,{exact:!0,path:"/login",component:k}),Object(g.jsx)(j.a,{exact:!0,path:"/menu/:restaurantId",component:K}),Object(g.jsx)(j.a,{exact:!0,path:"/fooditem/:restaurant/:foodItemId",component:X}),Object(g.jsx)(j.a,{exact:!0,path:"/success",component:Q})]})]})})})})};s.a.render(Object(g.jsx)(ae,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.86be96a9.chunk.js.map