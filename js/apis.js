//News API function to fetch news articles related to archaeology

export async function getNews() {
    const url = "https://newsapi.org/v2/everything?q=archaeology&apiKey=c38d143e66e84971ba7e2e2f4ecc70f0";

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data.articles;
    } catch (error) {
        console.error("Error fetching news:", error);
    }

    console.log("News API function executed");
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