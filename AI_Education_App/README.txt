# AI Education App

An AI-driven education platform designed to personalize the learning experience for students based on their preferred learning styles. The app uses Python and AI to teach basic programming concepts and adapts content delivery to visual, auditory, reading/writing, and kinesthetic learners.

## Features

1. **User Registration and Profiles**: Create and manage user accounts with learning style preferences.
2. **Learning Style Assessment (VARK)**: Assess and identify the preferred learning styles of students.
3. **Personalized Content Delivery**: Tailor content delivery based on individual learning styles.
4. **Python and Scratch Integration**: Teach programming using interactive exercises and lessons.
5. **Progress Tracking and Analytics**: Track and visualize student progress and performance.
6. **Adaptive Learning Pathways**: Adjust learning paths based on student performance and engagement.
7. **Interactive Quizzes**: Assess knowledge through quizzes tailored to learning styles.
8. **Feedback Mechanism**: Provide feedback to improve the learning experience.

## Installation

### Backend (Django)

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ai-education-app.git
    cd ai-education-app/backend
    ```

2. **Create and activate a virtual environment**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Install dependencies**:
    ```bash
    pip install django djangorestframework psycopg2-binary django-cors-headers
    ```

4. **Set up the database**:
    - Ensure PostgreSQL is installed and running.
    - Create a PostgreSQL database and user.
    - Update `DATABASES` settings in `backend/AI_Education_App/settings.py` with your database credentials.

5. **Run migrations**:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

6. **Create a superuser**:
    ```bash
    python manage.py createsuperuser
    ```

7. **Run the server**:
    ```bash
    python manage.py runserver
    ```

### Frontend (React)

1. **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

## Usage

1. **Access the application**:
    - Backend API: `http://localhost:8000/api/`
    - Frontend: `http://localhost:3000/`

2. **Register a new user** through the registration page.
3. **Login** with the registered credentials.
4. **Complete the Learning Style Assessment** to personalize your learning experience.
5. **Explore the Dashboard** to track your progress and start learning.

## Project Structure

