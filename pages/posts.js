import { Container, Heading, SimpleGrid, Box, Text, useColorModeValue, Badge, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const posts = [
  { title: 'The Future of Web Development', date: 'Jan 2025', tag: 'Tech' },
  { title: 'My Journey at UPenn', date: 'Dec 2024', tag: 'Personal' },
  { title: 'Data Structures Every Developer Should Know', date: 'Nov 2024', tag: 'Tutorial' },
  { title: 'Building Scalable Applications', date: 'Oct 2024', tag: 'Engineering' },
]

const ArticleItem = ({ title, date, tag }) => {
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')
  const hoverBg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')
  const dateColor = useColorModeValue('gray.500', 'gray.400')
  
  return (
    <Box
      py={4}
      borderBottom="1px"
      borderColor={borderColor}
      _hover={{ bg: hoverBg }}
      cursor="pointer"
      px={2}
      mx={-2}
      borderRadius="md"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontWeight="bold">{title}</Text>
          <Text fontSize="sm" color={dateColor}>
            {date}
          </Text>
        </Box>
        <Badge colorScheme="teal">{tag}</Badge>
      </Box>
    </Box>
  )
}

const RecentArticles = () => (
  <Box>
    {posts.map((post, index) => (
      <ArticleItem key={index} {...post} />
    ))}
  </Box>
)

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Box
            borderRadius="lg"
            p={4}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            transition="all 0.2s"
            cursor="pointer"
          >
            <Badge colorScheme="teal" mb={2}>Tutorial</Badge>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Getting Started with Machine Learning
            </Text>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              A comprehensive guide for beginners to start their ML journey.
            </Text>
          </Box>

          <Box
            borderRadius="lg"
            p={4}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            transition="all 0.2s"
            cursor="pointer"
          >
            <Badge colorScheme="purple" mb={2}>Deep Dive</Badge>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Understanding Neural Networks
            </Text>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              Breaking down the fundamentals of neural network architecture.
            </Text>
          </Box>

          <Box
            borderRadius="lg"
            p={4}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            transition="all 0.2s"
            cursor="pointer"
          >
            <Badge colorScheme="orange" mb={2}>Project</Badge>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Building a Real-time Dashboard
            </Text>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              Step-by-step guide to creating a live data dashboard with React.
            </Text>
          </Box>

          <Box
            borderRadius="lg"
            p={4}
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            transition="all 0.2s"
            cursor="pointer"
          >
            <Badge colorScheme="green" mb={2}>Tips</Badge>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Productivity Tips for Developers
            </Text>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              Essential tips and tools to boost your development workflow.
            </Text>
          </Box>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          Recent Articles
        </Heading>

        <RecentArticles />
      </Section>
    </Container>
  </Layout>
)

export default Posts
