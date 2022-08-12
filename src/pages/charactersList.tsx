// import React from 'react'
import {useQuery, gql} from '@apollo/client'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import { Link } from 'react-router-dom'

const GET_CHARACTERS = gql`
query{
  characters{
    results{
      id
      name
      image
    }
  }
}
`


export const  CharacterList = () => {


    const {error, loading, data} = useQuery(GET_CHARACTERS)

    console.log({error, loading, data})

    if (loading) return <div> Spinner... </div>

    if(error) return <div> Something went wrong</div>
    return(
        <div className="spinner">
            {data.characters.results.map((char: {
                id: number, image: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined 
}) => {
                return(
                    <div key={char.id}>
                    <Link to={`/${char.id}`} className='character'>
                        <img src={char.image} alt="character" />
                        <p> {char.name}</p>
                    </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterList