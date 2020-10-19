(this["webpackJsonpf1-predict-web"]=this["webpackJsonpf1-predict-web"]||[]).push([[0],{22:function(e,t,a){},26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(11),c=a.n(i),s=(a(31),a(13)),l=a(1),o=a(3),d=a(4),u=a(6),h=a(5),p=a(14),m=(a(32),a(33),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t="driver-list-row";return this.props.selected&&(t+=" selected"),n.a.createElement("tr",{className:t,onClick:function(){return e.props.onClick(e.props.id)}},n.a.createElement("td",{className:"driver-list-cell"},n.a.createElement("svg",{width:"8",height:"16",style:{fill:this.props.color}},n.a.createElement("rect",{width:"7",height:"20"})),n.a.createElement("span",null,this.props.driver)),n.a.createElement("td",{className:"driver-list-cell"},this.props.constructor))}}]),a}(n.a.Component)),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).rowClicked=function(e){r.setState({selected:e}),r.props.rowClicked(e),r.state.isMobile&&r.setState({expanded:!r.state.expanded})},r.state={selected:-1,isMobile:!1},r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.matchMedia("(max-width: 768px)").matches&&this.setState({isMobile:!0,expanded:!0})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{display:"flex",width:"100%","min-width":"300px"}},n.a.createElement("table",{className:"driver-list-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Driver"),n.a.createElement("th",null,"Constructor"))),n.a.createElement("tbody",null,this.props.order.map((function(t){return e.state.isMobile&&!e.state.expanded&&e.state.selected!==t?null:n.a.createElement(m,{key:t,id:t,selected:e.state.selected===t,driver:e.props.drivers[t.toString()].name,constructor:e.props.drivers[t.toString()].constructor,color:e.props.drivers[t.toString()].color,onClick:e.rowClicked})})))))}}]),a}(n.a.Component),f=a(15),b=(a(34),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"barGraphTooltip",style:{backgroundColor:this.props.color}},this.props.label)}}]),a}(n.a.Component)),E=(a(35),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return this.props.dnf?n.a.createElement("div",{className:"barGraphRowContainer"},n.a.createElement("div",{className:"barGraphLabel_dnf barGraphLabel"},this.props.label),n.a.createElement("div",{className:"barGraphBar",style:{width:this.props.value,backgroundColor:this.props.color}}),"0%"!==this.props.value?n.a.createElement(b,{color:this.props.color,label:this.props.value}):null):n.a.createElement("div",{className:"barGraphRowContainer"},n.a.createElement("div",{className:"barGraphLabel"},this.props.label),n.a.createElement("div",{className:"barGraphBar",style:{width:this.props.value,backgroundColor:this.props.color}}),"0%"!==this.props.value?n.a.createElement(b,{color:this.props.color,label:this.props.value}):null)}}]),a}(n.a.Component)),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=Object(f.a)(Array(20).keys());return n.a.createElement("div",{className:"barChart"},t.map((function(t){var a=e.props.predictions?e.props.predictions[t.toString()]:null,r=e.props.year>=2020?a/100:a/10,i=r?"".concat(r,"%"):"0%";return n.a.createElement(E,{value:i,label:t+1,color:e.props.color?e.props.color:"#00000000"})})))}}]),a}(n.a.Component),y=(a(22),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;Object(o.a)(this,a),(r=t.call(this,e)).handleDriverSelection=function(e){r.setState({selectedDriverId:e})},r.onToggleQualiOptionsSelected=function(){r.setState({changeQualiExpanded:!r.state.changeQualiExpanded})},r.onNewQualiSelected=function(e){fetch("".concat("/F1PredictWeb","/data/").concat(e.value,".json")).then((function(e){return e.json()})).then((function(e){r.setState({drivers:e.drivers,order:e.order,predictions:e.predictions,gpTitle:"".concat(e.year," ").concat(e.name),year:e.year,selectedDriverId:r.state.selectedDriverId in e.drivers?r.state.selectedDriverId:null})}))},r.state={drivers:{},order:[],predictions:{},selectedDriverId:null,gpTitle:"",racesList:{},changeQualiExpanded:!1,year:null};var n="".concat("/F1PredictWeb","/data/index.json"),i=void 0,c=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});return fetch(n).then((function(e){return e.json()})).then((function(e){for(var t=Object.keys(e).sort(c.compare),a=[],n=function(r){var n=Object.keys(e[t[r]]).sort(c.compare);n.map((function(n){return a.push({value:n,label:"".concat(t[r]," ").concat(e[t[r]][n])})})),i=n[n.length-1]},s=0;s<t.length;s++)n(s);a.reverse(),r.setState({racesList:a}),fetch("".concat("/F1PredictWeb","/data/").concat(i,".json")).then((function(e){return e.json()})).then((function(e){r.setState({drivers:e.drivers,order:e.order,predictions:e.predictions,gpTitle:"".concat(e.year," ").concat(e.name),year:e.year})}))})),r}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.selectedDriverId?this.state.predictions[this.state.selectedDriverId]:{},t=this.state.selectedDriverId?this.state.drivers[this.state.selectedDriverId].color:null;return n.a.createElement("div",null,n.a.createElement("div",{className:"qualiHeader"},n.a.createElement("span",{className:"qualiHeaderText"},this.state.gpTitle," - Qualifying predictions"),n.a.createElement("button",{onClick:this.onToggleQualiOptionsSelected,className:"toggleQualiOptionsButton"},this.state.changeQualiExpanded?"Cancel":"Change GP"),this.state.changeQualiExpanded?n.a.createElement("div",null,n.a.createElement(p.a,{className:"qualiOptionsSelect",value:this.state.gpTitle,options:this.state.racesList,onChange:this.onNewQualiSelected})):null),n.a.createElement("div",{className:"mainContainer"},n.a.createElement(v,{rowClicked:this.handleDriverSelection,drivers:this.state.drivers,order:this.state.order}),n.a.createElement("div",{style:{"min-width":"300px",width:"100%"}},this.state.selectedDriverId?n.a.createElement("div",{className:"selectedDriverText",style:{color:this.state.drivers[this.state.selectedDriverId].color}},this.state.drivers[this.state.selectedDriverId].name):n.a.createElement("div",{className:"selectedDriverText",style:{color:"#888888"}},"Choose your driver:"),n.a.createElement(g,{predictions:e,color:t,selectedDriverId:this.state.selectedDriverId,year:this.state.year}))))}}]),a}(n.a.Component)),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=Object(f.a)(Array(20).keys());return t.push("X"),n.a.createElement("div",{className:"barChart"},t.map((function(t){if("X"===t){var a=e.props.predictions?e.props.predictions.ret:null,r=e.props.year>=2020?a/100:a/10,i=r?"".concat(r,"%"):"0%";return n.a.createElement(E,{value:i,label:t,dnf:!0,color:e.props.color?e.props.color:"#00000000"})}var c=e.props.predictions?e.props.predictions[t.toString()]:null,s=e.props.year>=2020?c/100:c/10,l=s?"".concat(s,"%"):"0%";return n.a.createElement(E,{value:l,label:t+1,color:e.props.color?e.props.color:"#00000000"})})))}}]),a}(n.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;Object(o.a)(this,a),(r=t.call(this,e)).handleDriverSelection=function(e){r.setState({selectedDriverId:e})},r.onToggleQualiOptionsSelected=function(){r.setState({changeQualiExpanded:!r.state.changeQualiExpanded})},r.onChangeIncludeQuali=function(e){r.setState({qualiIncludedSelected:!r.state.qualiIncludedSelected})},r.onNewQualiSelected=function(e){fetch("".concat("/F1PredictWeb","/data/races/").concat(e.value,".json")).then((function(e){return e.json()})).then((function(t){fetch("".concat("/F1PredictWeb","/data/races/").concat(e.value,"_afterQuali.json")).then((function(e){return e.json()})).then((function(a){r.setState({withoutQuali:{drivers:t.drivers,order:t.order,predictions:t.predictions},withQuali:{drivers:a.drivers,order:a.order,predictions:a.predictions},gpTitle:"".concat(t.year," ").concat(t.name),year:t.year,selectedRace:e.value,qualiIncludedPredictionExists:!0,selectedDriverId:r.state.selectedDriverId in t.drivers?r.state.selectedDriverId:null})})).catch((function(a){r.setState({withoutQuali:{drivers:t.drivers,order:t.order,predictions:t.predictions},gpTitle:"".concat(t.year," ").concat(t.name),year:t.year,selectedRace:e.value,qualiIncludedPredictionExists:!1,qualiIncludedSelected:!1,selectedDriverId:r.state.selectedDriverId in t.drivers?r.state.selectedDriverId:null})}))}))},r.state={withoutQuali:{drivers:{},order:[],predictions:{}},withQuali:{drivers:{},order:[],predictions:{}},selectedDriverId:null,gpTitle:"",racesList:{},selectedRace:null,changeQualiExpanded:!1,year:null,qualiIncludedPredictionExists:!1,qualiIncludedSelected:!1};var n="".concat("/F1PredictWeb","/data/races/index.json"),i=void 0,c=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});return fetch(n).then((function(e){return e.json()})).then((function(e){for(var t=Object.keys(e).sort(c.compare),a=[],n=function(r){var n=Object.keys(e[t[r]]).sort(c.compare);n.map((function(n){return a.push({value:n,label:"".concat(t[r]," ").concat(e[t[r]][n])})})),i=n[n.length-1]},s=0;s<t.length;s++)n(s);a.reverse(),r.setState({racesList:a}),fetch("".concat("/F1PredictWeb","/data/races/").concat(i,".json")).then((function(e){return e.json()})).then((function(e){fetch("".concat("/F1PredictWeb","/data/races/").concat(i,"_afterQuali.json")).then((function(e){return e.json()})).then((function(t){r.setState({withoutQuali:{drivers:e.drivers,order:e.order,predictions:e.predictions},withQuali:{drivers:t.drivers,order:t.order,predictions:t.predictions},gpTitle:"".concat(e.year," ").concat(e.name),year:e.year,selectedRace:i,qualiIncludedPredictionExists:!0})})).catch((function(t){r.setState({withoutQuali:{drivers:e.drivers,order:e.order,predictions:e.predictions},gpTitle:"".concat(e.year," ").concat(e.name),year:e.year,selectedRace:i,qualiIncludedPredictionExists:!1,qualiIncludedSelected:!1})}))}))})),r}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.qualiIncludedSelected?this.state.withQuali:this.state.withoutQuali,t=this.state.selectedDriverId?e.predictions[this.state.selectedDriverId]:{},a=this.state.selectedDriverId?e.drivers[this.state.selectedDriverId].color:null;return n.a.createElement("div",null,n.a.createElement("div",{className:"qualiHeader"},n.a.createElement("span",{className:"qualiHeaderText"},this.state.gpTitle," - Race predictions"),n.a.createElement("button",{onClick:this.onToggleQualiOptionsSelected,className:"toggleQualiOptionsButton"},this.state.changeQualiExpanded?"Cancel":"Change GP"),this.state.changeQualiExpanded?n.a.createElement("div",null,n.a.createElement(p.a,{className:"qualiOptionsSelect",value:this.state.gpTitle,options:this.state.racesList,onChange:this.onNewQualiSelected})):null,this.state.qualiIncludedPredictionExists?n.a.createElement("div",{onChange:this.onChangeIncludeQuali},n.a.createElement("span",{className:"qualiHeaderText"},"Include qualifying results in prediction"),n.a.createElement("input",{type:"radio",value:"Yes",name:"include_quali",checked:this.state.qualiIncludedSelected})," ",n.a.createElement("span",{className:"qualiHeaderText"},"Yes"),n.a.createElement("input",{type:"radio",value:"No",name:"include_quali",checked:!this.state.qualiIncludedSelected})," ",n.a.createElement("span",{className:"qualiHeaderText"},"No")):null),n.a.createElement("div",{className:"mainContainer"},n.a.createElement(v,{rowClicked:this.handleDriverSelection,drivers:e.drivers,order:e.order}),n.a.createElement("div",{style:{"min-width":"300px",width:"100%"}},this.state.selectedDriverId?n.a.createElement("div",{className:"selectedDriverText",style:{color:a}},e.drivers[this.state.selectedDriverId].name):n.a.createElement("div",{className:"selectedDriverText",style:{color:"#888888"}},"Choose your driver:"),n.a.createElement(w,{predictions:t,color:a,selectedDriverId:this.state.selectedDriverId,year:this.state.year}))))}}]),a}(n.a.Component);a(38);function I(){return n.a.createElement("div",{class:"about-page-root"},n.a.createElement("p",null,"F1Predict is an application that aims to predict the results of Formula 1 Grand Prix using statistical models. At the moment, the application hosts a model for predicting qualifying results (first released in 2018), and a model for predicting race results is currently under development."),n.a.createElement("p",null,'F1Predict uses a variety of data and techniques in predicting the results. The model for predicting qualifying results uses historical data of qualifyings (since 2003) to calculate "power scores" for each driver, constructor and engine. These scores are then used to calculate an overall score for each competitor, along with an adjustment for how well the driver, constructor and engine has performed in the particular track in the past. Machine learning (linear regression) is used to determine how much the score of the driver, constructor, engine and their track-specific adjustments should be weighted. A Monte Carlo simulation is then used to determine the odds of each competitor in finishing in a particular position. After a qualifying has been completed, the model\'s power scores will be adjusted up or down depending on whether the driver, constructor or engine qualified better or worse than what the model expected. Here, the metric for how well or poorly a driver did is how well their best qualifying time (across all sessions) compared to the mean and standard deviation of the times of other drivers.'),n.a.createElement("p",null,"The race model is based on the Elo ranking system. It uses data from past F1 races to calculate a ranking for each driver, constructor and engine. Each race is modelled as a series of head-to-head competitions between drivers. A driver who wins is considered to have won all their head-to-head matchups, while the driver finishing second is recorded one loss (against the winner) and wins for all other matchups. Retired drivers are not considered, meaning that the driver finishing in last place receives losses for all of their matchups. The Elo score of a participant is calculated from the driver, constructor, and engine scores, as well as their track-adjusted counterparts. After a race, Elo scores of drivers, constructors, and engines are adjusted based on the difference between the expected and real scores of all their matchups, with a K-factor of 4 per matchup."),n.a.createElement("p",null,'Two different race predictions are offered: "Before Quali" makes predictions based on the qualifying result predictions offered by the Qualifying model, while "After Quali" makes predictions based of grid position of drivers. Because of this, "After Quali" predictions should be more accurate.'),n.a.createElement("p",null,"Credits:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Qualifying model by Ville Kuosmanen"),n.a.createElement("li",null,"Race model by Ville Kuosmanen, Raiyan Chowdhury and Philip Searcy"),n.a.createElement("li",null,"Special thanks to ",n.a.createElement("a",{href:"https://ergast.com/mrd/"},"Ergast F1 API"))),n.a.createElement("p",null,"If you are interested in exploring the codebase of the project, you can fork the project on GitHub! The project is licensed under an ",n.a.createElement("a",{href:"https://github.com/villekuosmanen/F1Predict/blob/master/LICENSE"},"open source license"),". The repository for the predictions application is ",n.a.createElement("a",{href:"https://github.com/villekuosmanen/F1Predict/"},"F1Predict"),", while the repository for this web app is ",n.a.createElement("a",{href:"https://github.com/villekuosmanen/F1PredictWeb/"},"F1PredictWeb"),"."))}var k=function(){return n.a.createElement(s.a,{basename:"/"},n.a.createElement("div",{className:"pageHeader"},n.a.createElement(s.b,{to:"/",id:"title"},"F1Predict"),n.a.createElement(s.b,{to:"/"},"Quali"),n.a.createElement(s.b,{to:"/race"},"Race"),n.a.createElement(s.b,{to:"/about"},"About")),n.a.createElement("div",{id:"background"},n.a.createElement(l.c,null,n.a.createElement(l.a,{path:"/race"},n.a.createElement(j,null)),n.a.createElement(l.a,{path:"/about"},n.a.createElement(I,null)),n.a.createElement(l.a,{path:"/"},n.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.92cbf241.chunk.js.map