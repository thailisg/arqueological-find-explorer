//News API function to fetch news articles related to archaeology

export async function getNews() {
    const url = "https://api.currentsapi.services/v1/search?keywords=archaeology&apiKey=slpmyNEQmmUuluUcYcD2xuEEitxEpOzagBDL64f5BKndZsOl";

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        return data.news ?? [];
    } catch (error) {
        console.error("Error fetching news from Currents API:", error);
    }

    console.log("Currents API function executed");
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