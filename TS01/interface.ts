interface offer {
    readonly _id: string,
    promo_code: string,
    email: string,
    discount?: number,
    getPromo(): number,
    showOffers: ()=> string
}


const newOffer: offer = {_id: "1111", promo_code: "early10", email: "js@mail.com", discount: 10, getPromo: () => 1111, showOffers: ()=> {return "tesing"}}


console.log(newOffer);