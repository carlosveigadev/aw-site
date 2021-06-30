import {
  Image, Grid, Link, Flex, Heading, Avatar, Box, Text,
} from '@chakra-ui/react';
import {
  FaFacebookF, FaInstagram, FaTwitch, FaYoutube,
} from 'react-icons/fa';
import twitchLogo from '../assets/images/twitch-logo.png';
import youtubeLogo from '../assets/images/youtube-logo.png';
import podCastLogo from '../assets/images/2pires-logo.png';
import instagramLogo from '../assets/images/instagram-logo.png';
import facebookLogo from '../assets/images/facebook-logo.png';
import cursoLogo from '../assets/images/curso-logo.png';
import camisetasLogo from '../assets/images/camisa-logo.png';
import achaJogoPic from '../assets/images/achajogopic.png';
import NavBar from './NavBar';

const Home = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
        gap={3}
        mx="3em"
      >
        <Link as="a" href="https://www.twitch.tv/achajogo" target="_blank" rel="noreferrer">
          <Image src={twitchLogo} alt="Twitch logo" />
        </Link>
        <Link as="a" href="https://www.youtube.com/achajogo" target="_blank" rel="noreferrer">
          <Image src={youtubeLogo} alt="YouTube logo" />
        </Link>
        <Link as="a" href="www.youtube.com/channel/UCCH7GWyDZ2cseIXmo5FLFyA" target="_blank" rel="noreferrer">
          <Image src={podCastLogo} alt="Twitch logo" />
        </Link>
        <Link as="a" href="https://www.instagram.com/achajogo/" target="_blank" rel="noreferrer">
          <Image src={instagramLogo} alt="Instagram logo" />
        </Link>
        <Link as="a" href="https://www.facebook.com/achajogo" target="_blank" rel="noreferrer">
          <Image src={facebookLogo} alt="Facebook logo" />
        </Link>
        <Link as="a" href="https://www.udemy.com/course/live-profissional-no-instagram/?referralCode=C3CA0707787AD2740A7D" target="_blank" rel="noreferrer">
          <Image src={cursoLogo} alt="Curso logo" />
        </Link>
        <Link as="a" href="https://marcazo.com/canalachajogo" target="_blank" rel="noreferrer" className="lastGridItem">
          <Image src={camisetasLogo} alt="Camisetas compra logo" />
        </Link>
      </Grid>
    </main>

    <footer>
      <Flex>
        <Avatar name="Acha Jogo" src={achaJogoPic} />
        <Box>
          <Heading>Sobre Nós </Heading>
          <Text>O AchaJogo é o local ideal para fiar informado sobre o mundo gamer.</Text>
          <Text>
            Contact us:
            {' '}
            <Link color="darkblue" as="a" href="mailto:contato@achajogo.com.br">contato@achajogo.com.br</Link>
          </Text>
        </Box>
        <Box>
          <Heading>Siga-nos </Heading>
          <Flex>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitch />
            <FaYoutube />
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Text>
          © Achajogo - Alguns direitos reservados.
        </Text>
      </Box>
    </footer>
  </>

);

export default Home;
