// //Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// // Album: Create objects for music albums.

// Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.


//solution


//creating an interface
//it describe the structure of an album's object.
interface Album{
    //The function should take in an artist name and an album title,
    artist:string;
    title:string;
    //Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
    track?:number

}

//Write a function called make_album() that builds a Object describing a music album
//make_album() Function:

// The make_album() function creates an album object based on the provided parameters.
// Parameters:
// artist_name: A string representing the name of the artist.
// album_title: A string representing the title of the album.
// num_tracks (optional): An optional number representing the number of tracks on the album
function make_album(artist_name:string,album_title:string,number_of_track?:number):Album {

    let album:Album={artist:artist_name,title:album_title}

    if(number_of_track!==undefined){

       album.track=number_of_track;
number_of_track

}

return album;
}

//Use the function to make three dictionaries representing different albums. 

let album1:Album=make_album("Artist1","Album1");
let album2:Album=make_album("Arist2","Album2");
let album3:Album=make_album("Artist3","Album3",4)


//Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 


console.log(album1)
console.log(album2)
console.log(album3);

//note:helped from outsource to understand because this challenge is new to learn for me.