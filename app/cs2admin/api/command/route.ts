// base_url -- hardcoded for now http://209.236.115.26

export async function GET() {
    return Response.json({message: 'it worked, but go away'})
}

// TODO - what context is available to me here?
export async function POST() {
    const res = await fetch('http://209.236.115.26:5000/server/command/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        //'API-Key': process.env.DATA_API_KEY!,
        },
        body: JSON.stringify({
            command: 'say hello world'
        })
    })

    const data = await res.json()

    // TODO - can this be logged? how to log in js/ts land?
    //console.log(data)

    return Response.json(data)
}
