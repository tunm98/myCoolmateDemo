const src = [
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/terry_shorts_xam_dam_1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/terry_shorts_xam_dam_2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/USA_REU_1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/USA_REU_7.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/CoolMate0538.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/CoolMate0537.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/outdor23_2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/outdor23_3.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/April2022/polo-anti-trang-copy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/April2022/28-2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/DSC054681-copy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/xam_3d.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/kaki-excool-xam-den.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/xamdenDSC00016.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/11-181.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/soronanavyu_32.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/_CMM7136-1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/tee100reu_11.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/somicfxam4.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/somicfxam4_1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/terry_shorts_xam_1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/terry_shorts_xam_2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/polousanavyy_2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/polousanavy1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/outdor73_64.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/outdor7_6.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/polo-anti-navy_15_copy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/April2022/26-01.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/DSC05468-copynavy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/321Quan_Navy_3d2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/kaki-excool-begie.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/March2022/1-copy-4_23.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/soronada112.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/uxamsoro_copy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/nhattttt.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/nha1a.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/somicfaqua2_48.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/cfaqua_78.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC05295-copy_73.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/trangstrike.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/polo-anti-navy_15den.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/April2022/27-01.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/May2022/DSC05468-copyden.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/Quan_den_3d2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/kaki-excool-xanh-dam.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/June2022/1DSC00016_34.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/soronada132.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/udensoro_copy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/April2022/cot_trang_1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/April2022/cot_trang_3.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/November2021/cae28.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/November2021/cae26.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC04832-copy_45.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/whiteall.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/July2022/newcacoa3.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/July2022/newcacoa3-4.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/November2021/2uIMG_1077_copy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/November2021/uIMG_1035_copy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC05091-copy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/piquecacao.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/reubuiws2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/February2022/1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC04797-copy-1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/July2022/den_tron_1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/April2022/cot_den_1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/April2022/cot_den_2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC04936-copy-1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/July2022/den_vang_1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC05015-copy-1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/July2022/den_bth.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/USA_den_soc_xanh_bien_2.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/July2022/den_xoc_xanh.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC04847-copy-1.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/July2022/gren_soc.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC05323-copy_51.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/up2yellow_soc_fixxx.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC05191-copy_89.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/September2022/blue_den_fixxxxx_up.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/August2022/DSC05242-copy.jpg",
  "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=100/uploads/July2022/blue_xanh_xanh.jpg",
]

var a = []
// var b=[]
for (var i = 0; i <= src.length; i + 2) {
  a.push(src.slice(i, 2))
}
console.log(a)
