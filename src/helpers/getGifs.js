export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=q4leSlnFl5ElUu6UD7QPZzNNb84rH17D&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}