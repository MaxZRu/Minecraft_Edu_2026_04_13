# Урок 3: Пульт управления агентом

## Создаём пульт управления @showdialog

Ты уже умеешь двигать агента **одной** командой.

В этом уроке мы сделаем **5 команд** — настоящий пульт дистанционного управления!

После урока ты сможешь управлять агентом прямо из чата Minecraft как джойстиком.

## Шаг 1 — Вперёд и назад

Добавим первые две команды: **"вперёд"** и **"назад"**.

Каждая команда — это отдельный блок ``||player:on chat command||``.

Они работают одновременно — можно добавить сколько угодно команд!

```blocks
// @highlight
player.onChat("вперёд", function () {
    agent.move(FORWARD, 3)
})
// @highlight
player.onChat("назад", function () {
    agent.move(BACK, 3)
})
```

## Шаг 2 — Повороты

Агент поворачивается блоком ``||agent:agent turn||``.

Добавляем команды **"лево"** и **"право"** для поворотов.

```blocks
player.onChat("вперёд", function () {
    agent.move(FORWARD, 3)
})
player.onChat("назад", function () {
    agent.move(BACK, 3)
})
// @highlight
player.onChat("лево", function () {
    agent.turn(TurnDirection.Left)
})
// @highlight
player.onChat("право", function () {
    agent.turn(TurnDirection.Right)
})
```

## Шаг 3 — Кнопка "домой"

Когда агент ушёл далеко — его трудно найти.

Блок ``||agent:agent teleport to player||`` мгновенно возвращает агента к тебе!

```blocks
player.onChat("вперёд", function () {
    agent.move(FORWARD, 3)
})
player.onChat("назад", function () {
    agent.move(BACK, 3)
})
player.onChat("лево", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("право", function () {
    agent.turn(TurnDirection.Right)
})
// @highlight
player.onChat("домой", function () {
    agent.teleportToPlayer()
})
```

## Шаг 4 — Умная команда с числом

Сделаем особую команду: **"шаг 10"** — агент пройдёт ровно 10 блоков.

Число после команды автоматически попадает в переменную **num1**.

Попробуй написать в чате: `шаг 5`, `шаг 20`, `шаг 1`

```blocks
player.onChat("вперёд", function () {
    agent.move(FORWARD, 3)
})
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
// @highlight
player.onChat("шаг", function (num1) {
    agent.move(FORWARD, num1)
})
```

## Шаг 5 — Тестируем пульт управления

Нажми **Play** и управляй агентом в Minecraft:

Напиши в чат:
- `вперёд` — агент идёт вперёд на 3
- `назад` — агент идёт назад на 3
- `лево` — поворот налево
- `право` — поворот направо
- `домой` — агент телепортируется к тебе
- `шаг 10` — агент идёт вперёд на 10

```blocks
player.onChat("вперёд", function () {
    agent.move(FORWARD, 3)
})
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
```

## Пульт готов! @showdialog

Ты создал полноценный **пульт управления** роботом!

**Что ты узнал:**
- Несколько команд `on chat command` работают одновременно
- `agent teleport to player` — быстрый возврат агента
- `num1` в команде — число которое ты пишешь в чате

**Попробуй добавить:**
- Команду `"вверх"` — `agent.move(UP, 1)`
- Команду `"вниз"` — `agent.move(DOWN, 1)`

**Следующий урок:** Агент рисует квадрат →
`https://minecraft.makecode.com/#tutorial:github:MaxZRu/Minecraft_Edu_2026_04_13/tutorial-04-agent-square`
