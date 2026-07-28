import { Theme, Flex, Container } from '@radix-ui/themes'
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'

import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

import '@/assets/css/App.css'

function App() {
  return (
    <Theme appearance='dark'>
      <Flex direction={'column'} className='app-container'>
        <Header />

        <Container size='4'>
          <p>In Progress</p>

          <FaceIcon />
          <ImageIcon />
          <SunIcon />
        </Container>

        <Footer />
      </Flex>
    </Theme>
  )
}

export default App
