# TGT Shop - Website Bán Hàng PC Cao Cấp
![Logo TTGShop](./img/logo.png)

TGT Shop là một website bán hàng trực tuyến chuyên cung cấp các sản phẩm PC cao cấp, linh kiện máy tính, và các thiết bị văn phòng. Website được thiết kế với giao diện thân thiện, dễ sử dụng và tích hợp nhiều tính năng hỗ trợ người dùng.

## Các chức năng chính

### 1. **Trang chủ**
- Hiển thị các sản phẩm nổi bật với hình ảnh và thông tin chi tiết.
- Có carousel (trình chiếu) để hiển thị các sản phẩm đặc biệt.

### 2. **Trang sản phẩm**
- Hiển thị danh sách tất cả các sản phẩm.
- Tìm kiếm sản phẩm theo tên hoặc mô tả.
- Lọc sản phẩm theo danh mục (PC Gaming, PC Văn Phòng, Linh Kiện, v.v.).
- Sắp xếp sản phẩm theo giá (tăng dần/giảm dần) hoặc theo tên (A-Z/Z-A).

### 3. **Giỏ hàng**
- Thêm sản phẩm vào giỏ hàng từ trang sản phẩm hoặc trang chi tiết sản phẩm.
- Hiển thị danh sách sản phẩm trong giỏ hàng với số lượng và giá tiền.
- Tăng/giảm số lượng sản phẩm trong giỏ hàng.
- Xóa sản phẩm khỏi giỏ hàng.
- Hiển thị tổng tiền và phí vận chuyển.
- Chuyển đến trang thanh toán.

### 4. **Thanh toán**
- Nhập thông tin khách hàng (họ tên, email, số điện thoại, địa chỉ, ghi chú).
- Chọn phương thức thanh toán (COD, chuyển khoản ngân hàng, ví MoMo).
- Lưu thông tin đơn hàng vào `localStorage`.
- Chuyển đến trang xác thực thanh toán.

### 5. **Xác thực thanh toán**
- Hiển thị CAPTCHA để xác thực thanh toán.
- Kiểm tra mã CAPTCHA người dùng nhập.
- Chuyển đến trang hóa đơn nếu xác thực thành công.

### 6. **Hóa đơn**
- Hiển thị thông tin khách hàng và danh sách sản phẩm đã đặt hàng.
- Hiển thị tổng tiền thanh toán.
- Có nút "In Hóa Đơn" để in hóa đơn.

### 7. **Đăng ký, đăng nhập và đăng xuất**
- Đăng ký tài khoản với tên đăng nhập, email và mật khẩu.
- Sau khi đăng ký, người dùng cần nhập mã xác thực để kích hoạt tài khoản.
- Đăng nhập bằng tài khoản đã đăng ký.
- Hiển thị tên người dùng sau khi đăng nhập.
- Đăng xuất khỏi tài khoản.
- Khi đăng xuất, giỏ hàng sẽ được xóa nếu người dùng đã đăng nhập trước đó.

### 8. **Quản lý người dùng**
- Lưu thông tin người dùng và trạng thái đăng nhập bằng `localStorage`.
- Kiểm tra thông tin đăng nhập và đăng ký.

## Công Nghệ Sử Dụng
- **HTML5**: Cấu trúc trang web.
- **CSS3**: Thiết kế giao diện và bố cục.
- **JavaScript**: Xử lý logic, tương tác người dùng, và quản lý dữ liệu.
- **Bootstrap**: Tạo giao diện responsive.
- **LocalStorage**: Lưu trữ dữ liệu người dùng và giỏ hàng.


## 🚀 Cách Chạy Dự Án
1. Clone repository từ GitHub:
   ```bash
   git clone https://github.com/snizyboi0165/23695521_NguyenCaoVietAn_BaiTapLonWeb.git
