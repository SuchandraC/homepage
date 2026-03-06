import { Container, Heading, SimpleGrid, Divider, Box, Text, Link, Button, useColorModeValue, Image } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      {/*<SimpleGrid columns={[1, 1, 2]} gap={6}>*/}
  <Section>
    <Box
      borderRadius="lg"
      p={4}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      _hover={{ bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300') }}
      transition="all 0.2s"
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        AI-Powered Interview Assistant
      </Text>
      <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={3}>
        Developed and deployed an internally adopted interview assessment tool using 
        prompt engineering and LangChain to extract candidate skills, generate targeted 
        questions, and evaluate responses, improving assessment consistency across hiring panels.
      </Text>
      <Text fontSize="xs" color="teal.500">
        LangChain • Prompt Engineering • NLP • TCS Research
      </Text>
    </Box>
  </Section>

  <Section delay={0.1}>
    <Box
      borderRadius="lg"
      p={4}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      _hover={{ bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300') }}
      transition="all 0.2s"
    >

      <Box borderRadius="lg" mb={3} overflow="hidden">
        <Image
          src="/papers/Screenshot 2026-03-06 at 3.43.14 AM.png"
          alt="PennCloud"
          borderRadius="md"
          objectFit="cover"
          w="100%"
          h="390px"
        />
      </Box>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        PennCloud - Distributed Cloud Platform
      </Text>
      
      <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={3}>
        Architected and implemented a fault-tolerant distributed cloud system featuring 
        a complete RFC 2822-compliant SMTP server, webmail interface with inbox/compose/reply 
        functionality, and admin console with real-time multi-server monitoring. Designed 
        email storage schema using row-based KV patterns and implemented MX record lookup 
        for external email relay. System supports quorum-based Paxos consensus with automatic 
        failover across 4+ backend servers.
      </Text>
      
      <Text fontSize="xs" color="teal.500" mb={3}>
        C++ • gRPC • SMTP • WebSockets • Paxos Consensus • Distributed Systems
      </Text>
      
      <Box>
        <Button
          as={Link}
          href="/papers/PennCloud_Final_Report_T16.pdf"
          target="_blank"
          size="sm"
          colorScheme="teal"
          variant="outline"
          mr={2}
          mb={2}
        >
          Final Report
        </Button>
        <Button
          as={Link}
          href="https://youtu.be/DIsENaSvz9s?si=Lt2QDPPwPCwwlSGl"
          target="_blank"
          size="sm"
          colorScheme="teal"
          variant="outline"
          mr={2}
          mb={2}
        >
          Demo Video 1
        </Button>
        <Button
          as={Link}
          href="https://youtu.be/kzBhXSQbu_c?si=rpALwQ7kRHvsdCYM"
          target="_blank"
          size="sm"
          colorScheme="teal"
          variant="outline"
          mb={2}
        >
          Demo Video 2
        </Button>
      </Box>
    </Box>
  </Section>

  <Section delay={0.2}>
    <Box
      borderRadius="lg"
      p={4}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      _hover={{ bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300') }}
      transition="all 0.2s"
    >
      <Box borderRadius="lg" mb={3} overflow="hidden">
        <Image
          src="/papers/bidaf.png"
          alt="BiDAF Architecture"
          borderRadius="md"
          objectFit="cover"
          w="100%"
        />
      </Box>
      
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        BiDAF Question Answering System
      </Text>
      
      <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={3}>
        Reimplemented BiDAF network from scratch, achieving near state-of-the-art performance 
        with optimized computational efficiency using 2.6M parameters. Demonstrated deep 
        understanding of bi-directional attention mechanisms and hierarchical context modeling.
      </Text>
      
      <Text fontSize="xs" color="teal.500" mb={3}>
        PyTorch • BiLSTM • Attention Mechanisms • NLP • SQuAD Dataset
      </Text>
      
      <Box>
        <Button
          as={Link}
          href="/papers/Bidaf_reimplimentation.pdf"
          target="_blank"
          size="sm"
          colorScheme="teal"
          variant="outline"
          mr={2}
          mb={2}
        >
          Report
        </Button>
        <Button
          as={Link}
          href="https://github.com/SuchandraC/BIDAF_Reimplementation"
          target="_blank"
          size="sm"
          colorScheme="teal"
          variant="outline"
          mb={2}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  </Section>

<Section delay={0.4}>
  <Box
    borderRadius="lg"
    p={4}
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    _hover={{ bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300') }}
    transition="all 0.2s"
    mb={6}
  >
    {/* TODO: Add screenshot when available */}
     
    <Box borderRadius="lg" mb={3} overflow="hidden" h="300px">
      <Image
        src="/papers/Screenshot 2026-03-06 at 4.25.14 AM.png"
        alt="Sherlock Bot"
        borderRadius="md"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>
    
    
    <Text fontSize="xl" fontWeight="bold" mb={2}>
     Sherlock Bot
    </Text>
    
    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={3}>
      Built a conversational AI chatbot trained on BBC Sherlock scripts to generate 
      character-specific dialogue using fine-tuned transformer models. Implemented 
      context-aware response generation with Hugging Face Transformers, creating a 
      bot that mimics Sherlock Holmes&apos; distinctive speaking style and personality. 
      Trained on dialogue data with character attribution for authentic character voice.
    </Text>
    
    <Text fontSize="xs" color="teal.500" mb={3}>
      Python • Transformers • GPT-2 • NLP • Dialogue Generation • Character AI
    </Text>
    
    <Box>
      <Button
        as={Link}
        href="https://github.com/SuchandraC/Sherlock_bot"
        target="_blank"
        size="sm"
        colorScheme="teal"
        variant="outline"
        mr={2}
        mb={2}
      >
       GitHub
      </Button>
    </Box>
  </Box>
</Section>
{/*</SimpleGrid>*/}

      <SimpleGrid>

        <Section delay={0.4}>
  <Heading as="h4" fontSize={18} mb={3} mt={6}>
    Research Systems
  </Heading>
</Section>

{/* MuRFE Pipeline */}
<Section delay={0.5}>
  <Box
    borderRadius="lg"
    p={4}
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    _hover={{ bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300') }}
    transition="all 0.2s"
    mb={6}
  >
    {/* TODO: Add screenshot when available */}
    {/*
    <Box borderRadius="lg" mb={3} overflow="hidden" h="300px">
      <Image
        src="/papers/Screenshot 2026-03-06 at 5.43.41 AM.png"
        alt="MuRFE Pipeline"
        borderRadius="md"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>*/}
    
    
    <Text fontSize="xl" fontWeight="bold" mb={2}>
      MuRFE - Multi-valued Relation Extraction Pipeline
    </Text>
    
    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
      <Text as="span" fontWeight="semibold">Collaborators:</Text> Pratik Saini, Bhavya Jain, Chayan Sarkar, Tapas Nayak
    </Text>
    
    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={3}>
      Built a complete pipeline for multi-valued relation extraction combining 
      LLM-based synthetic data generation with supervised learning. Implemented 
      advanced prompting strategies with Llama-3.3-70B to generate 3,000+ 
      high-quality training samples across 8 relation types. Designed and trained 
      sequence tagging models with pointer networks, achieving competitive performance 
      against SOTA baselines (PRGC, BiRTE, TDEER). Created comprehensive benchmarking 
      framework with evaluation scripts for relation extraction tasks where single 
      subjects can have multiple object entities.
    </Text>
    
    <Text fontSize="xs" color="teal.500" mb={3}>
      Python • PyTorch • Llama-3.3-70B • Sequence Tagging • Pointer Networks • Dataset Creation
    </Text>
    
    <Box>
      <Button
        as={Link}
        href="/papers#murfe"
        size="sm"
        colorScheme="teal"
        variant="outline"
        mb={2}
      >
        Paper (CoNLL 2026)
      </Button>
    </Box>
  </Box>
</Section>

{/* Mental Health NLP Pipeline */}
<Section delay={0.6}>
  <Box
    borderRadius="lg"
    p={4}
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    _hover={{ bg: useColorModeValue('whiteAlpha.700', 'whiteAlpha.300') }}
    transition="all 0.2s"
    mb={6}
  >
    {/* TODO: Add screenshot when available */}
     
    <Box borderRadius="lg" mb={3} overflow="hidden" h="300px">
      <Image
        src="/papers/Screenshot 2026-03-06 at 5.46.07 AM.png"
        alt="Mental Health NLP Pipeline"
        borderRadius="md"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>
    
    
    <Text fontSize="xl" fontWeight="bold" mb={2}>
      Mental Health Evidence Extraction System
    </Text>
    
    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
      <Text as="span" fontWeight="semibold">Collaborators:</Text> Sudeshna Jana, Manjira Sinha, Tirthankar Dasgupta (TCS Research)
    </Text>
    
    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} mb={3}>
      Developed a production-ready NLP pipeline for extracting mental health evidence 
      from social media timelines. Built custom RoBERTa fine-tuning pipeline for 
      token-level classification of adaptive and maladaptive self-state evidence, 
      achieving 60.2% recall. Implemented retrieval-augmented DeepSeek-7B model for 
      well-being score prediction and created Random Forest baseline with sentence 
      embeddings. System ranked 2nd in CLPsych 2025 shared task with 92.3% F1 on 
      classification and 48% average score on entity extraction across 6 evidence types.
    </Text>
    
    <Text fontSize="xs" color="teal.500" mb={3}>
      Python • RoBERTa • DeepSeek-7B • RAG • Random Forest • Mental Health NLP
    </Text>
    
    <Box>
      <Button
        as={Link}
        href="/papers/2025.clpsych-1.24.pdf"
        target="_blank"
        size="sm"
        colorScheme="teal"
        variant="outline"
        mr={2}
        mb={2}
      >
        Paper (ACL 2025)
      </Button>
      <Button
        as={Link}
        href="/papers/download.png"
        target="_blank"
        size="sm"
        colorScheme="teal"
        variant="outline"
        mb={2}
      >
        Poster
      </Button>
    </Box>
  </Box>
</Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
