import{_ as l,c as s,a as n,b as u,t as a,o,d as i,r as _}from"./index-DoHS5Nh2.js";const g={name:"GridTile",props:{title:{type:String,required:!0},description:{type:String,default:""},image:{type:String,default:null},link:{type:String,default:null}}},f=["href"],h=["src","alt"];function k(r,c,e,d,m,p){return o(),s("a",{class:"grid-tile",href:e.link},[n("h3",null,a(e.title),1),n("p",null,a(e.description),1),e.image?(o(),s("img",{key:0,src:e.image,alt:e.title},null,8,h)):u("",!0)],8,f)}const b=l(g,[["render",k]]),y={components:{GridTile:b}},G={class:"grid"};function S(r,c,e,d,m,p){const t=_("GridTile");return o(),s("main",null,[n("div",G,[i(t,{title:"SimpleConv",image:"./assets/site-icons/simpleconv.png",link:"https://simpleconv.com"}),i(t,{title:"Advent of Code",image:"./assets/site-icons/GitHubLogo.webp",link:"https://github.com/Peytonsparks789/AdventOfCode"}),i(t,{title:"SimpleCalculator",image:"./assets/site-icons/GitHubLogo.webp",link:"https://github.com/Peytonsparks789/SimpleCalculator"}),i(t,{title:"Password Generator",image:"./assets/site-icons/GitHubLogo.webp",link:"https://github.com/Peytonsparks789/Password-Generator"})])])}const C=l(y,[["render",S]]);export{C as default};
