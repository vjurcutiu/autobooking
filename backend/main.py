from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Mock data
bookings = [
    {"id": 1, "name": "John Doe", "date": "2025-01-22", "time": "10:00", "status": "confirmed"},
    {"id": 2, "name": "Jane Smith", "date": "2025-01-22", "time": "12:00", "status": "pending"}
]

# Get all bookings
@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    return jsonify(bookings)

# Create a new booking
@app.route('/api/bookings', methods=['POST'])
def create_booking():
    new_booking = request.json
    new_booking["id"] = len(bookings) + 1
    bookings.append(new_booking)
    return jsonify(new_booking), 201

# Update a booking
@app.route('/api/bookings/<int:booking_id>', methods=['PUT'])
def update_booking(booking_id):
    for booking in bookings:
        if booking["id"] == booking_id:
            booking.update(request.json)
            return jsonify(booking)
    return jsonify({"error": "Booking not found"}), 404

# Delete a booking
@app.route('/api/bookings/<int:booking_id>', methods=['DELETE'])
def delete_booking(booking_id):
    global bookings
    bookings = [b for b in bookings if b["id"] != booking_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
