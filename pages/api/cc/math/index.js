import { ccmath } from '../../../../data/ccmath'

export default function handler(req, res) {
    res.status(200).json(ccmath)
}