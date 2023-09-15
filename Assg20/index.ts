//Think of something you could store in a array. 
//For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. \
//Write a program that creates a list containing these items.

//var cities: string[] = ["Lahore", "Faisalabad", "Karachi", "Islamabad", "Peshawar"];
//console.log("List of Cities:")


var listOfCities:string[]=['1-"Lahore"','2-"Multan"','3-"Faisalabad"','4-"Islamabad"','5-"Naran"'];
console.log(`Array in Original Order`); 

for (let i = 0; i < listOfCities.length; i++) {
    console.log(listOfCities[i])
};