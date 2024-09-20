import style from "./../About/About.module.css";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
const  Section_1 = () => {
  return (
    <section className={style.about_container} id={style.about_bg}>
      <div>
        <h4>Home &gt; </h4>
        <h4>ROOMS &gt; </h4>
      </div>
      <div>
        <h1>Cozy Rooms</h1>
      </div>
      <style jsx>
        {
          `
            h1{
            color: #f4f4f4; 
            }
          
          `
        }
      </style>
    </section>
  );
};
const Section_5 = () => {
  return (
    <div>
      <div id={style.section5_container}>
       <h1>Have a Question?</h1> 
        <p>What's app: 20-xx-xxx-xxx</p>
        <p>Facebook: Bill Gate, Enof, Kaja, Yok</p>
      </div>
    </div>
  )
}
const RoomComp = (props) => {
  return (
    <div className="room-card">
      <div className="room-preview">
        <img
          className="bed-image"
          src={props.roomimage}
          alt={props.roomtype}
        />
      </div>
      <div className="room-info">
        <div className="room-type">{props.roomtype}</div>
        <div className="room-des">
          <p>{props.roomdes}</p>
          <div className="price-bookbtn-box">
            <p className="room-price">{props.roomprice}</p>
            <button className="book-button">Book Now</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .room-card {
          margin-top: 20px;
          border: 1px solid #ddd;
          overflow: hidden;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .room-card:hover {
          transform: scale(1.05);
        }

        .room-preview img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .room-info {
          line-height: 30px;
          padding: 15px;
        }

        .room-type {
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .room-des {
          color: gray;
          margin: 5px 0;
        }

        .room-price {
          font-size: 1.2em;
          color: #C5A880;
          font-weight: bold;
          margin-top: 10px;
        }

        .book-button {
        display: inline-block;
        background-color: #C5A880;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        }

        .book-button:hover {
          background-color: #7d745b;
        }

        .price-bookbtn-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
        }
        `}
      </style>
    </div>
  );
};


export function RoomMain() {
  const roomDetail = [
    {
      type: "Single Room",
      des: "Compact yet stylish room tailored for the modern solo traveler. Features include a comfortable single bed, sleek urban décor, and city views for a relaxing stay after a busy day exploring.",
      image: "/picture/single-bed.jpg",
      price: "$80/night",
    },
    {
      type: "Double Room",
      des: "Perfect for couples or business travelers, the double room offers a plush double bed, contemporary furnishings, and panoramic views of the urban landscape.",
      image: "/picture/double-bed.jpg",
      price: "$120/night",
    },
    {
      type: "Twin Room",
      des: "Designed for friends or colleagues, this room offers two single beds with urban chic styling. Enjoy the modern amenities with a comfortable atmosphere for relaxation.",
      image: "/picture/twin-bed.jpg",
      price: "$110/night",
    },
    {
      type: "Suite Room",
      des: "Spacious and luxurious, the suite features a king-size bed, a separate living area, and stunning city skyline views. Ideal for those who seek both comfort and style.",
      image: "/picture/suite-bed.webp",
      price: "$250/night",
    },
    {
      type: "Deluxe Room",
      des: "The deluxe room offers added luxury with extra space, premium bedding, and chic design elements. Enjoy breathtaking city views from this upgraded room, perfect for a comfortable stay.",
      image: "/picture/deluxe-bed.jpg",
      price: "$180/night",
    },
    {
      type: "Family Room",
      des: "Spacious and family-friendly room, equipped with double beds and bunk beds. It’s ideal for families or groups visiting the urban center, with ample space for everyone.",
      image: "/picture/family-bed.jpeg",
      price: "$200/night",
    },
  ];

  // RoomPage
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 3;
  const totalPages = Math.ceil(roomDetail.length / roomsPerPage);

  const startIndex = (currentPage - 1) * roomsPerPage;
  const currentRooms = roomDetail.slice(startIndex, startIndex + roomsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="room-grid">
        {currentRooms.map((room, index) => (
          <RoomComp
            key={index}
            roomtype={room.type}
            roomdes={room.des}
            roomimage={room.image}
            roomprice={room.price}
          />
        ))}
      </div>

      {/*RoomPage*/}
      <div className="pagination">
        <button 
        className="prev-button"
        onClick={prevPage}
        >‹
        </button>
        <button
        className="next-button"
        onClick={nextPage}
        >›
        </button>
      </div>


      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f8f8f8;
            padding: 20px;
          }

          .room-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            width: 100%;
            max-width: 1200px;
            background-color: #f8f8f8;
          }

          .pagination {
            display: flex;
            justify-content: center;
            width: 200px;
            margin-top: 20px;
          }
            
          .prev-button, .next-button {
            color: #C5A880;
            padding: 10px 20px;
            margin: 0 10px;
            border: 1px solid #ddd;
            background-color: #fff;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .prev-button:hover, .next-button:hover {
            font-weight: bold;
            color: white;
            background-color: #C5A880;
            transition: background-color 0.3;
          }

          .prev-button:active, .next-button:active {
            background-color: #7d745b;
            transform: scale(0.95);
          }
        `}
      </style>
    </div>
  );
}

const Rooms = () => {
  return (
    <div>
      <nav>
        <NavBar number_page={3}/>
      </nav>
      <main>
        <Section_1/>
        <RoomMain/>
        <Section_5/>
      </main>
    </div>
  );
};

export default Rooms;
