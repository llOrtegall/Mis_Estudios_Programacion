import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { catImage } = useCatImage({ fact: 'Ramdom Fact' })

  return (
    <>
      {catImage && <img src={catImage} />}
    </>
  )
}
