import {useQuery, gql} from '@apollo/client'

const GET_CHARACTER = gql`
query GetCharacter($id: ID){
  character(id: $id){
      id
      name
      image
      status
      episode {
        id
        name
        episode
        air_date
      }
      location {
        id
        name
        dimension
        
      }
    }

}
`

export const useCharacter = (id: number | string | undefined) => {
    
    const {error, loading, data} = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    } )

    console.log({error, loading, data})

    return(
        {
            error, loading, data
        }
    )

}


