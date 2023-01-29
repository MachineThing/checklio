export const fetchMan = (input) => {
    return new Promise((success) => {
        fetch(`http://${window.location.host}/api`, input)
            .then((response)=>response.json())
            .then((data) => {
                success(data);
            });
    });
}