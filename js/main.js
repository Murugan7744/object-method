
let data={
		id:1,
		rollno:1055840,
		name:"Murali",
		Fathername:"Ganeshan",
		DOB:"23/01/1999",
		address:"2/50,Indira Nagar.Housing Board",
		Pincode:624811,
		Place:"Tenkasi",
		qualification:"B.sc (E&C)",
		mark:566,
		percentage:93,
		phoneno:{
			personalno:9247236356, offcialno:6789263780
		},
		sum(){
			    let totalmark=600;
				    marksof=100;
				    total=data.mark/totalmark;
				    percentage=total*marksof;
				return percentage;
		}
	
}
document.write(`BIO DATA`)
document.write("<br>");
document.write(`Name = ${data.name}`);
document.write("<br>");
document.write(`Father's Name = ${data.Fathername}`);
document.write("<br>");
document.write ( `DOB = ${data.DOB} `);
document.write("<br>");
document.write ( `Address = ${data.address} `);
document.write("<br>");
document.write(`Place = ${data.Place}`);
document.write("<br>");
document.write ( `Pincode = ${data.Pincode} `);
document.write("<br>");
document.write(`Mark = ${data.mark}`);
document.write("<br>");
document.write(`Percentage = ${data.sum()}`);
document.write("<br>");
document.write(`Qualification = ${data.qualification}`);
document.write("<br>","<br>","<br>","<br>");


let fridge={
		name:"Whirlpool ",
		color:"	Wine Bloom-Z",
		prize:"30,000",
		tax:"3,000",
		capacity:"184 liters",
		warenty:"10years",
		brandspecificfeature:"Jumbo Storage for Bottles, Insulated Capillary Technology, Auto Connect To Home Inverter,  Easy Manual Defrosting & Large Freezer Capacity",
		weight:"33.4kg",
		totalprice(){
			let amount=fridge.prize+fridge.tax;
			return amount;
		}
	
}
document.write(`Product Name ${fridge.name} `,"<br>");
document.write(`Total Price  : ${fridge.totalprice()}`,"<br>");
document.write(Object.keys(fridge),"<br>");
document.write(Object.values(fridge) ,"<br>");
document.write(Object.entries(fridge),"<br>","<br>","<br>","<br>");



let sim={
		name:"JIO",
		phoneno:8978657352,
		photo:"image",
		adharnumber:62829373972,
		state:"Tamilnadu",
		planstart:"1/03/23",
		planexpirarydate:"3/5/23",
		calls:"unlimited",
		message:"unlimited",
		data:"1.5gp",
		offers(){
			let plan=sim.planstart+sim.planexpirarydate;
			return plan;
		}
	
}
document.write(`Sim.Name ${sim.name}`,"<br>");
document.write(`Valid date  : ${sim.offers()}`,"<br>");
document.write(Object.keys(sim),"<br>");
document.write(Object.values(sim) ,"<br>");
document.write(Object.entries(sim),"<br>","<br>","<br>","<br>");



let movie={
		movies:"roja",
		Director:"Manirathnam",
		music:"AR RAHMAN",
		actor:"aravind swmai",
		ticket:150,
		releasedate:1992,
		lanugage:"tamil,malayalam",
		oscor:"2awards",
		siima:"4awards",
		totalawards(){
			let total=movie.oscor-movie.siima;
			return total;
		}
	
}
document.write(`Movie movies : ${movie.movies}`,"<br>");
document.write(`Totalawards : ${movie.totalawards()}`,"<br>");
document.write(Object.keys(movie),"<br>");
document.write(Object.values(movie) ,"<br>");
document.write(Object.entries(movie),"<br>","<br>","<br>");



let book={
		name:"Atomic Habits",
		author:"james clear",
		language:"English",
		publisher:"random house business",
		publishedyear:2018,
		actualprize:389,
		originalprize:799,
		
		totalprice(){
			let amount=book.originalprize-book.actualprize;
			return amount;
		}
	
}
document.write(book.name ,"<br>");
document.write(`Discount  : ${book.totalprice()}`,"<br>");
document.write(Object.keys(book),"<br>");
document.write(Object.values(book) ,"<br>");
document.write(Object.entries(book),"<br>");
