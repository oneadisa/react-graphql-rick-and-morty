import {useQuery, gql} from '@apollo/client'

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

export const useCharacters = () => {
    
    const {error, loading, data} = useQuery(GET_CHARACTERS)

    console.log({error, loading, data})

    return(
        {
            error, loading, data
        }
    )

}