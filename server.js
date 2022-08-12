require('dotenv').config()
const ngrok = require('ngrok')

const options = {
    proto: 'tcp',
    addr: 22,
    authtoken:process.env.NGROK_TOKEN
}

const connect = async () => {
    console.log('requesting tunnel...')
    const url = await ngrok.connect(options)
    console.log(url)
}

connect()

setTimeout(async () =>  {
    await ngrok.disconnect()
    await ngrok.kill()
    console.log('disconnected!')
}, 3000);