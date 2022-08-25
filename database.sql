CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- favorite table
CREATE TABLE "favorite" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR (150), 
	"category_id" INT REFERENCES "category" DEFAULT NULL
	); 

--IF you need dummy data in favorite table
    INSERT INTO "favorite" ("url", "category_id")
VALUES ('dummy5', 3), ('dummy6', 2), ('dummy7', 4), ('dummy8', 4), ('dummy9', 3), ('dummy10', 3), ('dummy11', 2), ('dummy12', 1);

--For selecting the URL and category to display in Favorites View
SELECT "favorite".url, "favorite".id, "category".name FROM "favorite"
JOIN "category"
ON "category".id = "favorite".category_id
GROUP BY "favorite".url, "favorite".id, "category".name
ORDER BY "id";

-- for posting a new favorite to the favorites list
INSERT INTO "favorite" ("url")
VALUES ($1);

-- for updating the category PUT
UPDATE "favorite" 
SET "category_id" = 1
WHERE "id" = 1;


