alex = User.create(username: 'Alex', password: '123')
sean = User.create(username: 'Sean', password: '123')
daniel = User.create(username: 'Daniel', password: '123')
james = User.create(username: 'James', password: '123')
alice = User.create(username: 'Alice', password: '123')
jeff = User.create(username: 'Jeff', password: '123')


alex_follower1 = Follow.create(follower: sean, followed_user: alex)
alex_follower2 = Follow.create(follower: alice, followed_user: alex)
alex_follower3 = Follow.create(follower: daniel, followed_user: alex)
sean_follower = Follow.create(follower: alex, followed_user: sean)
james_follower = Follow.create(follower: alex, followed_user: james)


# alex_follower = Follow.create(follower_id: sean.id, followed_user_id: alex.id)
# sean_follower = Follow.create(follower_id: alex.id, followed_user_id: sean.id)


vit_c = Product.create(name: "CE Ferulic", brand: "SkinCeuticals", ingredients: "synergistic antioxidant combination of 15% pure vitamin C (L-ascorbic acid), 1% vitamin E (alpha tocopherol), and 0.5% ferulic acid", notes: "can be a little sticky. I like it mixed with moisturizer", user_id: alex.id, image: 
"https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289609-1174892770940184.jpg")
cleanser = Product.create(name: "Foaming Face Wash", brand: "CeraVe", ingredients: "a unique formula with three essential ceramides (1, 3, 6-II)", notes: "twice daily after an oil cleanser", user_id: alex.id, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKq92h1doqUjZ6E74HC4VkAT93S3nGIPbZvaFlXDzA4h5mT9-Vyo6cPxUl_M46bo6HAN_LpIWXcb8G4wx8HXzG4PQlFz4syQ")
oilcleanse = Product.create(name: "Precleanse Cleansing Oil", brand: "Dermalogica", ingredients: "Vitamin E, Rice Bran, Rosemary", notes: "use in PM on dry skin prior to the CeraVe cleanser", user_id: alex.id, image: "https://www.sephora.com/productimages/sku/s2002079-main-zoom.jpg?imwidth=612")
peptides = Product.create(name: "Protini Powerpeptide Resurf Serum", brand: "Drunk Elephant", ingredients: "Lactic Acid (10%), Signal Peptide Complex, Multi-Amino-Acid Blend", notes: "JELLO SKIN", user_id: alex.id, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsA-NgkDQPWXSUmWZZS7DOiQ0vtKxQ6Pu4d9RnlhJtiBGItGhIp9M0jmY_D5NwtIJgQ9tfnQfEvK4Q1ORaTWFiIubTf5Pujg")
moisturizer = Product.create(name: "Moisture Surge 100H Auto-Replenishing Hydrator", brand: "Clinique", ingredients: "Aloe bio-ferment, Hyaluronic acid, activated aloe water", notes: "holy grail of moisturizers", user_id: alex.id, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSp1UwG4UzaAJdEl2uKQKLtAUFvfadqSNpVGY4_N43LNnDUXOzCSUZSXoc1ylW8vkwC9hotFKngvNQBgatb1JW_Qb3NcTLS")
sunscreen = Product.create(name: "Original SPF 50 Sunscreen Face Lotion", brand: "SunBum", ingredients: "Avobenzone 3%, Homosalate 10%, Octisalate 5%, Octocrylene 10%", notes: "Best for hot days without makeup!", user_id: alex.id, image: "https://cdn.shopify.com/s/files/1/0053/1798/4323/products/SB_People_Beauty_Award_Thumbnails_Front_R1_1400x1400.jpg?v=1632779066") 
sunscreen1 = Product.create(name: "Ultra Sheer Moisturizing Face Serum", brand: "Neutrogena", ingredients: "Vitamin E & SPF 60+", notes: "Sunscreen always because if not - what's the point?", image: "https://m.media-amazon.com/images/I/61DO-YcWgYL._SL1500_.jpg", user_id: alex.id)
differin = Product.create(name: "Differin Gel", brand: "Differin", ingredients: "adapalene 0.3% (3 mg/g)", notes: "Retinol and acne treatment - yes please! I have to work my way up to nightly with this product, and that's even still too much sometimes. Usually every other night works best for me.", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRV1wZ8I3HIdfnmXZLTVess8oAIv9zNzkuogKpSc6pg9WGXIOXf3SBeiPssqWxFvfcoh9Yv7cC855R5anrm--guLb7cO1Bi", user_id: alex.id)
lipid_restore = Product.create(name: "Triple Lipid Restore", brand: "Skin Ceuticals", ingredients: "2% Pure Ceramides 1 & 3, 4% Natural Cholesterol, 2% Fatty Acids, Essential oil blend", notes: "The thiccc stuff. She's expensive but so worth it - really does great things for my skin barrier.", user_id: alex.id, image: "https://www.skinceuticals.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-skinceuticals-master-catalog/default/dwe7ddaca1/Products/3606000434967/Triple-Lipid-Restore-3606000434967-SkinCeuticals.jpg?sw=465&sfrm=jpg&q=70") 



am_routine1 = Routine.create!(user: alex, title: "Daily AM", description: "Everyday morning routine. Completed when I wake up or after a morning workout")

step1 = Step.create!(number: 1, instructions: "Wash face with lukewarm water. Pat dry afterwards with towel", product: cleanser, routine: am_routine1)
step2 = Step.create(number: 2, instructions: "Apply 3-5 drops to fingertips before lightly gently applying to the skin. Use any access on neck and chest", product: vit_c, routine: am_routine1)
step3 = Step.create(number: 3, instructions: "Follow up serum with moisturizer. I tend to glob on a nickle amount. I find this moisturizer absorbs well in the skin and takes away any stickiness left over from the CE Ferulic.", product: moisturizer, routine: am_routine1)
step4 = Step.create(number: 4, instructions: "LATHER on and repeat", product: sunscreen1, routine: am_routine1)

pm_routine1 = Routine.create!(user: alex, title: "Daily PM", description: "A nightly routine done before bed. Our skin renews itself overnight, so this is where the magic happens!")

step_a_1 = Step.create!(number: 1, instructions: "Double cleanse time! Use the oil cleanser on dry face to wash those pores free of makeup, sunscreen, and pollution", product: oilcleanse, routine: pm_routine1)
step_a_2 = Step.create!(number: 2, instructions: "Second cleanse, this time with a wet face and lukewarm water. Pat dry afterwards", product: cleanser, routine: pm_routine1)
step_a_3 = Step.create!(number: 3, instructions: "Pea sized amount over face. Sometimes I'll put it on slightly damp (after I've built up a tolerance to it) because it spreads easier!", product: differin, routine: pm_routine1)
step_a_4 = Step.create!(number: 4, instructions: "I'll give the differin anywhere from 5-20 mins to really sink in before going to this. After that, I'll lather on as much as my skin feels like it needs, applying excess to neck and chest", product: lipid_restore, routine: pm_routine1)


alice_routine1 = Routine.create!(user: alice, title: "Daily AM", description: "everyday morning routine")


cleanser1 = Product.create(name: "Foaming Face Wash", brand: "CeraVe", ingredients: "a unique formula with three essential ceramides (1, 3, 6-II)", notes: "twice daily after an oil cleanser", user_id: alice.id, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKq92h1doqUjZ6E74HC4VkAT93S3nGIPbZvaFlXDzA4h5mT9-Vyo6cPxUl_M46bo6HAN_LpIWXcb8G4wx8HXzG4PQlFz4syQ")
sunscreen2 = Product.create(name: "Ultra Sheer Moisturizing Face Serum", brand: "Neutrogena", ingredients: "Vitamin E & SPF 60+", notes: "TEST", image: "https://m.media-amazon.com/images/I/61DO-YcWgYL._SL1500_.jpg", user_id: alice.id)
moisturizer1 = Product.create(name: "Hydro Boost Water Gel with Hyaluronic Acid for Dry Skin", brand: "Neutrogena", ingredients: "Hyaluronic Acid", notes: "holy grail of moisturizers", image: "https://ntg-catalog.imgix.net/products/6811047XX/alt_1.jpg?w=1200&h=1443&sfrm=jpg&fit=crop", user_id: alice.id)

step_alice_1 = Step.create!(number: 1, instructions: "Wash face with lukewarm water. Pat dry afterwards with towel", product: cleanser1, routine: alice_routine1)
step_alice_1 = Step.create!(number: 2, instructions: "Apply small amount to face and neck while skin is still damp. Depending on what city I'm in, sometimes I'll skip this step and use a moisturizing sunscreen instead.", product: moisturizer1, routine: alice_routine1)
step_alice_1 = Step.create!(number: 3, instructions: "Sunscreen always! Since this one is moisturizing, sometimes I'll only use this.", product: sunscreen1, routine: alice_routine1)

sean_routine_1 = Routine.create!(user: sean, title: "Daily AM/PM", description: "My everyday brightening routine")

cleanser2 = Product.create(name: "Foaming Face Wash", brand: "CeraVe", ingredients: "a unique formula with three essential ceramides (1, 3, 6-II)", notes: "twice daily after an oil cleanser", user_id: sean.id, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRKq92h1doqUjZ6E74HC4VkAT93S3nGIPbZvaFlXDzA4h5mT9-Vyo6cPxUl_M46bo6HAN_LpIWXcb8G4wx8HXzG4PQlFz4syQ")
truth_serum = Product.create(name: "Truth Serum", brand: "Ole Henriksen", ingredients: "Complex stabilized vitamin C derivatives, Collagen, Orange and green tea extracts, Aloe juice", notes: "Brightens, firms, fights visible signs of aging and delivers all-day hydration", user_id: sean.id, image: "https://www.olehenriksen.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_OLE/default/dw84a2fed1/hi-res/Truth-Serum-Silo.jpg?sw=550")
brightening_cream = Product.create(name: "C-Rush Brightening Gel Crème", brand: "Ole Henriksen", ingredients: "3 sources of vitamin C, Rose of Winter extract", notes: "Oles “gold standard” for addressing visible signs of aging", user_id: sean.id, image: "https://www.olehenriksen.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_OLE/default/dw00341747/hi-res/28041V1_alt2.jpg?sw=550")
banana_eye_cream = Product.create(name: "Banana Bright Eye Creme", brand: "Ole Henriksen", ingredients: "Vitamin C, Collagen, Banana powder-inspired pigments", notes: "Instantly illuminate", user_id: sean.id, image: "https://www.sephora.com/productimages/sku/s2018984-main-zoom.jpg?imwidth=612")




step_sean_1 = Step.create!(number: 1, instructions: "Wash face with lukewarm water. Pat dry afterwards with towel", product: cleanser2, routine: sean_routine_1)
step_sean_2 = Step.create!(number: 2, instructions: "Apply evenly to face and neck daily. After fully absorbed, follow with C-Rush Brightening Gel Crème", product: truth_serum, routine: sean_routine_1)
step_sean_3 = Step.create!(number: 3, instructions: "Apply evenly to face and neck AM and PM after Truth Serum. Gently massage in an upward, circular motion.", product: brightening_cream, routine: sean_routine_1)
step_sean_4 = Step.create!(number: 4, instructions: "Apply to entire eye area with ring finger ONLY!", product: banana_eye_cream, routine: sean_routine_1)


#FAVORITES
fav_1 = Favorite.create(user: alex, routine: alice_routine1)
# fav_2 = Favorite.create(user: alex, routine: sean_routine_1)