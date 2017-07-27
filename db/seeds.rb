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


u1 = User.create!({
    username: "guestuser",
    password: "password"
    });

u2 = User.create!({
    username: "mallikbegur",
    password: "password",
    image: open("https://s3-us-west-1.amazonaws.com/myvibes/profile_pic_seeds/profilepic/13254315_998838910199317_9012571467113931512_n.jpg"),
    coverpic: open("https://s3-us-west-1.amazonaws.com/myvibes/cover_pic_seeds/coverpic/Headphones-Music-Facebook-Profile-Timeline-Cover.jpg")
    });

u3 = User.create!(
    username: "younisey",
    password: "password",
    image: open("https://s3-us-west-1.amazonaws.com/myvibes/profile_pic_seeds/profilepic/pexels-photo-473741.jpeg"),
    coverpic: open("https://s3-us-west-1.amazonaws.com/myvibes/cover_pic_seeds/coverpic/pexels-photo-267961.jpeg")
    );

u4 = User.create!(
    username: "Lofton",
    password: "password",
    image: open("https://s3-us-west-1.amazonaws.com/myvibes/profile_pic_seeds/profilepic/pexels-photo-498247.jpeg"),
    coverpic: open("https://s3-us-west-1.amazonaws.com/myvibes/cover_pic_seeds/coverpic/never-stop-dreaming-quote-fb-cover.jpg")
    );

u5 = User.create!(
    username: "Amilberto",
    password: "password",
    image: open("https://s3-us-west-1.amazonaws.com/myvibes/profile_pic_seeds/profilepic/pexels-photo-521428.jpeg"),
    coverpic: open("https://s3-us-west-1.amazonaws.com/myvibes/cover_pic_seeds/coverpic/Best-Covers-for-Facebook-Timeline-3.jpg")
    );

u6 = User.create!(
    username: "Greathouse",
    password: "password",
    image: open("https://s3-us-west-1.amazonaws.com/myvibes/profile_pic_seeds/profilepic/man-crazy-funny-dude-45882.jpeg"),
    coverpic: open("https://s3-us-west-1.amazonaws.com/myvibes/cover_pic_seeds/coverpic/download+(1).jpeg")
    );

u7 = User.create!(
    username: "chillVibes",
    password: "password",
    image: open("https://s3-us-west-1.amazonaws.com/myvibes/profile_pic_seeds/profilepic/pexels-photo-523343+(1).jpeg"),
    coverpic: open("https://s3-us-west-1.amazonaws.com/myvibes/cover_pic_seeds/coverpic/Listen_to_your_heart_facebook_cover_1330517429.jpg")
    );

u8 = User.create!(
    username: "musicgurl",
    password: "password",
    image: open("https://s3-us-west-1.amazonaws.com/myvibes/profile_pic_seeds/profilepic/pexels-photo-185517+(1).jpeg"),
    coverpic: open("https://s3-us-west-1.amazonaws.com/myvibes/cover_pic_seeds/coverpic/Hand_Heart_facebook_cover_1331287340.jpg")
    );

u9 = User.create!(
    username: "Drake",
    password: "password",
    image: open("https://s3-us-west-1.amazonaws.com/myvibes/profile_pic_seeds/profilepic/Drake_square-e1455297513370.jpg"),
    coverpic: open("https://s3-us-west-1.amazonaws.com/myvibes/cover_pic_seeds/coverpic/OVO-Banner_v3.jpg")
    );

u10 = User.create!({
    username: "ChanceTheRapper",
    password: "password",
    image: open("https://s3-us-west-1.amazonaws.com/myvibes/profile_pic_seeds/profilepic/img-chance-the-rapper_155057831397.jpg
"),
    coverpic: open("https://s3-us-west-1.amazonaws.com/myvibes/cover_pic_seeds/coverpic/download.jpeg")
    });


s1 = Song.create!({
  title: "Summer Friends",
  user_id: u10.id,
  image: open("https://s3-us-west-1.amazonaws.com/myvibes/song_pic_seeds/songpic/00+-+Chance_The_Rapper_Chance_3-front-large.jpg"),
  track: open("https://s3-us-west-1.amazonaws.com/myvibes/song_seeds/song/03+-+Summer+Friends+feat+Jeremih+Francis+and+The+Lights.mp3")
})

s2 = Song.create!({
  title: "Blessings",
  user_id: u10.id,
  image: open("https://s3-us-west-1.amazonaws.com/myvibes/song_pic_seeds/songpic/GQ-Grammys-Pari-Dukovic-Chance-the-Rapper.jpg"),
  track: open("https://s3-us-west-1.amazonaws.com/myvibes/song_seeds/song/05+-+Blessings.mp3")
})

s3 = Song.create!({
  title: "We Belong Together",
  user_id: u1.id,
  image: open("https://s3-us-west-1.amazonaws.com/myvibes/song_pic_seeds/songpic/3b1400674a0257ceef8198a8a335b3f8.1000x1000x1.jpg"),
  track: open("https://s3.console.aws.amazon.com/s3/object/myvibes/song_seeds/song/mariah-carey-we-belong-together.mp3?region=us-west-1&tab=overview")
})

s4 = Song.create!({
  title: "Novacane",
  user_id: u1.id,
  image: open("https://s3-us-west-1.amazonaws.com/myvibes/song_pic_seeds/songpic/FrankOceanNovacane.jpg"),
  track: open("https://s3-us-west-1.amazonaws.com/myvibes/song_seeds/song/novacane.mp3")
})

s5 = Song.create!({
  title: "My Love ft. TI & Timbaland",
  user_id: u2.id,
  image: open("https://s3-us-west-1.amazonaws.com/myvibes/song_pic_seeds/songpic/Justin-Timberlake.jpg"),
  track: open("https://s3-us-west-1.amazonaws.com/myvibes/song_seeds/song/Justin+Timberlake+ft+TI+Timberland+-+My+0Love.mp3")
})

s6 = Song.create!({
  title: "My Love ft. TI & Timbaland",
  user_id: u2.id,
  image: open("https://s3-us-west-1.amazonaws.com/myvibes/song_pic_seeds/songpic/Justin-Timberlake.jpg"),
  track: open("https://s3-us-west-1.amazonaws.com/myvibes/song_seeds/song/Justin+Timberlake+ft+TI+Timberland+-+My+0Love.mp3")
})
