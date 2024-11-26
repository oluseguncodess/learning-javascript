const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = true
            
            if (preHeatOven) {
                resolve("Preheat oven to 180deg")
            } else {
                reject("Task failed!")
            }
        }, 1000);
    })
}

const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addchoco = true
            
            if (addchoco) {
                resolve("Place burger and chocolate chips, stir until melted and smooth")
            } else {
                reject("Task failed!")
            }
        }, 1000);
    })
}

const addFlourCocoaAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addSaltFlour = true
            
            if (addSaltFlour) {
                resolve("Add flour, cocoa and salt and stir until smooth")
            } else {
                reject("Task failed!")
            }
        }, 1000);
    })
}

const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixture = true
            
            if (bakeMixture) {
                resolve("Bake for 24 minutes for perfection")
            } else {
                reject("Task failed!")
            }
        }, 1000);
    })
}