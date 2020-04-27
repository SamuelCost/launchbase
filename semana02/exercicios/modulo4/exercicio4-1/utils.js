module.exports = {
    age: function(timestamp){
        const dateActual = new Date()
        const birth = new Date(timestamp)

        let year = dateActual.getFullYear() - birth.getFullYear()
        const month = dateActual.getMonth() - birth.getMonth()


        if (month < 0 || month == 0 && dateActual.getDate() < birth.getDate()){
            year = year - 1
        }

        return year
    },

    graduation: function(formation){
        let grad = ""

        if (formation === "medio"){
            grad = "Ensino Médio Completo"
        } else {
            if (formation === "superior"){
                grad = "Ensino Superior Completo"
            } else {
                if (formation === "mestrado"){
                    grad = "Mestrado"
                } else {
                    if (formation === "doutorado"){
                        grad = "Doutorado"
                    }
                }
            }
        }

        return grad
    },

    type: function(type){
        let classType = ""

        if (type === "adistancia"){
            classType = "À Distancia"
        } else {
            classType = "Presencial"
        }

        return classType
    },

    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}