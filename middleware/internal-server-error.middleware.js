const internalServerError = (err, req, res, next) => {
    res.status(500)
        .json({
            code: 500,
            message: err.message
        })
}

export {internalServerError};