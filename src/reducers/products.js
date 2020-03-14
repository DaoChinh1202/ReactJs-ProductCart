var initialState = [
    {
        id: 1,
        name: ' Xiaomi Redmi Note 8 (4GB/64GB)',
        image: 'https://cdn.tgdd.vn/Products/Images/42/209535/xiaomi-redmi-note-8-white-600x600.jpg',
        description: 'Điện thoại Xiaomi Redmi Note 8 64GB chính hãng là smartphone 2 sim, giá rẻ, có trả góp. Giao hàng miễn phí trong 1 giờ, 1 đổi 1 tháng đầu nếu lỗi. MUA ..',
        price: 900,
        inventory: 100,
        rating: 4
    },
    {
        id: 2,
        name: 'Xiaomi Mi 9 Pro 5G (12GB|512GB) giá rẻ kết nối 5G - Trả góp 0%',
        image: 'https://didongviet.vn/pub/media/catalog/product//x/i/xiaomi-mi-9-pro-5g.jpg',
        description: 'Xiaomi Mi 9 Pro 5G chính hãng, xách tay giá rẻ - Hỗ trợ trả góp lãi suất 0% thủ tục nhanh đơn giản, giao hàng trên toàn quốc uy tín tại Di Động Việt ...',
        price: 900,
        inventory: 100, 
        rating: 4
    },

    {
        id: 3,
        name: 'Samsung Galaxy Note 5',
        image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1335291765.png',
        description: 'Mua điện thoại Xiaomi Redmi Note 8 64GB chính hãng giá tốt tại Viettel Store. Giảm thêm 5% tối đa 200K khi thanh toán qua VNPayQR. Đây là một ...',
        price: 900,
        inventory: 100, 
        rating: 2
    },
    {
        id: 4,
        name: 'Xiaomi Redmi Note 8 Pro (6GB | 64GB)',
        image: 'https://www.duchuymobile.com/images/detailed/25/xanh.jpg',
        description: 'Đánh giá Xiaomi Redmi Note 8 Pro RAM 6GB, chip Helio G90T, 4 camera 64MP, Xiaomi Redmi Note 8 Pro , chiếc smartphone nâng cấp của bản Note 7 Pro với ...',
        price: 900,
        inventory: 100, 
        rating: 5
    },

];
const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;