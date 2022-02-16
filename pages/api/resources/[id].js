import { resources } from '../../../data/resources'

export default function handler({ query: { id } }, res) {
    const filtered = resources.filter((resource) => resource.topic == id)

    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res
            .status(404)
            .json({ message: `Content with the id of ${id} is not found` })
    }
}