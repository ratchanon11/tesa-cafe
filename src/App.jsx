import React from "react";
import "./App.css"; // เชื่อมกับไฟล์ CSS

const App = () => {
  const card = [
    {
      id: 1,
      title: "อเมริกาโน่",
      desc: "กาแฟดำเข้มข้น หอมกลิ่นคั่ว สดชื่นไม่หวาน",
      image: "https://i.pinimg.com/736x/6a/e4/82/6ae482a0690b8ca89fd3acd554a36d66.jpg",
    },
    {
      id: 2,
      title: "ลาเต้",
      desc: "กาแฟเอสเพรสโซ่ผสมนมสด รสละมุน หอมกลิ่นกาแฟ",
      image: "https://th.bing.com/th/id/OIP.s69DvVPmo7uuc3RKQXn0uAHaE7?w=255&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id: 3,
      title: "โกโก้มิ้น",
      desc: "โกโก้เข้มข้น หวานมันกำลังดี ดื่มแล้วสดชื่น",
      image: "https://th.bing.com/th/id/OIP.ymDN68vsAKBoLT-bAQKXJAAAAA?w=194&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      id: 4,
      title: "ชาเขียวมัทฉะ",
      desc: "ชาเขียวญี่ปุ่นเข้มข้น หอมละมุน รสแท้จากญี่ปุ่น",
      image: "https://mocktail.net/wp-content/uploads/2021/05/Matcha-Iced-Latte_ig-500x500.jpg",
    },
    {
      id: 5,
      title: "สตรอว์เบอร์รีโซดา",
      desc: "โซดาสตรอว์เบอร์รีซ่า สดชื่น หอมผลไม้",
      image: "https://botrista.com/wp-content/uploads/2024/07/10_12_2023_Botrista2266_Webres.png",
    },
    {
      id: 6,
      title: "ขนมปังปิ้งเนยนม",
      desc: "ขนมปังกรอบนอกนุ่มใน ราดด้วยเนยและนมข้นหวาน",
      image: "https://4.bp.blogspot.com/-505wBhA0MwE/WMqssp1qWlI/AAAAAAAAAKc/l6I9PJfDAa8p3U8mzj4uLOfZMJ-YmtEcgCLcB/s1600/pang.jpg",
    },
    {
      id: 7,
      title: "บราวนี่ช็อกโกแลต",
      desc: "บราวนี่เนื้อหนึบ เข้มข้น หอมโกโก้แท้ทุกคำ",
      image: "https://obrownies.com/wp-content/uploads/2021/11/Choco-Poke-1.png",
    },
    {
      id: 8,
      title: "ชีสเค้กบลูเบอร์รี",
      desc: "ชีสเค้กเนื้อนุ่ม ราดซอสบลูเบอร์รีหวานอมเปรี้ยว",
      image: "https://i.pinimg.com/originals/ac/c0/7c/acc07c9283afac9f0df5404d10abe286.jpg",
    },
    {
      id: 9,
      title: "ครัวซองต์เนยสด",
      desc: "แป้งกรอบหอมเนย เสิร์ฟอุ่น ๆ คู่กับกาแฟ",
      image: "https://img.kapook.com/u/2018/surauch/cooking/co1/g17_1.jpg",
    },
    {
      id: 10,
      title: "แพนเค้กน้ำผึ้ง",
      desc: "แพนเค้กนุ่มๆ ราดน้ำผึ้งหอมหวาน เสิร์ฟพร้อมผลไม้สด",
      image: "https://tse2.mm.bing.net/th/id/OIP.D1VPsRUMwM9d6q5BVKnc9QHaE8?w=600&h=400&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div>
      {/* 🌸 Navbar */}
      <nav className="navbar">
        <h1 className="nav-logo">☕ Tesa Cafe</h1>
        <ul className="nav-links">
          <li><a href="#">หน้าแรก</a></li>
          <li><a href="#">เมนู</a></li>
          <li><a href="#">โปรโมชั่น</a></li>
          <li><a href="#">ติดต่อ</a></li>
        </ul>
      </nav>

      {/* 🌸 Section เมนู */}
      <div className="container">
        <h2 className="title">เมนูแนะนำของเรา</h2>
        <div className="menu-grid">
          {card.map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.title} className="menu-image" />
              <h5 className="menu-title">{item.title}</h5>
              <p className="menu-desc">{item.desc}</p>
              <button className="menu-btn">ดูรายละเอียด</button>
            </div>
          ))}
        </div>
      </div>

      {/* 🌸 Footer */}
      <footer className="footer">
        <p>© Tesa Cafe | สร้างด้วย Ratchanon☕ และNatyada☕</p>
        <div className="footer-icons">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-line"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
