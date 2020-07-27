import { Request, Response } from "express"
import bcrypt from "bcrypt"
import passVK from "passport-vkontakte"
import passport from "passport"

import { usersModels } from "../models"
import { IUsers } from "../models/UsersModels"
import { NativeError } from "mongoose"

const vkStrategy = passVK.Strategy

class UsersController {
	create = (req: Request, res: Response) => {
		const data: IUsers = req.body
		const postData = {
			login: data.login,
			email: data.email,
			phone: data.phone,
			password: bcrypt.hash(data.password, 10),
			access: data.access,
		}
		const user = new usersModels(postData)
		user
			.save()
			.then((obj: IUsers) => {
				res.status(201).json(obj)
			})
			.catch((err: any) => {
				res.status(500).json({
					status: 500,
					message: `Ошибка при добавлении нового пользователя!`,
					error: err,
				})
			})
	}
	show = (_: any, res: Response) => {
		usersModels.find().exec((err: NativeError, obj: IUsers) => {
			const getDate = {
				login: obj.login,
				email: obj.email,
				phone: obj.phone,
				access: obj.access,
			}
			res.status(200).json(getDate)
		})
	}
}

export default UsersController
