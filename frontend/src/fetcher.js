export const newTodo = (title) => {
    fetch(`http://${window.location.host}/api`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title})
    })
        .then((response)=>response.json())
        .then((data) => {
            console.log('Success:', data)
        });
}