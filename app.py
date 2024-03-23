from flask import Flask, render_template, request
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load('health_pred=.joblib')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get user input from form
    age = int(request.form['age'])
    exercise = int(request.form['exercise'])
    calories = int(request.form['calories'])
    protein = int(request.form['protein'])
    water = int(request.form['water'])
    gender = int(request.form['gender']) 
    medCount = int(request.form['Number_of_Case_Histories'])
    years=int(request.form['Years_Taking_Medicine'])
    predicted_health_score = model.predict([[age, exercise, calories, protein, water, gender, medCount, years]])
    return f'Predicted Health Score: {predicted_health_score[0]}'

if __name__ == '__main__':
    app.run(debug=True)
