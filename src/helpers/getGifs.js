export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=etbOdfbUUfVGH4vhpuxjOnZyy4uWqOdM&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map(e => ({
        id: e.id,
        title: e.title,
        url: e.images.downsized_medium.url
    }))
    return gifs
}