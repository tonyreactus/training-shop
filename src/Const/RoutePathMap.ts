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
    [ERoutePath.faqs]: "/faqs",
    [ERoutePath.termsAndConditions]: "/termsAndConditions",
    [ERoutePath.returnsAndExchanges]: "/returnsAndExchanges",
    [ERoutePath.shippingAndDelivery]: "/shippingAndDelivery",
    [ERoutePath.privacyPolicy]: "/privacyPolicy",
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
    [ERoutePath.faqs]: "FAQs",
    [ERoutePath.termsAndConditions]: "Terms & Conditions",
    [ERoutePath.returnsAndExchanges]: "Returns & Exchanges",
    [ERoutePath.shippingAndDelivery]: "Shipping & Delivery",
    [ERoutePath.privacyPolicy]: "Privacy Policy",
}

export {
    RoutePathMap,
    RoutePathTitleMap
}