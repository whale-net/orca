
// base_url -- hardcoded for now http://209.236.115.26

export async function run_command(input_command: string) {
    console.log('ruan', input_command);

    const resp = await fetch('http://209.236.115.26:5000/server/command/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // TODO - no-cors only allows limited set of headres - need to figure this one out :)
        // i think if it became sever action it could work if that proxies it
        // otherwise need to spend time and unerstand issue
        mode: "no-cors",
        body: JSON.stringify({
            command: input_command
        })
    });
    return resp.json();
}
