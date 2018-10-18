const dotenv = require('dotenv')
const Twit = require('twit')

dotenv.config()

const T = new Twit({
  consumer_key:         process.env.consumer_key || '',
  consumer_secret:      process.env.consumer_secret ||  '',
  access_token:         process.env.access_token || '',
  access_token_secret:  process.env.access_token_secret || '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

const stream = T.stream('statuses/filter', { track: ['node', 'npm', 'nodejs', 'node.js', 'javascript'] })
console.log('Subscribed!')

stream.on('tweet', function (tweet) {
  console.log(tweet.created_at)
  console.log(tweet.text, '\n')
})
