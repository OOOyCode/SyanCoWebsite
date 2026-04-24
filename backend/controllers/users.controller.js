import {prisma} from '../config/db.ts'

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true
            }
        })
        res.json({ users })
    }
    catch {
        res.status(500).json({ error: 'Server error' })
    }
}

export const getUserById = async (req, res) => {
    const {id} = req.params
    try {
        const user = await prisma.user.findFirst({
            where: {id: id},
            select: {
                id: true,
                username: true,
                email: true,
                role: true
            }
        })
        res.json({ user })
    }
    catch {
        res.status(500).json({ error: 'Server error' })
    }
}