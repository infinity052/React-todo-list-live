(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),s=a(2),l=a(3),o=a(5),u=a(4),m=a(6),d=a(9),b=(a(1),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{id:e.id,className:"Submit"===e.value?"btn btn-success":"btn btn-danger",onClick:e.onClick},e.value))}),h=function(e){return r.a.createElement("div",{className:"input-group container"},r.a.createElement("input",{type:"text",className:"form-control",onChange:e.input,placeholder:"Add a task"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement(b,{onClick:e.submit,value:"Submit"})))},p=(a(15),function(e){var t=e.done?r.a.createElement("del",null,r.a.createElement("h4",{className:"h5"},e.item)):r.a.createElement("h4",{className:"h5"},e.item);return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:e.checkbox,id:e.index})),r.a.createElement("td",null,t),r.a.createElement("td",{align:"end"}," ",r.a.createElement(b,{onClick:e.delete,id:e.index,value:r.a.createElement("img",{id:e.index,className:"trashicon",src:"https://icon-library.net/images/waste-basket-icon/waste-basket-icon-1.jpg",alt:"Delete"})})))}),v=function(e){return r.a.createElement("div",{className:"container container"},r.a.createElement("table",{className:"table table-striped table-light"},r.a.createElement("tbody",{className:"tbody"},function(e,t,a){var n=0;return e.map((function(e){return r.a.createElement("tr",null,r.a.createElement(p,{item:e.task,done:e.done,index:n++,checked:e.done,delete:t,checkbox:a}))}))}(e.items,e.delete,e.checkbox))))};function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function e(t,a){Object(s.a)(this,e),this.task=t,this.done=a},E=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(o.a)(this,Object(u.a)(t).call(this,e));var n="";return localStorage?void 0!=localStorage.todolist&&(n=JSON.parse(localStorage.todolist)):alert("Oops. Your browser does not support Local Storage. The list will be temporary"),a.state={items:n,input:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"saveToStorage",value:function(e){localStorage&&(localStorage.todolist=JSON.stringify(this.state.items))}},{key:"inputUpdate",value:function(e){this.setState(g({},this.state,{input:e.target.value}))}},{key:"sbmt",value:function(){var e=this.state.items;if(""!=this.state.input){var t=this.state.input;t=t.replace(t[0],t[0].toUpperCase());var a=new O(t,!1);e.push(a),this.saveToStorage(e),this.setState(g({},this.state,{items:e}))}else alert("Please enter a task")}},{key:"delete",value:function(e){var t=this.state.items.filter((function(t,a){return a!=e.target.id}));this.setState(g({},this.state,{items:t})),localStorage&&(localStorage.todolist=JSON.stringify(t))}},{key:"checkItem",value:function(e){var t=this.state.items;t[e.target.id].done=!t[e.target.id].done,localStorage&&(localStorage.todolist=JSON.stringify(t)),this.setState(g({},this.setState,{items:t}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{submit:this.sbmt.bind(this),input:this.inputUpdate.bind(this)}),r.a.createElement("br",null),r.a.createElement(v,{items:this.state.items,delete:this.delete.bind(this),checkbox:this.checkItem.bind(this)}))}}]),t}(r.a.Component),k=(a(16),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"background"},r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-white bg-secondary sticky-top"},r.a.createElement("label",{className:"display-4 navbar-nav navbar-text mx-auto"},"Todo List")),r.a.createElement("br",null),r.a.createElement(E,null))}}]),t}(n.Component));c.a.render(r.a.createElement(k,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.bfdf64ba.chunk.js.map