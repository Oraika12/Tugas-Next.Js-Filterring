import React from 'react';

const Albums = () => [
    {
        id: 1,
        name: 'John Doe',
        hobbies: [
            {
                id: 1,
                name: 'playing games',
            },
        ],
        age: 30,
        address: '123 Main St',
        city: 'New York',
        phone: '555-1234',
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        address: '456 Oak Ave',
        city: 'Los Angeles',
        phone: '555-5678',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        age: 40,
        address: '789 Pine Rd',
        city: 'Chicago',
        phone: '555-8765',
    },
    {
        id: 4,
        name: 'Emily Davis',
        age: 35,
        address: '321 Cedar St',
        city: 'New York',
        phone: '555-4321',
    },
];

const App = () => {
    // Filter data untuk mendapatkan semua pemain
    const allPlayers = Albums();

    // Filter untuk mendapatkan pemain yang berumur 30
    const playersAge30 = allPlayers.filter(p => p.age === 30);

    // Filter data pemain bernama "John Doe"
    const johnDoePlayer = allPlayers.find(p => p.name === "John Doe");

    // Filter pemain yang tinggal di "New York"
    const playersFromNewYork = allPlayers.filter(p => p.city === "New York");

    return (
        <div>
            <h1><b>All Players</b></h1>
            <ul>
                {allPlayers.map(player => (
                    <li key={player.id}>
                        {player.name} - Age: {player.age} - Address: {player.address} - Phone: {player.phone}
                    </li>
                ))}
            </ul> <br />

            <h2><b>Players Age 30</b></h2>
            <ul>
                {playersAge30.length > 0 ? (
                    playersAge30.map(player => (
                        <li key={player.id}>
                            {player.name} - Age: {player.age} - Address: {player.address} - Phone: {player.phone}
                        </li>
                    ))
                ) : (
                    <li>No players age 30 found</li>
                )}
            </ul> <br />

            <h2><b>Data John Doe</b></h2>
            {johnDoePlayer ? (
                <div>
                    <p>Name: {johnDoePlayer.name}</p>
                    <p>Age: {johnDoePlayer.age}</p>
                    <p>Address: {johnDoePlayer.address}</p>
                    <p>Phone: {johnDoePlayer.phone}</p>
                </div>
            ) : (
                <p>John Doe not found</p>
            )} <br />

            <h2><b>Players from New York</b></h2>
            <ul>
                {playersFromNewYork.length > 0 ? (
                    playersFromNewYork.map(player => (
                        <li key={player.id}>
                            {player.name} - Age: {player.age} - Address: {player.address} - Phone: {player.phone}
                        </li>
                    ))
                ) : (
                    <li>No players found from New York</li>
                )}
            </ul>
        </div>
    );
};

export default App;
