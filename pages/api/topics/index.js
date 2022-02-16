import { resources } from '../../../data/topic'

export default function handler(req, res) {
    res.status(200).json(resources)
}