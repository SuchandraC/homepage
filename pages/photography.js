import { Container, Heading, SimpleGrid, Box, Text, Image, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

// Photo data - replace with your own photos
const photos = [
  {
    src: '/images/photography/photo1.jpg',
    caption: 'Sunset over the city skyline',
    location: 'Philadelphia, PA',
    date: '2025'
  },
  {
    src: '/images/photography/photo2.jpg',
    caption: 'Morning fog in the mountains',
    location: 'Blue Ridge',
    date: '2025'
  },
  {
    src: '/images/photography/photo3.jpg',
    caption: 'Street lights after rain',
    location: 'Center City',
    date: '2025'
  },
  {
    src: '/images/photography/photo4.jpg',
    caption: 'Autumn leaves in the park',
    location: 'Fairmount Park',
    date: '2024'
  },
  {
    src: '/images/photography/photo5.jpg',
    caption: 'Urban architecture',
    location: 'University City',
    date: '2024'
  },
  {
    src: '/images/photography/photo6.jpg',
    caption: 'Night cityscape',
    location: 'Philadelphia',
    date: '2024'
  }
]

const PhotoCard = ({ src, caption, location, date, delay }) => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const hoverBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')
  const captionColor = useColorModeValue('gray.700', 'gray.200')
  const metaColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Section delay={delay}>
      <Box
        borderRadius="lg"
        overflow="hidden"
        bg={bgColor}
        _hover={{ bg: hoverBg, transform: 'translateY(-4px)' }}
        transition="all 0.3s ease"
        cursor="pointer"
      >
        <Box position="relative" paddingTop="75%" bg="gray.700">
          <Image
            src={src}
            alt={caption}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            objectFit="cover"
            fallback={
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg={useColorModeValue('gray.200', 'gray.600')}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color={metaColor} fontSize="sm">📷 Photo</Text>
              </Box>
            }
          />
        </Box>
        <Box p={4}>
          <Text fontSize="md" fontWeight="medium" color={captionColor} mb={1}>
            {caption}
          </Text>
          <Text fontSize="sm" color={metaColor}>
            📍 {location} • {date}
          </Text>
        </Box>
      </Box>
    </Section>
  )
}

const Photography = () => (
  <Layout title="Photography">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Photography
      </Heading>
      
      <Text 
        mb={6} 
        color={useColorModeValue('gray.600', 'gray.400')}
      >
        A collection of moments captured through my lens. I enjoy photographing 
        cityscapes, nature, and everyday life.
      </Text>

      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            src={photo.src}
            caption={photo.caption}
            location={photo.location}
            date={photo.date}
            delay={index * 0.1}
          />
        ))}
      </SimpleGrid>

      <Section delay={0.7}>
        <Box 
          mt={8} 
          p={4} 
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          textAlign="center"
        >
          <Text color={useColorModeValue('gray.600', 'gray.400')}>
            More photos coming soon! 📸
          </Text>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Photography