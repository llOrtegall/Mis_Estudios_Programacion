const API_URL = "http://api.github.com/search/repositories?q=javascript"

const reponse = await fetch(API_URL)
if (!reponse.ok) {
    throw new Error('Reponse error')
}

type APIResponse = {
    items: object[]
}

const data = await reponse.json() as APIResponse;

const repos = data.items.map(repo => {
    console.log(repo)
})

export { }

