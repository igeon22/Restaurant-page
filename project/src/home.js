function loadHtmlComponent(active){
	// Image slider loading
	if(active== true){

		let body = document.querySelector("body")
		let mainPart = document.createElement("div")
		mainPart.className = "main-part"
	
		let imageSlider = document.createElement("div")
		imageSlider.className = "image-slider"
	
		let circle1 = document.createElement("div")
		circle1.className = "circles"
		circle1.id = "c-1"
	
		let circle2 = document.createElement("div")
		circle2.className = "circles"
		circle2.id = "c-2"
	
		let circle3 = document.createElement("div")
		circle3.className = "circles"
		circle3.id = "c-3"
	
		body.append(mainPart)
		mainPart.append(imageSlider)
		imageSlider.append(circle1)
		imageSlider.append(circle2)
		imageSlider.append(circle3)
	
		loadContent()
		// alert("Html was loaded successfuly")
	
		var count = 0
		const a = setInterval(()=>{
			var imageSlider = document.querySelector(".image-slider")
			if (imageSlider){

				if(count>=3){
					slideImages(1)
					count = 2
				}
				else if(active == false){
				}
				else{
					count += 1
					slideImages(count)
		
				}
			}
			
			
			
		},3000)
		
		// while(active==true){

		// 	clearInterval(a)
		// 	continue
		// }
	}
}








function slideImages(frame){
	var imageSlider = document.querySelector(".image-slider")
	var img1 = "../src/Images/drinks.jpg"
	var img2 = "../src/Images/platter.jpg"
	var img3 = "../src/Images/salad.jpg"
	var circ1 = document.querySelector("#c-1")
	var circ2 = document.querySelector("#c-2")
	var circ3 = document.querySelector("#c-3")
	if(frame== 1 && circ1!= null){3
		imageSlider.style.transition = "1s ease"
		imageSlider.style.backgroundImage = `url(${img1})`;
		circ1.style.backgroundColor = "#0f172a"
		circ2.style.backgroundColor = "grey"
		circ3.style.backgroundColor = "grey"
		circ1.style.opacity = "0.5"
	}
	else if(frame== 2 && circ2!=null){
		imageSlider.style.transition = "1s ease"
		imageSlider.style.backgroundImage = `url(${img2})`;
		circ2.style.backgroundColor = "#0f172a"
		circ1.style.backgroundColor = "grey"
		circ3.style.backgroundColor = "grey"
		circ2.style.opacity = "0.5"
	}
	else if(frame== 3 && circ3!=null){
		imageSlider.style.transition = "1s ease"
		imageSlider.style.backgroundImage = `url(${img3})`;
		circ3.style.backgroundColor = "#0f172a"
		circ2.style.backgroundColor = "grey"
		circ1.style.backgroundColor = "grey"
		circ3.style.opacity = "0.5"
	}

	

}

function loadContent(){
	let mainPart = document.querySelector(".main-part")
	let midTitle = document.createElement("p")
	midTitle.className = "mid-title main"
	midTitle.textContent = "Bienvenue à RG's Inn"
	mainPart.append(midTitle)

	let warning = document.createElement("p")
	warning.className = "content"
	warning.textContent = "Attention: ceci est un site fictionnel réalisé dans le cadre d'un projet de conception d'un site web."
	mainPart.append(warning)

	let rtext1 = document.createElement("p")
	rtext1.className = "content"
	rtext1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?"
	mainPart.append(rtext1)


	// SECOND PART
	let midTitle2 = document.createElement("p")
	midTitle2.className = "mid-title sub"
	midTitle2.textContent = "1-Un espace adapté à vos besoins"
	mainPart.append(midTitle2)

	let rtext2 = document.createElement("p")
	rtext2.className = "content"
	rtext2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?"
	mainPart.append(rtext2)

	let rtext3 = document.createElement("p")
	rtext3.className = "content"
	rtext3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?"
	mainPart.append(rtext3)


	// THIRD PART
	
	let midTitle3 = document.createElement("p")
	midTitle3.className = "mid-title sub"
	midTitle3.textContent = "2-Une nourriture saine et délicieuse à souhait"
	mainPart.append(midTitle3)

	let rtext4 = document.createElement("p")
	rtext4.className = "content"
	rtext4.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?"
	mainPart.append(rtext4)

	let rtext5 = document.createElement("p")
	rtext5.className = "content"
	rtext5.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?"
	mainPart.append(rtext5)

	// FOURTH PART
	let midTitle4 = document.createElement("p")
	midTitle4.className = "mid-title sub"
	midTitle4.textContent = "3-Un personnel acceuillant et paré à vous servir"
	mainPart.append(midTitle4)

	let rtext6 = document.createElement("p")
	rtext6.className = "content"
	rtext6.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?"
	mainPart.append(rtext6)

	let rtext7 = document.createElement("p")
	rtext7.className = "content"
	rtext7.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet necessitatibus voluptatem, at optio nostrum ullam reprehenderit saepe veniam et dignissimos vel vero aut cum incidunt. Cupiditate dolore molestiae vitae?"
	mainPart.append(rtext7)


	let creator = document.createElement("p")
	creator.className = "create"
	creator.textContent = "Created by igeon22"
	let body = document.querySelector("body")
	mainPart.append(creator)



}

export {loadHtmlComponent}