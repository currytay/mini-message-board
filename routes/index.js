var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* POST new messages */
router.post('/new', function(req, res, next) {
  // Extract message from request body
  const newMessage = {
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  };

  // Add message to messages array
  messages.push(newMessage);

  // Redirect back to home page
  res.redirect('/');
})

module.exports = router;
