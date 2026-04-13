# Урок 4: Агент рисует квадрат

## Рисуем фигуры кодом @showdialog

В этом уроке агент нарисует **квадрат** из блоков на земле.

Квадрат — это 4 стороны. Агент должен:
1. Пройти вперёд
2. Повернуть направо
3. ...и так 4 раза!

Мы используем цикл ``||loops:repeat||`` — он повторяет код нужное количество раз.

## Шаг 1 — Готовим агента

Дадим агенту блоки для рисования.

Блок `WOOL` (шерсть) хорошо видно на земле — отлично подходит для рисования!

```blocks
// @highlight
agent.setItem(WOOL, 64, 1)
```

## Шаг 2 — Агент оставляет след

Агент будет ставить блоки **под собой** пока идёт.

Добавь ``||agent:agent place down||`` — блок под ноги, и ``||agent:agent move forward by 1||`` — один шаг вперёд.

```blocks
agent.setItem(WOOL, 64, 1)
// @highlight
agent.place(DOWN)
// @highlight
agent.move(FORWARD, 1)
```

## Шаг 3 — Одна сторона квадрата

Один блок — это мало. Нужна **линия** из 5 блоков.

Оберни оба блока в ``||loops:repeat 5 times||`` — и они повторятся 5 раз подряд!

```blocks
agent.setItem(WOOL, 64, 1)
// @highlight
loops.repeat(5, function () {
    agent.place(DOWN)
    agent.move(FORWARD, 1)
})
```

## Шаг 4 — Поворот на углу

После каждой стороны агент должен **повернуть направо** чтобы начать следующую.

Добавь ``||agent:agent turn right||`` **после** цикла (снаружи, не внутри!).

```blocks
agent.setItem(WOOL, 64, 1)
loops.repeat(5, function () {
    agent.place(DOWN)
    agent.move(FORWARD, 1)
})
// @highlight
agent.turn(TurnDirection.Right)
```

## Шаг 5 — Повторяем 4 стороны

Одна сторона + поворот — это нужно сделать **4 раза** (квадрат = 4 стороны).

Оберни весь код (цикл + поворот) в ещё один ``||loops:repeat 4 times||``!

```blocks
agent.setItem(WOOL, 64, 1)
// @highlight
loops.repeat(4, function () {
    loops.repeat(5, function () {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    })
    agent.turn(TurnDirection.Right)
})
```

## Шаг 6 — Добавляем команду и запускаем

Оборачиваем всё в команду **"квадрат"** из чата.

```blocks
// @highlight
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
```

## Шаг 7 — Проверяем!

Нажми **Play**, поставь агента на ровное место в Minecraft.

Напиши в чат: `квадрат`

Посмотри сверху — агент должен нарисовать квадрат 5×5 блоков!

```blocks
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
```

## Художник готов! @showdialog

Ты написал программу с **циклом внутри цикла** — это называется вложенные циклы!

**Что ты узнал:**
- `agent place DOWN` — кладёт блок под ноги агента
- Цикл внутри цикла — для рисования фигур
- Квадрат = 4 стороны × (5 шагов + поворот)

**Попробуй улучшить:**
- Измени `5` на `10` — квадрат станет больше
- Замени `WOOL` на `GOLD_BLOCK` — золотой квадрат!
- Попробуй сделать **треугольник**: 3 стороны, поворот на 120° (используй `agent.turn` 2 раза для 120°)

**Ты прошёл все 4 урока — молодец!**
