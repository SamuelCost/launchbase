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

        return {
            day,
            month,
            year,
            birthDay: `${day}/${month}`,
            iso: `${year}-${month}-${day}`,
            format: `${day}-${month}-${year}`
        }
    },

    grade: function(teach){
        let teaching = ""

        if (teach == "5af"){
            teaching = "5° Ano - Ensino Fundamental"
        }else{
            if (teach == "6af"){
                teaching = "6° Ano - Ensino Fundamental"
            }else{
                if (teach == "7af"){
                    teaching = "7° Ano - Ensino Fundamental"
                }else{
                    if (teach == "8af"){
                        teaching = "8° Ano - Ensino Fundamental"
                    }else{
                        if (teach == "9af"){
                            teaching = "9° Ano - Ensino Fundamental"
                        }else{
                            if (teach == "1am"){
                                teaching = "1° Ano - Ensino Médio"
                            }else{
                                if (teach == "2am"){
                                    teaching = "2° Ano - Ensino Médio"
                                }else{
                                    if (teach == "3am"){
                                        teaching = "5° Ano - Ensino Médio"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return teaching
    },

    gender: function(gen) {
        let gender = ""
        
        if (gen == "M") {
            gender = "Masculino"
        } else {
            if (gen == "F") {
                gender = "Feminino"
            }
        }

        return gender
    }
}