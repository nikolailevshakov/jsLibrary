const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
// ответ после отправки формы, можно добавить картинки или анимацию
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжутся',
        failure: 'Что-то пошло не так...'
    };
// добавили async/await, поэтому скрипт ждет ответ от сервера и let Не будет Undefined
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
// fetch api, ждет пока отработает запрос и запишется в res
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
// Тоже подождет получение ответа от сервера
        return await res.text();
    };

// очистка инпутов после использования
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    }

    form.forEach((item) => {
// Обработчик для каждой формы
        item.addEventListener('submit', (event) => {
// для отмены перезагрузки страницы
            event.preventDefault();
// создаем блок для отображения Message
            let statusMessage = document.createElement('div');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
// вернется промис с сервера
            postData('server.php', formData)
            .then(res => {
                statusMessage.textContent = message.success;
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                }, 5000);
            });
        });
    });
};
forms();