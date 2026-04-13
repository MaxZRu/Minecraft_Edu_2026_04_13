# Урок 2: Агент строит стену

## Что будем строить @showdialog

В этом уроке ты научишь агента **строить стену** из каменных блоков!

Главный новый концепт — **цикл**. Это когда один и тот же код повторяется много раз автоматически.

В конце урока агент сам построит ровную стену из 6 блоков.

## Шаг 1 — Даём агенту блоки

Агент строит из блоков своего **инвентаря**. Сначала нужно его заполнить.

Блок ``||agent:agent set item stone 64 at slot 1||`` кладёт 64 каменных блока в слот 1 агента.

```blocks
// @highlight
agent.setItem(STONE, 64, 1)
```

## Шаг 2 — Агент ставит один блок

Теперь скажем агенту поставить блок **прямо перед собой**.

Добавь ``||agent:agent place forward||`` после блока с предметами.

```blocks
agent.setItem(STONE, 64, 1)
// @highlight
agent.place(FORWARD)
```

## Шаг 3 — Сдвигаемся вправо

После того как блок поставлен — агент должен сдвинуться вправо на 1 клетку, чтобы поставить следующий блок рядом.

Добавь ``||agent:agent move right by 1||``.

```blocks
agent.setItem(STONE, 64, 1)
agent.place(FORWARD)
// @highlight
agent.move(RIGHT, 1)
```

## Шаг 4 — Делаем это 6 раз

Ставим блок, сдвигаемся... ставим блок, сдвигаемся... Это нужно повторить **6 раз**.

Вместо того чтобы писать блоки 6 раз — используем ``||loops:repeat 6 times||``!

Перемести оба блока (`place` и `move`) **внутрь** цикла.

```blocks
agent.setItem(STONE, 64, 1)
// @highlight
loops.repeat(6, function () {
    agent.place(FORWARD)
    agent.move(RIGHT, 1)
})
```

## Шаг 5 — Добавляем команду из чата

Обернём всё в команду ``||player:on chat command "стена"||``.

Теперь стройка начнётся только когда ты напишешь **"стена"** в чат.

```blocks
// @highlight
player.onChat("стена", function () {
    agent.setItem(STONE, 64, 1)
    loops.repeat(6, function () {
        agent.place(FORWARD)
        agent.move(RIGHT, 1)
    })
})
```

## Шаг 6 — Строим!

Нажми **Play**, встань рядом с агентом в Minecraft и напиши в чат: `стена`

Агент должен построить ровную стену из 6 блоков вправо!

```blocks
player.onChat("стена", function () {
    agent.setItem(STONE, 64, 1)
    loops.repeat(6, function () {
        agent.place(FORWARD)
        agent.move(RIGHT, 1)
    })
})
```

## Строитель готов! @showdialog

Отличная работа! Ты использовал **цикл** — один из важнейших инструментов программирования.

**Что ты узнал:**
- `agent set item` — наполняет инвентарь агента
- `agent place` — ставит блок
- `repeat N times` — повторяет код N раз

**Попробуй улучшить:**
- Измени `STONE` на `GOLD_BLOCK` — золотая стена!
- Измени `6` на `12` — стена в два раза длиннее
- Добавь команду `"снести"` которая ломает стену (`agent.destroy(FORWARD)`)

**Следующий урок:** Пульт управления агентом →
`https://minecraft.makecode.com/#tutorial:github:MaxZRu/Minecraft_Edu_2026_04_13/tutorial-03-chat-commands`
