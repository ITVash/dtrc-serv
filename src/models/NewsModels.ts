import mongoose, { Schema, Document } from "mongoose"

export interface INews extends Document {
	title: string
	text_min: string
	text: string
	gallery: [{ type: Schema.Types.ObjectId; ref: "Gallery" }]
}
/**
 * Gallery field:
 * lastModified:number,
 * lastModifiedDate:object,
 * name: string,
 * size: number,
 * type: string,
 * webkitRelativePath: string
 */
