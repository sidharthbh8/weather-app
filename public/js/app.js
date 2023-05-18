console.log('Client side javascript file')

const callFetch = (input) => {
    fetch(`http://localhost:3000/weather?address=${input}`).then((res) => {
        res.json().then((data) => {
            console.log(data);
            output1.textContent = data.location;
            output2.textContent = data.forecast;
        })
    })
}

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    output1.textContent = 'Loading...';
    output2.textContent = 'Grabbing latest information...';
    let location = search.value
    if (location === undefined) {
        console.log("enter the location!! ");
    }
    else {
        callFetch(location);
    }
})
