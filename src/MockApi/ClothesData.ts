import woman1Img from "../Assets/Images/woman1.svg"
import woman2Img from "../Assets/Images/woman2.svg"
import woman3Img from "../Assets/Images/woman3.svg"
import woman4Img from "../Assets/Images/woman4.svg"
import woman5Img from "../Assets/Images/woman5.svg"
import woman6Img from "../Assets/Images/woman6.svg"
import woman7Img from "../Assets/Images/woman7.svg"
import woman8Img from "../Assets/Images/woman8.svg"
import man1Img from "../Assets/Images/man1.svg"
import man2Img from "../Assets/Images/man2.svg"
import man3Img from "../Assets/Images/man3.svg"
import man4Img from "../Assets/Images/man4.svg"
import man5Img from "../Assets/Images/man5.svg"
import man6Img from "../Assets/Images/man6.svg"
import man7Img from "../Assets/Images/man7.svg"
import man8Img from "../Assets/Images/man8.svg"
import related1Img from "../Assets/Images/related1.svg"
import related2Img from "../Assets/Images/related2.svg"
import related3Img from "../Assets/Images/related3.svg"
import related4Img from "../Assets/Images/related4.svg"

type TMoney = {
    currency: string,
    amount: string
}

export type TClothesItem = {
    name: string,
    price: TMoney,
    image: string,
    rating: number,
    sale?: string,
    priceWithSale?: TMoney
}

const GENERAL_STAR_COUNT = 5

const womensClothes: TClothesItem[] = [
    {
        name: "Women's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: woman1Img,
        rating: 1
    },
    {
        name: "Women's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: woman2Img,
        rating: 2,
        sale: "-50%",
        priceWithSale: {
            currency: "$",
            amount: "60.00"
        }
    },
    {
        name: "Women's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: woman3Img,
        rating: 3
    },
    {
        name: "Women's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: woman4Img,
        rating: 4
    },
    {
        name: "Women's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: woman5Img,
        rating: 5
    }, {
        name: "Women's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: woman6Img,
        rating: 4
    },
    {
        name: "Women's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: woman7Img,
        rating: 4
    },
    {
        name: "Women's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: woman8Img,
        rating: 4
    },
]

const mensClothes: TClothesItem[] = [
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: man1Img,
        rating: 4
    },
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: man2Img,
        rating: 4
    },
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: man3Img,
        rating: 4
    },
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: man4Img,
        rating: 4
    },
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: man5Img,
        rating: 4
    }, {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: man6Img,
        rating: 4
    },
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: man7Img,
        rating: 4
    },
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: man8Img,
        rating: 4
    },
]

const relatedProducts: TClothesItem[] = [
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: related1Img,
        rating: 4
    },
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: related2Img,
        rating: 4
    },
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: related3Img,
        rating: 4
    },
    {
        name: "Men's tracksuit Q109",
        price: {
            currency: "$",
            amount: "30.00"
        },
        image: related4Img,
        rating: 4
    },
]

export {
    GENERAL_STAR_COUNT,
    womensClothes,
    mensClothes,
    relatedProducts
}