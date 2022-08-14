import pic1 from "./components/Images/BirthdayCard.jpg"
import pic2 from "./components/Images/HandmadeRakhi.jpg"
import pic3 from "./components/Images/Chair.jpg"
import pic4 from "./components/Images/HomeDecors.jpg"
import pic5 from "./components/Images/Kathputli.jpeg"
import pic6 from "./components/Images/MetallicJars.jpg"
import pic7 from "./components/Images/Pots.jpg"
import pic8 from "./components/Images/Purse&Bags.jpg"
import pic9 from "./components/Images/Tokri.jfif"
import pic10 from "./components/Images/ShowPiece.jpeg"
import pic11 from "./components/Images/GiftCards.jpeg"
import pic12 from "./components/Images/WoolToys.jpeg"
import pic13 from "./components/Images/HandFans.jpeg"
import pic14 from "./components/Images/Maalaa.jpeg"
import faker from "faker";

faker.seed(99);

var data = [
    {
        id:1,
        name:"Birthday Card",
        price:"50",
        image:pic1,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:false,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:2,
        name:"Handmade Rakhi",
        price:"25",
        image:pic2,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:false,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:3,
        name:"Handcrafted Stool with embedded cushion",
        price:"309",
        image:pic3,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:false,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:4,
        name:"Home Decors",
        price:"249",
        image:pic4,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:true,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:5,
        name:"Set of 8 Kathputlis",
        price:"999",
        image:pic5,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:false,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:6,
        name:"Decorated Mettalic Jars (Set of 5)",
        price:"599",
        image:pic6,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:false,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:7,
        name:"Flower Pots (Set of 8)",
        price:"449",
        image:pic7,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:false,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:8,
        name:"Rajasthani Style Purse & Bags",
        price:"180",
        image:pic8,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:true,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:9,
        name:"Handcrafted Tokris",
        price:"100",
        image:pic9,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:true,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:10,
        name:"Decorated Elephant Show Piece",
        price:"499",
        image:pic10,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:false,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:11,
        name:"Gift Cards",
        price:"149",
        image:pic11,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:true,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:12,
        name:"Animal Toys made of wool (Set of 6)",
        price:"599",
        image:pic12,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:true,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:13,
        name:"Decorative Hand Fans",
        price:"49",
        image:pic13,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:true,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    },
    {
        id:14,
        name:"Necklase made of pearls",
        price:"2999",
        image:pic14,
        inStock:faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery:true,
        ratings:faker.random.arrayElement([1, 2, 3, 4, 5]),
    }
]
export default data