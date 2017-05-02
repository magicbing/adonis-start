'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Route.on('/').render('welcome')
// Route.on('/').render('home')
Route.get('/', 'PostsController.index')

Route.on('/about').render('about')
Route.on('/contact').render('contact')

Route.get('posts/create', 'PostsController.create')
Route.post('posts', 'PostsController.store')

Route.get('posts/:id', 'PostsController.show')

Route.get('json', 'PostsController.json')

Route.on('/test').render('test')
// Route.any('*', function * (request, response) {
//   yield response.sendView('test')
// })
