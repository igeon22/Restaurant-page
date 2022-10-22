function loadMenu(){
	var body = document.querySelector("body")
	var menuCont = document.createElement("div")
	menuCont.className = "menu-part"
	body.append(menuCont)

	var title = document.createElement("p")
	title.className = "title-menu"
	title.textContent = "RG's Inn Menu"
	menuCont.append(title)

	// 
	var tp1 = document.createElement("a")
	tp1.className = "menu"
	tp1.textContent = "-Cheese pizza 15$"

	var ct1 = document.createElement("center")
	var img1 = document.createElement("img")
	img1.className = "menu-img"
	img1.src = "../src/Images/pizza.jpg"

	menuCont.append(tp1)
	menuCont.append(ct1)
	ct1.append(img1)

	// 
	var tp2 = document.createElement("a")
	tp2.className = "menu"
	tp2.textContent = "-Pepperoni pizza 10$"

	var ct2 = document.createElement("center")
	var img2 = document.createElement("img")
	img2.className = "menu-img"
	img2.src = "../src/Images/pepperoni.jpg"

	menuCont.append(tp2)
	menuCont.append(ct2)
	ct2.append(img2)

	// 
	var tp3 = document.createElement("a")
	tp3.className = "menu"
	tp3.textContent = "-Simple Burger 5$"

	var ct3 = document.createElement("center")
	var img3 = document.createElement("img")
	img3.className = "menu-img"
	img3.src = "../src/Images/hamburger.jpg"

	menuCont.append(tp3)
	menuCont.append(ct3)
	ct3.append(img3)

	// 

	var tp4 = document.createElement("a")
	tp4.className = "menu"
	tp4.textContent = "-Complete Burger 8$"

	var ct4 = document.createElement("center")
	var img4 = document.createElement("img")
	img4.className = "menu-img"
	img4.src = "../src/Images/completeburger.jpg"

	menuCont.append(tp4)
	menuCont.append(ct4)
	ct4.append(img4)


	// 
	var tp5 = document.createElement("a")
	tp5.className = "menu"
	tp5.textContent = "-Chicken Wings 9$"

	var ct5 = document.createElement("center")
	var img5 = document.createElement("img")
	img5.className = "menu-img"
	img5.src = "../src/Images/chickenwings.jpg"

	menuCont.append(tp5)
	menuCont.append(ct5)
	ct5.append(img5)

	// 
	let creator = document.createElement("p")
	creator.className = "create"
	creator.textContent = "Created by igeon22"
	// let body = document.querySelector("body")
	menuCont.append(creator)


}

export{loadMenu}