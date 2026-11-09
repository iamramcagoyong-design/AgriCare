# AgriCare (single-page app, no backend)

Plain JavaScript, ES modules, MVC. Data lives in the model and localStorage.

## Run it
Open the folder in VS Code and use **Live Server** on `index.html`
(ES modules do not work when you double-click the file, so use a server).
Or run `npx serve` / `python -m http.server` in this folder.

## Where things are
| Layer | Files | Rule |
|---|---|---|
| Model | `js/model.js` (+ `js/data.js` sample data) | One exported `state` object, functions that change it, saves/loads localStorage. Never touches the DOM or imports a view. |
| Views | `js/views/*.js` (all extend `View`) | Build markup from the data they are given, expose `onX(handler)` methods. Never change `state` or import the model. |
| Controller | `js/controller.js` | Imports model and views, wires every action to a model change and a re-render. Builds no HTML. |

Views: TabView, FilterView, CardListView, DetailView, CompareView, FormView, ManageListView, CalculatorView.

## Features
1. Browse, search, filter, view details and compare diseases.
2. Add, edit and delete diseases (form with validation errors shown by FormView).
3. Disease incidence calculator (derived value recomputed as you type).

`js/views/View.js` is a stand-in base class: replace it with your Week 5 `View.js` if the method names differ.
