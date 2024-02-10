const STORE = [
    {
        title: "Frutas",
        data: [
            {
                id: "1",
                title: "Tomate",
                price: 1.0,
                description: "Tomates fresquinhos so no mercadin do Dorgival ",
                thumbnail: require("../../assets/products/thumbnail/tomatos.jpg")
            },
            {
                id: "2",
                title: "Maçãs",
                price: 2.0,
                description: "Maçãs fresquinhas so no mercadin do Dorgival ",
                thumbnail: require("../../assets/products/thumbnail/apples.jpg")
            },
            {
                id: "3",
                title: "Abacaxi",
                price: 5.0,
                description: "Abacaxis fresquinhos so no mercadin do Dorgival ",
                thumbnail: require("../../assets/products/thumbnail/abacaxi.jpg")
            },
        ],
    },
    {
        title: "Limpeza",
        data:[
            {
                id:"4",
                title: "Sabão",
                price: 15.5,
                description: "Sabão omo bem cheiroso para manter suas roupas limpas",
                thumbnail: require("../../assets/products/thumbnail/abacaxi.jpg")

            },
            {
                id:"4",
                title: "Sabão",
                price: 15.5,
                description: "Sabão omo bem cheiroso para manter suas roupas limpas",
                thumbnail: require("../../assets/products/thumbnail/abacaxi.jpg")

            },
        ],
    },
    {
        title: "Gelados",
        data:[
            {
                id:"5",
                title: "Sorvete Creme",
                price: 10.5,
                description: "Sorvete de creme geladinho para um dia quente",
                thumbnail: require("../../assets/products/thumbnail/abacaxi.jpg")

            },
        ],
    },
    {
        title: "Padaria",
        data:[
            {
                id:"6",
                title: "Sorvete Creme",
                price: 10.5,
                description: "Sorvete de creme geladinho para um dia quente",
                thumbnail: require("../../assets/products/thumbnail/abacaxi.jpg")
            },
        ],
    },

]

//definindo as constantes
const PRODUCTS = STORE.map((item)=>item.data).flat()

const SECTIONS = STORE.map((item)=> item.title)

type ProductProps = (typeof PRODUCTS)[0]

export{STORE,PRODUCTS, SECTIONS, ProductProps}