const age = [18, 20, 30, 50, 90, 100, 5,]

export const oldAges = age.filter(el => el > 10)
    .filter(el => el < 50)

