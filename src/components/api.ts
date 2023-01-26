export async function getImages() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    return await response.json();
}

export default getImages;