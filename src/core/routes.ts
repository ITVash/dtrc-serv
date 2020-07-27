//Импортируем необходимые библиотеки для роутов
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'


dotenv.config()
//Создаем класс для Роутов
const createRoutes = (app: express.Express) => {
  //Подключаем политику CORS и работу с JSON объектами!
  app.use(cors())
  app.use(bodyParser.json())
  
  //Первый роут
  app.get('/', (_:any, res:express.Response) => {
    res.send('Добро пожаловать в Админ панель')
  })
  app.get('/api', (_:any, res:express.Response) => {
    res.send('Тут все необходимые роуты нашего приложения')
  })

  //Перечисление роутов сервера
  /** */

  //Перечесление роутов клиенской части

}

export default createRoutes
