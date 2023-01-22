const getData = (addData) => {
  fetch('http://localhost:3004/api/v1/record/')
    .then((response) => response.json())
    .then((data) => {
      addData(data);
    })
    .catch(() => {
      alert('Не удалось загрузить данные');
    })
}

const setPlayer = (user, time, reloadData) => {
  const data = {
    name: user,
    time: time
  }

  fetch(
    'http://localhost:3004/api/v1/record/',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    },
  )
    .then((response) => {
      if (response.ok) {
        getData(reloadData)
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    })
    .catch(() => {
      alert('Не удалось отправить данные');
    });
};

export {getData, setPlayer}
