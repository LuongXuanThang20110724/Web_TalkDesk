# Web_TalkDesk
# Các bước clone và chạy project

Bước 1: Clone code github về máy:
  Dùng lệnh: Git clone https://github.com/LuongXuanThang20110724/Web_TalkDesk.git
  
Bước 2: Mở source code mới clone về và di chuyển đến thư mục fe_v2
  Dùng lệnh: cd fe_v2
  
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/6d08a902-957a-4d5a-a86f-63812f184fc6)

Bước 3: Cài đặt node trong thư mục fe_v2
  Dùng lệnh: npm i
  
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/55241762-de90-4fe5-847c-9e944df6cf9b)

- Nếu sử dụng đường link api local:
	+ Bước 1: Vào thư mục fe_v2 và mở file .env
	+ Bước 2: Để đường link là: REACT_APP_API = http://localhost:5000
	
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/a9ce8568-a9e0-4804-a8cc-5ced69df4375)

  + Bước 3: 
  
      Di chuyển đến thư mục fe_v2 và tiến hành chạy fe_v2
        - Dùng lệnh: npm start
        
      Đồng thời mở thêm 1 terminal di chuyển đến thư mục be và tiến hành chạy be
        - Dùng lệnh: npm start
        
 ![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/6b363476-5c5e-4aba-9697-00c260c1c3c9)
 
 - Nếu sử dụng đường link api đã deploy (Nhưng chỉ sử dụng được khi đã run trên docker):
	+ Bước 1: Vào thư mục fe_v2 và mở file .env
	+ Bước 2:  Để đường link là: REACT_APP_API = http://webtalkdesk.duckdns.org:5000
	
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/7184e17c-eccf-4017-ad89-3083ad703c3e)

  + Bước 3: Tiến hành chạy trong thư mục fe_v2
		  Dùng lệnh: npm start
		  
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/2496f31d-4059-472f-859a-feacb3908cab)
 
- Sau khi hoàn thành các bước:

![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/2b5df84e-e740-4558-a3f0-742b7e187b81)

# - Tài khoản admin:
	+ Tên tài khoản: admin@admin
	+ Mật khẩu: 1
- Khi đăng nhập bằng tài khoản admin bên giao diện sẽ có thêm chức năng “Admin”:

![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/2837d389-287a-441d-9345-5440ffe20c8a)

- Khi đăng nhập bằng tài khoản google sẽ hiển thị giao diện như sau và không có chức năng “Admin”:

![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/2fbdeb27-6ff2-4384-b364-b80b475aaf35)



