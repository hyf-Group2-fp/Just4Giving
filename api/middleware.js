const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config.js');

// const withAuth = function(req, res, next) {
//   const token = 
//       req.body.token ||
//       req.query.token ||
//       req.headers['x-access-token'] ||
//       req.cookies.token;

//   if (!token) {
//     res.status(401).send('Unauthorized: No token provided');
//   } else {
//     jwt.verify(token, JWT_SECRET, function(err, decoded) {
//       if (err) {
//         res.status(401).send('Unauthorized: Invalid token');
//       } else {
//         //req.email = decoded.email;
//         next();
//       }
//     });
//   }
// }

const withAuth = function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
        res.status(401).send('Unauthorized: No token provided');
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);    
    req.mail = decoded;
    next();
  } catch(err) {
     res.status(400).json({message: 'token not valid'})
  }
}

module.exports = withAuth;