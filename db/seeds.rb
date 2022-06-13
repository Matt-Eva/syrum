alex = User.create(username: 'Alex', password: '123')
sean = User.create(username: 'Sean', password: '123')
daniel = User.create(username: 'Daniel', password: '123')
james = User.create(username: 'James', password: '123')
alice = User.create(username: 'Alice', password: '123')
jeff = User.create(username: 'Jeff', password: '123')


alex_follower1 = Follow.create(follower: sean, followed_user: alex)
alex_follower2 = Follow.create(follower: james, followed_user: alex)
alex_follower3 = Follow.create(follower: daniel, followed_user: alex)
sean_follower = Follow.create(follower: alex, followed_user: sean)
james_follower = Follow.create(follower: alex, followed_user: james)

# alex_follower = Follow.create(follower_id: sean.id, followed_user_id: alex.id)
# sean_follower = Follow.create(follower_id: alex.id, followed_user_id: sean.id)


vit_c = Product.create(name: "CE Ferulic", brand: "SkinCeuticals", ingredients: "synergistic antioxidant combination of 15% pure vitamin C (L-ascorbic acid), 1% vitamin E (alpha tocopherol), and 0.5% ferulic acid", notes: "can be a little sticky. I like it mixed with moisturizer", user_id: alex.id, image: 
"https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289609-1174892770940184.jpg")
cleanser = Product.create(name: "Foaming Face Wash", brand: "CeraVe", ingredients: "a unique formula with three essential ceramides (1, 3, 6-II)", notes: "twice daily after an oil cleanser", user_id: alex.id, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKq92h1doqUjZ6E74HC4VkAT93S3nGIPbZvaFlXDzA4h5mT9-Vyo6cPxUl_M46bo6HAN_LpIWXcb8G4wx8HXzG4PQlFz4syQ")
# vit_c1 = Product.create(name: "CE Ferulic", brand: "SkinCeuticals", ingredients: "synergistic antioxidant combination of 15% pure vitamin C (L-ascorbic acid), 1% vitamin E (alpha tocopherol), and 0.5% ferulic acid", notes: "TEST", user_id: sean.id)
# cleanser1 = Product.create(name: "Foaming Face Wash", brand: "CeraVe", ingredients: "a unique formula with three essential ceramides (1, 3, 6-II)", notes: "TEST", user_id: sean.id)
# peptides1 = Product.create(name: "Protini Powerpeptide Resurf Serum", brand: "Drunk Elephant", ingredients: "Lactic Acid (10%), Signal Peptide Complex, Multi-Amino-Acid Blend", notes: "TEST", user_id: sean.id)
# moisturizer = Product.create(name: "Moisture Surge 100H Auto-Replenishing Hydrator", brand: "Clinique", ingredients: "Aloe bio-ferment, Hyaluronic acid, activated aloe water", notes: "holy grail of moisturizers", user_id: alex.id)
moisturizer = Product.create(name: "Moisture Surge 100H Auto-Replenishing Hydrator", brand: "Clinique", ingredients: "Aloe bio-ferment, Hyaluronic acid, activated aloe water", notes: "holy grail of moisturizers", user_id: alex.id, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSp1UwG4UzaAJdEl2uKQKLtAUFvfadqSNpVGY4_N43LNnDUXOzCSUZSXoc1ylW8vkwC9hotFKngvNQBgatb1JW_Qb3NcTLS")
peptides = Product.create(name: "Protini Powerpeptide Resurf Serum", brand: "Drunk Elephant", ingredients: "Lactic Acid (10%), Signal Peptide Complex, Multi-Amino-Acid Blend", notes: "JELLO SKIN", user_id: alex.id, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsA-NgkDQPWXSUmWZZS7DOiQ0vtKxQ6Pu4d9RnlhJtiBGItGhIp9M0jmY_D5NwtIJgQ9tfnQfEvK4Q1ORaTWFiIubTf5Pujg")
# peptides1 = Product.create(name: "Protini Powerpeptide Resurf Serum", brand: "Drunk Elephant", ingredients: "Lactic Acid (10%), Signal Peptide Complex, Multi-Amino-Acid Blend", notes: "JELLO SKIN", user_id: alex.id)
# peptides2 = Product.create(name: "Protini Powerpeptide Resurf Serum", brand: "Drunk Elephant", ingredients: "Lactic Acid (10%), Signal Peptide Complex, Multi-Amino-Acid Blend", notes: "JELLO SKIN", user_id: alex.id)

am_routine1 = Routine.create!(user: alex, title: "Daily AM", description: "Everyday morning routine. Completed when I wake up or after a morning workout")

step1 = Step.create!(number: 1, instructions: "Wash face with lukewarm water. Pat dry afterwards with towel", product: cleanser, routine: am_routine1)
step2 = Step.create(number: 2, instructions: "Apply 3-5 drops to fingertips before lightly gently applying to the skin. Use any access on neck and chest", product: vit_c, routine: am_routine1)
step3 = Step.create(number: 3, instructions: "Follow up serum with moisturizer. I tend to glob on a nickle amount. I find this moisturizer absorbs well in the skin and takes away any stickiness left over from the CE Ferulic.", product: moisturizer, routine: am_routine1)
