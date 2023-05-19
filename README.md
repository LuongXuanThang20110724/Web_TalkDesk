# Web_TalkDesk
# Các bước clone và chạy project
Bước 1: Clone code github về máy:
  Dùng lệnh: Git clone https://github.com/LuongXuanThang20110724/Web_TalkDesk.git
Bước 2: Mở source code mới clone về và di chuyển đến thư mục fe_v2
  Dùng lệnh: cd fe_v2
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/570473f7-8f91-4497-b08c-49377eb10609)
Bước 3: Cài đặt node trong thư mục fe_v2
  Dùng lệnh: npm i
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/973d8550-bdb1-498a-a0b7-5da82c71d5ab)
- Nếu sử dụng đường link api đã deploy (Nhưng chỉ sử dụng được khi đã run trên docker):
	+ Bước 1: Vào thư mục fe_v2 và mở file .env
	+ Bước 2:  Để đường link là: REACT_APP_API = http://webtalkdesk.duckdns.org:5000
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/df0076fe-2bd5-44d4-8b78-687502281ba5)
  + Bước 3: Tiến hành chạy trong thư mục fe_v2
		  Dùng lệnh: npm start
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/9cfc74e2-cc65-4e7b-9aee-04735dfc26e4)
- Nếu sử dụng đường link api local:
	+ Bước 1: Vào thư mục fe_v2 và mở file .env
	+ Bước 2: Để đường link là: REACT_APP_API = http://localhost:5000
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/675ba389-151a-4dc6-bad9-455abe49ed28)
  + Bước 3: 
      Di chuyển đến thư mục fe_v2 và tiến hành chạy fe_v2
        - Dùng lệnh: npm start
      Đồng thời mở thêm 1 terminal di chuyển đến thư mục be và tiến hành chạy be
        - Dùng lệnh: npm start
 ![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/7f8e709f-5fae-4ae0-ac98-03d9ed3d71c1)
- Sau khi hoàn thành các bước:
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/3a82905b-dc15-4cab-aeb9-5238872e0be8)
- Tài khoản admin:
	+ Tên tài khoản: admin@admin
	+ Mật khẩu: 1
- Khi đăng nhập bằng tài khoản admin bên giao diện sẽ có thêm chức năng “Admin”:
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/0d65bf7e-f0a1-461e-aeb2-0736139dfcb1)
- Khi đăng nhập bằng tài khoản google sẽ hiển thị giao diện như sau và không có chức năng “Admin”:
![image](https://github.com/LuongXuanThang20110724/Web_TalkDesk/assets/127852125/7d4c181a-4f00-4e2d-92dc-e98326f69c7a)


