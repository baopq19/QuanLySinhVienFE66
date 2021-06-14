let mangSanPham  = [
    {maSP:1,tenSP:'Google pixel xl', gia: 1000, hangSX: 'Google'},
    {maSP:2,tenSP:'Google pixel xl 2', gia: 2000, hangSX: 'Google'},
    {maSP:3,tenSP:'Sony xperia xz', gia: 3000, hangSX: 'Sony'},
    {maSP:4,tenSP:'Sony xperia xzs', gia: 3000, hangSX: 'Sony'},
    {maSP:5,tenSP:'Iphone X', gia: 2500, hangSX: 'Apple'},
    {maSP:6,tenSP:'Iphone XS', gia: 1500, hangSX: 'Apple'},
    {maSP:7,tenSP:'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung'},
    {maSP:8,tenSP:'Samsung galaxy s10', gia: 3000, hangSX: 'Samsung'},
    {maSP:9,tenSP:'Samsung galaxy s10', gia: 3000, hangSX: 'Xiaomi'},
    {maSP:10,tenSP:'Samsung galaxy s10', gia: 3000, hangSX: 'Xiaomi'}
]


let arrSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'Sony');

console.log('arrSony', arrSony);

//bai tap 1 san pham co gia tren 2000
let over2k = mangSanPham.filter(sanPham => sanPham.gia > 2000);
console.log(over2k);

//bai tap 2 thay doi ten san pham thu 10 thanh xiaomi mi mix 3;
let sp10 = mangSanPham.find(sanPham => sanPham.maSP === 10);
sp10.tenSP = 'xiaomi mi mix 3';
console.log(mangSanPham);