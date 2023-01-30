-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doramas" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "overview" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "watched" BOOLEAN NOT NULL,

    CONSTRAINT "doramas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "main_characters" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "dorama_id" INTEGER NOT NULL,
    "actor" VARCHAR(50) NOT NULL,

    CONSTRAINT "main_characters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "doramas" ADD CONSTRAINT "doramas_fk0" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "main_characters" ADD CONSTRAINT "main_characters_fk0" FOREIGN KEY ("dorama_id") REFERENCES "doramas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
