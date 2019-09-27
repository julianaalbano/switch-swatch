const db = require('../server/db');
const { Color, Category } = require('../server/db/models');
const massColorListing = require('./massColorListing');

async function seed() {
  await db.sync({ force: true, logging: false });
  console.log('db synced!');

  const categories = await Promise.all([
    Category.create({ name: 'Red' }),
    Category.create({ name: 'Orange' }),
    Category.create({ name: 'Yellow' }),
    Category.create({ name: 'Green' }),
    Category.create({ name: 'Blue' }),
    Category.create({ name: 'Purple' }),
    Category.create({ name: 'Brown' }),
    Category.create({ name: 'Gray' }),
  ]);

  console.log(`seeded ${categories.length} color categories`);

  const colors = await Promise.all(
    massColorListing.map(color => Color.create(color))
  );

  console.log(`seeded ${colors.length} individual colors`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

runSeed();

module.exports = seed;
