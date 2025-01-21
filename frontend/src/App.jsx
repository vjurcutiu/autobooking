import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState({ name: '', date: '', time: '', status: 'pending' });

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/bookings')
            .then(response => setBookings(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleAddBooking = () => {
        axios.post('http://127.0.0.1:5000/api/bookings', newBooking)
            .then(response => setBookings([...bookings, response.data]))
            .catch(error => console.error(error));
    };

    const handleDeleteBooking = (id) => {
        axios.delete(`http://127.0.0.1:5000/api/bookings/${id}`)
            .then(() => setBookings(bookings.filter(b => b.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div className="app-container">
            <h1>Automated Booking Bot</h1>
            <h2>Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {`${booking.name} - ${booking.date} at ${booking.time} (${booking.status})`}
                        <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <h2>Add a Booking</h2>
            <div className="form-container">
                <input
                    type="text"
                    placeholder="Name"
                    value={newBooking.name}
                    onChange={(e) => setNewBooking({ ...newBooking, name: e.target.value })}
                />
                <input
                    type="date"
                    value={newBooking.date}
                    onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
                />
                <input
                    type="time"
                    value={newBooking.time}
                    onChange={(e) => setNewBooking({ ...newBooking, time: e.target.value })}
                />
                <button onClick={handleAddBooking}>Add</button>
            </div>
        </div>
    );
}

export default App;
