import jwt from 'jsonwebtoken'

// doc autentificacion con middleware
const authDoctor = async (req, res, next) => {
    const { dtoken } = req.headers
    if (!dtoken) {
        return res.json({ success: false, message: 'No Autorizado Login nuevamente' })
    }
    try {
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        req.body.docId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor;