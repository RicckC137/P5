function getObjects() {

    fetch("http://localhost:3000/api/products")

        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (value) {
            console.log(value);
        })
        .catch(function (err) {
        });
}

/*async function reply() {.then(response => console.log(response));
    const response = await fetch('http://localhost:3000/api/products');
    const object = await response.json();
    return object;
}





async function reply() {
    const response = await fetch('http://localhost:3000/api/products');
    console.log(reply);
}


async function firstObjectRequest() {

    const firstObjectRequestReply = await fetch("http://localhost:3000/api/products");
    console.log(firstObjectRequestReply);
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const firstObjectRequest = await firstObjectRequest;
    } catch (e) {
        console.log("error");
        console.log(e);
    }

    console.log(firstObjectRequest);
});*/