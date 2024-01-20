import { AuthButtons } from '@/components/AuthButtons';
import { Heading, Text } from '@/components/Typography';
import { LogoContainer, LogoSection, WelcomeSection } from '@/styles/pages/login';
import Head from 'next/head';

export default function login() {
  return (
    <LogoContainer>
      <Head>
        <title>Login | BookWise</title>
      </Head>
      <LogoSection>
        <img src='/images/logo.svg' alt='BookWise Logo' />
      </LogoSection>
      <WelcomeSection>
        <Heading size='lg' color='gray-100'>
          Boas vindas!
        </Heading>
        <Text color='gray-200'>Faça seu login ou acesse como visitante.</Text>

        <AuthButtons canGuest />
      </WelcomeSection>
    </LogoContainer>
  );
}
