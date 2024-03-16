// //Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
//Write a function called make_album() that builds a Object describing a music album
//make_album() Function:
// The make_album() function creates an album object based on the provided parameters.
// Parameters:
// artist_name: A string representing the name of the artist.
// album_title: A string representing the title of the album.
// num_tracks (optional): An optional number representing the number of tracks on the album
function make_album(artist_name, album_title, number_of_track) {
    var album = { artist: artist_name, title: album_title };
    if (number_of_track !== undefined) {
        album.track = number_of_track;
        number_of_track;
    }
    return album;
}
//Use the function to make three dictionaries representing different albums. 
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Arist2", "Album2");
var album3 = make_album("Artist3", "Album3", 4);
//Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
console.log(album1);
console.log(album2);
console.log(album3);
//help from gpt to understand because this challenge is new to learn for me.
