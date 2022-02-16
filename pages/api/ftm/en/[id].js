import { ftm } from '../../../../data/ftm'

export default function handler({ query: { id } }, res) {
    const filtered = ftm.filter((trials) => trials.level == id)

    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res
            .status(404)
            .json({ message: `Content with id of ${id} is not found` })
    }
}