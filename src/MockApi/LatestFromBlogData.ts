
import blog1Img from "../Assets/Images/blog1.svg";
import blog2Img from "../Assets/Images/blog2.svg";
import blog3Img from "../Assets/Images/blog3.svg"

type TLatestFromBlogItem = {
    name: string,
    description: string,
    image: string
}

const latestFromBlogData: TLatestFromBlogItem[] = [
    {
        name: "The easiest way to break",
        description: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
        image: blog1Img
    },
    {
        name: "Wedding season",
        description: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
        image: blog2Img
    },
    {
        name: "Recent favorites on repeat",
        description: "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
        image: blog3Img
    },
]

export { latestFromBlogData }