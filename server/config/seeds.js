const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Apparel' }, // clothing items like scarves, socks, shirts, dresses
        { name: 'Accessories' }, // things like pins, glasses, belts
        { name: 'Bags' }, // clutches, purses, totes
        { name: 'Beauty' }, // skincare and makeup products
        { name: 'Home Deco' } // pillows, blankets, candles, lights, etc
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Dog Pack Chambray Bandana in Vintage Red',
            description:
                `Protectors of the spirit -- a guardian symbol for your life & home

                Hang on the wall, tie around your neck, tuck in a back pocket on your trails. Hand printed on black chambray & vintage red cotton with serged contrast hem.
                
                Details:
                
                ∙ Vintage Red: 100% Cotton // Black: 100% Cotton Slub Chambray 
                ∙ Approx. 21.5" square`,
            origin: `Made in the USA, by Eradura // Hand Printed by Noisy Neighbors Print`,
            image: 'dogpack-red00-220x.jpg',
            category: categories[0]._id,
            price: 28.00,
            quantity: 15
        },
        {
            name: 'Baja Loreto 2.0',
            description:
                `Woven and Sewn Palm handmade by artisans in Mexico. Its traditional fedora style crown with a relatively short brim. The custom piping consisting of discarded and up-cycled fabric.

                100% Palm
                
                3” brim`,
            origin: `Made in Mexico`,
            image: 'bajaloreto00-540x.jpg',
            category: categories[0]._id,
            price: 70.00,
            quantity: 5
        },
        {
            name: 'Fearless Femme Pink Glitter Pin',
            category: categories[1]._id,
            description:
                `1.25" wide hard enamel pin, gold metal filled with pink glitter, paired with a backing card and sealed in a clear sleeve.`,
            origin: `N/A`,
            image: 'fearlessfemmes00-360x.jpg',
            price: 11.00,
            quantity: 20
        },
        {
            name: 'Girls Unite Pin',
            category: categories[1]._id,
            description:
                `1.35" wide hard enamel pin in rose gold metal with white and rose inks, paired with a backing card and sealed in a clear sleeve`,
            origin: `N/A`,
            image: 'girlsunite00-360x.jpg',
            price: 12.00,
            quantity: 5
        },
        {
            name: `Shit Doesn’t Have To Make Sense Pin`,
            category: categories[1]._id,
            description:
                `Logic? Reason? You don't need that kind of negativity in your life. When you just need to peace out and be a mermaid for a while, we've got your number.

                1.25" x 0.5" enamel pin.`,
            origin: `N/A`,
            image: 'doesntmake00-360x.jpg',
            price: 12.00,
            quantity: 3
        },
        {
            name: 'Rainbow Smiler Clutch',
            category: categories[2]._id,
            description:
                `This rainbow smiley face clutch is full of happiness and pride.  A very cheerful way to carry around all your daily necessities.

                9.5"x7"
                
                Lined, embroidered
                
                Glitter vinyl zipper tab details`,
            origin: `Made in Austin by Realm`,
            image: 'rainbowsmiler00-360x.jpg',
            price: 29.95,
            quantity: 15
        },
        {
            name: 'Vintage Desert Daze Palm Tote',
            category: categories[2]._id,
            description:
                `A truly unique piece with stunning details and colors that remind us of desert sands. Handwoven in natural palm with colors of sienna and black. 

                Measurements: 10 1/4” In Diameter and 19.5” L from top of handle to bottom of bag`,
            origin: ``,
            image: 'vintagedesert00-360x.jpg',
            price: 68.00,
            quantity: 3
        },
        {
            name: 'Sunday Spray / Cooling Aloe Mist',
            category: categories[3]._id,
            description:
                `When your skin is hot and bothered, but you're just trying to chill. Instantly soothe sunburned, stressed-out skin with cooling, moisturizing ingredients like natural spearmint, aloe, and cucumber.  We love the instant cooling effect from spearmint, eucalyptus, and cucumber, with healing relief from aloe and prickly pear. Sunday Spray is like a glass of ice water when you need it most. 

                Use it when
                The day after the beach day, post-spin className, any time you need an uplifting, refreshing moment.
                
                Directions
                Mist liberally over face and body for instant cooling relief and hydration. Chill before use for an especially refreshing moment. Do not apply to broken skin. Re-apply as often as you'd like.               
                
                Size: 3.0 oz
                
                Smells of cucumber + mint
                
                Paraben Free / Phthalate Free / Sulfate Free / Cruelty Free / Vegan 
                
                Ingredients: Aloe Barbadensis (Aloe Vera) Leaf Juice, Water (Aqua), Sodium PCA, Potassium Sorbate, Sodium Benzoate, Mentha Spicata (Spearmint) Oil, Eucalyptus Globulus Leaf Oil, Cinnamomum Camphora (Camphor) Bark Oil, Sorbitan Oleate Decylglucoside Crosspolymer, Sodium Chloride, Glycerin, Opuntia Ficus-Indica (Prickly Pear) Fruit Extract, Caprylic/Capric Triglyceride, Cucumis Sativus (Cucumber) Fruit Extract`,
            origin: `N/A`,
            image: 'sundayspray00-370x.jpg',
            price: 22.00,
            quantity: 25
        },
        {
            name: 'Gold Star',
            category: categories[4]._id,
            description: 'Moon ornament wrapped with gold stars and flowers',
            origin: `N/A`,
            image: 'goldstar00-540x.jpg',
            price: 7.00,
            quantity: 30
        },
        {
            name: 'Sleepy Moons Tea Towel',
            category: categories[4]._id,
            description:
                `Sleepy Moons is original artwork screen printed by hand on 100% recycled cotton and is thicker and more absorbent than your average kitchen towel. Fabulous to use as dish towels, as an accent cloth for your dining table, or anything else you can think of!

               measures 30"x30"
               screen printed by hand with permanent textile ink in black
               tied with hemp twine and a branded tag
               
               WASHING AND CARE
               
               The print on this towel is permanent and meant to last. To best preserve the this screen printed cotton good we suggest machine washing on cold in a gentle cycle. Dry on low heat, or lay flat to dry.`,
            origin: `Made in Georgia`,
            image: 'sleepymoon00-360x.png',
            price: 26.00,
            quantity: 15
        },
        {
            name: 'Disappointed But Not Surprised Mug',
            category: categories[4]._id,
            description:
                `We’ve all had these moments...

                11 oz mug`,
            origin: `N/A`,
            image: 'disappointedmug00-360x.jpg',
            price: 15.00,
            quantity: 10
        },
        {
            name: 'Seeing Eye Throw Pillow Cover',
            category: categories[4]._id,
            description:
                `These lovelies are screen printed on 100% canvas pillow covers. Refresh your home with some striking new throw pillow designs!
                
                - measures 18"x18" (insert measures 20"x20")
                
                - envelope closure so that you can easily insert pillow
                
                - Screen printed with permanent black ink
                
                *Washing Instructions*: Spot cleaning is always best, but you can also machine wash in cold water. Due to the nature of cotton canvas some shrinkage is to be expected. Air dry or tumble dry on low.`,
            origin: `Made in the USA`,
            image: 'seeingeye00-540x.jpg',
            price: 45.00,
            quantity: 12
        }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});