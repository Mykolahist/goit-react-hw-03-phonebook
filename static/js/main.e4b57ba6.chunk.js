(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__a5W9t",title:"Container_title__24PwG"}},2:function(t,e,n){t.exports={form__container:"Form_form__container__ox2a9",label:"Form_label__ssSS2",input:"Form_input__QZV7B",button:"Form_button__12gOb"}},29:function(t,e,n){},3:function(t,e,n){t.exports={list:"ContactList_list__19POL",item:"ContactList_item__37ySS",name:"ContactList_name__2Pq_J",button:"ContactList_button__3X4QB"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),s=n.n(r),i=n(15),o=n(5),l=n(6),u=n(8),m=n(7),b=n(11),d=n.n(b),h=n(0),j=function(t){var e=t.children;return Object(h.jsxs)("div",{className:d.a.container,children:[Object(h.jsx)("h1",{className:d.a.title,children:"Phonebook"}),e]})},f=n(12),p=n(14),_=n.n(p),O=n(2),v=n.n(O),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:"",name:"",number:""},t.handleChange=function(e){var n,a=e.currentTarget,c=a.name,r=a.value;t.setState((n={},Object(f.a)(n,c,r),Object(f.a)(n,"id",_.a.generate()),n))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.savedContacts,a=t.state.name,c=a.toLowerCase();n.find((function(t){return t.name.toLowerCase().includes(c)}))?window.alert("".concat(a," is already in contacts")):(t.props.onSubmit(t.state),t.resetForm())},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("div",{className:v.a.form__container,children:[Object(h.jsxs)("label",{className:v.a.label,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:v.a.input,onChange:this.handleChange,value:e})]}),Object(h.jsxs)("label",{className:v.a.label,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:v.a.input,onChange:this.handleChange,value:n})]})]}),Object(h.jsx)("button",{type:"submit",className:v.a.button,children:"Add contact"})]})}}]),n}(a.Component),x=n(9),g=n.n(x),S=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:g.a.title,children:"Contacts"}),Object(h.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",className:g.a.input,value:e,onChange:n})]})]})};S.defaultProps={value:""};var N=S,y=n(3),F=n.n(y),w=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:F.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:F.a.item,children:[Object(h.jsxs)("p",{className:F.a.name,children:[a,":"]}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("button",{type:"button",className:F.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})};w.defaultProps={name:"",number:""};var k=w,A=(n(29),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getFilteredContacts();return Object(h.jsxs)(j,{children:[Object(h.jsx)(C,{onSubmit:this.formSubmitHandler,savedContacts:e}),Object(h.jsx)(N,{value:n,onChange:this.changeFilter}),Object(h.jsx)(k,{contacts:a,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={title:"Filter_title__3sOCt",label:"Filter_label__cpWuQ",input:"Filter_input__2Ax-f"}}},[[30,1,2]]]);
//# sourceMappingURL=main.e4b57ba6.chunk.js.map