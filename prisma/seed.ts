import prisma from "../src/database/server.js";

async function main() {
    await prisma.categories.createMany({
        data: [
            {
                name: "romance"
            },
            {
                name: "terror"
            },
            {
                name: "escolar"
            }
        ]
    })

    await prisma.doramas.createMany({
        data: [
            {
              "name": "doramaRomance",
              "overview": "teste",
              "grade": 3,
              "category_id": 1,
              "watched": false
            },
            {
              "name": "doramaTerror",
              "overview": "teste",
              "grade": 3,
              "category_id": 2,
              "watched": true
            },
            {
              "name": "doramaEscolar",
              "overview": "teste",
              "grade": 5,
              "category_id": 3,
              "watched": true
            }
          ]
    })


    await prisma.main_characters.createMany({
        data: [
            {
            "name": "personagem1",
            "dorama_id": 1,
            "actor": "ator1"
            },
            {
            "name": "personagem2",
            "dorama_id": 1,
            "actor": "ator1"
            }
        ]
    })


}

main()
    .then( () =>  {
        console.log('Sucess!')
    })
    .catch( (e) =>{
        console.error(e)
        process.exit(1)
    } )
    .finally( async () => {
        await prisma.$disconnect()
    })