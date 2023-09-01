create table cars(
id int identity(1,1),
image varchar(500)
)

create procedure cars_get
As
begin
select id,image from cars
end

insert into cars(image) values('https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png')
insert into cars(image) values('https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960')
insert into cars(image) values('https://cdn.motor1.com/images/mgl/mrz1e/s1/4x3/coolest-cars-feature.webp')
insert into cars(image) values('https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000')
insert into cars(image) values('https://c4.wallpaperflare.com/wallpaper/193/556/883/car-neon-chevrolet-corvette-race-cars-hd-wallpaper-preview.jpg')
insert into cars(image) values('https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?cs=srgb&dl=pexels-jay-pizzle-3764984.jpg&fm=jpg')
insert into cars(image) values('https://i.insider.com/56c8b512dd0895906d8b468a?width=1200&format=jpeg')
insert into cars(image) values('https://www.financialexpress.com/wp-content/uploads/2018/07/worlds-most-expensive-cars-mercedes-maybach-exelero.jpg')
insert into cars(image) values('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMogzy0bVfVnzEZDxDVLKOUSjEJ34M3di7A&usqp=CAU')
insert into cars(image) values('https://www.carblogindia.com/wp-content/uploads/2023/01/rolls-royce-cullinan-south-africa.jpg')



create table bikes(
id int identity(1,1),
image varchar(500)
)

create procedure bikes_Get
As
Begin
select id,image from bikes
end

insert into bikes(image) values('https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375');
insert into bikes(image) values('https://bd.gaadicdn.com/upload/modellogo/649bc0cf4b3f0.jpg');
insert into bikes(image) values('https://static.toiimg.com/photo/80452572.cms');
insert into bikes(image) values('https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/02/KTM-Duke-200-BS6.jpg?resize=1000%2C750&ssl=1');
insert into bikes(image) values('https://gumlet.vikatan.com/vikatan%2F2022-12%2F5cd61df3-11c0-4b64-95f8-5a5d1f8a306a%2FRE_Hunter_f.jpg?auto=format%2Ccompress&w=1200');
insert into bikes(image) values('https://assets.tractorjunction.com/bike-junction/bikes/harley-davidson-x350/harley-davidson-x350.webp?format=webp&width=429&height=255');
insert into bikes(image) values('https://assets.gqindia.com/photos/5cdc7c4f8e6299c06ef385cd/16:9/w_2560%2Cc_limit/ktm-duke-200_side_0.jpg');
insert into bikes(image) values('https://i.pinimg.com/originals/16/61/64/166164824e201e2eb6957448cf25f610.jpg');
insert into bikes(image) values('https://assets.tractorjunction.com/bike-junction/bikes/tvs-xl100-comfort/tvs-xl100-comfort-1.webp?format=webp&width=429&height=255');
insert into bikes(image) values('https://auto.webindia123.com/bike/suzuki_burgman/ima.jpg');