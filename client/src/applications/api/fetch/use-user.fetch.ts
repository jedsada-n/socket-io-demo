import useSWR from 'swr'
import { z } from 'zod'

import usersController from '../controllers/users.controller'
import GetUsersPayload from '../payloads/users/get-users.payload'

const useUsersFetch = (payload: z.infer<typeof GetUsersPayload>) => {
	return useSWR('users', () => usersController.get_users(payload))
}

export { useUsersFetch }
