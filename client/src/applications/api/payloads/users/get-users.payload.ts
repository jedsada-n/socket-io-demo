import { z } from 'zod'

const GetUsersPayload = z.object({
	name: z.string().nullish(),
})

export default GetUsersPayload
