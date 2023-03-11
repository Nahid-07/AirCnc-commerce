
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

// GET USER ROLE

export const getRole = async email => {
    const response= await fetch(`http://localhost:5000/user/${email}`)
    const user = await response.json();
    return user?.role
}