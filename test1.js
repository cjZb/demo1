// JavaScript Document
window.onload=function()
{
	//获取容器div的引用
var container=document.getElementById("tableTest");
//创建表格对象
var _table=document.createElement("table");
//设置表格属性
_table.setAttribute("border","1");
_table.setAttribute("borderColor","black");
_table.setAttribute("width","200");
//创建5行
for(var i=0;i<5;i++){
var _tr=_table.insertRow(i);
//创建4列
for(var j=0;j<4;j++){
var _td=_tr.insertCell(j);
var _tn=document.createTextNode(i.toString()+j.toString());
_td.appendChild(_tn);
}
}
//将表格显示于页面
container.appendChild(_table);
}