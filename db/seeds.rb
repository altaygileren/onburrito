# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Order.destroy_all

user = User.new
user.email = 'hello@world.com'
user.password = 'password'
user.password_confirmation = 'password'
user.save

user = User.new
user.email = 'goodbye@world.com'
user.password = 'password'
user.password_confirmation = 'password'
user.save

user = User.new
user.email = 'hey@world.com'
user.password = 'password'
user.password_confirmation = 'password'
user.save

order = Order.new
order.meats = "Steak"
order.sides = "White Rice"
order.toppings = "Queso"
order.save

order = Order.new
order.meats = "Chicken"
order.sides = "Brown Rice"
order.toppings = "Guacamole"
order.save

order = Order.new
order.meats = "Carnitas"
order.sides = "Black Beans"
order.toppings = "Fresh Tomato Sauce"
order.save

order = Order.new
order.meats = "Barbacoa"
order.sides = "Pinto Beans"
order.toppings = "Sour Cream"
order.save

order = Order.new
order.meats = "Chorizo"
order.sides = "White Rice"
order.toppings = "Monterey Jack Cheese"
order.save