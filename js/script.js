const API_KEY = "ab9b803f25106e487691e91519f837a5";

const result = document.getElementById("result");



document
.getElementById("searchBtn")
.addEventListener("click", () => {

    let artist =
    document.getElementById("artistInput").value;


    if (artist.trim() !== "") {
        getArtist(artist);
    }

});


async function getArtist(name) {


    let url =
    `https://ws.audioscrobbler.com/2.0/
    ?method=artist.gettopalbums
    &artist=${encodeURIComponent(name)}
    &api_key=${API_KEY}
    &format=json`
    .replace(/\s/g,'');



    let response =
    await fetch(url);


    let data =
    await response.json();


    showAlbums(data,name);

}


function showAlbums(data,artist) {


    result.innerHTML = "";


    let title =
    document.createElement("h2");


    title.innerHTML =
    artist + " Albumit";


    result.appendChild(title);



    let albums =
    data.topalbums.album;



    albums.forEach(album => {


        let div =
        document.createElement("div");


        div.className="album";



        let image =
        album.image[2]["#text"];



        div.innerHTML = `

        <h3>
        ${album.name}
        </h3>


        <img 
        src="${image}"
        onerror="this.src='https://via.placeholder.com/200'"
        >


        <p>
        Artist: ${artist}
        </p>


        <button>
        Näytä Biisit
        </button>


        <div class="songs"></div>

        `;



        let button =
        div.querySelector("button");


        button.addEventListener("click",()=>{


            getSongs(
                artist,
                album.name,
                button
            );


        });



        result.appendChild(div);


    });


}







async function getSongs(artist, album, button) {


    let url =
    `https://ws.audioscrobbler.com/2.0/
    ?method=album.getinfo
    &artist=${encodeURIComponent(artist)}
    &album=${encodeURIComponent(album)}
    &api_key=${API_KEY}
    &format=json`
    .replace(/\s/g,'');



    let response =
    await fetch(url);



    let data =
    await response.json();



    console.log(data);



    if(!data.album){

        button.nextElementSibling.innerHTML =
        "Biisejä ei löydetty.";

        return;

    }


    let tracks =
    data.album.tracks.track;


    if(!Array.isArray(tracks)){

        tracks = [tracks];

    }


    let list="<ul>";



    tracks.forEach(song=>{


        list +=
        `
        <li>
        ${song.name}
        </li>
        `;


    });



    list += "</ul>";



    button.nextElementSibling.innerHTML =
    list;


}