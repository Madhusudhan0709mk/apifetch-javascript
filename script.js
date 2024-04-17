
const apiUrl = 'https://jsonplaceholder.typicode.com/users';


async function fetchData() {
    try {
 
        const response = await fetch(apiUrl);
        
    
        const data = await response.json();
    
        displayData(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}


function displayData(users) {
    const userDataDiv = document.getElementById('userData');

    userDataDiv.innerHTML = '';

    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('col-lg-4', 'mb-4');
        userElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                    <p class="card-text"><strong>Phone:</strong> ${user.phone}</p>
                </div>
            </div>
        `;
        userDataDiv.appendChild(userElement);
    });
}

fetchData();
