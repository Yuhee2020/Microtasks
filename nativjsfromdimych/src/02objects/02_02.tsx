export type CityType={
    title: string
    houses:Array<HousesType>
    governmentBuildings:Array<BuildingsType>
    citizensNumber: number
}

export type BuildingsType={
    type:string
    budget: number
    staffCount: number
    address:AddressType2
}

export type AddressType2={

    street:StreetType
}

export type HousesType={
    buildedAt: number
    repaired: boolean
    address:AddressType
}

export type AddressType={
    number: number
    street:StreetType
}

export type StreetType={

    title: string
}