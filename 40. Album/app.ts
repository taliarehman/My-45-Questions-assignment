function make_album (artist: string , title: string): {artist: string , title: string} {
    const dictionaries = {
        artist: artist.charAt(0) + artist.slice(0),
        title: title.charAt(0) + title.slice(0)
    };
    return dictionaries;
}


let album = make_album("maher zain","peace be upon you")
console.log(album)

album = make_album("siedd","back to you")
console.log(album)

album = make_album("mohamed tarek","eny oheb muhammada")
console.log(album);

