import { sayHello } from "./greeting";
// import '../sass/styles.scss';
import  "./style.css";
// npm run build

var pageCount = 0
var mainPart = document.querySelector(".main-part")
var HomeBtn =  document.querySelector("#n-1")
var MenuBtn =  document.querySelector("#n-2")
var ContactBtn =  document.querySelector("#n-3")

import {loadHtmlComponent} from "../src/home"
import {loadMenu} from "../src/menu"
import{loadContact} from "../src/contact"

function pageManage(){
	var active = true
	if (pageCount==1){
		var mainPart = document.querySelector(".main-part")
		var menuPart = document.querySelector(".menu-part")
		var contactPart = document.querySelector(".contact-part")
		componentRemove(mainPart)
		componentRemove(menuPart)
		componentRemove(contactPart)
		active = true
		loadHtmlComponent(active)
	}
	if(pageCount==2){
		var mainPart = document.querySelector(".main-part")
		var menuPart = document.querySelector(".menu-part")
		var contactPart = document.querySelector(".contact-part")
		componentRemove(mainPart)
		componentRemove(menuPart)
		componentRemove(contactPart)
		active = false
		loadHtmlComponent(active)
		loadMenu()

	}
	if(pageCount==3){
		var mainPart = document.querySelector(".main-part")
		var menuPart = document.querySelector(".menu-part")
		var contactPart = document.querySelector(".contact-part")
		componentRemove(mainPart)
		componentRemove(menuPart)
		componentRemove(contactPart)
		active = false
		loadHtmlComponent(active)
		loadContact()

	}
	
}

function componentRemove(item){
	if (item){
		item.remove()
		console.log("object");
	}

}


HomeBtn.addEventListener(('click'),()=>{
	pageCount = 1
	pageManage()
})

MenuBtn.addEventListener(('click'),()=>{
	pageCount = 2
	pageManage()
})
ContactBtn.addEventListener(('click'),()=>{
	pageCount = 3
	pageManage()
})

loadHtmlComponent(true)
