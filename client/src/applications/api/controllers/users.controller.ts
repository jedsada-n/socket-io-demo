import { z } from 'zod'

import { axiosInstance } from '../../../z/config/api.config'
import GetUsersPayload from '../payloads/users/get-users.payload'
import GetUsersSchema from '../schemas/get-users.schema'

const usersController = {
	get_users: async (payload: unknown): Promise<z.infer<typeof GetUsersSchema>[]> => {
		const validatedPayload = GetUsersPayload.parse(payload)
		const { data } = await axiosInstance.get('users', { params: validatedPayload })
		const validatedResponse = GetUsersSchema.array().parse(data)
		return validatedResponse
	},
}

export default usersController
