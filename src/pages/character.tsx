import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'

export default function Character() {   

    let {id} = useParams()
   
    const {loading, error, data } = useCharacter(id)

    console.log({error, loading, data})

    if (error) return <div>Something Went Wrong</div>
    if (loading) return <div>loading...</div>
    return(
        <div className='Character'>
            <h1 className ='Character-content'> {data.character.name}</h1>
                <img src={data.character.image} alt={data.character.name} width={50} height={50} />  
                {data.character.episode.map((episode: {
                    id: null | undefined, name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; air_date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined 
}) =>
                    {return(
                        <div key={episode.id} className="Character-episode">
                        <p>{episode.name}</p>
                        <p>{episode.air_date}</p>
                        </div>
                    )}
                    )}  
        </div>
    )
}