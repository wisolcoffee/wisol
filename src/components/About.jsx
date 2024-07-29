import React from "react";
import { Helmet } from "react-helmet";
import { Card, ListGroup, ListGroupItem } from "flowbite-react";

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Helmet>
        <title>Wi_Sol Coffee</title>
        <meta
          name="description"
          content="wi_sol coffee thiên đường “healing” với workshop thú vị"
        />
        <meta
          name="keywords"
          content="Wi_Sol Coffee, Coffee làm gốm, workshops, healing, tranquil, serene, cafe, Sài Gòn,wi_sol, wisol, wi sol"
        />
      </Helmet>

      <Card className="mb-8 bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Wi_Sol coffee thiên đường “healing” với workshop thú vị
        </h1>
        <p className="mb-4 text-lg">
          wi_sol coffe, bắt nguồn từ cụm “We are soulmates”, wi_sol “chúng tớ”
          sẽ luôn là “tri kỉ” của khách hàng . Nếu các bạn đang có một ngày dài
          muộn phiền , muốn tìm về chốn riêng dành cho tâm hồn hay muốn tách
          biệt thế giới ồn ào ngoài kia để chuyên tâm vào công việc, wi_sol sẽ
          luôn ở đây đợi “ các soulmates”.
        </p>
      </Card>

      <Card className="mb-8 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">
          Wi_Sol coffee mang nét bình dị triệu view:
        </h2>
        <p className="mb-4 text-lg">
          - Nâu và trắng là hai gam màu chủ đạo của quán mang nét bình dị, tạo
          cảm giác gần gũi, giản đơn, sang trọng mà không cần cầu kì,rườm rà.-
          Không gian quán là thiên đường sống ảo triệu view bao gồm:
        </p>
        <ListGroup>
          <ListGroupItem>
            <p className="text-lg">
              Lầu 1 - không gian dành riêng cho những con người của công việc,
              không muốn bị gián đoạn sự tập trung;
            </p>{" "}
            <img
              className="mr-6 h-auto w-1/3"
              src={require("./about2.jpg")}
              alt="Không gian wi_sol coffee lầu 1"
            />
          </ListGroupItem>

          <ListGroupItem>
            <img
              className="mr-6 h-auto w-1/3"
              src={require("./about1.jpg")}
              alt="Không gian wi_sol coffee lầu 2"
            />

            <p className="text-lg">
              Lầu 2 - không gian chính của quán, góc check in sống ảo “ nho nhỏ”
              và là nơi “xả bầu tâm sự” của “các soulmates” khi lâu ngày gặp lại
              và khung cảnh thiên nhiên ở “khu vườn nhỏ” của chúng tớ sẽ là lựa
              chọn thích hợp nhất cho những “tri kỉ” đang bị đè nghẹt bởi không
              khí chật chội, ngột ngạt của mảnh đất sài thành và là nơi diễn ra
              các hoạt động workshop đầy thú vị của chúng mình.
            </p>
          </ListGroupItem>
        </ListGroup>
      </Card>

      <Card className="mb-8 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">
          Wi_Sol coffee gây thương nhớ với hương vị tuyệt vời:
        </h2>
        <p className="mb-4 text-lg">
          Wi_Sol coffe luôn tự tin cam kết sẽ gây thương nhớ cho các “tri kỉ”
          với hương vị tuyệt vời của tách cafe thơm lừng, ly trà trái cây tươi
          mát hay vị ngọt ngào từ miếng bánh thơm ngon với bảng menu vô cùng đa
          dạng, phong phú:
        </p>
        <img
          className=" mr-6 h-auto "
          src={require("./menu.png")}
          alt="menu của wi_sol coffee"
        />
        <ListGroup>
          <ListGroupItem>
            <h3 className="text-left text-xl font-semibold">
              Coffee :&nbsp;
              <span className="text-lg font-normal">
                Hương vị đậm đà, mùi thơm đặc trưng của hạt cafe nguyên chất hay
                sự hòa quyện hoàn hảo giữa cafe và sữa tươi, cung cấp năng lượng
                một ngày dài làm việc
              </span>
            </h3>
            <img
              className="mr-6 h-auto w-1/3"
              src={require("./coffee.jpg")}
              alt="hình ảnh coffee tại wi_sol"
            />
          </ListGroupItem>
          <ListGroupItem>
            <img
              className="mr-6 h-auto w-1/3"
              src={require("./tea.jpg")}
              alt="hình ảnh tea tại wi_sol"
            />
            <h3 className="text-left text-xl font-semibold">
              Tea :&nbsp;
              <span className="text-lg font-normal">
                sự kết hợp giữa hương vị đậm đà của lá trà cùng trái cây tươi,
                tạo cảm giác thanh mát giữa trưa hè oi bức
              </span>
            </h3>
          </ListGroupItem>
          <ListGroupItem>
            <h3 className="text-left text-xl font-semibold">
              Ice-blended :&nbsp;
              <span className="text-lg font-normal">
                Sự pha trộn hài hòa giữa hương vị tự nhiên của trái cây và độ
                lạnh của đá, mang lại sự sảng khoái, tươi mới
              </span>
            </h3>
            <img
              className="mr-6 h-auto w-1/3"
              src={require("./iceblend.jpg")}
              alt="hình ảnh iceblend tại wisol"
            />
          </ListGroupItem>
          <ListGroupItem>
            {" "}
            <img
              className="mr-6 h-auto w-1/3"
              src={require("./mojito.jpg")}
              alt="hình ảnh mojito tại wi_sol"
            />
            <h3 className=" text-left text-xl font-semibold">
              Mojito :&nbsp;
              <span className="text-lg font-normal">
                Sự kết hợp mới lạ giữa vị nồ<ni> </ni>g nàn của rượu rum với cảm
                giác the mát của bạc hà, không chỉ giúp giải khát mà còn giải
                tỏa tâm trạng căng thẳng của khách hàng
              </span>
            </h3>
          </ListGroupItem>
          <ListGroupItem>
            <h3 className="text-left text-xl font-semibold">
              Cakes :&nbsp;
              <span className="text-lg font-normal">
                Hương vị ngọt ngào của vani hay lớp chocolate thơm lừng sẽ luôn
                là “liều thuốc” cho buổi “ healing”, hay nạp năng lượng cho buổi
                làm việc
              </span>
            </h3>
            <img
              className="mr-6 h-auto w-1/3"
              src={require("./cakeabout.jpg")}
              alt="hình ảnh cake tại wi_sol"
            />
          </ListGroupItem>
        </ListGroup>
      </Card>

      <Card className="mb-8 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">“Hẹn hò” với wi_sol coffee:</h2>
        <p className="mb-4 text-lg">
          - “Hẹn hò” với wi_sol coffee là hoạt động workshop đáng mong chờ nhất,
          hứa hẹn mang lại cho các “ tri kỉ” những trải nghiệm thú vị, mới mẻ
          với hoạt động trải nghiệm làm gốm hoặc làm nến thơm vào chủ nhật giữa
          tháng và chủ nhật cuối tháng.
        </p>
        <ListGroup>
          <ListGroupItem className="pb-3 pt-3">
            <h3 className="text-left text-xl font-semibold">
              Hoạt động làm gốm :&nbsp;
              <span className="text-lg font-normal">
                Dẫn dắt các soulmates tìm về chốn riêng dành cho tâm hồn, là nơi
                chúng ta cùng nhau tô vẽ và nhào nặn mọi thứ. Hành trình mẫu đất
                thô ráp dần trở thành một hình hài thú vị là lúc tâm hồn chúng
                ta dần được xoa dịu và an ủi.
              </span>
            </h3>
            <img
              className="mr-6 h-auto w-1/3"
              src={require("./potery.jpg")}
              alt="hoạt động làm gốm tại wi_sol"
            />
          </ListGroupItem>
          <ListGroupItem>
            <img
              className="mr-6 h-auto w-1/3"
              src={require("./scented.jpg")}
              alt="hoạt động làm nến thơm tại wi_sol"
            />
            <h3 className="text-left text-xl font-semibold">
              Hoạt động làm nến thơm :&nbsp;
              <span className="text-lg font-normal">
                Luôn là “ liều thuốc” chữa lành, “cây kim” tỉ mỉ vá từng đường
                kim, mũi chỉ cho những “ vết rách” tâm hồn bị gây ra bởi nhịp
                sống hối hả, vội vã. Nơi các “tri kỉ” có thể gác lại những mệt
                mỏi, áp lực, để đôi bàn tay dịu dàng trang trí nên chiếc nến
                thơm đặc biệt theo mùi hương yêu thích, tâm hồn được vỗ về thông
                qua khứu giác nhạy bén được bao quanh bởi mùi hương dễ chịu, xua
                tan mệt mỏi muộn phiền.
              </span>
            </h3>
          </ListGroupItem>
        </ListGroup>
      </Card>

      <Card className="mb-8 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Mục tiêu wi_sol coffee:</h2>
        <p className="mb-4 text-lg">
          Chúng tới luôn thầm nhủ rằng “Chân thành- Trung thực” luôn là sợi chỉ
          đỏ xuyên suốt kết nối mối duyên với “ các soulmates”, là mục tiêu hàng
          đầu của wi_sol coffee
        </p>
        <p className="text-lg">
          - Việc các “ tri kỉ” của “ chúng tớ” thư giãn, thưởng thức đồ uống,
          nhâm nhi từng miếng bánh mềm mịm, chính là điều wi_sol mong đợi. Không
          những thế,“ hẹn hò” cùng wi_sol, luôn là hoạt động workshop đáng mong
          chờ, đó là nơi chúng ta cùng nhau tô vẽ và nhào nặn mọi thứ khi tham
          gia làm gốm hay khứu giác được vỗ về bởi những mùi hương dễ chịu xua
          tan mọi mệt mỏi, buồn phiền khi tạo nên một cây nến thơm do chính mình
          thiết kế......
        </p>
        <p className="mt-4 text-lg">
          Các “ tri kỉ” của “chúng tớ” còn chần chờ gì nữa mà không đến với
          wi_sol.coffee ngay để tìm kiếm những phút giây bình dị giữa nhịp sống
          hối hả của mảnh đất sài thành hay liên hệ với chúng mình để tham gia
          hoạt động workshop đáng mong chờ...
        </p>
      </Card>

      <Card className="mb-8 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">
          Nhớ nhé “soulmates”,wi_sol coffee luôn ở đây đợi cậu!!!
        </h2>
        <ListGroup>
          <ListGroupItem>
            Địa chỉ : 188 Phan Văn Trị, P.12, Q.B.Thạnh, TPHCM
          </ListGroupItem>
          <ListGroupItem>SDT : 0896 320 894</ListGroupItem>
          <ListGroupItem>
            Fanpage :
            <a
              href="https://www.instagram.com/wi_sol.coffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;Wi Sol Coffee
            </a>
          </ListGroupItem>
          <ListGroupItem>Instagram :{"wi_sol.coffee"}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default About;
