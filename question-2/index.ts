// Question 41: Magicians: Display magician names from an array.

// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//solution:-

//declaring a magicians name in an array.
let magician_name:string[]=["Abracadabra", "Presto", "Alakazam", "Hocus", "Pocus"]
//make a function and then here I pass an array as a function input parameter i.e argument.
function show_magicians(magician_name){

    //  // Printing a message to the console
    console.log("Magician's Name are as:-");
    
    // Iterating over each element in the magician_name array
    for (const item of magician_name) {
        
    //  // Printing each iterator to the console
        console.log(item)
    }
}
// Calling the show_magicians function and passing the magician_name array as an argument
show_magicians(magician_name);