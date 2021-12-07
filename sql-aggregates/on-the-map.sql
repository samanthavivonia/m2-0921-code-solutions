select "cn"."name" as "country",
        count("ct".*) as "cities"
  from "cities" as "ct"
  join "countries" as "cn" using ("countryId")
  group by "cn"."name"
  order by "cn"."name";
