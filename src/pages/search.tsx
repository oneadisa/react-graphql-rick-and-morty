import { gql, useLazyQuery } from "@apollo/client"
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react"

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!) {
  characters(filter: {name: $name} ){
    results{
      location{
        name
      }
    }
  }

}
`
export const Search = () => {

    const [name, setName] = useState('')

    const [getLocations, {error, loading, data, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables : {
            name
        }
    })

    console.log({error, loading, data, called})

    return(
        <>
        <input value ={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => getLocations()} >Search</button>
        {error && <div>Something went wrong</div>}
        {loading && <div>Loading...</div>} 
        {data.characters.results.map((location: { location: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined } }) => {
                return(
                    <div>{location.location.name}</div>
                )
            })}
        </>
    )
}