import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


const App = () => {

    const chapeuzinho = require('./assets/image/chapeuzinho.jpg');
    const gato = require('./assets/image/gato.jpg');
    const dragao = require('./assets/image/dragao.jpg');
    const heroi = require('./assets/image/heroi.jpg');
    const adao = require('./assets/image/adao.jpg');
    const fimm = require('./assets/image/fimm.jpg');
    const coraline = require('./assets/image/coraline.jpg');
    const madagascar = require('./assets/image/madagascar.jpg');
    const inatividade = require('./assets/image/inatividade.jpg');
    const pepe = require('./assets/image/pepe.jpg');

    return (
      <View style={styles.container}>
        <Text style={styles.texto}>deu a louca na chapeuzinho</Text>
        <Image source={chapeuzinho} style={styles.image}/>
        <Text style={styles.texto}>A tranquilidade da vida na floresta é alterada quando um livro de receitas é roubado. Os suspeitos do crime são Chapeuzinho Vermelho, o Lobo Mau, o Lenhador e a Vovó, mas cada um deles conta uma história diferente sobre o ocorrido. Cabe então ao inspetor Nick Pirueta investigar o caso e descobrir a verdade.</Text>

        <Text style={styles.texto}>gato de botas 2</Text>
        <Image source={gato} style={styles.image}/>
        <Text style={styles.texto}>O Último Pedido, O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: por conta de seu gosto pelo perigo e pelo desrespeito à segurança pessoal, ele queimou oito de suas nove vidas. Com apenas uma vida restante, o Gato precisa pedir ajuda para uma antiga parceira - que atualmente é sua rival e inimiga mortal, Kitty Pata Mansa - para continuar vivo. Então, o destemido bichano parte em uma jornada épica pela Floresta Negra para encontrar a mítica Estrela dos Desejos, capaz de proporcionar o legendário Último Desejo e restaurar suas nove vidas.</Text>

        <Text style={styles.texto}>como treinar o seu dragão</Text>
        <Image source={dragao} style={styles.image}/>
        <Text style={styles.texto}>Na ilha de Berk, os vikings dedicam a vida a combater e matar dragões. Soluço (Jay Baruchel), filho do chefe Stoico (Gerard Butler), não é diferente. Ele sonha em matar um dragão e provar seu valor ao pai, apesar da descrença geral. Um dia, por acaso, ele acerta um dragão que jamais foi visto, chamado Fúria da Noite. Ao procurá-lo, no dia seguinte, Soluço não consegue matá-lo e acaba soltando-o. Só que ele perdeu parte da cauda e, com isso, não consegue mais voar. Soluço passa a trabalhar em um artefato que possa substituir a parte perdida e, aos poucos, se aproxima do dragão. Só que, paralelamente, Stoico autoriza que o filho participe do treino para dragões, cuja prova final é justamente matar um dos animais.</Text>

        <Text style={styles.texto}>super heroi o filme</Text>
        <Image source={heroi} style={styles.image}/>
        <Text style={styles.texto}>Após ser picado por uma libélula geneticamente alterada, Rick Riker (Drake Bell) tem sua vida alterada para sempre. Ele ganha superpoderes e passa a usá-los para combater o mal, sob a alcunha do Homem-Libélula. Entretanto Rick enfrenta um problema: sempre que tenta salvar alguém acaba matando-o acidentalmente. Apesar disto ele precisa enfrentar o Ampulheta, um vilão que deseja roubar a fonte de vida das pessoas para alcançar a imortalidade.</Text>

        <Text style={styles.texto}>adão negro</Text>
        <Image source={adao} style={styles.image}/>
        <Text style={styles.texto}>Adão Negro é o filme solo do anti-herói, baseado no personagem em quadrinhos Black Adam (Dwayne Johnson) da DC Comics, grande antagonista de Shazam!, tendo no longa, sua história de origem explorada, e revelando seu passado de escravo no país Kahndaq.</Text>

        <Text style={styles.texto}>hora de aventura distant island</Text>
        <Image source={fimm} style={styles.image}/>
        <Text style={styles.texto}>Finn e Jake se reúnem novamente para redescobrir seu vínculo emocional e embarcar em uma grande aventura na pós-vida.</Text>

        <Text style={styles.texto}>coraline</Text>
        <Image source={coraline} style={styles.image}/>
        <Text style={styles.texto}>Coraline é uma criança que quer vencer o tédio e tenta ir atrás de aventuras, até chegar em um outro mundo através de uma porta, aparentemente inútil, de sua nova casa. Essa porta leva Coraline a uma casa que parece ser a sua, e até mesmo tem seus pais nela1. O livro é um universo de estranhezas e magia</Text>

        <Text style={styles.texto}>madagascar</Text>
        <Image source={madagascar} style={styles.image}/>
        <Text style={styles.texto}>O leão Alex (Ben Stiller) é a grande atração do zoológico do Central Park, em Nova York. Ele e seus melhores amigos, a zebra Marty (Chris Rock), a girafa Melman (David Schwimmer) e a hipopótamo Gloria (Jada Pinkett Smith), sempre passaram a vida em cativeiro e desconhecem o que é morar na selva. Curioso em saber o que há por trás dos muros do zoo, Marty decide fugir e explorar o mundo. Ao perceberem, Alex, Gloria e Melman decidem partir à sua procura. O trio encontra Marty na estação Grand Central do metrô, mas antes que consigam voltar para casa são atingidos por dardos tranquilizantes e capturados. Embarcados em um navio rumo à África, eles acabam na ilha de Madagascar, onde precisam encontrar meios de sobrevivência em uma selva verdadeira.</Text>

        <Text style={styles.texto}>inatividade paranormal</Text>
        <Image source={inatividade} style={styles.image}/>
        <Text style={styles.texto}>O casal Malcolm e Keisha se muda para a casa dos seus sonhos – mas não demora até que ambos descubram que mais alguém anda morando por lá. Trata-se, no caso, de um demônio que possui a esposa de Malcolm e transforma a vida sexual deles num inferno. Entra em cena, então, um grupo de caçadores de fantasmas para ver se ajuda a limpar o ambiente.</Text>

        <Text style={styles.texto}>historietas asombradas para crianças mal criadas. o filme</Text>
        <Image source={pepe} style={styles.image}/>
        <Text style={styles.texto}>Pepe é uma criança de 12 anos que vive com a avó, uma bruxa-empresária. Ao saber que foi adotado e que seus pais estão vivos, ele parte em uma aventura para encontrá-los. O menino atrai a atenção de Edmundo, um vilão biomecânico que precisa da energia de crianças para se tornar imortal, que rapta a avó de Pepe. Desta forma, o garoto e seus amigos precisam resgatá-la o quanto antes, ao mesmo tempo em que Pepe busca solucionar o mistério do desaparecimento de seus pais.</Text>

      </View>


    );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',

  },
  texto:{
    color:'red',

  },
  image:{
    width:150,
    height:250,
  },
});
export default App;