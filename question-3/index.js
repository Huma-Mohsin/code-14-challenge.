// //Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
//SOLUTION:-
var magicians_name = ["abracadabra", "hocus", "pocus", "presto", "alakazam"];
function make_great(magicians_name) {
    console.log("following are the modified list of magician's name:-");
    magicians_name.forEach(function (element) {
        //Modifying array contents within a function
        console.log("The Great ".concat(element));
    });
}
make_great(magicians_name);
