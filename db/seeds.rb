alex = User.create(username: 'Alex', password: '123')
sean = User.create(username: 'Sean', password: 'abc')

alex_follower = Follow.create(follower_id: sean.id, followed_user_id: alex.id)
sean_follower = Follow.create(follower_id: alex.id, followed_user_id: sean.id)


vit_c = Product.create(name: "CE Ferulic", brand: "SkinCeuticals", ingredients: "synergistic antioxidant combination of 15% pure vitamin C (L-ascorbic acid), 1% vitamin E (alpha tocopherol), and 0.5% ferulic acid", notes: "can be a little sticky. I like it mixed with moisturizer", user_id: alex.id)
cleanser = Product.create(name: "Foaming Face Wash", brand: "CeraVe", ingredients: "a unique formula with three essential ceramides (1, 3, 6-II)", notes: "twice daily after an oil cleanser", user_id: alex.id)
peptides = Product.create(name: "Protini Powerpeptide Resurf Serum", brand: "Drunk Elephant", ingredients: "Lactic Acid (10%), Signal Peptide Complex, Multi-Amino-Acid Blend", notes: "JELLO SKIN", user_id: alex.id)
vit_c1 = Product.create(name: "CE Ferulic", brand: "SkinCeuticals", ingredients: "synergistic antioxidant combination of 15% pure vitamin C (L-ascorbic acid), 1% vitamin E (alpha tocopherol), and 0.5% ferulic acid", notes: "TEST", user_id: sean.id)
cleanser1 = Product.create(name: "Foaming Face Wash", brand: "CeraVe", ingredients: "a unique formula with three essential ceramides (1, 3, 6-II)", notes: "TEST", user_id: sean.id)
peptides1 = Product.create(name: "Protini Powerpeptide Resurf Serum", brand: "Drunk Elephant", ingredients: "Lactic Acid (10%), Signal Peptide Complex, Multi-Amino-Acid Blend", notes: "TEST", user_id: sean.id)
moisturizer = Product.create(name: "Moisture Surge 100H Auto-Replenishing Hydrator", brand: "Clinique", ingredients: "Aloe bio-ferment, Hyaluronic acid, activated aloe water", notes: "holy grail of moisturizers", user_id: alex.id)
