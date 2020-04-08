const user = [
    { name: "Samuel", technologys: ["HTML", "CSS"] },
    { name: "Jasmine", technologys: ["JavaScript", "CSS"] },
    { name: "Tuane", technologys: ["HTML", "Node.js"] }
]

for (let i = 0; i < user.length; i++) {
    let text = ""

    for (let j = 0; j < (user[i].technologys.length) - 1; j++) {
        text = text + user[i].technologys[j] + ", "
    }

    text = text + user[i].technologys[user[i].technologys.length - 1] + "."
    console.log(`${user[i].name} trabalha com ${text}`)
}

function checksIfUserUsesCss(user) {
    const ver = 0

    for (let j = 0; j < user.technologys.length; j++) {
        if (user.technologys[j] === "CSS") {
            return true;
        }
    }

    return false
}

for (let i = 0; i < user.length; i++) {
    const userWorksWithCSS = checksIfUserUsesCss(user[i]);

    if (userWorksWithCSS === true) {
        console.log(`O usuário ${user[i].name} trabalha com CSS`);
    } else {
        console.log(`O usuário ${user[i].name} não trabalha com CSS`)
    }
}