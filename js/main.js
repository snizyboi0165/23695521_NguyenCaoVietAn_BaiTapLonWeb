// Sample product data
const products = [
  {
    id: 1,
    name: "PC CHƠI GAME HIỆU SUẤT CAO RTX 3060 12GB - 12400F",
    price: 15280000,
    image: "../img/pc2.png",
    description: "ALL NEW- Bảo hành 36 Tháng",
    category: "gaming",
  },
  {
    id: 2,
    name: "PC ASUS GAMING PERFORMANCE RTX 4060 - I5 12400F",
    price: 15680000,
    image: "../img/pc1.png",
    description: "ALL NEW- Bảo hành 36 Tháng",
    category: "gaming",
  },
  {
    id: 3,
    name: "PC FASTER GAMING 10400F - RTX 3050 6GB",
    price: 9900000,
    image: "../img/pc3.png",
    description: "ALL NEW- Bảo hành 36 Tháng",
    category: "gaming",
  },
  {
    id: 4,
    name: "PC SUPER LUXURY ROG STRIX RYZEN 9 9950X- RTX 4090 24GB OC GAMING WHITE",
    price: 186888888,
    image: "../img/pc4.png",
    description: "ALL NEW- Bảo hành 36 Tháng",
    category: "gaming",
  },
  {
    id: 5,
    name: "PC Đồ Họa 2D i5 12400F - GTX 1650 4GB",
    price: 10980000,
    image: "../img/pc5.png",
    description: "ALL NEW- Bảo hành 36 Tháng",
    category: "workstation",
  },
  {
    id: 6,
    name: "PC TTG HOME OFFICE Core i3 12100 - RAM 8GB- SSD 256GB- Màn hình 24 Inch",
    price: 8860000,
    image: "../img/pc6.png",
    description: "ALL NEW- Bảo hành 36 Tháng",
    category: "van-phong",
  },
  {
    id: 7,
    name: "CPU AMD RYZEN 7 5700X3D",
    price: 5490000,
    image: "../img/cpu.png",
    description:
      "3.0GHZ UPTO 4.1GHZ / 100MB / 8 CORES, 16 THREADS / 105W / SOCKET AM4 (TRAY)",
    category: "linh-kien",
  },
  {
    id: 8,
    name: "Mainboard ASROCK Z890 PRO RS WIFI DDR5",
    price: 8399000,
    image: "../img/mainboard.png",
    description: "Bảo hành 36 Tháng",
    category: "linh-kien",
  },
  {
    id: 9,
    name: "Ram Corsair Dominator Platinum RGB 64GB (2x32GB) 6000MHz DDR5",
    price: 7999000,
    image: "../img/ram.png",
    description: "Bảo hành 36 Tháng",
    category: "linh-kien",
  },
  {
    id: 10,
    name: "PC Đồ Họa 2D i5 12400F - GTX 1660 Super 6GB",
    price: 12680000,
    image: "../img/pc7.png",
    description: "ALL NEW - Bảo hành 36 Tháng",
    category: "workstation",
  },
  {
    id: 11,
    name: "PC Workstation 2D 3D- Edit Video i5 14600K - 16GB DDR5 - GTX 1660 Super 6GB OC",
    price: 20980000,
    image: "../img/pc8.png",
    description: "Bảo hành 36 Tháng",
    category: "workstation",
  },
  {
    id: 12,
    name: "PC Workstation 2D 3D- Edit Video i9 13900K- RTX 3060 12GB",
    price: 35680000,
    image: "../img/pc9.png",
    description: "Bảo hành 36 Tháng",
    category: "workstation",
  },
  {
    id: 13,
    name: "PC TTG HOME OFFICE Core i5 14500 - RAM 16GB- SSD 500GB- Màn hình 24 Inch",
    price: 15380000,
    image: "../img/pc10.png",
    description: "Bảo hành 36 Tháng",
    category: "van-phong",
  },
  {
    id: 14,
    name: "PC TTG HOME OFFICE Core i5 12400 - RAM 16GB- SSD 256GB- Màn hình 24 Inch",
    price: 10360000,
    image: "../img/pc11.png",
    description: "Bảo hành 36 Tháng",
    category: "van-phong",
  },
  {
    id: 15,
    name: "PC TTG HOME OFFICE Core i7 12700 - RAM 16GB- SSD 500GB",
    price: 13680000,
    image: "../img/pc12.png",
    description: "Bảo hành 36 Tháng",
    category: "van-phong",
  },
  {
    id: 16,
    name: "TẢN NHIỆT NƯỚC ASUS ROG RYUJIN III 360 ARGB WHITE",
    price: 9990000,
    image: "../img/cooler.png",
    description: "Bảo hành 36 Tháng",
    category: "linh-kien",
  },
];

// Khởi tạo giỏ hàng
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hàm cập nhật số lượng hiển thị giỏ hàng
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Kiểm tra xem sản phẩm đã có trong giỏ chưa
  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1; // Tăng số lượng nếu đã có
  } else {
    cart.push({ ...product, quantity: 1 }); // Thêm sản phẩm mới
  }

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Cập nhật số lượng hiển thị
  updateCartCount();

  // Hiển thị thông báo
  showNotification(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

// Gọi hàm cập nhật số lượng khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);

  // Thêm lớp "show" để hiển thị thông báo với hiệu ứng
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Xóa thông báo sau 3 giây
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300); // Đợi hiệu ứng ẩn hoàn tất trước khi xóa
  }, 3000);
}

// User Authentication
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

function updateUserMenu() {
  const userMenu = document.getElementById("user-menu");
  if (currentUser) {
    userMenu.innerHTML = `
            <span>Xin chào, ${currentUser.username}</span>
            <a href="#" onclick="logout()">Đăng xuất</a>
        `;
  }
}

function login(username, password) {
  // In a real app, this would validate against a backend
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    currentUser = {
      username: user.username,
      email: user.email,
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    updateUserMenu();
    return true;
  }
  return false;
}

function register(username, email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((u) => u.username === username)) {
    return false;
  }

  users.push({
    username,
    email,
    password,
  });

  localStorage.setItem("users", JSON.stringify(users));
  return true;
}

function logout() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

// Display Featured Products
function displayFeaturedProducts() {
  const featuredProducts = document.getElementById("featured-products");
  if (featuredProducts) {
    featuredProducts.innerHTML = products
      .map(
        (product) => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">${formatPrice(
                      product.price
                    )} đ</div>
                    <button class="btn" onclick="addToCart(${product.id})">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        `
      )
      .join("");
  }
}

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  displayFeaturedProducts();
  updateUserMenu();
});
