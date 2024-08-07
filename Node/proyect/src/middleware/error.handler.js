export function logErrors (err, req, res, next) {
  console.log(err)
  next(err)
}

export function errorHandler (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}
