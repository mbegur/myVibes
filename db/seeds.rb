# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all
Comment.destroy_all

#u1i =
u1 = User.create(username: "guestuser", password: "password", profile_pic_url: u1i);

#u2i =
u2 = User.create(username: "mallikbegur", password: "password", profile_pic_url: u2i);

#u3i =
u3= User.create(username: "younisey", password: "password", profile_pic_url: u3i);

#u4i =
u4= User.create(username: "Lofton", password: "password", profile_pic_url: u4i);

#u5i =
u5= User.create(username: "Greathouse", password: "password", profile_pic_url: u5i);

#u6i =
u6= User.create(username: "Amilberto", password: "password", profile_pic_url: u6i);

#u7i =
u7= User.create(username: "musicboi", password: "password", profile_pic_url: u7i);

#u8i =
u8= User.create(username: "magicman", password: "password", profile_pic_url: u8i);

#u9i =
u9= User.create(username: "Drake", password: "password", profile_pic_url: u9i);

#u10i =
u10= User.create(username: "ChanceTheRapper", password: "password", profile_pic_url: u10i);

Song.create!(
  title: "If I Were You",
  user_id: u4.id,
  image_url: u4i,
  source: open("https://s3-us-west-1.amazonaws.com/chillcloud-dev/seeds/2ne1/2NE1-If_I_Were_You_Unplugged_Ver_.mp3")
)
