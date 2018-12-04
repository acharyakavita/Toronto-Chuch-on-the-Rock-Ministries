/*Javascript file for Toronto church on the Rocks Website*/

/*On page load Verse of the day will be loaded from 'www.ourmanna.com'*/
window.onload = (function () {
    /*Verse api call*/
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://www.ourmanna.com/verses/api/get/?format=json",
        dataType: "json"
    }).done(addVerse)
        .fail(error)
})();

/*Error function if API call fails*/
function error() {
    console.log('Verse of the day call failed.So default verse will be displayed');
    let verse = document.querySelector('.verse');
    verse.innerHTML=`<h4>Verse of the Day</h4><h5 class="verse-author">John 3:16</h5>
                    <p class="verse-content">For God so loved the world that he gave his one and only Son,
                    that whoever believes in him shall not perish but have eternal life.</p>`
}

/*Add verse function will load the verse of the daya data on to the webpage*/
function addVerse(verse) {
    let author = document.querySelector('.verse-author');
    let content = document.querySelector('.verse-content');
    author.textContent = verse.verse.details.reference;
    content.textContent = verse.verse.details.text;
}