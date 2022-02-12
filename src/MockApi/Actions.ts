import searchImg from "../Assets/Images/search.svg";
import browserImg from "../Assets/Images/browser.svg";
import cartImg from "../Assets/Images/cart.svg";
import personImg from "../Assets/Images/person.svg";

type TAction = {
    name: string,
    image: string
}

const actions: TAction[] = [
    {
        name: "search",
        image: searchImg
    },
    {
        name: "browser",
        image: browserImg
    },
    {
        name: "person",
        image: personImg
    },
    {
        name: "cart",
        image: cartImg
    }
]

export { actions }