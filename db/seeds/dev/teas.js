const teaData = require('../../../teaData');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const createTea = async(knex, tea) => {
  const newTea = await knex('teas').insert({
    id: tea.id,
    name: tea.name,
    slug: tea.slug,
    image: tea.image,
    origin: tea.origin,
    type: tea.type,
    caffeine: tea.caffeine,
    caffeineLevel: tea.caffeineLevel,
    description: tea.description,
    colorDescription: tea.colorDescription,
    tasteDescription: tea.tasteDescription
  })
  return newTea
}

exports.seed = async (knex) => {
  try {
    await knex('teas').del();
    
    let teaPromises = teaData.map(tea => {
      return createTea(knex, tea);
    });

    return Promise.all(teaPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  } 
};

// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   try {
//   await knex('teas').del()
//   await knex('teas').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
//   } catch (error) {
//     console.log(`Error seeding data: ${error}`);
//   }
// };
