// STRETCH
const cars = [
  {
    vin: '1HGCD5657TA006640',
    make: 'toyota',
    model: 'prius',
    mileage: 215000,
    title: 'clean',
    transmission: 'manual',
  },
  {
    vin: 'LJ46258S8XC687114',
    make: 'toyota',
    model: 'corolla',
    mileage: 115000,
    title: 'salvage',
  },
  {
    vin: '4T1BK36B78U269772',
    make: 'ford',
    model: 'focus',
    mileage: 15000,
  },
]

// exports.seed = function (knex) {
//   return knex('cars')
//     .truncate().then(() => {
//       return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}