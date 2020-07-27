//Импорт модулей для модели юзеров
import mongoose, { Schema, Document } from "mongoose"

export interface IUsers extends Document {
	login: string
	fullName: string
	email: string
	phone: string
	password: string
	access: number
}

const UsersSchema = new Schema(
	{
		login: {
			required: "Поле Логин, обязательно для заполнения!",
			type: String,
			unique: true,
		},
		fullName: {required: "Поле ФИО, обзательно для заполнения!", type: String, default: ""},
		email: {
			required: "Поле Почта, обязательно для заполнения!",
			type: String,
		},
		phone: {
			required: "Поле Телефон, обязательно для заполнения!",
			type: String,
			default: "",
		},
		password: {
			required: "Поле Пароль, обязательно для заполнения!",
			type: String,
		},
		access: {
			required: "Поле Доступ, обязательно для заполнения!",
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true, versionKey: false },
)

const UsersModels = mongoose.model<IUsers>("Users", UsersSchema)

export default UsersModels
