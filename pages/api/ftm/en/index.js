import { ftm } from '../../../../data/ftm'

export default function handler(req, res) {
    res.status(200).json(ftm)
}