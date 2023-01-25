export const getImageUrl = async image => {
    const formData = new FormData()
    formData.append('image', image);

    // imgBB api key
    const url = "https://api.imgbb.com/1/upload?key=afef7a18a343b614ef922e54a0d39132";

    const response = await fetch(url, {
        method: "POST",
        body: formData
    })
    const data = await response.json();
    return data.data.display_url
}