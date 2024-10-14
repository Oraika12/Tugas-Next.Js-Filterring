import React from 'react';

const Albums = () => [
    {
        name: "Ronaldo", age: 37, teams: ["Madrid", "United"]
    },
    {
        name: "Salah", age: 30, teams: ["Roma", "Liverpool"]
    },
    {
        name: "Haaland", age: 22, teams: ["Dortmund", "City"]
    },
    {
        name: "Bruyne", age: 31, teams: ["Wolfsburg", "City"]
    }
];

const App = () => {
    // Filter pemain yang bermain di tim "City"
    const filteredPlayers = Albums().filter(p => p.teams.includes("City"));

    // Filter data pemain bernama "Ronaldo"
    const ronaldoPlayer = Albums().find(p => p.name === "Ronaldo");

    // Filter pemain yang berumur 30
    const playersAge30 = Albums().filter(p => p.age === 30);

    // Tampilkan semua data pemain
    const allPlayers = Albums();

    return (
        <div>
            <h1> <b> Players in City</b></h1>
            <ul>
                {filteredPlayers.map(player => (
                    <li key={player.name}>
                        {player.name} - Age: {player.age}
                    </li>
                ))}
            </ul> <br />

            <h2>  <b> Data Ronaldo</b></h2>
            {ronaldoPlayer ? (
                <div>
                    <p>Name: {ronaldoPlayer.name}</p>
                    <p>Age: {ronaldoPlayer.age}</p>
                    <p>Teams: {ronaldoPlayer.teams.join(", ")}</p>
                </div>
            ) : (
                <p>Ronaldo not found</p>
            )} <br />

            <h2> <b>Players Age 30</b> </h2>
            <ul>
                {playersAge30.length > 0 ? (
                    playersAge30.map(player => (
                        <li key={player.name}>
                            {player.name} - Age: {player.age} - Teams: {player.teams.join(", ")}
                        </li>
                    ))
                ) : (
                    <li>No players age 30 found</li>
                )}
            </ul> <br />

            <h2> <b>All Players</b> </h2>
            <ul>
                {allPlayers.map(player => (
                    <li key={player.name}>
                        {player.name} - Age: {player.age} - Teams: {player.teams.join(", ")}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
