# Maths Professional Learning Modules K–6

Interactive professional learning modules for the NSW *Mathematics K–10 Syllabus (2022)*. Each module follows one focus area from Early Stage 1 to Stage 3: the progression of outcomes, teacher content knowledge, misconceptions, NESA teaching advice, Working mathematically task makeovers, a hands-on model for each stage, quizzes and reflection prompts.

The modules are designed to be embedded in a Google Site.

## Modules

| Module | Folder | Status |
| --- | --- | --- |
| Representing numbers | `modules/representing-numbers/` | Ready |
| Additive relations (incl. Combining and separating quantities) | `modules/additive-relations/` | Ready |
| Multiplicative relations (incl. Forming groups) | `modules/multiplicative-relations/` | Ready |
| Fractions (Partitioned fractions and Representing quantity fractions) | `modules/fractions/` | Ready |
| Geometric measure | `modules/geometric-measure/` | Ready |
| Two-dimensional spatial structure | `modules/two-dimensional-spatial-structure/` | Ready |
| Three-dimensional spatial structure | `modules/three-dimensional-spatial-structure/` | Ready |
| Non-spatial measure | `modules/non-spatial-measure/` | Ready |
| Data | `modules/data/` | Ready |
| Chance (incl. Early Stage 1 Data foundations) | `modules/chance/` | Ready |

## How it's organised

```
index.html                 Landing page linking every module
engine/
  module.css               Shared design (all modules)
  module.js                Shared behaviour: navigation, progress, flip cards,
                           quizzes, makeovers, sorter, reflections
modules/<name>/
  index.html               Page shell (title only; loads the files below)
  content.js               All the content for this focus area (the M config + data)
  tools.js                 The four stage tools for this focus area + wireTool()
  tools.css                Styles for those tools
scripts/build_single.py    Builds single-file copies into dist/ (for paste-in embedding)
dist/                      Built single-file copies
```

A change to `engine/` updates every module. A change to a module's `content.js` affects only that module.

Load order in each module page matters: `content.js`, then `tools.js`, then `engine/module.js`.

## Publishing with GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. After a minute or two the site is live at
   `https://thomask04-dotcom.github.io/professional-learning-modules/`

Module addresses:

- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/representing-numbers/`
- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/additive-relations/`
- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/multiplicative-relations/`
- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/fractions/`
- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/geometric-measure/`
- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/two-dimensional-spatial-structure/`
- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/three-dimensional-spatial-structure/`
- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/non-spatial-measure/`
- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/data/`
- `https://thomask04-dotcom.github.io/professional-learning-modules/modules/chance/`

The published site is public to anyone with the link.

## Embedding in Google Sites

**Recommended (by URL):** Insert → Embed → **By URL**, paste the module address, choose **Whole page**, then drag the embed to full width and about 900px tall. Updates pushed to GitHub appear automatically.

**Fallback (paste code):** run `python3 scripts/build_single.py`, open `dist/<module>.html`, copy everything, then Insert → Embed → **Embed code**. You'll need to re-paste after each update.

Test on a school device first: some networks filter `github.io`.

## Adding a new module

1. Copy an existing module folder, for example `modules/multiplicative-relations/`, to `modules/<new-name>/`.
2. Update the title and eyebrow in `index.html`.
3. Replace `content.js`:
   - `M`: module text (welcome, big ideas intro, shifts between stages, model tips, sorter roots, footer). Give it a new `key` so saved progress doesn't clash with other modules.
   - `STAGES`: focus area names for each stage.
   - `STAGE_CONTENT`: per stage — lead, outcomes, content headings and points, teacher knowledge, misconceptions (`src`: `"n"` NESA, `"d"` diocesan PL slides, `"a"` additional commentary), advice, vocabulary, quick check, `tool` name and quiz.
   - `IDEAS`, `ASPECTS`, `MODELS`, `ROOTS`, `SCENARIOS`, `PROMPTS`, `TODOS`, `WM` (reasoning tags and task makeovers), `CLOSED` (makeover practice). A stage's `WM` entry can include `tagsLead` to replace the default sentence above its reasoning tags (used in Fractions, where Early Stage 1 and Stage 1 have no fractions outcomes).
4. Write four tools in `tools.js`: `toolHTML(name)` returns each tool's markup, and `wireTool(name)` attaches its behaviour. Put their styles in `tools.css`.
5. Add a card to the landing page `index.html` and a row to the table above.
6. Run `python3 scripts/build_single.py` to refresh `dist/`.

## Sources

Content is drawn from the NESA *Mathematics K–10 Syllabus (2022)* outcomes and content, the NESA syllabus support teaching advice, the NESA additional teaching advice where relevant, and (for Multiplicative relations, Fractions and Two-dimensional spatial structure) Catholic Education Diocese of Wollongong PL slides. Each module marks which items come from which source; items marked "Additional commentary" are common classroom observations.
