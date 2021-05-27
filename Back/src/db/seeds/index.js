const testemonymodel = require("../../models/testemonies");
const c = require("../../config")();

const seedTestemoniess = [
  {
    title: "Altos índices de concentração de Ozônio nos bairros da zona norte do RJ",
    advisor: "Graciela Arbilla",
    otherResearchers: ["Bruno Siciliano", "Letícia Freitas", "Cleyton da Silva", "Guilherme Dantas"],
    videoUrl: "https://youtube.com/NAOTEMVIDEOAINDA",
    testimony: 'Comecei a iniciação científica por causa da bolsa e porque a vaga dizia que o trabalho seria com uma linguagem de programação R e que, mesmo sem um conhecimento prévio, qualquer um interessado podia se inscrever. Lá eu tive o meu primeiro contato com a pesquisa de forma prática, mesmo o meu papel sendo não tão ligado à pesquisa em si, todo o ambiente e todas as fases da pesquisa eram presenciadas por mim. A orientadora sempre foi muito clara e muito compreensiva, o que ajudou no meu desenvolvimento na IC, onde cheguei a ser co-autor em dois artigos diferentes (colaborando com o tratamento de dados de estações de monitoramento, gerando gráficos, matrizes de correlação etc). O resultado sempre foi satisfatório, mesmo quando não conseguíamos achar relação entre os dados ou quando os programas estavam com alguma falha, a sensação que temos ao concluir um longo trabalho é garantida, mesmo que esse não tenha o resultado que esperávamos. Saí de lá com uma sensação de "missão cumprida" ao mesmo tempo que pensava "podia ter rendido mais", porém é visível a transformação que sentimos quando entramos na área de pesquisa científica e toda a bagagem que uma pesquisa traz pra nossa vida, sendo como pesquisador ou sendo como um aprendiz.',
    message: "",
    startDate: Date.parse("2019-06-26"),
    endDate: Date.parse("2020-08-31"),
    location: "CT - Laboratório de Química Atmosférica",
    user: {
      email: "eduardogds@poli.ufrj.br",
    },
  },

  {
    title: "Desenvolvimento de jogos",
    advisor: "François Noel",
    otherResearchers: ["Henrique Vermelho, Aimêe Mothe"],
    videoUrl: "https://youtube.com/NAOTEMVIDEOAINDA",
    testimony: "Esse iniciação científica foi uma das melhores coisas que aconteceu na minha vida acadêmica.\nBasicamente o que eu fazia era desenvolver jogos, mas não qualquer jogos, eram aqueles que ensinavam pessoas, ou seja, jogos de objetivos.\nO nosso foco principal era com que as pessoas pudessem aprender com jogos simples de computador, mobile ou web.\nEntão aprendi bastante sobre como uma pessoa entende um jogo, como esse jogo deve ser feito para que a pessoa entenda a mensagem que a gente quer passar e isso abriu bastante meus olhos pois eu nunca tinha pensando que ia aprender tanto sobre um tema, aliás, entrei nessa pesquisa com a ideia de somente desenvolver jogos(sempre tive interesse) mas saí com uma cabeça completamente diferente sobre a importância disso.\nTambém foi interessante pois aprendi algumas coisas sobre como criar uma patente ou publicar seu próprio jogo e também fazer um orçamento pra imprimir seu jogo de tabuleiro, mesmo sendo um pouco fora da minha área de desenvolvimento, foi interessante pois nunca havia escutado como funcionam essas etapas e todas elas tem sua importância pois queremos que isso alcance um maior número de pessoas possível, então devemos ter todo o cuidado com o custo.\nPor ultimo, mas não menos importante: Jogamos.Mas jogamos muito e além disso discutimos regras e pedimos pras outras pessoas jogarem e testarem para ver como fica o jogo.",
    message: "Fazer pesquisa é muito interessante, você consegue aprender coisas que você nunca imaginava, além de conhecer outros pesquisadores que tem projetos maravilhosos. Não sinta medo em buscar algum professor, independente se ele tem oferta ou não.\nTenho certeza que se ele perceber que você se interessa pela área, você conseguirá uma vaga, pelo menos como voluntário e poderá crescer, tanto como pessoa quanto profissionalmente.\nA vida é feita de experiências, viva e aprenda!",
    startDate: Date.parse("2020-09-14"),
    endDate: Date.parse("2021-03-14"),
    location: "CT",
    user: {
      email: "bruno.dantas@poli.ufrj.br",
    },
  },
];


const promise = new Promise((resolve, rejcet) => {
  if (c.isProduction() || process.env.NODE_ENV === "test") resolve();
  else {
    testemonymodel
      .findOne({})
      .exec()
      .then((testemonies) => {
        if (testemonies === null) {
          testemonymodel.insertMany(seedTestemoniess);
        }
        resolve();
      })
      .catch((err) => {
        rejcet(err);
      });
  }
});

//const promise =
module.exports = promise;
