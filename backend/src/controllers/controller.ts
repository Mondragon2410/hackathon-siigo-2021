import { Request, Response } from 'express'

export const addJ = async (req: Request, res: Response) => {
    res.json({ A: 1 })
}

export const getJ = async (req: Request, res: Response) => {
    res.json({ A: 2 })

}

export const getJById = async (req: Request, res: Response) => {
    res.json({ A: 3 })

}

export const removeJ = async (req: Request, res: Response) => {
    res.json({ A: 4 })

}