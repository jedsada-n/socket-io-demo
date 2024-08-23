import { z } from 'zod'

const GetUsersSchema = z.object({
	email: z.string(),
	id: z.number(),
	name: z.string(),
	phone: z.string(),
	username: z.string(),
})

export default GetUsersSchema
