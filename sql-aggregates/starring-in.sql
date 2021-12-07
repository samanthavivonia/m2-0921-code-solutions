select "categories"."name" as "category",
        count("films".*)
  from "films"
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
  group by "categories"."name"
  order by "categories"."name";
