# Automated Booking Bot

A prototype Automated Booking Bot built with Flask (backend) and React (frontend).

## Features

- Create, view, update, and delete bookings.  
- Mock API for prototyping and testing.  
- Styled frontend for a clean and user-friendly interface.  

---

## Installation

### Backend (Flask)

1. **Clone the Repository**:  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Navigate to the Backend Directory**:  
   ```bash
   cd backend
   ```

3. **Set Up a Virtual Environment** (optional but recommended):  
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venvScriptsactivate
   ```

4. **Install Dependencies**:  
   ```bash
   pip install flask flask-cors
   ```

5. **Run the Flask App**:  
   ```bash
   python app.py
   ```

   The Flask backend will start on `http://127.0.0.1:5000`.

---

### Frontend (React)

1. **Navigate to the Frontend Directory**:  
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:  
   ```bash
   npm install
   ```

3. **Start the React App**:  
   ```bash
   npm start
   ```

   The React frontend will start on `http://localhost:3000`.

---

## Usage

1. Start the Flask backend:  
   - Open a terminal and run the backend (`app.py`).

2. Start the React frontend:  
   - Open a separate terminal and run the frontend (`npm start`).

3. Open the React app in your browser:  
   - Navigate to `http://localhost:3000`.

---

## Folder Structure

```
repository-folder/
├── backend/
│   ├── app.py           # Flask application
│   └── requirements.txt # Optional: Dependencies for backend
├── frontend/
│   ├── src/             # React source files
│   ├── public/          # Public assets
│   └── package.json     # React dependencies
├── README.md
```

---

## Requirements

- **Python 3.7+**  
- **Node.js 14+**

---

## License

This project is licensed under the MIT License.
