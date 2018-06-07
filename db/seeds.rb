# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!({username: "photolover", password: "qwer0987", email: "photo@gmail.com", first_name: "Photo Lover", last_name: "Great Person", img_url: "https://www.kthanna.com/wp-content/uploads/2012/01/Kirasmile.jpg"})