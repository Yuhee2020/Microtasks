export type CityType={
    title: string
    houses:Array<HousesType>
    governmentBuildings:Array<BuildungsType>
    citizensNumber: number
}

type BuildungsType={
    type:string
    budget: number
    staffCount: number
    address:AddressType2
}

type AddressType2={

    street:StreetType
}

type HousesType={
    buildedAt: number
    repaired: boolean
    address:AddressType
}

type AddressType={
    number: number
    street:StreetType
}

type StreetType={

    title: string
}