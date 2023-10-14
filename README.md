Приложение делает запрос в API Yandex Weather и возвращает объект прогноза погоды.

В переменную окружения нужно добавить `'X-Yandex-API-Key'` как `WEATHER_API_KEY`.

С фронтенд приложения обращаться по адресу `'/api'`, в ответ придет объект, который содержит прогноз погоды, подробнее можно прочитать [здесь](https://yandex.ru/dev/weather/doc/dg/concepts/forecast-info.html).

При обращении к `'/'` сервер отправляет файл `index.html` из директории `'./frontend/build'` по умолчанию. Команда для запуска приложения `npm run start-weather-server`. Чтобы изменить директорию используйте ключ `-s`, например `npm run start-weather-server -s ./app`

Установка приложения `npm i @ramil290989/weather-server`