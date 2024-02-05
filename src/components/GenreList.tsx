import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';


const GenreList = () => {

  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

  const {data, isLoading} = useGenres();   

  if(isLoading) return <Spinner />  

  return (
    <>
    <Heading marginBottom={3} fontSize='2xl'>
      Genres
    </Heading>
    <List>
        {data?.results.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)}/>
                <Button whiteSpace='normal' textAlign="left" fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} fontSize='lg' variant="link" onClick={() =>setSelectedGenreId(genre.id)}>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GenreList