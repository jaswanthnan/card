import { useState } from "react";
import Card from "./components/Card";
import Modal from "./Modal/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const cards = [
    {
      id: 1,
      title: "React",
      description: "Frontend Library",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80"
    },
    {
      id: 4,
      title: "TypeScript",
      description: "Typed JavaScript",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80"
    },
    {
      id: 5,
      title: "UI Design",
      description: "Crafting Interfaces",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80"
    },
    {
      id: 7,
      title: "Animations",
      description: "Bringing UI to life",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80"
    },
    {
      id: 8,
      title: "WebAssembly",
      description: "High Performance",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
    },
    {
      id: 9,
      title: "Cloud Computing",
      description: "Scalable Infrastructure",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
    }
  ];

  const handleClick = (item) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>Web Development Skills</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {cards.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            onClick={() => handleClick(item)}
          />
        ))}

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          {selected && (
            <>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
              <img src={selected.image} alt="" style={{ width: "100%", borderRadius: "8px", marginTop: "15px" }} />
            </>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default App;