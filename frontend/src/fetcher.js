export const fetchMan = (input) => {
    // Fetch API wrapper
    return new Promise((success, failure) => {
        fetch(`http://${window.location.host}/api/`, input)
            .then((response)=>{
                if (response.status >= 200 && response.status <= 299) {
                    // If status code is a success status code
                    success(response.json(), response.status)
                } else {
                    // If status code is anything else
                    failure(response.status)
                }
            });
    });
}