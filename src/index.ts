//Импорты необходимых библиотек
import express from 'express'
import dotenv from 'dotenv'

import { connect, createRoutes } from './core'

//Подключаем наши импорты

const app = express()
dotenv.config()
connect()
createRoutes(app)


//Запуск сервера

const PORT:number | any = process.env.PORT || 5052

app.listen(PORT, ()=> {
  console.log(`Сервер запущен по адресу: http://localhost:${PORT}`)
})