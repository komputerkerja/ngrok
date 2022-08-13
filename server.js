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
    console.log(`url: ${url}`)
    const prsUrl = parseUrl(url)
    console.log(`the command we should paste into cli`)
    console.log(prsUrl)
}

disconnect = async () =>  {
    await ngrok.disconnect()
    await ngrok.kill()
    console.log('disconnected!')
}

connect()
setTimeout(() => disconnect(), 100000);
