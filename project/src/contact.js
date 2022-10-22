function loadContact(){
	let body = document.querySelector("body")
	let contactCont = document.createElement("div")
	contactCont.className = "contact-part"
	body.append(contactCont)

	let title = document.createElement("p")
	title.className = "contact-title"
	title.textContent = "Contact Us"
	contactCont.append(title)

	// 
	let st1 = document.createElement("p")
	st1.className = "c-sub-title"
	st1.textContent = "Email"
	contactCont.append(st1)

	let sc1 = document.createElement("p")
	sc1.className = "c-contact"
	sc1.textContent = "rgandom1920@gmail.com"
	contactCont.append(sc1)

	let sc2 = document.createElement("p")
	sc2.className = "c-contact"
	sc2.textContent = "toppings4092@gmail.com"
	contactCont.append(sc2)


	// 


	// 
	let st3 = document.createElement("p")
	st3.className = "c-sub-title"
	st3.textContent = "Phone"
	contactCont.append(st3)

	let sc3 = document.createElement("p")
	sc3.className = "c-contact"
	sc3.textContent = "+1-209-534-34-65"
	contactCont.append(sc3)

	let sc4 = document.createElement("p")
	sc4.className = "c-contact"
	sc4.textContent = "+1-304-200-12-23"
	contactCont.append(sc4)


	// 
	let st4 = document.createElement("p")
	st4.className = "c-sub-title"
	st4.textContent = "Location"
	contactCont.append(st4)

	var ct2 = document.createElement("center")
	var img2 = document.createElement("img")
	img2.className = "menu-img"
	img2.src = "../src/Images/navigation.jpg"

	contactCont.append(ct2)
	ct2.append(img2)

	let sc5 = document.createElement("p")
	sc5.className = "c-contact diff"
	sc5.textContent = "23, Upping Street,UK"
	contactCont.append(sc5)

	let creator = document.createElement("p")
	creator.className = "create"
	creator.textContent = "Created by igeon22"
	// let body = document.querySelector("body")
	contactCont.append(creator)


}


export{loadContact}