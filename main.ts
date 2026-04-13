// Minecraft Education — Серия уроков по агенту
// Этот файл содержит объединённый финальный код всех 4 уроков
// Каждый урок можно открыть по отдельной ссылке (см. README ниже)

// === УРОК 1: Агент идёт вперёд ===
player.onChat("вперёд", function () {
    agent.move(FORWARD, 5)
})

// === УРОК 2: Агент строит стену ===
player.onChat("стена", function () {
    agent.setItem(STONE, 64, 1)
    loops.repeat(6, function () {
        agent.place(FORWARD)
        agent.move(RIGHT, 1)
    })
})

// === УРОК 3: Пульт управления ===
player.onChat("назад", function () {
    agent.move(BACK, 3)
})
player.onChat("лево", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("право", function () {
    agent.turn(TurnDirection.Right)
})
player.onChat("домой", function () {
    agent.teleportToPlayer()
})
player.onChat("шаг", function (num1) {
    agent.move(FORWARD, num1)
})

// === УРОК 4: Квадрат ===
player.onChat("квадрат", function () {
    agent.setItem(WOOL, 64, 1)
    loops.repeat(4, function () {
        loops.repeat(5, function () {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        })
        agent.turn(TurnDirection.Right)
    })
})
