const getImage = (words: string) => `https://cataas.com/cat/says/${words}?fontSize=50&fontColor=green&json=true`

interface CatImageI {
  id: string
  tags: string[]
  created_at: string,
  url: string,
  mimetype: string
}

export async function getRandomImage(fact: string) {
  const firtsWord = fact.split(' ', 3).join(' ')

  try {
    const res = await fetch(getImage(firtsWord))
    const json: CatImageI = await res.json()
    return json.url
  } catch (error) {
    console.log(error);
    throw new Error('Error on fetch a image cat')
  }
}