import pic1 from "../../../img/Embrace ringlet napkins 17.4.jpg"
import pic2 from "../../../img/Agate ceramic vessel series 48.9-118.3.png"
import pic3 from "../../../img/Argo 119.4-227.4 stainless steel pots series.jpg"
import pic4 from "../../../img/Ariel porcelain vessel series 17.4-118.3.png"
import pic5 from "../../../img/Aussie metal bowl 59.4.png"
import pic6 from "../../../img/Basket Bailey 47.9.png"
import pic7 from "../../../img/Black Volt 101.4-317.4 series of pots and pans.png"
import pic8 from "../../../img/CACAO pattern series 69.9.png"
import pic9 from "../../../img/Canadian silicone tool, pack of 4 metal straws, metal 11.png"
import pic10 from "../../../img/Canadian silicone tool.png"
import pic11 from "../../../img/Crystal Opera Series 34.9-41.9.png"
import pic12 from "../../../img/Elora storage basket 83.4.jpg"
import pic13 from "../../../img/Jade ceramic ware series 20.9-52.4.png"
import pic14 from "../../../img/Haven jar 26.9.png"
import pic15 from "../../../img/Floyd 29-83.8 series of plastic tools.png"
import pic16 from "../../../img/Fury metal storage 38.4.jpg"
import pic17 from "../../../img/Gabi placement 9.7.jpg"
import pic18 from "../../../img/Garden side table 89.7.png"
import pic19 from "../../../img/Gitti mirror 35.6.png"
import pic20 from "../../../img/Harlow lantern 56.7-38.6.png"
import pic21 from "../../../img/Jonas corner basket 359.jpg"



const products = [
    {
        id: 0,
        name: "Embrace ringlet napkins",
        qty: 10,
        image: pic1,
        price: 17.4,
        description: "An elegant wooden napkin holder",
        cart: 0
    },
    {
        id: 1,
        name: "Agate ceramic vessel series",
        qty: 200,
        image: pic2,
        price: 118.3,
        description: "Set of ceramic serving plates",
        cart: 0
    },
    {
        id: 2,
        name: "Argo stainless steel pots series",
        qty: 140,
        image: pic3,
        price: 59.4,
        description: "A series of stainless steel pots made of multi-layer aluminum casting for equal and efficient heat distribution, for optimal cooking results and energy saving",
        cart: 0
    },
    {
        id: 3,
        name: "Ariel porcelain vessel series",
        qty: 1000,
        image: pic4,
        price: 47.9,
        description: "Set of white ceramic serving plates",
        cart: 0
    },
    {
        id: 4,
        name: "Aussie metal bowl",
        qty: 720,
        image: pic5,
        price: 317.4,
        description: "A round and extremely useful bowl, made of stainless metal suitable for both cooking and mixing as well as organic serving.",
        cart: 0
    },
    {
        id: 5,
        name: "Basket Bailey",
        qty: 960,
        image: pic6,
        price: 69.9,
        description: "A very useful basket for storing different products.",
        cart: 0
    },
    {
        id: 6,
        name: "Black Volt series of pots and pans",
        qty: 100,
        image: pic7,
        price: 317.4,
        description: "A useful frying pan made of cast aluminum with a fine non-stick coating and optimal heat conduction for energy saving",
        cart: 0
    },
    {
        id: 7,
        name: "CACAO pattern series",
        qty: 500,
        image: pic8,
        price: 41.9,
        description: "CACAO series spring mold with excellent heat conductivity, guarantees fast and even baking. High-quality non-stick coating that allows easy extraction of the pastry and simple cleaning.",
        cart: 0
    },
    {
        id: 8,
        name: "Pack of 4 metal straws + cleaning brush",
        qty: 105,
        image: pic9,
        price: 83.4,
        description: "Metal straws are convenient to use and easy to clean",
        cart: 0
    },
    {
        id: 9,
        name: "Canadian silicone tool",
        qty: 370,
        image: pic10,
        price: 52.4,
        description: "Organic silicone ladle with a wooden handle for a comfortable grip.",
        cart: 0
    },
    {
        id: 10,
        name: "Crystal Opera Series",
        qty: 250,
        image: pic11,
        price: 26.9,
        description: "A luxury crystal set that includes a wine bottle, a drinking glass and a wine glass",
        cart: 0
    },
    {
        id: 11,
        name: "Elora storage basket",
        qty: 1400,
        image: pic12,
        price: 83.8,
        description: "Collapsible storage basket with the inscription: \"You are garbage\" black",
        cart: 0
    },
    {
        id: 12,
        name: "Jade ceramic ware series",
        qty: 780,
        image: pic13,
        price: 38.4,
        description: "Green classic serving plate set",
        cart: 0
    },
    {
        id: 13,
        name: "Haven jar",
        qty: 613,
        image: pic14,
        price: 9.7,
        description: "Transparent jar with lid",
        cart: 0
    },
    {
        id: 14,
        name: "Floyd series of plastic tools",
        qty: 542,
        image: pic15,
        price: 89.7,
        description: "Floyd drinking jug and glass",
        cart: 0
    },
    {
        id: 15,
        name: "Fury metal storage",
        qty: 120,
        image: pic16,
        price: 48,
        description: "A round storage box with a diameter of 10 cm made of metal",
        cart: 0
    },
    {
        id: 16,
        name: "Gabi placement",
        qty: 36,
        image: pic17,
        price: 57,
        description: "Bottom for an easy to clean plate",
        cart: 0
    },
    {
        id: 17,
        name: "Garden side table",
        qty: 812,
        image: pic18,
        price: 35.6,
        description: "Garden side table made of wood with a standard height.",
        cart: 0
    },
    {
        id: 18,
        name: "Gitti mirror",
        qty: 94,
        image: pic19,
        price: 56.7,
        description: "Square pendant mirror",
        cart: 0
    },
    {
        id: 19,
        name: "Harlow lantern",
        qty: 45,
        image: pic20,
        price: 359,
        description: "Lanterns with a winter look",
        cart: 0
    }
]

export const productReducer = (state = products, action) => {
    switch (action.type) {
        case ("DECREASEQTY"):
            if (action.qty === 0) {
                const deleteState = [...state]
                return deleteState
            }
            const deleteState = [...state];
            deleteState[action.id].qty -= 1;
            deleteState[action.id].cart += 1;
            return deleteState;

        case ("INCREASEQTY"):
            if (action.cart === 0) {
                state = state.filter((product) => product != action.product);
            }
            const addState = [...state]
            addState[action.id].qty += 1;
            addState[action.id].cart -= 1;
            return addState;

    }
    return state;
}
