export const hostRequest = async hostData =>{
    const response= await fetch(`http://localhost:5000/user/${hostData?.email}`,{
        method: "PUT",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(hostData)
    })
    const data = await response.json();
    return data
}