select "a"."firstName" as "actor_fn",
        "a"."lastName" as "actor_ln"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  where "films"."title" = 'Jersey Sassy';
