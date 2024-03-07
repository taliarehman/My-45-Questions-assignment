function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0) + artist.slice(0),
        title: title.charAt(0) + title.slice(0)
    };
    return dictionaries;
}
var album = make_album("maher zain", "peace be upon you");
console.log(album);
album = make_album("siedd", "back to you");
console.log(album);
album = make_album("mohamed tarek", "eny oheb muhammada");
console.log(album);
