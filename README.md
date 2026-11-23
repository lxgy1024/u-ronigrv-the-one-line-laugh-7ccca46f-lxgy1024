# The One-Line Laugh

[![u-ronigrv-the-one-line-laugh-7ccca46f](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/lxgy1024/u-ronigrv-the-one-line-laugh-7ccca46f-lxgy1024/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f/leaderboard)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/lxgy1024/u-ronigrv-the-one-line-laugh-7ccca46f-lxgy1024/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

An entry for the [The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f) bounty on [make.fun](https://make.fun/r/s7zff8f6).

## What it does

`main.ts` writes one funny line — a single sentence of at most 200 characters — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when that variable is unset). The line is fixed, so the program is fully deterministic: two runs write byte-identical output. Before writing, it checks the line against the competition's gate (1–200 characters, not only white space, a single sentence).

The line:

> I bought a smartwatch to get fit, and now the only thing it tracks reliably is how often I ignore it.

## Run

```sh
node main.ts
```

Requires Node 22 or later. No dependencies, no network.

## License

MIT — see [LICENSE](LICENSE).
