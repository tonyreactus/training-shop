import { EClothesRoutePath } from "./EClothesRoutePath"

const createClothesRoutePathMap = (type: "women" | "men"): Record<EClothesRoutePath, string> => ({
    [EClothesRoutePath.newArrivals]: `/${type}/newArrivals`,
    [EClothesRoutePath.specials]: `/${type}/specials`,
    [EClothesRoutePath.bestSellers]: `/${type}/bestSellers`,
    [EClothesRoutePath.mostViewed]: `/${type}/mostViewed`,
    [EClothesRoutePath.featuredProducts]: `/${type}/featuredProducts`
})

const ClothesRoutePathTitleMap: Record<EClothesRoutePath, string> = {
    [EClothesRoutePath.newArrivals]: "New arrivals",
    [EClothesRoutePath.specials]: "Specials",
    [EClothesRoutePath.bestSellers]: "Best sellers",
    [EClothesRoutePath.mostViewed]: "Most viewed",
    [EClothesRoutePath.featuredProducts]: "Featured products",
}

export {
    createClothesRoutePathMap,
    ClothesRoutePathTitleMap
}