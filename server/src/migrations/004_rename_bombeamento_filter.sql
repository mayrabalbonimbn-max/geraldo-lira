insert into categories (name, slug, sort_order, is_active)
values ('Elevatória / Bombeamento em Linha', 'elevatoria-bombeamento-em-linha', 10, true)
on conflict (slug)
do update set
  name = excluded.name,
  is_active = true,
  sort_order = least(categories.sort_order, excluded.sort_order);

update products
set
  category = 'Elevatória / Bombeamento em Linha',
  "filter" = 'Elevatória / Bombeamento em Linha'
where
  name ilike '%SBL%'
  or name ilike '%Sistema de Bombeamento%'
  or name ilike '%Bombeamento em Linha%'
  or name ilike '%Booster%'
  or name ilike '%Elevatória%'
  or name ilike '%Elevatoria%'
  or category in (
    'Sistemas de Bombeamento',
    'SBL / Equipamentos',
    'SBL / Componentes',
    'SBL / Modelos',
    'SBL / Pequenas aplicações'
  )
  or "filter" in (
    'Sistemas de Bombeamento',
    'SBL / Equipamentos',
    'SBL / Componentes',
    'SBL / Modelos',
    'SBL / Pequenas aplicações'
  );

update categories
set is_active = false
where name in (
  'Sistemas de Bombeamento',
  'SBL / Equipamentos',
  'SBL / Componentes',
  'SBL / Modelos',
  'SBL / Pequenas aplicações'
);
