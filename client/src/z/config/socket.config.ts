import { io } from 'socket.io-client'

const URL = 'wss://poc-server.8lanes.co'

export const socket = io(URL)
