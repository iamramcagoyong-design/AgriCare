# AgriCare (MVC, Node.js + vanilla JS, no database)

Run:  npm install  then  npm start  ->  http://localhost:3000
Admin: http://localhost:3000/admin.html  (default password: agricare123, change with ADMIN_PASSWORD)

## MVC layout
Backend
- models/diseaseModel.js        MODEL      JSON-file storage + validation
- controllers/diseaseController CONTROLLER handles requests, uses the model
- routes/diseaseRoutes.js       ROUTES     URL -> controller
- middleware/                   auth + image upload
- server.js                     starts the app

Frontend (public/js)
- model.js, adminModel.js       MODEL      data, filters, compare list, API calls
- views/                        VIEW       CardView, DetailView, CompareView, CompareBarView, FilterView, AdminViews
- controller.js, adminController.js  CONTROLLER  connects model and views
- main.js, adminMain.js         entry points loaded by the pages
