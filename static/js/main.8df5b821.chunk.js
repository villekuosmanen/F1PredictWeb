(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(6),o=a.n(i),s=(a(18),a(1)),l=a(2),c=a(4),d=a(3),u=a(5),p=a(11),h=(a(19),a(20),function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t="driver-list-row";return this.props.selected&&(t+=" selected"),n.a.createElement("tr",{className:t,onClick:function(){return e.props.onClick(e.props.id)}},n.a.createElement("td",{className:"driver-list-cell"},n.a.createElement("svg",{width:"8",height:"16",style:{fill:this.props.color}},n.a.createElement("rect",{width:"7",height:"20"})),n.a.createElement("span",null,this.props.driver)),n.a.createElement("td",{className:"driver-list-cell"},this.props.constructor))}}]),t}(n.a.Component)),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).rowClicked=function(e){a.setState({selected:e}),a.props.rowClicked(e),a.state.isMobile&&a.setState({expanded:!a.state.expanded})},a.state={selected:-1,isMobile:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.matchMedia("(max-width: 768px)").matches&&this.setState({isMobile:!0,expanded:!0})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{display:"flex",width:"100%","min-width":"300px"}},n.a.createElement("table",{className:"driver-list-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Driver"),n.a.createElement("th",null,"Constructor"))),n.a.createElement("tbody",null,this.props.order.map(function(t){return e.state.isMobile&&!e.state.expanded&&e.state.selected!==t?null:n.a.createElement(h,{key:t,id:t,selected:e.state.selected===t,driver:e.props.drivers[t.toString()].name,constructor:e.props.drivers[t.toString()].constructor,color:e.props.drivers[t.toString()].color,onClick:e.rowClicked})}))))}}]),t}(n.a.Component),m=a(12),b=(a(21),function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props.value),n.a.createElement("div",{className:"barGraphTooltip",style:{backgroundColor:this.props.color}},this.props.label)}}]),t}(n.a.Component)),f=(a(22),function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props.value),n.a.createElement("div",{className:"barGraphRowContainer"},n.a.createElement("div",{className:"barGraphLabel"},this.props.label),n.a.createElement("div",{className:"barGraphBar",style:{width:this.props.value,backgroundColor:this.props.color}}),"0%"!==this.props.value?n.a.createElement(b,{color:this.props.color,label:this.props.value}):null)}}]),t}(n.a.Component)),g=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object(m.a)(Array(20).keys());return n.a.createElement("div",{className:"barChart"},t.map(function(t){var a=e.props.predictions?e.props.predictions[t.toString()]:null,r=a?a/10+"%":"0%";return n.a.createElement(f,{value:r,label:t+1,color:e.props.color?e.props.color:"#00000000"})}))}}]),t}(n.a.Component),E=(a(23),function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleDriverSelection=function(e){console.log(e),a.setState({selectedDriverId:e})},a.onToggleQualiOptionsSelected=function(){a.setState({changeQualiExpanded:!a.state.changeQualiExpanded})},a.onNewQualiSelected=function(e){console.log(e),fetch("data/"+e.value+".json").then(function(e){return e.json()}).then(function(e){a.setState({drivers:e.drivers,order:e.order,predictions:e.predictions,gpTitle:"".concat(e.year," ").concat(e.name)})})},a.state={drivers:{},order:[],predictions:{},selectedDriverId:null,gpTitle:"",racesList:{},changeQualiExpanded:!1};var r=void 0,n=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});return fetch("data/index.json").then(function(e){return e.json()}).then(function(e){var t=Object.keys(e).sort(n.compare);console.log("Above loop"+t);for(var i=[],o=function(a){var o=Object.keys(e[t[a]]).sort(n.compare);o.map(function(r){return i.push({value:r,label:"".concat(t[a]," ").concat(e[t[a]][r])})}),console.log(o),console.log("In loop"),r=o[o.length-1]},s=0;s<t.length;s++)o(s);i.reverse(),a.setState({racesList:i}),fetch("data/"+r+".json").then(function(e){return e.json()}).then(function(e){a.setState({drivers:e.drivers,order:e.order,predictions:e.predictions,gpTitle:"".concat(e.year," ").concat(e.name)})})}),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.selectedDriverId?this.state.predictions[this.state.selectedDriverId]:{},t=this.state.selectedDriverId?this.state.drivers[this.state.selectedDriverId].color:null;return n.a.createElement("div",null,n.a.createElement("div",{className:"qualiHeader"},n.a.createElement("span",{className:"qualiHeaderText"},this.state.gpTitle," - Qualifying predictions"),n.a.createElement("button",{onClick:this.onToggleQualiOptionsSelected,className:"toggleQualiOptionsButton"},this.state.changeQualiExpanded?"Cancel":"Change GP"),this.state.changeQualiExpanded?n.a.createElement("div",null,n.a.createElement(p.a,{className:"qualiOptionsSelect",value:this.state.gpTitle,options:this.state.racesList,onChange:this.onNewQualiSelected})):null),n.a.createElement("div",{className:"mainContainer"},n.a.createElement(v,{rowClicked:this.handleDriverSelection,drivers:this.state.drivers,order:this.state.order}),n.a.createElement("div",{style:{"min-width":"300px",width:"100%"}},this.state.selectedDriverId?n.a.createElement("div",{className:"selectedDriverText",style:{color:this.state.drivers[this.state.selectedDriverId].color}},this.state.drivers[this.state.selectedDriverId].name):n.a.createElement("div",{className:"selectedDriverText",style:{color:"#888888"}},"Choose your driver:"),n.a.createElement(g,{predictions:e,color:t,selectedDriverId:this.state.selectedDriverId}))))}}]),t}(n.a.Component));var j=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"pageHeader"},n.a.createElement("h1",{id:"gpNameHeader"},"F1 Qualification predictions"),n.a.createElement("a",{href:"https://predictf1.blogspot.com/",style:{display:"none"}},"Blog")),n.a.createElement("div",{id:"background"},n.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.8df5b821.chunk.js.map