document.getElementById('fetch-users').addEventListener('click', function() {
    // Mostrar el loader y ocultar la tabla
    document.getElementById('loader').style.display = 'block';
    document.getElementById('user-table').style.display = 'none';

    fetch('https://reqres.in/api/users?delay=3')
        .then(response => response.json())
        .then(data => {
            // Ocultar el loader y mostrar la tabla
            document.getElementById('loader').style.display = 'none';
            document.getElementById('user-table').style.display = 'block';

            const users = data.data;
            const tbody = document.getElementById('user-tbody');
            tbody.innerHTML = ''; 

            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td>${user.email}</td>
                    <td><img src="${user.avatar}" class="avatar"></td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            // Ocultar el loader en caso de error
            document.getElementById('loader').style.display = 'none';
        });
});
