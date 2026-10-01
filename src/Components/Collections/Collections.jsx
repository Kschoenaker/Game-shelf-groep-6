import "./Collections.css";

function Collections() {

    const games = [
        {
            name: "Resident Evil 7",
            image: "/games/resident-evil-7.jpg"
        },
        {
            name: "Resident Evil 2",
            image: "/games/resident-evil-7.jpg"
        },
        {
            name: "Resident Evil 1",
            image: "/games/resident-evil-7.jpg"
        },
        {
            name: "Resident Evil 0",
            image: "/games/resident-evil-7.jpg"
        }
    ];

    return (
        <section className="collections">
            {games.map((game) => (
                <div className="game-card" key={game.name}>
                    <img
                        src={game.image}
                        alt={game.name}
                    />

                    <h3>{game.name}</h3>
                </div>
            ))}
        </section>
    );
}

export default Collections;