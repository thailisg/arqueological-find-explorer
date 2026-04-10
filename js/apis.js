//News API function to fetch news articles related to archaeology

export async function getNews() {
    const apiKey = "ee4fd15b6d43311e362624620210adfc";

    const query = "archaeology OR prehistoric";

    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=10&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    return data.articles ?? [];
}


//Pexels API function to fetch images related to archaeology
export async function getImage(query) {
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

    const options = {
        headers: {
            Authorization: "gYeE9sJjZOOMDrG6FyoxJNREyqUbYLeqjVFNp7cJD8QG9frupytnkNEr"
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log("Pexels API function executed");

    return data.photos;

}