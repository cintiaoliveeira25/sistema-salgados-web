import { IntroContainer, IntroContent, IntroTitle, IntroAbout,ImageContent } from './styles';
import intro from '../../../../assets/intro.png';
import { RegularText } from '../../../../components/Typography';

export const Intro = () => {
  return (
    <IntroContainer>
      <IntroContent className='container'>
        <div>
          <section>
            <IntroTitle size='xl'>Sua festa começa aqui!</IntroTitle>
            <RegularText as='h3' size='l' color='subtitle'>
              Uma variedade de sabores para você, escolha o que te dá mais água na boca.
            </RegularText>
            <IntroAbout>
              <RegularText as='h5' size='s' color='subtitle'>
                Salgadou é uma empresa especializada em salgadinhos de festa. Os salgados, possuem
                muita qualidade, e carregam um diferencial muito grande, são crocantes por fora,
                macios por dentro, e o tempero, que os tornam muito saborosos. Monte seu kit
                completo com nossos deliciosos doces e bolos.
              </RegularText>
            </IntroAbout>
          </section>
        </div>

        <ImageContent className='image'>
          <img src={intro} />
        </ImageContent>
      </IntroContent>
    </IntroContainer>
  );
};
