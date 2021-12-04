select "a"."line1",
      "c"."name" as "city",
      "a"."district",
      "n"."name" as "country"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" as "n" using ("countryId")
  where "a"."line1" != 'null';
