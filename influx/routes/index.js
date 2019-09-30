// 'use strict'

// const version = 'v1'
// const code = 'api'
// // Assemble all resources into an array
// const resources = ['measuring', 'bonus']
// // Import resources here
// const middleware = {}
// const controller = {}
// const path = {}
// resources.forEach( resource => {
//   middleware[resource] = require('../middlewares')[resource]
//   controller[resource] = require('../controllers')[resource]
//   path[resource] = `/${version}/${code}/${resource}`
// })

// module.exports = (app) => {
//   // Iterate and register all resources
//   resources.forEach(resource => {
//     if (middleware[resource]) {
//       if (middleware[resource].create &&
//         controller[resource].create) {
//           app.post(path[resource],
//             middleware[resource].create,
//             controller[resource].create)
//       }

//       if (middleware[resource].update &&
//         controller[resource].update) {
//         app.put(path[resource],
//           middleware[resource].update,
//           controller[resource].update)
//       }
//     }

//     // Retrieve & Delete
//     if (controller[resource].retrieve) {
//       app.get(path[resource],
//         controller[resource].retrieve)
//     }

//     if (controller[resource].delete) {
//       app.delete(path[resource],
//         controller[resource].delete)
//     }
//   })
// }

'use strict'

// Import resources here
const measuring = require('./measuring')
const bonus = require('./bonus')
const bloodpressure = require('./bloodpressure')
const coordinate = require('./coordinate')

module.exports = (app) => {
  // Assemble all resources into an array
  const resources = [
    measuring,
    bonus,
    bloodpressure,
    coordinate,
  ]

  // Iterate and register all resources
  resources.forEach(resource => {
    if (resource.middleware) {
      if (resource.middleware.create && resource.controller.create) {
        app.post(resource.path, resource.middleware.create, resource.controller.create)
      }
      if (resource.middleware.update && resource.controller.update) {
        app.put(resource.path, resource.middleware.update, resource.controller.update)
      }
      if (resource.middleware.retrieve && resource.controller.retrieve) {
        app.get(resource.path, resource.middleware.retrieve, resource.controller.retrieve)
      }
    }

    // Retrieve & Delete
    if (resource.controller.retrieve) {
      app.get(resource.path,
        resource.controller.retrieve)
    }

    if (resource.controller.delete) {
      app.delete(resource.path,
        resource.controller.delete)
    }
  })
}
