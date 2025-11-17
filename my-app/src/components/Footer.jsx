export default function Footer() {
  const footerStyle = {
    backgroundColor: '#1f2937', // nền xám đậm
    color: '#f3f4f6',           // chữ trắng sáng
    padding: '20px',
    textAlign: 'center',
  };

  const textStyle = {
    fontWeight: 600,
    fontSize: '16px',   // tương đương text-xl
    lineHeight: 1.5,
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        Bản quyền của ECMA ® 2024. Bảo lưu mọi quyền. Ghi rõ nguồn
        "www.abc.com.vn" ® khi sử dụng lại thông tin từ website này. Số giấy
        phép kinh doanh lữ hành Quốc tế: 79-234/2022/TCDL-GP LHQT.
      </p>
    </footer>
  );
}
