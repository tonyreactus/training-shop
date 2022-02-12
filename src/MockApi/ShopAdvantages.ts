import carImg from "../Assets/Images/car.svg";
import returnImg from "../Assets/Images/return.svg";
import supportImg from "../Assets/Images/support.svg"

type TShopAdvantage = {
    name: string,
    description: string,
    image: string
}

const shopAdvanteges: TShopAdvantage[] = [
    {
        name: "Free shipping",
        description: "On all UA order or order above $100",
        image: carImg
    },
    {
        name: "30 days return",
        description: "Simply return it within 30 days for an exchange",
        image: returnImg
    },
    {
        name: "Support 24/7",
        description: "Contact us 24 hours a day, 7 days a week",
        image: supportImg
    }
]

export { shopAdvanteges }