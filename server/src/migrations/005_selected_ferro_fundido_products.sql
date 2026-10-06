with selected_products (
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
      'ferro-fundido-03-valvula-registro-de-gaveta-com-bolsas-pvc-pba-com-cabecote',
      'Válvula/Registro de Gaveta com Bolsas para Tubo PVC PBA com Cabeçote',
      'valvula-registro-gaveta-bolsas-pvc-pba-cabecote',
      'Registro de gaveta em ferro fundido com bolsas para tubo PVC PBA e acionamento por cabeçote.',
      'Válvulas/Registros de Gaveta Importados',
      'Válvulas/Registros de Gaveta Importados',
      '/produtos/ferro-fundido/01_valvula-registro-gaveta-bolsas-pvc-pba-cabecote.webp',
      'produtos/ferro-fundido/01_valvula-registro-gaveta-bolsas-pvc-pba-cabecote.webp',
      1301
    ),
    (
      'ferro-fundido-02-valvula-registro-de-gaveta-flangeada-com-volante',
      'Válvula/Registro de Gaveta Flangeada Corpo Longo com Volante',
      'valvula-registro-gaveta-flangeada-corpo-longo-com-volante',
      'Registro de gaveta flangeado, de corpo longo, em ferro fundido, com acionamento por volante.',
      'Válvulas/Registros de Gaveta Nacionais',
      'Válvulas/Registros de Gaveta Nacionais',
      '/produtos/ferro-fundido/02_valvula-registro-gaveta-flangeada-corpo-longo-com-volante.webp',
      'produtos/ferro-fundido/02_valvula-registro-gaveta-flangeada-corpo-longo-com-volante.webp',
      1302
    ),
    (
      'ferro-fundido-06-tee-com-flanges',
      'Tee com Flanges',
      'tee-com-flanges',
      'Conexão tipo tee em ferro fundido, com três extremidades flangeadas.',
      'Conexões em Ferro Fundido',
      'Conexões em Ferro Fundido',
      '/produtos/ferro-fundido/03_tee-com-flanges.webp',
      'produtos/ferro-fundido/03_tee-com-flanges.webp',
      1303
    ),
    (
      'ferro-fundido-08-curva-90-com-flanges',
      'Curva 90° com Flanges',
      'curva-90-com-flanges',
      'Curva de 90 graus em ferro fundido, com flanges nas duas extremidades.',
      'Conexões em Ferro Fundido',
      'Conexões em Ferro Fundido',
      '/produtos/ferro-fundido/04_curva-90-com-flanges.webp',
      'produtos/ferro-fundido/04_curva-90-com-flanges.webp',
      1304
    ),
    (
      'ferro-fundido-13-toco-com-flanges',
      'Toco com Flanges',
      'toco-com-flanges',
      'Trecho reto curto em ferro fundido, com flange nas duas extremidades.',
      'Conexões em Ferro Fundido',
      'Conexões em Ferro Fundido',
      '/produtos/ferro-fundido/05_toco-com-flanges.webp',
      'produtos/ferro-fundido/05_toco-com-flanges.webp',
      1305
    ),
    (
      'ferro-fundido-14-junta-de-desmontagem-travada-axialmente',
      'Junta de Desmontagem Travada Axialmente',
      'junta-de-desmontagem-travada-axialmente',
      'Junta de desmontagem em ferro fundido, travada axialmente por tirantes e flanges.',
      'Juntas de Desmontagem',
      'Juntas de Desmontagem',
      '/produtos/ferro-fundido/06_junta-de-desmontagem-travada-axialmente.webp',
      'produtos/ferro-fundido/06_junta-de-desmontagem-travada-axialmente.webp',
      1306
    ),
    (
      'ferro-fundido-15-tampao-dn-600',
      'Tampão DN 600',
      'tampao-dn-600',
      'Tampão circular em ferro fundido, diâmetro nominal DN 600.',
      'Tampões e Hidrante',
      'Tampões e Hidrante',
      '/produtos/ferro-fundido/07_tampao-dn-600.webp',
      'produtos/ferro-fundido/07_tampao-dn-600.webp',
      1307
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
from selected_products
on conflict (legacy_id)
do update set
  name = excluded.name,
  slug = excluded.slug,
  description = excluded.description,
  category = excluded.category,
  "filter" = excluded."filter",
  image_url = excluded.image_url,
  image_path = excluded.image_path,
  is_published = true,
  is_featured = excluded.is_featured,
  sort_order = excluded.sort_order;

insert into categories (name, slug, sort_order, is_active)
values
  ('Válvulas/Registros de Gaveta Importados', 'valvulas-registros-de-gaveta-importados', 1301, true),
  ('Válvulas/Registros de Gaveta Nacionais', 'valvulas-registros-de-gaveta-nacionais', 1302, true),
  ('Conexões em Ferro Fundido', 'conexoes-em-ferro-fundido', 1303, true),
  ('Juntas de Desmontagem', 'juntas-de-desmontagem', 1306, true),
  ('Tampões e Hidrante', 'tampoes-e-hidrante', 1307, true)
on conflict (slug)
do update set
  name = excluded.name,
  sort_order = excluded.sort_order,
  is_active = true;
