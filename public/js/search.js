var searchBtn = document.getElementById("searchButton");
var searchTxt = document.getElementById("searchText");

const searchAPI = async (search) => {
    const response = await fetch("/api/blogposts/search", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    console.log(response);
}

searchBtn.addEventListener('click', function (e) {
    // console.log('7');
    e.preventDefault();
    searchAPI(searchTxt.value.trim());
});