import { subtopics } from '../../../data/subtopics'

export default function handler(req, res) {
    res.status(200).json(subtopics)
}