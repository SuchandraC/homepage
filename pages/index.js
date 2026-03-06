import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoSchool } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt', 'objectFit'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Suchandra Chakraborty
          </Heading>
          <p>NLP Researcher · ML Engineer · Full-Stack Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pfp4.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a Computer Science Master&apos;s student at the{' '}
          <Link href="https://www.upenn.edu" target="_blank">
            University of Pennsylvania
          </Link>{' '}
          and an AI researcher specializing in natural language processing, deep learning, 
          and knowledge extraction. My research spans mental health NLP, multi-valued 
          relation extraction, and evidence-based reasoning, with publications at ACL workshops 
          (CLPsych 2025) and ongoing submissions to top-tier venues including CoNLL. 
          Previously, I spent two years at{' '}
          <Link href="https://www.tcs.com/research" target="_blank">
            TCS Research
          </Link>
          , where I built production AI systems including an internally deployed interview 
          assessment tool using LangChain and prompt engineering. I work at the intersection 
          of research and engineering, building end-to-end intelligent systems while advancing 
          state-of-the-art techniques in attention mechanisms, retrieval-augmented generation, 
          and synthetic data creation for low-resource domains.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

<Section delay={0.2}>
  <Heading as="h3" variant="section-title">
    Beyond Tech
  </Heading>
  <Paragraph>
    When I am not building AI systems or reading research papers, you will find me 
  drinking matcha, watching Peanuts, painting, cooking, travelling, or capturing moments through 
  photography and exploring new media.
  </Paragraph>
</Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/SuchandraC" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @SuchandraC
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/suchandra-chakraborty-927asa279/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:suchandrac009@gmail.com">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                Email
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=JOSpXgMAAAAJ" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoSchool />}
              >
                Google Scholar
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home

         {/*<SimpleGrid columns={[1, 2, 2]} gap={6} mt={6}>
          <Box
            as={Link}
            href="https://github.com/SuchandraC"
            target="_blank"
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              borderRadius="lg"
              p={4}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              _hover={{ bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300') }}
              transition="background 0.2s"
            >
              <Heading as="h4" fontSize="md" mb={2}>
                 Featured Project
              </Heading>
              <p>Check out my latest project on GitHub</p>
            </Box>
          </Box>
          <Box
            as={Link}
            href="https://linkedin.com/in/suchandra-chakraborty-927asa279/"
            target="_blank"
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              borderRadius="lg"
              p={4}
              bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
              _hover={{ bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300') }}
              transition="background 0.2s"
            >
              <Heading as="h4" fontSize="md" mb={2}>
                 Connect with me
              </Heading>
              <p>Let&apos;s connect on LinkedIn</p>
            </Box>
          </Box>/
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)*/}