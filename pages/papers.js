import { 
  Container, 
  Heading, 
  Box, 
  Text, 
  Link, 
  Button,
  SimpleGrid,
  Badge,
  useColorModeValue,
  Icon,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon, DownloadIcon } from '@chakra-ui/icons'
import { IoDocumentText, IoSchool, IoNewspaper } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'

// Your papers - edit this array with your actual papers
const papers = [
  {
    title: 'MuRFE: A Dataset and Benchmark for Multi-valued Relational Facts Extraction',
    authors: 'Pratik Saini, Bhavya Jain, Suchandra Chakraborty, Chayan Sarkar, Tapas Nayak ',
    venue: 'Under Review at CoNLL 2026',
    abstract: 'Created synthetic datasets for multi-valued relation extraction using advanced prompt engineering with Llama-3.3-70B and trained sequence tagging with pointer-network models for complex relational fact extraction.',
    tags: ['Relation Extraction', 'Dataset Creation', 'Prompt Engineering', 'CoNLL']
  },
  {
    title: 'Self-State Evidence Extraction and Well-Being Prediction from Social Media Timelines',
    authors: 'Suchandra Chakraborty, Sudeshna Jana, Manjira Sinha, Tirthankar Dasgupta',
    venue: 'CLPsych 2025 (ACL Workshop)',
    abstract: 'Developed RoBERTa-based evidence extraction and retrieval-augmented LLM models for mental health NLP from Reddit posts, achieving top-tier results in identifying adaptive and maladaptive self-states and predicting well-being scores.',
    PaperLink: 'https://aclanthology.org/2025.clpsych-1.24/',  
    pdfLink: '/papers/2025.clpsych-1.24.pdf',
    PosterLink: '/papers/download.png',
    tags: ['NLP', 'Mental Health', 'RoBERTa', 'ACL']
  },
  {
    title: 'Detection and Extraction of Food Recalls and Foodborne Disease Outbreaks using Linguistically-Informed Language Models',
    authors: 'Suchandra Chakraborty, Diya Saha, Sudeshna Jana',
    venue: 'SMM4H 2025 (AAAI Workshop)',
    abstract: 'Employed transformer-based architectures and LLMs using few-shot and zero-shot prompt engineering for sentence-level classification and entity extraction from FDA press releases, achieving 92.3% F1 in classification and second-highest accuracy in both subtasks.',
    PaperLink: 'https://workshop-proceedings.icwsm.org/abstract.php?id=2025_76',
    pdfLink: '/papers/2025_76.pdf',
    tags: ['Food Safety', 'Entity Extraction', 'LLMs', 'AAAI']
  },
  {
    title: 'What Drives the Variation of Developer Communication Characteristics over Time? An Empirical Study Across Multiple Datasets',
    authors: 'Suchandra Chakraborty, Ankan Basu, Aritra Saha, Ishita Bardhan, Subhajit Datta, Subhashis Majumder',
    venue: 'COMSYS 2024, Springer LNNS',
    abstract: 'Applied Temporal Exponential Random Graph Models (TERGM, ERGM, BTERGM) to analyze developer interaction patterns across OpenStack and Eclipse datasets, identifying PageRank as a pivotal factor in network dynamics.',
    PaperLink: 'https://link.springer.com/book/9789819699827',
    pdfLink: '/papers/What_Drives_the_Variation_of_Developer_Communication_Characteristics_over_Time__An_Empirical_Study_Across_Multiple_Datasets.pdf',
    tags: ['Network Analysis', 'TERGM', 'Software Engineering', 'Springer']
  },
  {
    title: 'Generation of Data for Training Retinal Image Segmentation Models',
    authors: 'Srinjoy Bhuiya, Suchandra Chakraborty, Subhopriyo Sadhukhan, Deba Prasad Mandal, Dinabandhu Bhandari',
    venue: 'PReMI 2023, Springer LNCS',
    abstract: 'Developed novel data augmentation using StyleGAN2 and Pix2Pix to create synthetic retinal image datasets, significantly improving supervised biomedical image segmentation performance over traditional techniques.',
    PaperLink: 'https://link.springer.com/chapter/10.1007/978-3-031-45170-6_50',
    pdfLink: '/papers/FYP_Paper.pdf',
    tags: ['GANs', 'Biomedical Imaging', 'Data Augmentation', 'Springer']
  }
]

const PaperCard = ({ paper, delay }) => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const hoverBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const metaColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Section delay={delay}>
      <Box
        borderRadius="lg"
        p={5}
        bg={bgColor}
        _hover={{ bg: hoverBg }}
        transition="all 0.2s"
      >
        <Heading as="h4" fontSize="lg" mb={2} color={textColor}>
          {paper.title}
        </Heading>
        <Text fontSize="sm" color={metaColor} mb={2}>
          {paper.authors}
        </Text>
        <Text fontSize="sm" fontStyle="italic" color="teal.500" mb={3}>
          {paper.venue}
        </Text>
        <Text fontSize="sm" color={textColor} mb={3}>
          {paper.abstract}
        </Text>
        <Box mb={3}>
          {paper.tags.map((tag, i) => (
            <Badge key={i} colorScheme="teal" mr={2} mb={1}>
              {tag}
            </Badge>
          ))}
        </Box>
       <Box>
          {paper.pdfLink && (
            <Button
              as={Link}
              href={paper.pdfLink}
              target="_blank"
              size="sm"
              colorScheme="teal"
              variant="outline"
              leftIcon={<DownloadIcon />}
              mr={2}
              mb={2}
            >
              PDF
            </Button>
          )}
          {paper.PaperLink && (
            <Button
              as={Link}
              href={paper.PaperLink}
              target="_blank"
              size="sm"
              colorScheme="teal"
              variant="outline"
              leftIcon={<ExternalLinkIcon />}
              mr={2}
              mb={2}
            >
              Paper
            </Button>
          )}
          {paper.PosterLink && (
            <Button
              as={Link}
              href={paper.PosterLink}
              target="_blank"
              size="sm"
              colorScheme="teal"
              variant="outline"
              leftIcon={<ExternalLinkIcon />}
              mr={2}
              mb={2}
            >
              Poster
            </Button>
          )}
          {paper.arxivLink && (
            <Button
              as={Link}
              href={paper.arxivLink}
              target="_blank"
              size="sm"
              colorScheme="teal"
              variant="outline"
              leftIcon={<ExternalLinkIcon />}
              mb={2}
            >
              arXiv
            </Button>
          )}
        </Box>
      </Box>
    </Section>
  )
}

const Papers = () => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const hoverBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Layout title="Papers & Resume">
      <Container>
        {/* Resume Section */}
        <Section>
          <Heading as="h3" fontSize={20} mb={4}>
            <Icon as={IoDocumentText} mr={2} />
            Resume
          </Heading>
          
          <Box
            borderRadius="lg"
            p={5}
            bg={bgColor}
            _hover={{ bg: hoverBg }}
            transition="all 0.2s"
            mb={6}
          >
            <Text mb={4} color={textColor}>
              Download my latest resume to learn more about my experience, 
              skills, and education.
            </Text>
            <Button
              as={Link}
              href="/papers/Suchandra Chakraborty-CV.pdf"
              target="_blank"
              colorScheme="teal"
              leftIcon={<DownloadIcon />}
              _hover={{ textDecoration: 'none' }}
            >
              Download Resume (PDF)
            </Button>
          </Box>
        </Section>

        <Divider my={6} />

        {/* Papers Section */}
        <Section delay={0.1}>
          <Heading as="h3" fontSize={20} mb={4}>
            <Icon as={IoSchool} mr={2} />
            Research Papers
          </Heading>
          
          <Text mb={6} color={textColor}>
            My academic research and publications in machine learning, 
            big data, and related fields.
          </Text>
        </Section>

        {papers.map((paper, index) => (
          <PaperCard 
            key={index} 
            paper={paper} 
            delay={0.2 + index * 0.1} 
          />
        ))}

        <Divider my={6} />

        {/* Other Documents Section */}
       {/* <Section delay={0.4}>
          <Heading as="h3" fontSize={20} mb={4}>
            <Icon as={IoNewspaper} mr={2} />
            Other Documents
          </Heading>

          <SimpleGrid columns={[1, 2]} gap={4}>
            <Box
              borderRadius="lg"
              p={4}
              bg={bgColor}
              _hover={{ bg: hoverBg }}
              transition="all 0.2s"
            >
              <Text fontWeight="bold" mb={2}>📄 CV (Academic)</Text>
              <Text fontSize="sm" color={textColor} mb={3}>
                Detailed academic curriculum vitae
              </Text>
              <Button
                as={Link}
                href="/cv.pdf"
                target="_blank"
                size="sm"
                colorScheme="teal"
                variant="outline"
                leftIcon={<DownloadIcon />}
              >
                Download CV
              </Button>
            </Box>

            <Box
              borderRadius="lg"
              p={4}
              bg={bgColor}
              _hover={{ bg: hoverBg }}
              transition="all 0.2s"
            >
              <Text fontWeight="bold" mb={2}>📊 Portfolio Slides</Text>
              <Text fontSize="sm" color={textColor} mb={3}>
                Presentation of my work and projects
              </Text>
              <Button
                as={Link}
                href="/portfolio-slides.pdf"
                target="_blank"
                size="sm"
                colorScheme="teal"
                variant="outline"
                leftIcon={<DownloadIcon />}
              >
                Download Slides
              </Button>
            </Box>
          </SimpleGrid>
        </Section>*/}
      </Container>
    </Layout>
  )
}

export default Papers
