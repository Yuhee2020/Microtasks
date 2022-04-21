import {BuildingsType, CityType, HousesType} from "../02objects/02_02";

export const addMoneyToBudget=(building: BuildingsType, budget: number)=>{
    building.budget+= budget


}
export const repairHouse=(houseType: HousesType)=>{
    houseType.repaired= true

}
export const toFireStaff=(building:BuildingsType, staff: number)=>{
    building.staffCount-=staff
}

export const toHireStaff=(building: BuildingsType, staff: number)=>{
    building.staffCount+=staff
}