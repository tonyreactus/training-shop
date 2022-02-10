import { ERoutePath } from "./ERoutePath"

const RoutePathMap: Record<ERoutePath, string> = {
    [ERoutePath.main]: "/",
    [ERoutePath.aboutUs]: "/aboutUs",
    [ERoutePath.women]: "/women",
    [ERoutePath.men]: "/men",
    [ERoutePath.beauty]: "/beauty",
    [ERoutePath.accessories]: "/accessories",
    [ERoutePath.blog]: "/blog",
    [ERoutePath.contact]: "/contact",
}

const RoutePathTitleMap: Record<ERoutePath, string> = {
    [ERoutePath.main]: "Main",
    [ERoutePath.aboutUs]: "About Us",
    [ERoutePath.women]: "Women",
    [ERoutePath.men]: "Men",
    [ERoutePath.beauty]: "Beauty",
    [ERoutePath.accessories]: "Accessories",
    [ERoutePath.blog]: "Blog",
    [ERoutePath.contact]: "Contact",
}

export {
    RoutePathMap,
    RoutePathTitleMap
}