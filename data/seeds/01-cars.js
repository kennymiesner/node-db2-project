// // STRETCH
// const cars = [
//   {
//     vin: '12345678901234567',
//     make: 'toyota',
//     model: 'prius',
//     mileage: 215000,
//     title: 'clean',
//     transmission: 'manual',
//   },
//   {
//     vin: '23456789012345678',
//     make: 'toyota',
//     model: 'corolla',
//     mileage: 115000,
//     title: 'salvage',
//   },
//   {
//     vin: '34567890123456789',
//     make: 'ford',
//     model: 'focus',
//     mileage: 15000,
//   },
// ]

// // exports.seed = function (knex) {
// //   return knex('cars')
// //     .truncate().then(() => {
// //       return knex('cars').insert(cars)
// //     })
// // }

// exports.seed = async function (knex) {
//   await knex('cars').truncate()
//   await knex('cars').insert(cars)
// }