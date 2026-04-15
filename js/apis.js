//News API function to fetch news articles related to archaeology

export async function getNews() {
    const url = "https://api.currentsapi.services/v1/latest-news?apiKey=W8KoIqgEhRFIIyJt-XoMOuGvZWCY2RBUL6ViEQUz-2JR4AWP";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const articles = data.news ?? [];

        const keywords = [
            "archaeology",
            "arqueology",
            "ancient",
            "ruins",
            "excavation",
            "history",
            "civilization"
        ];

        const filtered = articles.filter(article => {
            const text = `${article.title} ${article.description}`.toLowerCase();
            return keywords.some(word => text.includes(word));
        });

        if (filtered.length > 0) {
            return filtered;
        }

        return articles;

    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}

//Pexels API function to fetch images related to archaeology
export async function getImage(query) {
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=30`;

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