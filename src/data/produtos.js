// Fonte fixa de dados do catálogo.
// Dados estáticos, sem painel administrativo.
(function () {
  const produtos = [
  {
    "id": "01-poco-inspecao-dn600-multiplas-entradas",
    "numero": "01",
    "nome": "Poço de Inspeção DN600 — Múltiplas Entradas",
    "categoria": "Saneamento",
    "subcategoria": "Poços de Inspeção",
    "descricao": "Poço de inspeção rotomoldado DN600, indicado para sistemas de saneamento que exigem acesso técnico para inspeção, manutenção e conexão de redes. Modelo com múltiplas entradas para diferentes configurações de instalação.",
    "aplicacao": "Inspeção, manutenção e conexão de redes de saneamento.",
    "imagem": "/produtos/asperbras/saneamento-01-poco-inspecao-dn600-multiplas-entradas.webp",
    "palavrasChave": [
      "01",
      "poço",
      "poco",
      "inspeção",
      "inspecao",
      "dn600",
      "múltiplas entradas",
      "saneamento",
      "rotomoldado"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "02-poco-inspecao-dn600-3-entradas-1-saida",
    "numero": "02",
    "nome": "Poço de Inspeção DN600 — 3 Entradas e 1 Saída",
    "categoria": "Saneamento",
    "subcategoria": "Poços de Inspeção",
    "descricao": "Poço de inspeção DN600 com configuração de 3 entradas e 1 saída, desenvolvido para facilitar a interligação de tubulações em redes de esgoto, drenagem e saneamento.",
    "aplicacao": "Interligação de tubulações em redes de esgoto, drenagem e saneamento.",
    "imagem": "/produtos/asperbras/saneamento-02-poco-inspecao-dn600-3-entradas-1-saida.webp",
    "palavrasChave": [
      "02",
      "poço",
      "poco",
      "inspeção",
      "inspecao",
      "dn600",
      "3 entradas",
      "1 saída",
      "saida",
      "esgoto",
      "drenagem"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "03-poco-inspecao-dn600-entradas-angulo",
    "numero": "03",
    "nome": "Poço de Inspeção DN600 — Entradas em Ângulo",
    "categoria": "Saneamento",
    "subcategoria": "Poços de Inspeção",
    "descricao": "Poço de inspeção DN600 com entradas em ângulo, ideal para instalações que precisam de flexibilidade no direcionamento das tubulações e melhor adaptação ao traçado da obra.",
    "aplicacao": "Instalações com mudanças de direção e adaptação ao traçado da obra.",
    "imagem": "/produtos/asperbras/saneamento-03-poco-inspecao-dn600-entradas-angulo.webp",
    "palavrasChave": [
      "03",
      "poço",
      "poco",
      "inspeção",
      "inspecao",
      "dn600",
      "ângulo",
      "angulo",
      "tubulação",
      "obra"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "04-poco-visita-dn800",
    "numero": "04",
    "nome": "Poço de Visita DN800",
    "categoria": "Saneamento",
    "subcategoria": "Poços de Visita",
    "descricao": "Poço de visita DN800 para redes de saneamento, projetado para permitir acesso interno, inspeção e manutenção de sistemas enterrados com maior capacidade estrutural e operacional.",
    "aplicacao": "Acesso interno, inspeção e manutenção de sistemas enterrados.",
    "imagem": "/produtos/asperbras/saneamento-04-poco-visita-dn800.webp",
    "palavrasChave": [
      "04",
      "poço",
      "poco",
      "visita",
      "dn800",
      "saneamento",
      "inspeção",
      "manutenção",
      "sistema enterrado"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "05-poco-visita-dn800-3-entradas",
    "numero": "05",
    "nome": "Poço de Visita DN800 — 3 Entradas e 1 Saída",
    "categoria": "Saneamento",
    "subcategoria": "Poços de Visita",
    "descricao": "Poço de visita DN800 com configuração de 3 entradas e 1 saída, indicado para pontos de conexão, inspeção e manutenção em redes coletoras e sistemas de drenagem.",
    "aplicacao": "Pontos de conexão, inspeção e manutenção em redes coletoras e drenagem.",
    "imagem": "/produtos/asperbras/saneamento-05-poco-visita-dn800-3-entradas.webp",
    "palavrasChave": [
      "05",
      "poço",
      "poco",
      "visita",
      "dn800",
      "3 entradas",
      "1 saída",
      "saida",
      "rede coletora",
      "drenagem"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "06-poco-visita-dn1000",
    "numero": "06",
    "nome": "Poço de Visita DN1000",
    "categoria": "Saneamento",
    "subcategoria": "Poços de Visita",
    "descricao": "Poço de visita DN1000 rotomoldado, indicado para aplicações em redes de saneamento que demandam maior volume, acesso técnico e facilidade de manutenção.",
    "aplicacao": "Redes de saneamento com maior volume, acesso técnico e manutenção.",
    "imagem": "/produtos/asperbras/saneamento-06-poco-visita-dn1000.webp",
    "palavrasChave": [
      "06",
      "poço",
      "poco",
      "visita",
      "dn1000",
      "rotomoldado",
      "saneamento",
      "volume",
      "manutenção"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "07-poco-visita-dn1000-3-entradas-angulo",
    "numero": "07",
    "nome": "Poço de Visita DN1000 — 3 Entradas em Ângulo e 1 Saída",
    "categoria": "Saneamento",
    "subcategoria": "Poços de Visita",
    "descricao": "Poço de visita DN1000 com entradas em ângulo e saída, desenvolvido para obras que exigem conexões em diferentes direções e integração eficiente entre tubulações.",
    "aplicacao": "Obras com conexões em diferentes direções e integração entre tubulações.",
    "imagem": "/produtos/asperbras/saneamento-07-poco-visita-dn1000-3-entradas.webp",
    "palavrasChave": [
      "07",
      "poço",
      "poco",
      "visita",
      "dn1000",
      "3 entradas",
      "ângulo",
      "angulo",
      "1 saída",
      "saida"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "08-poco-visita-dn1500-7-entradas",
    "numero": "08",
    "nome": "Poço de Visita DN1500 — 7 Entradas e 1 Saída",
    "categoria": "Saneamento",
    "subcategoria": "Poços de Visita",
    "descricao": "Poço de visita DN1500 de grande porte, com múltiplas entradas e saída, indicado para sistemas de saneamento com maior demanda de conexão, inspeção e manutenção.",
    "aplicacao": "Sistemas de saneamento com alta demanda de conexão, inspeção e manutenção.",
    "imagem": "/produtos/asperbras/saneamento-08-poco-visita-dn1500.webp",
    "palavrasChave": [
      "08",
      "poço",
      "poco",
      "visita",
      "dn1500",
      "7 entradas",
      "1 saída",
      "saida",
      "grande porte",
      "saneamento"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "09-interceptor-gordura-enterravel",
    "numero": "09",
    "nome": "Interceptor de Gordura Enterrável",
    "categoria": "Saneamento",
    "subcategoria": "Interceptores de Gordura",
    "descricao": "Interceptor de gordura enterrável para retenção e separação de resíduos gordurosos antes do descarte na rede, contribuindo para a proteção do sistema hidráulico e redução de obstruções.",
    "aplicacao": "Retenção e separação de gordura antes do descarte na rede.",
    "imagem": "/produtos/asperbras/saneamento-09-interceptor-gordura-enterravel.webp",
    "palavrasChave": [
      "09",
      "interceptor",
      "gordura",
      "enterrável",
      "enterravel",
      "retenção",
      "separação",
      "resíduos",
      "obstruções"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "10-estacao-elevatoria",
    "numero": "10",
    "nome": "Estação Elevatória",
    "categoria": "Saneamento",
    "subcategoria": "Estações Elevatórias",
    "descricao": "Estação elevatória rotomoldada para sistemas de saneamento, utilizada no bombeamento e condução de efluentes quando há necessidade de vencer desníveis no terreno ou transportar o fluxo para pontos mais altos.",
    "aplicacao": "Bombeamento e condução de efluentes em terrenos com desnível.",
    "imagem": "/produtos/asperbras/saneamento-10-estacao-elevatoria.webp",
    "palavrasChave": [
      "10",
      "estação",
      "estacao",
      "elevatória",
      "elevatoria",
      "bombeamento",
      "efluentes",
      "desnível",
      "saneamento"
    ],
    "filtro": "Equipamentos"
  },
  {
    "id": "11-estacao-elevatoria-detalhe-variacoes",
    "numero": "11",
    "nome": "Estação elevatória - detalhe e variações",
    "categoria": "Saneamento",
    "subcategoria": "Estações Elevatórias",
    "descricao": "Estação elevatória rotomoldada para sistemas de saneamento, indicada para bombeamento e condução de efluentes em situações com desnível ou necessidade de elevação do fluxo.",
    "aplicacao": "Bombeamento e condução de efluentes em redes com desnível.",
    "imagem": "/produtos/asperbras/saneamento-11-estacao-elevatoria-detalhe-variacoes.png",
    "palavrasChave": [
      "11",
      "estação",
      "estacao",
      "elevatória",
      "elevatoria",
      "variações",
      "bombeamento",
      "efluentes",
      "desnível"
    ],
    "filtro": "Equipamentos"
  },
  {
    "id": "12-caixa-abrigo-valvula-reguladora-pressao",
    "numero": "12",
    "nome": "Caixa abrigo para válvula reguladora de pressão",
    "categoria": "Saneamento",
    "subcategoria": "Caixas Abrigo para VRP",
    "descricao": "Caixa abrigo rotomoldada para válvula reguladora de pressão, desenvolvida para proteger o conjunto hidráulico e facilitar o acesso técnico para inspeção e manutenção.",
    "aplicacao": "Proteção e acesso técnico para conjunto hidráulico com válvula reguladora de pressão.",
    "imagem": "/produtos/asperbras/saneamento-12-caixa-abrigo-valvula-reguladora-pressao.png",
    "palavrasChave": [
      "12",
      "caixa abrigo",
      "vrp",
      "válvula",
      "valvula",
      "reguladora",
      "pressão",
      "pressao",
      "inspeção"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "13-caixa-abrigo-vrp-vista-superior",
    "numero": "13",
    "nome": "Caixa abrigo para VRP - vista superior",
    "categoria": "Saneamento",
    "subcategoria": "Caixas Abrigo para VRP",
    "descricao": "Vista superior da caixa abrigo para válvula reguladora de pressão, destacando o formato da tampa, reforço estrutural e passagem para tubulação.",
    "aplicacao": "Visualização técnica da tampa, reforço estrutural e passagem de tubulação da caixa abrigo para VRP.",
    "imagem": "/produtos/asperbras/saneamento-13-caixa-abrigo-vrp-tampa-visao-superior.png",
    "palavrasChave": [
      "13",
      "caixa abrigo",
      "vrp",
      "vista superior",
      "tampa",
      "reforço",
      "reforco",
      "tubulação"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "14-til",
    "numero": "14",
    "nome": "TIL",
    "categoria": "Saneamento",
    "subcategoria": "TIL / Prolongador",
    "descricao": "TIL para sistemas de saneamento, usado como ponto de inspeção e interligação de tubulações em rede enterrada.",
    "aplicacao": "Ponto de inspeção e interligação de tubulações em rede enterrada.",
    "imagem": "/produtos/asperbras/saneamento-14-til.png",
    "palavrasChave": [
      "14",
      "til",
      "inspeção",
      "inspecao",
      "interligação",
      "interligacao",
      "tubulações",
      "rede enterrada"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "15-prolongador",
    "numero": "15",
    "nome": "Prolongador",
    "categoria": "Saneamento",
    "subcategoria": "TIL / Prolongador",
    "descricao": "Prolongador usado para ajustar a altura de acesso em sistemas enterrados, compatibilizando o produto com o nível final do terreno.",
    "aplicacao": "Ajuste de altura de acesso em sistemas enterrados conforme o nível final do terreno.",
    "imagem": "/produtos/asperbras/saneamento-15-prolongador.png",
    "palavrasChave": [
      "15",
      "prolongador",
      "til",
      "altura",
      "acesso",
      "sistema enterrado",
      "nível do terreno"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "16-caixa-de-gordura",
    "numero": "16",
    "nome": "Caixa de gordura",
    "categoria": "Saneamento",
    "subcategoria": "Caixa de Gordura e Caixa de Passagem",
    "descricao": "Caixa de gordura para retenção de resíduos gordurosos antes do descarte na rede, ajudando a reduzir obstruções.",
    "aplicacao": "Retenção de gordura e redução de obstruções antes do descarte na rede.",
    "imagem": "/produtos/asperbras/saneamento-16-caixa-de-gordura.png",
    "palavrasChave": [
      "16",
      "caixa de gordura",
      "gordura",
      "retenção",
      "retencao",
      "resíduos",
      "obstruções",
      "rede"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "17-caixa-de-passagem",
    "numero": "17",
    "nome": "Caixa de passagem",
    "categoria": "Saneamento",
    "subcategoria": "Caixa de Gordura e Caixa de Passagem",
    "descricao": "Caixa de passagem indicada para facilitar conexão, inspeção e manutenção de trechos da tubulação.",
    "aplicacao": "Conexão, inspeção e manutenção de trechos de tubulação.",
    "imagem": "/produtos/asperbras/saneamento-17-caixa-de-passagem.png",
    "palavrasChave": [
      "17",
      "caixa de passagem",
      "conexão",
      "conexao",
      "inspeção",
      "manutenção",
      "tubulação"
    ],
    "filtro": "Poços e caixas"
  },
  {
    "id": "18-anel-de-vedacao",
    "numero": "18",
    "nome": "Anel de vedação",
    "categoria": "Saneamento",
    "subcategoria": "Juntas e Vedações",
    "descricao": "Anel de vedação para conexões em sistemas de saneamento, auxiliando na estanqueidade entre componentes.",
    "aplicacao": "Vedação e estanqueidade entre componentes de sistemas de saneamento.",
    "imagem": "/produtos/asperbras/saneamento-18-anel-de-vedacao.png",
    "palavrasChave": [
      "18",
      "anel",
      "vedação",
      "vedacao",
      "junta",
      "estanqueidade",
      "conexões"
    ],
    "filtro": "Acessórios técnicos"
  },
  {
    "id": "19-junta-pvc-pvc",
    "numero": "19",
    "nome": "Junta PVC/PVC",
    "categoria": "Saneamento",
    "subcategoria": "Juntas e Vedações",
    "descricao": "Junta PVC/PVC para conexão de tubulações, indicada para união entre componentes do sistema.",
    "aplicacao": "União entre tubulações e componentes em PVC.",
    "imagem": "/produtos/asperbras/saneamento-19-junta-pvc-pvc.png",
    "palavrasChave": [
      "19",
      "junta",
      "pvc",
      "conexão",
      "conexao",
      "tubulações",
      "união"
    ],
    "filtro": "Acessórios técnicos"
  },
  {
    "id": "20-adaptador-pvc-pvc",
    "numero": "20",
    "nome": "Adaptador PVC/PVC",
    "categoria": "Saneamento",
    "subcategoria": "Juntas e Vedações",
    "descricao": "Adaptador PVC/PVC para adequação entre tubulações e conexões com diferentes medidas.",
    "aplicacao": "Adequação entre tubulações e conexões com diferentes medidas.",
    "imagem": "/produtos/asperbras/saneamento-20-adaptador-pvc-pvc.png",
    "palavrasChave": [
      "20",
      "adaptador",
      "pvc",
      "conexão",
      "conexao",
      "tubulação",
      "medidas"
    ],
    "filtro": "Acessórios técnicos"
  },
  {
    "id": "21-luva-longa",
    "numero": "21",
    "nome": "Luva longa",
    "categoria": "Saneamento",
    "subcategoria": "Juntas e Vedações",
    "descricao": "Luva longa para união e prolongamento de trechos de tubulação.",
    "aplicacao": "União e prolongamento de trechos de tubulação.",
    "imagem": "/produtos/asperbras/saneamento-21-luva-longa.png",
    "palavrasChave": [
      "21",
      "luva",
      "luva longa",
      "tubulação",
      "união",
      "prolongamento",
      "juntas"
    ],
    "filtro": "Acessórios técnicos"
  },
  {
    "id": "22-serras-copo",
    "numero": "22",
    "nome": "Serras copo",
    "categoria": "Saneamento",
    "subcategoria": "Serras Copo",
    "descricao": "Serras copo para abertura técnica em componentes de saneamento, conforme o diâmetro necessário da tubulação.",
    "aplicacao": "Abertura técnica em componentes de saneamento conforme o diâmetro da tubulação.",
    "imagem": "/produtos/asperbras/saneamento-22-serras-copo.png",
    "palavrasChave": [
      "22",
      "serras copo",
      "serra copo",
      "abertura",
      "diâmetro",
      "diametro",
      "tubulação"
    ],
    "filtro": "Acessórios técnicos"
  },
  {
    "id": "pead-01-hero-tubos-pead-listras-laranja-azul",
    "numero": "01",
    "rotulo": "PEAD 01",
    "nome": "Tubos PEAD - hero com listras laranja e azul",
    "categoria": "Institucional / Hero",
    "subcategoria": "Tubos PEAD",
    "descricao": "Imagem institucional para hero ou banner da linha de tubos PEAD, com tubos pretos de listras laranja e azul sobre fundo técnico azul.",
    "aplicacao": "Água-adutora, saneamento básico e irrigação.",
    "aplicacoes": [
      "Água-adutora",
      "Saneamento básico",
      "Irrigação"
    ],
    "imagem": "/produtos/asperbras/pead-01-hero-tubos-pead-listras-laranja-azul.webp",
    "palavrasChave": [
      "pead",
      "01",
      "hero",
      "banner",
      "listras laranja",
      "listra azul",
      "água",
      "adutora",
      "saneamento básico",
      "irrigação"
    ],
    "filtro": "Tubos PEAD"
  },
  {
    "id": "pead-02-tubos-pead-barras-preto",
    "numero": "02",
    "rotulo": "PEAD 02",
    "nome": "Tubos PEAD em barras - preto",
    "categoria": "Barras",
    "subcategoria": "Tubos PEAD",
    "descricao": "Tubos PEAD em barras, indicados para redes de água, saneamento básico e instalações que exigem resistência, estanqueidade e longa vida útil.",
    "aplicacao": "Água-adutora e saneamento básico.",
    "aplicacoes": [
      "Água-adutora",
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/pead-02-tubos-pead-barras-preto.webp",
    "palavrasChave": [
      "pead",
      "02",
      "barras",
      "preto",
      "água",
      "adutora",
      "saneamento básico",
      "resistência",
      "estanqueidade"
    ],
    "filtro": "Tubos PEAD"
  },
  {
    "id": "pead-03-tubos-pead-barras-azul",
    "numero": "03",
    "rotulo": "PEAD 03",
    "nome": "Tubos PEAD em barras - azul",
    "categoria": "Barras",
    "subcategoria": "Tubos PEAD",
    "descricao": "Tubos PEAD azuis em barras, usados em aplicações de água e ramal predial, com material leve, flexível e resistente à corrosão.",
    "aplicacao": "Água-adutora e ramal predial.",
    "aplicacoes": [
      "Água-adutora",
      "Ramal predial"
    ],
    "imagem": "/produtos/asperbras/pead-03-tubos-pead-barras-azul.webp",
    "palavrasChave": [
      "pead",
      "03",
      "barras",
      "azul",
      "água",
      "adutora",
      "ramal predial",
      "flexível",
      "corrosão"
    ],
    "filtro": "Tubos PEAD"
  },
  {
    "id": "pead-04-tubos-pead-barras-preto-listra-ocre",
    "numero": "04",
    "rotulo": "PEAD 04",
    "nome": "Tubos PEAD em barras - preto com listra ocre",
    "categoria": "Barras",
    "subcategoria": "Tubos PEAD",
    "descricao": "Tubos PEAD pretos com listras ocres, indicados para redes coletoras de esgoto, águas pluviais e transporte de resíduos industriais.",
    "aplicacao": "Esgoto, águas pluviais e saneamento básico.",
    "aplicacoes": [
      "Esgoto",
      "Águas pluviais",
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/pead-04-tubos-pead-barras-preto-listra-ocre.webp",
    "palavrasChave": [
      "pead",
      "04",
      "barras",
      "preto",
      "ocre",
      "esgoto",
      "águas pluviais",
      "resíduos industriais",
      "saneamento básico"
    ],
    "filtro": "Tubos PEAD"
  },
  {
    "id": "pead-05-tubos-pead-barras-preto-listra-azul",
    "numero": "05",
    "rotulo": "PEAD 05",
    "nome": "Tubos PEAD em barras - preto com listra azul",
    "categoria": "Barras",
    "subcategoria": "Tubos PEAD",
    "descricao": "Tubos PEAD pretos com listras azuis, indicados para captação, adutoras, estações elevatórias e redes de distribuição de água.",
    "aplicacao": "Água-adutora e distribuição de água.",
    "aplicacoes": [
      "Água-adutora",
      "Distribuição de água"
    ],
    "imagem": "/produtos/asperbras/pead-05-tubos-pead-barras-preto-listra-azul.webp",
    "palavrasChave": [
      "pead",
      "05",
      "barras",
      "preto",
      "listra azul",
      "captação",
      "adutora",
      "estação elevatória",
      "distribuição de água"
    ],
    "filtro": "Tubos PEAD"
  },
  {
    "id": "pead-06-tubos-pead-bobina-azul",
    "numero": "06",
    "rotulo": "PEAD 06",
    "nome": "Tubos PEAD em bobina - azul",
    "categoria": "Bobinas",
    "subcategoria": "Tubos PEAD",
    "descricao": "Tubos PEAD azuis em bobina, fornecidos em comprimentos longos para reduzir emendas e agilizar a instalação em redes de água e ramais.",
    "aplicacao": "Ramal predial e água-adutora.",
    "aplicacoes": [
      "Ramal predial",
      "Água-adutora"
    ],
    "imagem": "/produtos/asperbras/pead-06-tubos-pead-bobina-azul.webp",
    "palavrasChave": [
      "pead",
      "06",
      "bobina",
      "azul",
      "ramal predial",
      "água",
      "adutora",
      "emendas",
      "instalação"
    ],
    "filtro": "Tubos PEAD"
  },
  {
    "id": "pead-07-tubos-pead-bobina-preto-listra-azul",
    "numero": "07",
    "rotulo": "PEAD 07",
    "nome": "Tubos PEAD em bobina - preto com listra azul",
    "categoria": "Bobinas",
    "subcategoria": "Tubos PEAD",
    "descricao": "Tubos PEAD pretos com listra azul em bobina, ideais para instalações com menor número de conexões, boa flexibilidade e maior estanqueidade.",
    "aplicacao": "Água-adutora, distribuição de água e irrigação.",
    "aplicacoes": [
      "Água-adutora",
      "Distribuição de água",
      "Irrigação"
    ],
    "imagem": "/produtos/asperbras/pead-07-tubos-pead-bobina-preto-listra-azul.webp",
    "palavrasChave": [
      "pead",
      "07",
      "bobina",
      "preto",
      "listra azul",
      "água",
      "adutora",
      "distribuição de água",
      "irrigação",
      "estanqueidade"
    ],
    "filtro": "Tubos PEAD"
  },
  {
    "id": "pead-08-tubos-pead-bobina-preto",
    "numero": "08",
    "rotulo": "PEAD 08",
    "nome": "Tubos PEAD em bobina - preto",
    "categoria": "Bobinas",
    "subcategoria": "Tubos PEAD",
    "descricao": "Tubos PEAD pretos em bobina, indicados para aplicações enterradas ou aparentes, com resistência química, flexibilidade e fácil transporte.",
    "aplicacao": "Irrigação e saneamento básico.",
    "aplicacoes": [
      "Irrigação",
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/pead-08-tubos-pead-bobina-preto.webp",
    "palavrasChave": [
      "pead",
      "08",
      "bobina",
      "preto",
      "irrigação",
      "saneamento básico",
      "resistência química",
      "flexibilidade"
    ],
    "filtro": "Tubos PEAD"
  },
  {
    "id": "pead-09-tubos-pead-stack-banner-final",
    "numero": "09",
    "rotulo": "PEAD 09",
    "nome": "Tubos PEAD - composição final com barras",
    "categoria": "Barras / Banner",
    "subcategoria": "Tubos PEAD",
    "descricao": "Composição de tubos PEAD em diferentes cores e marcações, útil para banners, cards de linha de produto e chamadas institucionais.",
    "aplicacao": "Água-adutora, esgoto e irrigação.",
    "aplicacoes": [
      "Água-adutora",
      "Esgoto",
      "Irrigação"
    ],
    "imagem": "/produtos/asperbras/pead-09-tubos-pead-stack-banner-final.webp",
    "palavrasChave": [
      "pead",
      "09",
      "barras",
      "banner",
      "composição",
      "água",
      "adutora",
      "esgoto",
      "irrigação"
    ],
    "filtro": "Tubos PEAD"
  },
  {
    "id": "tubos-03-tubo-mpvc-defofo",
    "numero": "03",
    "rotulo": "TUBOS 03",
    "nome": "Tubo MPVC DEFOFO",
    "categoria": "Tubos para água/adutora",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Tubo MPVC DEFOFO para sistemas de adução e distribuição de água, com alta resistência a impactos e junta elástica integrada.",
    "aplicacao": "Sistemas de adução e distribuição de água.",
    "imagem": "/produtos/asperbras/tubos-03-tubo-mpvc-defofo.png",
    "palavrasChave": [
      "tubos",
      "mpvc",
      "defofo",
      "água",
      "adutora",
      "adução",
      "distribuição",
      "junta elástica"
    ],
    "filtro": "Tubos PVC / MPVC"
  },
  {
    "id": "tubos-04-tubo-pvc-pba-junta-elastica",
    "numero": "04",
    "rotulo": "TUBOS 04",
    "nome": "Tubo PVC com Junta Elástica PBA",
    "categoria": "Tubos para água/adutora",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Tubo PVC PBA com junta elástica integrada, indicado para sistemas enterrados de adução e distribuição de água.",
    "aplicacao": "Sistemas enterrados de adução e distribuição de água.",
    "imagem": "/produtos/asperbras/tubos-04-tubo-pvc-pba-junta-elastica.png",
    "palavrasChave": [
      "tubos",
      "pvc",
      "pba",
      "junta elástica",
      "água",
      "adutora",
      "adução",
      "distribuição"
    ],
    "filtro": "Tubos PVC / MPVC"
  },
  {
    "id": "tubos-05-te-reducao-bbb-pba",
    "numero": "05",
    "rotulo": "TUBOS 05",
    "nome": "Tê Redução BBB - PBA",
    "categoria": "Conexões PBA água",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Conexão para derivação com redução de diâmetro em redes PBA de distribuição de água.",
    "aplicacao": "Derivação com redução de diâmetro em redes PBA de água.",
    "imagem": "/produtos/asperbras/tubos-05-te-reducao-bbb-pba.png",
    "palavrasChave": [
      "tê",
      "te",
      "redução",
      "bbb",
      "pba",
      "conexão",
      "água",
      "derivação"
    ],
    "filtro": "Conexões"
  },
  {
    "id": "tubos-06-curva-longa-22-pb-pba",
    "numero": "06",
    "rotulo": "TUBOS 06",
    "nome": "Curva Longa 22º PB - PBA",
    "categoria": "Conexões PBA água",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Curva longa para mudança suave de direção em sistemas de adução e distribuição de água.",
    "aplicacao": "Mudança suave de direção em redes PBA de água.",
    "imagem": "/produtos/asperbras/tubos-06-curva-longa-22-pb-pba.png",
    "palavrasChave": [
      "curva longa",
      "22",
      "pb",
      "pba",
      "conexão",
      "água",
      "adução"
    ],
    "filtro": "Conexões"
  },
  {
    "id": "tubos-07-curva-longa-45-pb-pba",
    "numero": "07",
    "rotulo": "TUBOS 07",
    "nome": "Curva Longa 45º PB - PBA",
    "categoria": "Conexões PBA água",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Curva longa para mudança de direção da tubulação em redes PBA.",
    "aplicacao": "Mudança de direção em tubulações PBA de água.",
    "imagem": "/produtos/asperbras/tubos-07-curva-longa-45-pb-pba.png",
    "palavrasChave": [
      "curva longa",
      "45",
      "pb",
      "pba",
      "conexão",
      "água",
      "tubulação"
    ],
    "filtro": "Conexões"
  },
  {
    "id": "tubos-08-curva-longa-90-pb-pba",
    "numero": "08",
    "rotulo": "TUBOS 08",
    "nome": "Curva Longa 90º PB - PBA",
    "categoria": "Conexões PBA água",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Curva longa para alterações mais acentuadas de direção em redes enterradas de água.",
    "aplicacao": "Alteração de direção em redes enterradas de água.",
    "imagem": "/produtos/asperbras/tubos-08-curva-longa-90-pb-pba.png",
    "palavrasChave": [
      "curva longa",
      "90",
      "pb",
      "pba",
      "conexão",
      "rede enterrada",
      "água"
    ],
    "filtro": "Conexões"
  },
  {
    "id": "tubos-09-reducao-pb-pba",
    "numero": "09",
    "rotulo": "TUBOS 09",
    "nome": "Redução PB - PBA",
    "categoria": "Conexões PBA água",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Redução para transição entre diferentes diâmetros em redes de distribuição de água.",
    "aplicacao": "Transição entre diferentes diâmetros em redes de água.",
    "imagem": "/produtos/asperbras/tubos-09-reducao-pb-pba.png",
    "palavrasChave": [
      "redução",
      "pb",
      "pba",
      "conexão",
      "diâmetro",
      "água"
    ],
    "filtro": "Conexões"
  },
  {
    "id": "tubos-10-colar-de-tomada-com-trava-pba",
    "numero": "10",
    "rotulo": "TUBOS 10",
    "nome": "Colar de tomada com trava - PBA",
    "categoria": "Conexões PBA água",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Colar para derivação de rede e conexão auxiliar em tubulações PBA.",
    "aplicacao": "Derivação de rede e conexão auxiliar em tubulações PBA.",
    "imagem": "/produtos/asperbras/tubos-10-colar-de-tomada-com-trava-pba.png",
    "palavrasChave": [
      "colar de tomada",
      "trava",
      "pba",
      "derivação",
      "conexão",
      "água"
    ],
    "filtro": "Conexões"
  },
  {
    "id": "tubos-11-anel-vedacao-je-adutora-toroidal",
    "numero": "11",
    "rotulo": "TUBOS 11",
    "nome": "Anel de vedação JE Adutora Toroidal",
    "categoria": "Vedações e acessórios",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Anel toroidal para vedação em juntas elásticas de sistemas de adução de água.",
    "aplicacao": "Vedação em juntas elásticas de sistemas de adução de água.",
    "imagem": "/produtos/asperbras/tubos-11-anel-vedacao-je-adutora-toroidal.png",
    "palavrasChave": [
      "anel",
      "vedação",
      "toroidal",
      "junta elástica",
      "adutora",
      "água"
    ],
    "filtro": "Acessórios técnicos"
  },
  {
    "id": "tubos-12-te-bbb-pba",
    "numero": "12",
    "rotulo": "TUBOS 12",
    "nome": "Tê BBB - PBA",
    "categoria": "Conexões PBA água",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Tê para ramificação da rede em instalações de adução e distribuição de água.",
    "aplicacao": "Ramificação em instalações de adução e distribuição de água.",
    "imagem": "/produtos/asperbras/tubos-12-te-bbb-pba.png",
    "palavrasChave": [
      "tê",
      "te",
      "bbb",
      "pba",
      "ramificação",
      "água",
      "conexão"
    ],
    "filtro": "Conexões"
  },
  {
    "id": "tubos-13-luva-de-correr-pba",
    "numero": "13",
    "rotulo": "TUBOS 13",
    "nome": "Luva de correr - PBA",
    "categoria": "Conexões PBA água",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Luva para união, manutenção e reparo de trechos em redes de água.",
    "aplicacao": "União, manutenção e reparo de trechos em redes de água.",
    "imagem": "/produtos/asperbras/tubos-13-luva-de-correr-pba.png",
    "palavrasChave": [
      "luva de correr",
      "pba",
      "união",
      "manutenção",
      "reparo",
      "água"
    ],
    "filtro": "Conexões"
  },
  {
    "id": "tubos-14-cap-pba",
    "numero": "14",
    "rotulo": "TUBOS 14",
    "nome": "CAP - PBA",
    "categoria": "Conexões PBA água",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Peça de fechamento para extremidades de tubulações em redes PBA.",
    "aplicacao": "Fechamento de extremidades em tubulações PBA.",
    "imagem": "/produtos/asperbras/tubos-14-cap-pba.png",
    "palavrasChave": [
      "cap",
      "pba",
      "fechamento",
      "extremidade",
      "tubulação",
      "água"
    ],
    "filtro": "Conexões"
  },
  {
    "id": "tubos-15-tubo-pvc-coletor-esgoto-ocre-parede-macica",
    "numero": "15",
    "rotulo": "TUBOS 15",
    "nome": "Tubo PVC Coletor de Esgoto Ocre - Parede Maciça",
    "categoria": "Tubos para esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Tubo coletor de esgoto ocre de parede maciça, indicado para redes sanitárias sem pressão interna.",
    "aplicacao": "Redes sanitárias sem pressão interna.",
    "imagem": "/produtos/asperbras/tubos-15-tubo-pvc-coletor-esgoto-ocre-parede-macica.png",
    "palavrasChave": [
      "tubo pvc",
      "coletor",
      "esgoto",
      "ocre",
      "parede maciça",
      "rede sanitária"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-16-tubo-pvc-coletor-esgoto-ocre-dupla-parede-corrugado",
    "numero": "16",
    "rotulo": "TUBOS 16",
    "nome": "Tubo PVC Coletor de Esgoto Ocre - Dupla Parede Corrugado",
    "categoria": "Tubos para esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Tubo corrugado de dupla parede para redes coletoras de esgoto, com maior leveza e resistência estrutural.",
    "aplicacao": "Redes coletoras de esgoto com leveza e resistência estrutural.",
    "imagem": "/produtos/asperbras/tubos-16-tubo-pvc-coletor-esgoto-ocre-dupla-parede-corrugado.png",
    "palavrasChave": [
      "tubo pvc",
      "coletor",
      "esgoto",
      "ocre",
      "dupla parede",
      "corrugado"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-17-anel-vedacao-jee-coletor-corrugado",
    "numero": "17",
    "rotulo": "TUBOS 17",
    "nome": "Anel de Vedação JEE Coletor Corrugado",
    "categoria": "Vedações e acessórios",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Anel de vedação para coletor corrugado, usado para estanqueidade das juntas em sistemas de esgoto.",
    "aplicacao": "Estanqueidade das juntas em sistemas de esgoto corrugado.",
    "imagem": "/produtos/asperbras/tubos-17-anel-vedacao-jee-coletor-corrugado.png",
    "palavrasChave": [
      "anel",
      "vedação",
      "jee",
      "coletor corrugado",
      "esgoto",
      "estanqueidade"
    ],
    "filtro": "Acessórios técnicos"
  },
  {
    "id": "tubos-18-tubo-pvc-coletor-esgoto-ocre-pressurizado",
    "numero": "18",
    "rotulo": "TUBOS 18",
    "nome": "Tubo PVC Coletor de Esgoto Ocre Pressurizado",
    "categoria": "Tubos para esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Tubo coletor de esgoto pressurizado, indicado para redes que exigem condução sob pressão.",
    "aplicacao": "Redes de esgoto com condução sob pressão.",
    "imagem": "/produtos/asperbras/tubos-18-tubo-pvc-coletor-esgoto-ocre-pressurizado.png",
    "palavrasChave": [
      "tubo pvc",
      "coletor",
      "esgoto",
      "ocre",
      "pressurizado",
      "pressão"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-19-curva-curta-45-pb-esgoto",
    "numero": "19",
    "rotulo": "TUBOS 19",
    "nome": "Curva Curta 45º PB - Esgoto",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Curva curta em PVC ocre para mudança de direção em redes sanitárias.",
    "aplicacao": "Mudança de direção em redes sanitárias.",
    "imagem": "/produtos/asperbras/tubos-19-curva-curta-45-pb-esgoto.png",
    "palavrasChave": [
      "curva curta",
      "45",
      "pb",
      "esgoto",
      "pvc ocre",
      "rede sanitária"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-20-curva-curta-90-pb-esgoto",
    "numero": "20",
    "rotulo": "TUBOS 20",
    "nome": "Curva Curta 90º PB - Esgoto",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Curva curta em PVC ocre para alteração de direção em tubulações de esgoto.",
    "aplicacao": "Alteração de direção em tubulações de esgoto.",
    "imagem": "/produtos/asperbras/tubos-20-curva-curta-90-pb-esgoto.png",
    "palavrasChave": [
      "curva curta",
      "90",
      "pb",
      "esgoto",
      "pvc ocre",
      "tubulação"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-21-luva-de-correr-esgoto",
    "numero": "21",
    "rotulo": "TUBOS 21",
    "nome": "Luva de Correr - Esgoto",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Luva para união, reparo e manutenção de trechos de tubulação de esgoto.",
    "aplicacao": "União, reparo e manutenção de trechos de tubulação de esgoto.",
    "imagem": "/produtos/asperbras/tubos-21-luva-de-correr-esgoto.png",
    "palavrasChave": [
      "luva de correr",
      "esgoto",
      "união",
      "reparo",
      "manutenção",
      "tubulação"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-22-te-pbb-esgoto",
    "numero": "22",
    "rotulo": "TUBOS 22",
    "nome": "Tê PBB - Esgoto",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Tê usado para derivações e interligações em redes coletoras de esgoto.",
    "aplicacao": "Derivações e interligações em redes coletoras de esgoto.",
    "imagem": "/produtos/asperbras/tubos-22-te-pbb-esgoto.png",
    "palavrasChave": [
      "tê",
      "te",
      "pbb",
      "esgoto",
      "derivação",
      "interligação"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-23-te-bbb-esgoto",
    "numero": "23",
    "rotulo": "TUBOS 23",
    "nome": "Tê BBB - Esgoto",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Tê para conexão de ramais em redes sanitárias enterradas.",
    "aplicacao": "Conexão de ramais em redes sanitárias enterradas.",
    "imagem": "/produtos/asperbras/tubos-23-te-bbb-esgoto.png",
    "palavrasChave": [
      "tê",
      "te",
      "bbb",
      "esgoto",
      "ramais",
      "rede sanitária"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-24-juncao-45-bbb-esgoto",
    "numero": "24",
    "rotulo": "TUBOS 24",
    "nome": "Junção 45º BBB - Esgoto",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Junção angular para conexão de ramais em redes coletoras de esgoto.",
    "aplicacao": "Conexão angular de ramais em redes coletoras de esgoto.",
    "imagem": "/produtos/asperbras/tubos-24-juncao-45-bbb-esgoto.png",
    "palavrasChave": [
      "junção",
      "juncao",
      "45",
      "bbb",
      "esgoto",
      "ramais"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-25-te-reducao-bbb-esgoto",
    "numero": "25",
    "rotulo": "TUBOS 25",
    "nome": "Tê Redução BBB - Esgoto",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Tê redução para derivações com mudança de diâmetro em redes sanitárias.",
    "aplicacao": "Derivações com mudança de diâmetro em redes sanitárias.",
    "imagem": "/produtos/asperbras/tubos-25-te-reducao-bbb-esgoto.png",
    "palavrasChave": [
      "tê",
      "te",
      "redução",
      "bbb",
      "esgoto",
      "diâmetro"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-26-anel-vedacao-bolsa-je-toroidal-esgoto",
    "numero": "26",
    "rotulo": "TUBOS 26",
    "nome": "Anel de Vedação Bolsa JE Toroidal - Esgoto",
    "categoria": "Vedações e acessórios",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Anel toroidal para vedação entre componentes de sistemas de esgoto.",
    "aplicacao": "Vedação entre componentes de sistemas de esgoto.",
    "imagem": "/produtos/asperbras/tubos-26-anel-vedacao-bolsa-je-toroidal-esgoto.png",
    "palavrasChave": [
      "anel",
      "vedação",
      "bolsa",
      "je",
      "toroidal",
      "esgoto"
    ],
    "filtro": "Acessórios técnicos"
  },
  {
    "id": "tubos-27-cap-coletor-esgoto",
    "numero": "27",
    "rotulo": "TUBOS 27",
    "nome": "CAP Coletor Esgoto",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "CAP para fechamento de extremidades em redes coletoras de esgoto.",
    "aplicacao": "Fechamento de extremidades em redes coletoras de esgoto.",
    "imagem": "/produtos/asperbras/tubos-27-cap-coletor-esgoto.png",
    "palavrasChave": [
      "cap",
      "coletor",
      "esgoto",
      "fechamento",
      "extremidade"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-28-til-de-ligacao-predial-com-tampao",
    "numero": "28",
    "rotulo": "TUBOS 28",
    "nome": "TIL de Ligação Predial com Tampão",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Componente usado para ligação predial à rede coletora de esgoto.",
    "aplicacao": "Ligação predial à rede coletora de esgoto.",
    "imagem": "/produtos/asperbras/tubos-28-til-de-ligacao-predial-com-tampao.png",
    "palavrasChave": [
      "til",
      "ligação predial",
      "tampão",
      "esgoto",
      "rede coletora"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-29-luva-simples-para-til",
    "numero": "29",
    "rotulo": "TUBOS 29",
    "nome": "Luva Simples para TIL",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Luva simples para conexão e acabamento em sistemas de ligação predial.",
    "aplicacao": "Conexão e acabamento em sistemas de ligação predial.",
    "imagem": "/produtos/asperbras/tubos-29-luva-simples-para-til.png",
    "palavrasChave": [
      "luva simples",
      "til",
      "ligação predial",
      "esgoto",
      "conexão"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-30-selim-compacto",
    "numero": "30",
    "rotulo": "TUBOS 30",
    "nome": "Selim Compacto",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Selim para derivação de tubulação em redes sanitárias.",
    "aplicacao": "Derivação de tubulação em redes sanitárias.",
    "imagem": "/produtos/asperbras/tubos-30-selim-compacto.png",
    "palavrasChave": [
      "selim",
      "compacto",
      "derivação",
      "tubulação",
      "esgoto",
      "rede sanitária"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-31-selim-com-trava-dn150-dn100",
    "numero": "31",
    "rotulo": "TUBOS 31",
    "nome": "Selim com Trava DN150 x DN100",
    "categoria": "Conexões esgoto",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Selim com trava para derivação segura entre tubulações de esgoto.",
    "aplicacao": "Derivação segura entre tubulações de esgoto.",
    "imagem": "/produtos/asperbras/tubos-31-selim-com-trava-dn150-dn100.png",
    "palavrasChave": [
      "selim",
      "trava",
      "dn150",
      "dn100",
      "derivação",
      "esgoto"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "tubos-32-anel-do-selim-com-trava",
    "numero": "32",
    "rotulo": "TUBOS 32",
    "nome": "Anel do Selim com Trava",
    "categoria": "Vedações e acessórios",
    "subcategoria": "Catálogo Tubos",
    "descricao": "Acessório de vedação e fixação para selim com trava.",
    "aplicacao": "Vedação e fixação para selim com trava.",
    "imagem": "/produtos/asperbras/tubos-32-anel-do-selim-com-trava.png",
    "palavrasChave": [
      "anel",
      "selim",
      "trava",
      "vedação",
      "fixação",
      "esgoto"
    ],
    "filtro": "Acessórios técnicos"
  },
  {
    "id": "33-tubos-azuis-empilhados-hero",
    "numero": "33",
    "rotulo": "Tubos 33",
    "nome": "Tubos azuis empilhados",
    "categoria": "Tubos para saneamento",
    "subcategoria": "Tubos para saneamento",
    "descricao": "Imagem de tubos azuis empilhados, indicada para hero, banner ou fundo de seção de saneamento no site.",
    "aplicacao": "Apoio visual para saneamento básico, distribuição de água e seções institucionais.",
    "aplicacoes": [
      "Saneamento básico",
      "Distribuição de água"
    ],
    "imagem": "/produtos/asperbras/tubos-33-tubos-azuis-empilhados-hero.jpg",
    "palavrasChave": [
      "33",
      "tubos azuis",
      "empilhados",
      "hero",
      "banner",
      "fundo",
      "saneamento",
      "água",
      "distribuição de água"
    ],
    "filtro": "Tubos PVC / MPVC"
  },
  {
    "id": "34-tubos-ocre-coletor-esgoto",
    "numero": "34",
    "rotulo": "Tubos 34",
    "nome": "Tubos ocre para coletor de esgoto",
    "categoria": "Tubos para esgoto",
    "subcategoria": "Tubos para esgoto",
    "descricao": "Imagem de tubos ocre empilhados, indicada para representar a linha de coletor de esgoto e aplicações de saneamento.",
    "aplicacao": "Redes coletoras de esgoto, sistemas sanitários e saneamento básico.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/tubos-34-tubos-ocre-coletor-esgoto.jpg",
    "palavrasChave": [
      "34",
      "tubos ocre",
      "coletor",
      "esgoto",
      "saneamento",
      "rede coletora",
      "tubos para esgoto"
    ],
    "filtro": "Esgoto"
  },
  {
    "id": "35-linha-produtos-saneamento",
    "numero": "35",
    "rotulo": "Tubos 35",
    "nome": "Linha de produtos de saneamento",
    "categoria": "Linha saneamento",
    "subcategoria": "Linha saneamento",
    "descricao": "Recorte com variedade de tubos e conexões da linha de saneamento, útil para cards de categoria ou seção de produtos.",
    "aplicacao": "Apoio visual para linha de saneamento, tubos, conexões e seções de categoria.",
    "aplicacoes": [
      "Saneamento básico",
      "Distribuição de água"
    ],
    "imagem": "/produtos/asperbras/tubos-35-linha-produtos-saneamento.jpg",
    "palavrasChave": [
      "35",
      "linha saneamento",
      "tubos",
      "conexões",
      "conexoes",
      "categoria",
      "produtos de saneamento"
    ],
    "filtro": "Tubos PVC / MPVC"
  },
  {
    "id": "40-tubos-azuis-fechamento",
    "numero": "40",
    "rotulo": "Tubos 40",
    "nome": "Tubos azuis - detalhe de fechamento",
    "categoria": "Tubos para saneamento",
    "subcategoria": "Tubos para saneamento",
    "descricao": "Imagem em detalhe de tubos azuis, útil como fundo visual, banner de fechamento ou apoio visual sem usar o bloco textual do catálogo.",
    "aplicacao": "Apoio visual para saneamento básico, distribuição de água, banners e chamadas finais.",
    "aplicacoes": [
      "Saneamento básico",
      "Distribuição de água"
    ],
    "imagem": "/produtos/asperbras/tubos-40-tubos-azuis-fechamento.jpg",
    "palavrasChave": [
      "40",
      "tubos azuis",
      "detalhe",
      "fechamento",
      "banner",
      "fundo",
      "saneamento",
      "distribuição de água"
    ],
    "filtro": "Tubos PVC / MPVC"
  },
  {
    "id": "improv-abracadeira-inox-reparo-rapido",
    "numero": "02",
    "rotulo": "IMPROV 02",
    "nome": "Abraçadeira de inox para reparo rápido",
    "categoria": "Abraçadeiras / Manutenção",
    "subcategoria": "Reparo rápido",
    "descricao": "Abraçadeira de inox para reparo rápido em redes pressurizadas, com instalação direta, sem necessidade de esvaziamento da rede e com redução no tempo de manutenção.",
    "aplicacao": "Reparo rápido em tubulações e redes pressurizadas.",
    "aplicacoes": [
      "Saneamento básico",
      "Distribuição de água"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p02-abracadeira-de-inox-para-reparo-rapido.webp",
    "palavrasChave": [
      "abraçadeira",
      "abracadeira",
      "inox",
      "reparo rápido",
      "reparo rapido",
      "rede pressurizada",
      "manutenção",
      "manutencao",
      "tubulação"
    ],
    "filtro": "Abraçadeiras / Manutenção"
  },
  {
    "id": "improv-abracadeira-reparo-em-rede",
    "numero": "02",
    "rotulo": "IMPROV 02",
    "nome": "Abraçadeira para reparo em rede",
    "categoria": "Abraçadeiras / Manutenção",
    "subcategoria": "Manutenção de rede",
    "descricao": "Solução para reparo rápido em tubulações, indicada para intervenções práticas em redes pressurizadas com menor tempo de parada.",
    "aplicacao": "Intervenções de manutenção em redes pressurizadas.",
    "aplicacoes": [
      "Saneamento básico",
      "Distribuição de água"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p02-produtos-iniciais-da-apresentacao-recorte-1.webp",
    "palavrasChave": [
      "abraçadeira",
      "abracadeira",
      "reparo",
      "rede",
      "tubulação",
      "tubulacao",
      "pressurizada",
      "manutenção",
      "parada"
    ],
    "filtro": "Abraçadeiras / Manutenção"
  },
  {
    "id": "improv-otimizacao-sistemas-bombeamento",
    "numero": "02",
    "rotulo": "IMPROV 02",
    "nome": "Otimização de sistemas de bombeamento",
    "categoria": "Sistemas de Bombeamento",
    "subcategoria": "Medição e controle",
    "descricao": "Sistema técnico para otimização de bombeamento, voltado à medição, controle operacional e melhoria da eficiência do sistema.",
    "aplicacao": "Medição, controle operacional e melhoria de eficiência em bombeamento.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p02-produtos-iniciais-da-apresentacao-recorte-2.webp",
    "palavrasChave": [
      "otimização",
      "otimizacao",
      "bombeamento",
      "medição",
      "medicao",
      "controle",
      "eficiência",
      "eficiencia",
      "operação"
    ],
    "filtro": "Sistemas de Bombeamento"
  },
  {
    "id": "improv-tanque-aco-vitrificado-recorte",
    "numero": "02",
    "rotulo": "IMPROV 02",
    "nome": "Tanque de aço vitrificado",
    "categoria": "Reservação / Tanques",
    "subcategoria": "Reservação",
    "descricao": "Tanque de aço vitrificado para reservação, indicado para implantação rápida, alta durabilidade e armazenamento seguro.",
    "aplicacao": "Reservação e armazenamento de água em projetos de abastecimento.",
    "aplicacoes": [
      "Saneamento básico",
      "Distribuição de água"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p02-produtos-iniciais-da-apresentacao-recorte-3.webp",
    "palavrasChave": [
      "tanque",
      "aço vitrificado",
      "aco vitrificado",
      "reservação",
      "reservacao",
      "armazenamento",
      "abastecimento"
    ],
    "filtro": "Reservação / Tanques"
  },
  {
    "id": "improv-tanque-aco-vitrificado",
    "numero": "02",
    "rotulo": "IMPROV 02",
    "nome": "Tanque de aço vitrificado",
    "categoria": "Reservação / Tanques",
    "subcategoria": "Sistema de reservação",
    "descricao": "Sistema de reservação em aço vitrificado, desenvolvido para alta durabilidade, montagem eficiente e aplicação em projetos de saneamento e abastecimento.",
    "aplicacao": "Reservação de água para saneamento, abastecimento e infraestrutura.",
    "aplicacoes": [
      "Saneamento básico",
      "Distribuição de água"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p02-tanque-de-aco-vitrificado.webp",
    "palavrasChave": [
      "tanque",
      "aço vitrificado",
      "aco vitrificado",
      "reservação",
      "reservacao",
      "saneamento",
      "abastecimento",
      "durabilidade"
    ],
    "filtro": "Reservação / Tanques"
  },
  {
    "id": "improv-sbl-sistema-bombeamento-em-linha",
    "numero": "04",
    "rotulo": "SBL 04",
    "nome": "SBL — Sistema de Bombeamento em Linha",
    "categoria": "SBL / Equipamentos",
    "subcategoria": "Elevatória de esgoto",
    "descricao": "Sistema de Bombeamento em Linha para elevatória de esgoto, com funcionamento automático, fabricação nacional, assistência técnica e possibilidade de monitoramento remoto.",
    "aplicacao": "Bombeamento em linha para elevatórias de esgoto.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p04-sbl-sistema-de-bombeamento-em-linha.webp",
    "palavrasChave": [
      "sbl",
      "sistema de bombeamento em linha",
      "bombeamento",
      "elevatória",
      "elevatoria",
      "esgoto",
      "monitoramento remoto",
      "automático"
    ],
    "filtro": "SBL / Equipamentos"
  },
  {
    "id": "improv-sbl-elevatoria-esgoto-render",
    "numero": "04",
    "rotulo": "SBL 04",
    "nome": "SBL para elevatória de esgoto",
    "categoria": "SBL / Equipamentos",
    "subcategoria": "Render técnico",
    "descricao": "Render técnico do SBL aplicado em elevatória de esgoto, mostrando o conjunto hidráulico, bombas e tubulações integradas.",
    "aplicacao": "Visualização técnica de conjunto hidráulico, bombas e tubulações integradas.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p04-sbl-sistema-em-linha-render-com-tubulacao.webp",
    "palavrasChave": [
      "sbl",
      "render",
      "elevatória",
      "elevatoria",
      "esgoto",
      "conjunto hidráulico",
      "hidraulico",
      "bombas",
      "tubulações"
    ],
    "filtro": "SBL / Equipamentos"
  },
  {
    "id": "improv-conjunto-hidraulico-inox",
    "numero": "13",
    "rotulo": "SBL 13",
    "nome": "Conjunto hidráulico em inox",
    "categoria": "SBL / Componentes",
    "subcategoria": "Conjunto hidráulico",
    "descricao": "Conjunto hidráulico em inox utilizado no bombeamento inteligente, integrando componentes mecânicos e hidráulicos para operação do sistema.",
    "aplicacao": "Componentes hidráulicos e mecânicos para sistemas de bombeamento.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p13-conjunto-hidraulico-em-inox-foto.webp",
    "palavrasChave": [
      "conjunto hidráulico",
      "hidraulico",
      "inox",
      "bombeamento inteligente",
      "componentes",
      "sbl"
    ],
    "filtro": "SBL / Componentes"
  },
  {
    "id": "improv-sbl-su-standard",
    "numero": "30",
    "rotulo": "SBL 30",
    "nome": "SBL-SU Standard",
    "categoria": "SBL / Modelos",
    "subcategoria": "SBL-SU",
    "descricao": "Modelo SBL-SU, versão standard do Sistema de Bombeamento em Linha, com duas bombas e corpo hidráulico único.",
    "aplicacao": "Modelo standard de SBL com duas bombas e corpo hidráulico único.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p30-sbl-su-render-do-equipamento.webp",
    "palavrasChave": [
      "sbl-su",
      "sbl su",
      "standard",
      "duas bombas",
      "corpo hidráulico",
      "modelo sbl"
    ],
    "filtro": "SBL / Modelos"
  },
  {
    "id": "improv-sbl-su-fabricado",
    "numero": "32",
    "rotulo": "SBL 32",
    "nome": "SBL-SU fabricado",
    "categoria": "SBL / Modelos",
    "subcategoria": "SBL-SU",
    "descricao": "Equipamento SBL-SU fabricado, com motores, conjunto moto-bomba, corpo hidráulico e base estrutural para aplicação em elevatórias.",
    "aplicacao": "Aplicação em elevatórias com conjunto moto-bomba e base estrutural.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p32-sbl-su-equipamento-fabricado.webp",
    "palavrasChave": [
      "sbl-su",
      "sbl su",
      "fabricado",
      "motores",
      "moto-bomba",
      "elevatórias",
      "base estrutural"
    ],
    "filtro": "SBL / Modelos"
  },
  {
    "id": "improv-sbl-sv-saidas-unificadas-valvulas",
    "numero": "34",
    "rotulo": "SBL 34",
    "nome": "SBL-SV com saídas unificadas e válvulas",
    "categoria": "SBL / Modelos",
    "subcategoria": "SBL-SV",
    "descricao": "Modelo SBL-SV com saídas unificadas e válvulas, indicado para sistemas que exigem controle individualizado das bombas.",
    "aplicacao": "Controle individualizado das bombas em sistemas de bombeamento.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p34-sbl-sv-render-do-equipamento.webp",
    "palavrasChave": [
      "sbl-sv",
      "sbl sv",
      "saídas unificadas",
      "saidas unificadas",
      "válvulas",
      "valvulas",
      "controle individualizado"
    ],
    "filtro": "SBL / Modelos"
  },
  {
    "id": "improv-sbl-sv-fabricado",
    "numero": "36",
    "rotulo": "SBL 36",
    "nome": "SBL-SV fabricado",
    "categoria": "SBL / Modelos",
    "subcategoria": "SBL-SV",
    "descricao": "Detalhe do equipamento SBL-SV fabricado, mostrando motores, válvulas, tubulações e estrutura do conjunto de bombeamento.",
    "aplicacao": "Detalhe técnico de equipamento fabricado para conjunto de bombeamento.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p36-sbl-sv-detalhe-do-equipamento-fabricado.webp",
    "palavrasChave": [
      "sbl-sv",
      "sbl sv",
      "fabricado",
      "motores",
      "válvulas",
      "valvulas",
      "tubulações",
      "bombeamento"
    ],
    "filtro": "SBL / Modelos"
  },
  {
    "id": "improv-sbl-ss-saidas-separadas-valvulas",
    "numero": "38",
    "rotulo": "SBL 38",
    "nome": "SBL-SS com saídas separadas e válvulas",
    "categoria": "SBL / Modelos",
    "subcategoria": "SBL-SS",
    "descricao": "Modelo SBL-SS com saídas separadas e válvulas individuais, indicado para operações com maior controle hidráulico por bomba.",
    "aplicacao": "Operações com maior controle hidráulico individual por bomba.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p38-sbl-ss-render-do-equipamento.webp",
    "palavrasChave": [
      "sbl-ss",
      "sbl ss",
      "saídas separadas",
      "saidas separadas",
      "válvulas individuais",
      "controle hidráulico"
    ],
    "filtro": "SBL / Modelos"
  },
  {
    "id": "improv-sbl-ss-fabricado",
    "numero": "40",
    "rotulo": "SBL 40",
    "nome": "SBL-SS fabricado",
    "categoria": "SBL / Modelos",
    "subcategoria": "SBL-SS",
    "descricao": "Equipamento SBL-SS fabricado, com motor, válvulas, corpo hidráulico e conexões para aplicação em sistemas de bombeamento.",
    "aplicacao": "Aplicação em sistemas de bombeamento com motor, válvulas e conexões.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p40-sbl-ss-equipamento-fabricado.webp",
    "palavrasChave": [
      "sbl-ss",
      "sbl ss",
      "fabricado",
      "motor",
      "válvulas",
      "valvulas",
      "corpo hidráulico",
      "conexões"
    ],
    "filtro": "SBL / Modelos"
  },
  {
    "id": "improv-sbl-tri-tres-bombas",
    "numero": "42",
    "rotulo": "SBL 42",
    "nome": "SBL-TRI com três bombas",
    "categoria": "SBL / Modelos",
    "subcategoria": "SBL-TRI",
    "descricao": "Modelo SBL-TRI com três bombas, desenvolvido para aplicações com maior demanda de vazão e operação contínua.",
    "aplicacao": "Aplicações com maior demanda de vazão e operação contínua.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p42-sbl-tri-render-do-equipamento.webp",
    "palavrasChave": [
      "sbl-tri",
      "sbl tri",
      "três bombas",
      "tres bombas",
      "vazão",
      "vazao",
      "operação contínua"
    ],
    "filtro": "SBL / Modelos"
  },
  {
    "id": "improv-mini-sbl",
    "numero": "46",
    "rotulo": "SBL 46",
    "nome": "Mini-SBL",
    "categoria": "SBL / Pequenas aplicações",
    "subcategoria": "Mini-SBL",
    "descricao": "Mini-SBL para pequenas aplicações, com uma bomba e corpo hidráulico compacto para soluções de bombeamento em menor escala.",
    "aplicacao": "Soluções compactas de bombeamento em menor escala.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p46-mini-sbl-render-do-equipamento.webp",
    "palavrasChave": [
      "mini-sbl",
      "mini sbl",
      "pequenas aplicações",
      "pequenas aplicacoes",
      "uma bomba",
      "compacto",
      "bombeamento"
    ],
    "filtro": "SBL / Pequenas aplicações"
  },
  {
    "id": "improv-modelos-bombeamento-sbl",
    "numero": "81",
    "rotulo": "SBL 81",
    "nome": "Modelos de bombeamento SBL",
    "categoria": "SBL / Modelos",
    "subcategoria": "Comparativo de modelos",
    "descricao": "Imagem comparativa dos modelos de bombeamento SBL, incluindo SBL-SU, SBL-SV, SBL-SS, SBL-TRI e Mini-SBL.",
    "aplicacao": "Comparação visual dos modelos de bombeamento SBL.",
    "aplicacoes": [
      "Saneamento básico"
    ],
    "imagem": "/produtos/asperbras/improv-sbl-p81-modelos-de-bombeamento-sbl.webp",
    "palavrasChave": [
      "modelos sbl",
      "bombeamento sbl",
      "sbl-su",
      "sbl-sv",
      "sbl-ss",
      "sbl-tri",
      "mini-sbl",
      "comparativo"
    ],
    "filtro": "SBL / Modelos"
  },
  {
    "id": "medidores-01-medidor-vazao-eletromagnetico-vms",
    "numero": "01",
    "rotulo": "MEDIDOR 01",
    "nome": "Medidor de Vazão Eletromagnético — Modelo VMS",
    "categoria": "Medidores de vazão",
    "subcategoria": "Medidores eletromagnéticos",
    "descricao": "Medidor de vazão eletromagnético para consulta técnica em aplicações de saneamento, redes de água, automação e monitoramento de infraestrutura.",
    "aplicacao": "Medição e monitoramento de vazão em redes de água, saneamento, irrigação e processos sob consulta.",
    "imagem": "/produtos/asperbras/medidores-medidor-vazao-placeholder.svg",
    "statusImagem": "placeholder",
    "palavrasChave": [
      "medidor de vazão",
      "vazão",
      "medição",
      "vms",
      "saneamento",
      "redes de água",
      "esgoto",
      "irrigação",
      "outorga",
      "automação",
      "controle de processo",
      "monitoramento",
      "infraestrutura"
    ],
    "filtro": "Medidores de vazão"
  },
  {
    "id": "medidores-02-medidor-vazao-eletromagnetico-vmp-pro",
    "numero": "02",
    "rotulo": "MEDIDOR 02",
    "nome": "Medidor de Vazão Eletromagnético — Modelo VMP+Pro",
    "categoria": "Medidores de vazão",
    "subcategoria": "Medidores eletromagnéticos",
    "descricao": "Medidor de vazão eletromagnético modelo VMP+Pro para projetos que exigem medição técnica, automação e controle operacional. Informações detalhadas sob consulta.",
    "aplicacao": "Controle de vazão, automação, monitoramento e infraestrutura hidráulica em redes e processos.",
    "imagem": "/produtos/asperbras/medidores-medidor-vazao-placeholder.svg",
    "statusImagem": "placeholder",
    "palavrasChave": [
      "medidor de vazão",
      "vazão",
      "medição",
      "vmp",
      "vmp pro",
      "vmp+pro",
      "saneamento",
      "redes de água",
      "esgoto",
      "irrigação",
      "outorga",
      "automação",
      "controle de processo",
      "monitoramento",
      "infraestrutura"
    ],
    "filtro": "Medidores de vazão"
  },
  {
    "id": "medidores-03-medidor-vazao-eletromagnetico-flangeado-vmf",
    "numero": "03",
    "rotulo": "MEDIDOR 03",
    "nome": "Medidor de Vazão Eletromagnético Flangeado — Modelo VMF",
    "categoria": "Medidores de vazão",
    "subcategoria": "Medidores eletromagnéticos",
    "descricao": "Medidor de vazão eletromagnético flangeado para instalações técnicas em tubulações e sistemas de saneamento. Informações técnicas sob consulta.",
    "aplicacao": "Medição de vazão em redes flangeadas, estações, sistemas de água, esgoto e controle de processo.",
    "imagem": "/produtos/asperbras/medidores-medidor-vazao-placeholder.svg",
    "statusImagem": "placeholder",
    "palavrasChave": [
      "medidor de vazão",
      "vazão",
      "medição",
      "vmf",
      "flangeado",
      "saneamento",
      "redes de água",
      "esgoto",
      "irrigação",
      "outorga",
      "automação",
      "controle de processo",
      "monitoramento",
      "infraestrutura"
    ],
    "filtro": "Medidores de vazão"
  },
  {
    "id": "medidores-04-medidor-vazao-eletromagnetico-wafer-vmw",
    "numero": "04",
    "rotulo": "MEDIDOR 04",
    "nome": "Medidor de Vazão Eletromagnético Tipo Wafer — Modelo VMW",
    "categoria": "Medidores de vazão",
    "subcategoria": "Medidores eletromagnéticos",
    "descricao": "Medidor de vazão eletromagnético tipo wafer para aplicações em medição, monitoramento e automação de redes. Informações técnicas sob consulta.",
    "aplicacao": "Medição de vazão em instalações tipo wafer, redes de água, saneamento e processos industriais.",
    "imagem": "/produtos/asperbras/medidores-medidor-vazao-placeholder.svg",
    "statusImagem": "placeholder",
    "palavrasChave": [
      "medidor de vazão",
      "vazão",
      "medição",
      "vmw",
      "wafer",
      "saneamento",
      "redes de água",
      "esgoto",
      "irrigação",
      "outorga",
      "automação",
      "controle de processo",
      "monitoramento",
      "infraestrutura"
    ],
    "filtro": "Medidores de vazão"
  },
  {
    "id": "medidores-05-medidor-vazao-eletromagnetico-insercao-vmi",
    "numero": "05",
    "rotulo": "MEDIDOR 05",
    "nome": "Medidor de Vazão Eletromagnético Tipo Inserção — Modelo VMI",
    "categoria": "Medidores de vazão",
    "subcategoria": "Medidores eletromagnéticos",
    "descricao": "Medidor de vazão eletromagnético tipo inserção para monitoramento de vazão em redes e infraestrutura hidráulica. Informações técnicas sob consulta.",
    "aplicacao": "Medição por inserção em redes de água, saneamento, irrigação, outorga e monitoramento operacional.",
    "imagem": "/produtos/asperbras/medidores-medidor-vazao-placeholder.svg",
    "statusImagem": "placeholder",
    "palavrasChave": [
      "medidor de vazão",
      "vazão",
      "medição",
      "vmi",
      "inserção",
      "insercao",
      "saneamento",
      "redes de água",
      "esgoto",
      "irrigação",
      "outorga",
      "automação",
      "controle de processo",
      "monitoramento",
      "infraestrutura"
    ],
    "filtro": "Medidores de vazão"
  },
  {
    "id": "medidores-06-medidor-vazao-eletromagnetico-vmt",
    "numero": "06",
    "rotulo": "MEDIDOR 06",
    "nome": "Medidor de Vazão Eletromagnético sem necessidade de trecho reto — Modelo VMT",
    "categoria": "Medidores de vazão",
    "subcategoria": "Medidores eletromagnéticos",
    "descricao": "Medidor de vazão eletromagnético modelo VMT para situações em que a instalação não conta com trecho reto disponível. Informações técnicas sob consulta.",
    "aplicacao": "Medição de vazão em instalações com restrição de trecho reto, redes hidráulicas, automação e monitoramento.",
    "imagem": "/produtos/asperbras/medidores-medidor-vazao-placeholder.svg",
    "statusImagem": "placeholder",
    "palavrasChave": [
      "medidor de vazão",
      "vazão",
      "medição",
      "vmt",
      "sem trecho reto",
      "trecho reto",
      "saneamento",
      "redes de água",
      "esgoto",
      "irrigação",
      "outorga",
      "automação",
      "controle de processo",
      "monitoramento",
      "infraestrutura"
    ],
    "filtro": "Medidores de vazão"
  },
  {
    "id": "medidores-07-medidor-vazao-eletromagnetico-sanitario-vmk",
    "numero": "07",
    "rotulo": "MEDIDOR 07",
    "nome": "Medidor de Vazão Eletromagnético Tipo Sanitário — Modelo VMK",
    "categoria": "Medidores de vazão",
    "subcategoria": "Medidores eletromagnéticos",
    "descricao": "Medidor de vazão eletromagnético tipo sanitário para aplicações que exigem controle técnico e medição de processo. Informações detalhadas sob consulta.",
    "aplicacao": "Medição sanitária, controle de processo, automação, monitoramento e infraestrutura sob consulta.",
    "imagem": "/produtos/asperbras/medidores-medidor-vazao-placeholder.svg",
    "statusImagem": "placeholder",
    "palavrasChave": [
      "medidor de vazão",
      "vazão",
      "medição",
      "vmk",
      "sanitário",
      "sanitario",
      "saneamento",
      "redes de água",
      "esgoto",
      "irrigação",
      "outorga",
      "automação",
      "controle de processo",
      "monitoramento",
      "infraestrutura"
    ],
    "filtro": "Medidores de vazão"
  }
];

  const trabalhos = [
  {
    "id": "26-instalacao-poco-visita-inspecao",
    "numero": "26",
    "nome": "Instalação - poço de visita e poço de inspeção",
    "categoria": "Trabalhos",
    "subcategoria": "Instalação",
    "descricao": "Sequência visual de instalação com abertura de entrada, vedação, encaixe de tubo, teste e finalização.",
    "aplicacao": "Apoio visual para instalação de poço de visita e poço de inspeção.",
    "imagem": "/produtos/asperbras/saneamento-26-instalacao-poco-visita-inspecao.webp",
    "palavrasChave": [
      "26",
      "instalação",
      "instalacao",
      "poço de visita",
      "poço de inspeção",
      "vedação",
      "encaixe",
      "teste"
    ],
    "filtro": "Trabalhos"
  },
  {
    "id": "27-instalacao-caixa-abrigo-vrp",
    "numero": "27",
    "nome": "Instalação - caixa abrigo para VRP",
    "categoria": "Trabalhos",
    "subcategoria": "Instalação",
    "descricao": "Imagem de instalação da caixa abrigo para válvula reguladora de pressão.",
    "aplicacao": "Apoio visual para instalação de caixa abrigo para VRP.",
    "imagem": "/produtos/asperbras/saneamento-27-instalacao-caixa-abrigo-vrp.webp",
    "palavrasChave": [
      "27",
      "instalação",
      "instalacao",
      "caixa abrigo",
      "vrp",
      "válvula",
      "pressão"
    ],
    "filtro": "Trabalhos"
  },
  {
    "id": "28-instalacao-poco-visita-drenagem",
    "numero": "28",
    "nome": "Instalação - poço de visita para drenagem",
    "categoria": "Trabalhos",
    "subcategoria": "Instalação",
    "descricao": "Imagem de poço de visita aplicado em drenagem e contexto de obra.",
    "aplicacao": "Apoio visual para aplicação de poço de visita em drenagem.",
    "imagem": "/produtos/asperbras/saneamento-28-instalacao-poco-visita-drenagem.webp",
    "palavrasChave": [
      "28",
      "instalação",
      "instalacao",
      "poço de visita",
      "drenagem",
      "obra"
    ],
    "filtro": "Trabalhos"
  },
  {
    "id": "29-banner-institucional-tubos-conexoes",
    "numero": "29",
    "nome": "Banner institucional - tubos e conexões",
    "categoria": "Trabalhos",
    "subcategoria": "Institucional",
    "descricao": "Imagem institucional do catálogo com tubos, conexões e aplicação em irrigação.",
    "aplicacao": "Apoio institucional para apresentação de tubos, conexões e aplicação em irrigação.",
    "imagem": "/produtos/asperbras/saneamento-29-banner-institucional-tubos-conexoes.webp",
    "palavrasChave": [
      "29",
      "banner",
      "institucional",
      "tubos",
      "conexões",
      "conexoes",
      "irrigação"
    ],
    "filtro": "Trabalhos"
  },
  {
    "id": "36-registro-historico-fabrica-1966",
    "numero": "36",
    "nome": "Registro histórico de fábrica - 1966",
    "categoria": "Trabalhos",
    "subcategoria": "História e estrutura",
    "descricao": "Imagem histórica ligada ao início da operação, indicada para seção de trajetória, confiança e experiência da marca.",
    "aplicacao": "Apoio institucional para trajetória, confiança e experiência da marca.",
    "imagem": "/produtos/asperbras/trabalhos-36-fabrica-historica-1966.jpg",
    "palavrasChave": [
      "36",
      "história",
      "historia",
      "1966",
      "fábrica",
      "fabrica",
      "trajetória",
      "experiência",
      "marca"
    ],
    "filtro": "Trabalhos"
  },
  {
    "id": "37-unidade-fabril-1985",
    "numero": "37",
    "nome": "Unidade fabril - 1985",
    "categoria": "Trabalhos",
    "subcategoria": "História e estrutura",
    "descricao": "Imagem aérea de unidade fabril, boa para mostrar estrutura, operação e evolução industrial.",
    "aplicacao": "Apoio institucional para estrutura, operação e evolução industrial.",
    "imagem": "/produtos/asperbras/trabalhos-37-unidade-fabril-1985.jpg",
    "palavrasChave": [
      "37",
      "unidade fabril",
      "1985",
      "estrutura",
      "operação",
      "operacao",
      "evolução industrial"
    ],
    "filtro": "Trabalhos"
  },
  {
    "id": "38-unidade-asperbras-atual",
    "numero": "38",
    "nome": "Unidade Asperbras atual",
    "categoria": "Trabalhos",
    "subcategoria": "Estrutura industrial",
    "descricao": "Imagem aérea da unidade atual, indicada para seção institucional com foco em capacidade produtiva e estrutura.",
    "aplicacao": "Apoio institucional para capacidade produtiva, estrutura e operação atual.",
    "imagem": "/produtos/asperbras/trabalhos-38-unidade-asperbras-atual.jpg",
    "palavrasChave": [
      "38",
      "asperbras",
      "unidade atual",
      "estrutura industrial",
      "capacidade produtiva",
      "operação"
    ],
    "filtro": "Trabalhos"
  },
  {
    "id": "39-atendimento-tecnico-em-fabrica",
    "numero": "39",
    "nome": "Atendimento técnico em fábrica",
    "categoria": "Trabalhos",
    "subcategoria": "Atendimento especializado",
    "descricao": "Imagem de profissionais em ambiente industrial ao lado de produto rotomoldado, indicada para atendimento, suporte técnico e confiança.",
    "aplicacao": "Apoio institucional para atendimento, suporte técnico e confiança.",
    "imagem": "/produtos/asperbras/trabalhos-39-atendimento-tecnico-em-fabrica.jpg",
    "palavrasChave": [
      "39",
      "atendimento técnico",
      "suporte técnico",
      "fábrica",
      "profissionais",
      "rotomoldado",
      "confiança"
    ],
    "filtro": "Trabalhos"
  }
];

  window.catalogProductsData = produtos;
  window.workItemsData = trabalhos;
})();
