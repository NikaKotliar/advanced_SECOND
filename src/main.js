/* eslint-disable */
let result = []

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
        }
    ]
}


function getAttackOptions({ special } = obj) {
    let resultArray = []
    for (let { id, name, icon = "Описание недоступно", description = "Описание недоступно" } of special) {

        resultArray.push(id, name, icon, description)
    }
    return resultArray
}

console.log(getAttackOptions(character))

export { character, getAttackOptions }