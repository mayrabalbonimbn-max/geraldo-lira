with new_products (
  legacy_id,
  name,
  slug,
  description,
  category,
  product_filter,
  image_url,
  image_path,
  sort_order
) as (
  values
    (
      'ferro-fundido-01-valvula-registro-de-gaveta-flangeada-com-cabecote',
      'Válvula/Registro de Gaveta Flangeada com Cabeçote',
      'valvula-registro-de-gaveta-flangeada-com-cabecote',
      'Válvulas e registros de gaveta em ferro fundido para redes de água, adutoras e sistemas de saneamento.',
      'Válvulas e Registros de Gaveta',
      'Válvulas e Registros de Gaveta',
      '/produtos/ferro-fundido/01_valvula-registro-de-gaveta-flangeada-com-cabecote.png',
      'produtos/ferro-fundido/01_valvula-registro-de-gaveta-flangeada-com-cabecote.png',
      1201
    ),
    (
      'ferro-fundido-02-valvula-registro-de-gaveta-flangeada-com-volante',
      'Válvula/Registro de Gaveta Flangeada com Volante',
      'valvula-registro-de-gaveta-flangeada-com-volante',
      'Válvulas e registros de gaveta em ferro fundido com volante para manobra e bloqueio de fluxo.',
      'Válvulas e Registros de Gaveta',
      'Válvulas e Registros de Gaveta',
      '/produtos/ferro-fundido/02_valvula-registro-de-gaveta-flangeada-com-volante.png',
      'produtos/ferro-fundido/02_valvula-registro-de-gaveta-flangeada-com-volante.png',
      1202
    ),
    (
      'ferro-fundido-03-valvula-registro-de-gaveta-com-bolsas-pvc-pba-com-cabecote',
      'Válvula/Registro de Gaveta com Bolsas para Tubo PVC PBA com Cabeçote',
      'valvula-registro-de-gaveta-com-bolsas-para-tubo-pvc-pba-com-cabecote',
      'Válvulas e registros de gaveta com bolsas para tubo PVC PBA, indicados para redes de distribuição de água.',
      'Válvulas e Registros de Gaveta',
      'Válvulas e Registros de Gaveta',
      '/produtos/ferro-fundido/03_valvula-registro-de-gaveta-com-bolsas-para-tubo-pvc-pba-com-cabecote.png',
      'produtos/ferro-fundido/03_valvula-registro-de-gaveta-com-bolsas-para-tubo-pvc-pba-com-cabecote.png',
      1203
    ),
    (
      'ferro-fundido-04-valvula-registro-de-gaveta-com-bolsas-pvc-pba-com-volante',
      'Válvula/Registro de Gaveta com Bolsas para Tubo PVC PBA com Volante',
      'valvula-registro-de-gaveta-com-bolsas-para-tubo-pvc-pba-com-volante',
      'Válvulas e registros de gaveta com bolsas para tubo PVC PBA e volante de acionamento.',
      'Válvulas e Registros de Gaveta',
      'Válvulas e Registros de Gaveta',
      '/produtos/ferro-fundido/04_valvula-registro-de-gaveta-com-bolsas-para-tubo-pvc-pba-com-volante.png',
      'produtos/ferro-fundido/04_valvula-registro-de-gaveta-com-bolsas-para-tubo-pvc-pba-com-volante.png',
      1204
    ),
    (
      'ferro-fundido-05-valvula-retencao-portinhola-unica-35-graus-com-flanges',
      'Válvula Retenção Portinhola Única a 35 Graus com Flanges',
      'valvula-retencao-portinhola-unica-a-35-graus-com-flanges',
      'Registro e válvula de retenção com portinhola única a 35 graus e conexões flangeadas.',
      'Registros e Válvulas',
      'Registros e Válvulas',
      '/produtos/ferro-fundido/05_valvula-retencao-portinhola-unica-a-35-graus-com-flanges.png',
      'produtos/ferro-fundido/05_valvula-retencao-portinhola-unica-a-35-graus-com-flanges.png',
      1205
    ),
    (
      'ferro-fundido-06-tee-com-flanges',
      'Tee com Flanges',
      'tee-com-flanges',
      'Conexão tee em ferro fundido com flanges para derivação em redes hidráulicas e saneamento.',
      'Ferro Fundido',
      'Ferro Fundido',
      '/produtos/ferro-fundido/06_tee-com-flanges.png',
      'produtos/ferro-fundido/06_tee-com-flanges.png',
      1206
    ),
    (
      'ferro-fundido-07-curva-90-com-bolsas-jgs',
      'Curva 90° com Bolsas JGS',
      'curva-90-com-bolsas-jgs',
      'Curva 90 graus em ferro fundido com bolsas JGS para mudança de direção em redes enterradas.',
      'Ferro Fundido',
      'Ferro Fundido',
      '/produtos/ferro-fundido/07_curva-90-com-bolsas-jgs.png',
      'produtos/ferro-fundido/07_curva-90-com-bolsas-jgs.png',
      1207
    ),
    (
      'ferro-fundido-08-curva-90-com-flanges',
      'Curva 90° com Flanges',
      'curva-90-com-flanges',
      'Curva 90 graus em ferro fundido com flanges para redes de água, esgoto e saneamento.',
      'Ferro Fundido',
      'Ferro Fundido',
      '/produtos/ferro-fundido/08_curva-90-com-flanges.png',
      'produtos/ferro-fundido/08_curva-90-com-flanges.png',
      1208
    ),
    (
      'ferro-fundido-09-reducao-com-bolsas-jgs',
      'Redução com Bolsas JGS',
      'reducao-com-bolsas-jgs',
      'Redução em ferro fundido com bolsas JGS para transição de diâmetros em redes hidráulicas.',
      'Ferro Fundido',
      'Ferro Fundido',
      '/produtos/ferro-fundido/09_reducao-com-bolsas-jgs.png',
      'produtos/ferro-fundido/09_reducao-com-bolsas-jgs.png',
      1209
    ),
    (
      'ferro-fundido-10-juncao-flangeada',
      'Junção Flangeada',
      'juncao-flangeada',
      'Junção flangeada em ferro fundido para interligações e derivações em sistemas de saneamento.',
      'Ferro Fundido',
      'Ferro Fundido',
      '/produtos/ferro-fundido/10_juncao-flangeada.png',
      'produtos/ferro-fundido/10_juncao-flangeada.png',
      1210
    ),
    (
      'ferro-fundido-11-valvula-borboleta-wafer-fofo-epdm-com-alavanca',
      'Válvula Borboleta Wafer, Corpo e Disco em FoFo, EPDM, com Alavanca',
      'valvula-borboleta-wafer-corpo-e-disco-em-fofo-epdm-com-alavanca',
      'Registro e válvula borboleta wafer com corpo e disco em ferro fundido, vedação EPDM e acionamento por alavanca.',
      'Registros e Válvulas',
      'Registros e Válvulas',
      '/produtos/ferro-fundido/11_valvula-borboleta-wafer-corpo-e-disco-em-fofo-epdm-com-alavanca.png',
      'produtos/ferro-fundido/11_valvula-borboleta-wafer-corpo-e-disco-em-fofo-epdm-com-alavanca.png',
      1211
    ),
    (
      'ferro-fundido-12-hidrante-de-coluna-simples',
      'Hidrante de Coluna Simples',
      'hidrante-de-coluna-simples',
      'Hidrante de coluna simples para redes de combate a incêndio e infraestrutura urbana.',
      'Tampões e Hidrante',
      'Tampões e Hidrante',
      '/produtos/ferro-fundido/12_hidrante-de-coluna-simples.png',
      'produtos/ferro-fundido/12_hidrante-de-coluna-simples.png',
      1212
    )
)
insert into products
  (legacy_id, name, slug, description, category, "filter", image_url, image_path, is_published, is_featured, sort_order)
select
  legacy_id,
  name,
  slug,
  description,
  category,
  product_filter,
  image_url,
  image_path,
  true,
  false,
  sort_order
from new_products
on conflict (legacy_id)
do update set
  name = excluded.name,
  slug = excluded.slug,
  description = excluded.description,
  category = excluded.category,
  "filter" = excluded."filter",
  image_url = excluded.image_url,
  image_path = excluded.image_path,
  is_featured = excluded.is_featured,
  sort_order = excluded.sort_order;

insert into categories (name, slug, sort_order, is_active)
values
  ('Válvulas e Registros de Gaveta', 'valvulas-e-registros-de-gaveta', 1201, true),
  ('Registros e Válvulas', 'registros-e-valvulas', 1205, true),
  ('Ferro Fundido', 'ferro-fundido', 1206, true),
  ('Tampões e Hidrante', 'tampoes-e-hidrante', 1212, true)
on conflict (slug)
do update set
  name = excluded.name,
  sort_order = excluded.sort_order,
  is_active = true;
