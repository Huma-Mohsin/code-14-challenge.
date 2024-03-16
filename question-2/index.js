// Question 41: Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician_name = ["Abracadabra", "Presto", "Alakazam", "Hocus", "Pocus"];
function show_magicians(magician_name) {
    console.log("Magician's Name are as:-");
    for (var _i = 0, magician_name_1 = magician_name; _i < magician_name_1.length; _i++) {
        var item = magician_name_1[_i];
        console.log(item);
    }
}
show_magicians(magician_name);
