import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
  const {data, isLoading} = useGenres();   

  if(isLoading) return <Spinner />  

  return (
    <>
    <Heading marginBottom={3} fontSize='2xl'>
      Genres
    </Heading>
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
                <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)}/>
                <Button whiteSpace='normal' textAlign="left" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant="link" onClick={() =>onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GenreList