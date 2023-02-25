

function search(){
    var url = "https://www.youtube.com/results?search_query=" + document.getElementsByClassName("searchbox").item(0).value;
    let searchContent = document.getElementsByClassName("searchbox").item(0).value;
    window.location.href=url;

}

document.addEventListener("keydown", e => {
    
    if (e.key === "Enter") {
        if ( document.getElementsByClassName("searchbox").item(0).value != "") {
            search()
        }
    }

})

function addnote(){
    var notCount = parseInt(document.getElementsByClassName("notnum").item(0).textContent);
    notCount += 1;
    document.getElementsByClassName("notnum").item(0).innerHTML = notCount;
    
}