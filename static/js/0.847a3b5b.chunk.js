(this["webpackJsonpcra-pwa"]=this["webpackJsonpcra-pwa"]||[]).push([[0],{409:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a(1);var r=a(4),n=a(13),l=(a(413),a(244),a(0));function c(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"col-",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row flex-nowrap",children:[Object(l.jsx)("div",{className:"col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark",children:Object(l.jsxs)("div",{className:"d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100",children:[Object(l.jsx)("a",{href:"/",className:"d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none",children:Object(l.jsx)("span",{className:"fs-5 d-none d-sm-inline",children:"Menu"})}),Object(l.jsxs)("ul",{className:"nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start",id:"menu",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)("a",{href:"#",className:"nav-link align-middle px-0",children:[Object(l.jsx)("i",{className:"fs-4 bi-house"})," ",Object(l.jsx)("span",{className:"ms-1 d-none d-sm-inline",children:"Home"})]})}),Object(l.jsxs)("li",{children:[Object(l.jsxs)("a",{href:"#submenu1","data-bs-toggle":"collapse",className:"nav-link px-0 align-middle",children:[Object(l.jsx)("i",{className:"fs-4 bi-speedometer2"})," ",Object(l.jsx)("span",{className:"ms-1 d-none d-sm-inline",children:"Dashboard"})]}),Object(l.jsxs)("ul",{className:"collapse show nav flex-column ms-1",id:"submenu1","data-bs-parent":"#menu",children:[Object(l.jsx)("li",{className:"w-100",children:Object(l.jsx)(r.b,{to:"addproduct",className:"nav-link px-0",children:Object(l.jsx)("span",{className:"d-none d-sm-inline",children:"Add Product"})})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"aboutus",className:"nav-link px-0",children:Object(l.jsx)("span",{className:"d-none d-sm-inline",children:"aboutus"})})})]})]}),Object(l.jsx)("li",{children:Object(l.jsxs)(r.b,{to:"aboutus",className:"nav-link px-0 align-middle",children:[Object(l.jsx)("i",{className:"fs-4 bi-table"})," ",Object(l.jsx)("span",{className:"ms-1 d-none d-sm-inline",children:"Orders"})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("a",{href:"#",className:"nav-link px-0 align-middle",children:[Object(l.jsx)("i",{className:"fs-4 bi-people"})," ",Object(l.jsx)("span",{className:"ms-1 d-none d-sm-inline",children:"Customers"})]})})]})]})}),Object(l.jsx)("div",{className:"col py-3",children:Object(l.jsx)(n.b,{})})]})})})})}},413:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var r=a(3),n=a(9),l=a(1),c=a(195),s=a(34),o=(a(409),a(11)),i=a.n(o),m=a(18),u=a(20),d=a(7),b=a(12),j=a(0);function g(){Object(b.c)((function(e){return e.product}));var e=Object(l.useState)({nameAr:"",nameEn:"",price:null,descriptionAr:"",descriptionEn:"",image:"",categoryAr:"",categoryEn:"",categoryparentAr:"",categoryparentEn:"",sku:"",weight:null,size:"",model:"",material:"",quantity:null,shopType:"",company:"",brand:"",colors:""}),t=Object(n.a)(e,2),a=t[0],o=t[1],g=Object(l.useState)({nameArErr:"",nameEnErr:"",priceErr:"",descriptionArErr:"",descriptionEnErr:"",imageErr:"",categoryArErr:"",categoryEnErr:"",skuErr:"",weightErr:"",sizeErr:"",modelErr:"",materialErr:"",quantityErr:"",shopTypeErr:"",companyErr:"",brandErr:"",colorsErr:""}),h=Object(n.a)(g,2),p=h[0],O=h[1],f=Object(b.b)(),x=function(e){switch(console.log(e.target.name," :",e.target.value),console.log("Seler Product"," :",a),e.target.name){case"nameAr":o(Object(r.a)(Object(r.a)({},a),{},{nameAr:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{nameArErr:0==e.target.value?"this field is required":e.target.value<10?"Minimum title 10":null}));break;case"nameEn":o(Object(r.a)(Object(r.a)({},a),{},{nameEn:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{nameEnErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"price":o(Object(r.a)(Object(r.a)({},a),{},{price:Number(e.target.value)})),O(Object(r.a)(Object(r.a)({},p),{},{priceErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"descriptionAr":o(Object(r.a)(Object(r.a)({},a),{},{descriptionAr:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{descriptionArErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"descriptionEn":o(Object(r.a)(Object(r.a)({},a),{},{descriptionEn:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{descriptionEnErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"image":o(Object(r.a)(Object(r.a)({},a),{},{image:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{imageErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"categoryAr":o(Object(r.a)(Object(r.a)({},a),{},{categoryAr:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{categoryArErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"categoryEn":o(Object(r.a)(Object(r.a)({},a),{},{categoryEn:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{categoryEnErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"sku":o(Object(r.a)(Object(r.a)({},a),{},{sku:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{skuErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"weight":o(Object(r.a)(Object(r.a)({},a),{},{weight:Number(e.target.value)})),O(Object(r.a)(Object(r.a)({},p),{},{weightErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"size":o(Object(r.a)(Object(r.a)({},a),{},{size:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{sizeErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"model":o(Object(r.a)(Object(r.a)({},a),{},{model:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{modelErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"material":o(Object(r.a)(Object(r.a)({},a),{},{material:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{materialErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"quantity":o(Object(r.a)(Object(r.a)({},a),{},{quantity:Number(e.target.value)})),O(Object(r.a)(Object(r.a)({},p),{},{quantityErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"shopType":o(Object(r.a)(Object(r.a)({},a),{},{shopType:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{shopTypeErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"company":o(Object(r.a)(Object(r.a)({},a),{},{company:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{companyErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"brand":o(Object(r.a)(Object(r.a)({},a),{},{brand:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{brandErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}));break;case"colors":o(Object(r.a)(Object(r.a)({},a),{},{colors:e.target.value})),O(Object(r.a)(Object(r.a)({},p),{},{colorsErr:0==e.target.value.length?"this field is required":e.target.value.length<4?"Minimum length 4 letters":null}))}};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(c.a,{}),Object(j.jsx)("div",{className:"row  mb-5",children:Object(j.jsx)("div",{className:"col-9",children:Object(j.jsxs)("div",{className:"w-75 mx-auto",children:[Object(j.jsx)("h1",{className:"text-center ",children:"Add Product"}),Object(j.jsxs)("form",{onSubmit:function(){var e;f((e=a,function(){var t=Object(m.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/products",e);case 3:r=t.sent,console.log(r.data.product),a({type:d.n.ADD_PRODUCT,payload:r.data.product}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Name in English",name:"nameEn",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Name in Arabic",name:"nameAr",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"number",placeholder:"Enter Product Price",name:"proce",onChange:x}),Object(j.jsx)("textarea",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Description in English",name:"descriptionEn",onChange:x}),Object(j.jsx)("textarea",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Description in Arabic",name:"descriptionAr",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"file",name:"image",placeholder:"Enter Your  Product  image",accept:"image/*",required:!0}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Category in Arabic",name:"categoryAr",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Category in English",name:"categoryEn",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product SKU",name:"sku",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"number",placeholder:"Enter Product Weight",name:"weight",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Size",name:"size",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Model",name:"model",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Material",name:"material",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"number",placeholder:"Enter Product Quantity",name:"quantity",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Shop Type",name:"shopType",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Company",name:"company",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Brand",name:"brand",onChange:x}),Object(j.jsx)("input",{className:"form-control form-control-lg fs-6 mb-2 shadow-none",type:"text",placeholder:"Enter Product Color",name:"colors",onChange:x}),Object(j.jsx)("div",{className:"row py-4 px-2 col-rows-1",children:Object(j.jsxs)("button",{className:"btn btn-primary border border-none p-2 rounded  fs-5 fw-bold  ",style:{backgroundColor:"#f68b1e"},children:[Object(j.jsx)("span",{children:"Add Product"}),Object(j.jsx)("span",{})]})})]})]})})}),Object(j.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=0.847a3b5b.chunk.js.map