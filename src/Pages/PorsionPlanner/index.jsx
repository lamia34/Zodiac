import React, { useState } from "react";
import { FaTrash, FaDollarSign, FaCarrot, FaSeedling } from "react-icons/fa";

import "./style.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";

const PorsionPlanner = () => {
  const [dish, setDish] = useState("");
  const [servings, setServings] = useState(1);
  const [result, setResult] = useState(null);

  const recipes = {
    pizza: {
      ingredients: { flour: 150, cheese: 100, sauce: 50 },
      kcal: 1200,
      img: "https://ikisahil.az/upload//2023/08/28//-820e6940169322762941994258011096215.jpg",
    },
    pasta: {
      ingredients: { pasta: 100, sauce: 75, cheese: 50 },
      kcal: 800,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNIiNn-3YYhKby_ShC0EzfuHr6eHK1zXMWw&s",
    },
    salad: {
      ingredients: { lettuce: 50, tomato: 30, cucumber: 20 },
      kcal: 200,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVszQzT5Yler0fycOCa3f6d06GXPyjKxl7rg&s",
    },
  };

  const handleCalculate = () => {
    if (!dish || servings <= 0) {
      alert("Please select a dish and enter a valid number of servings!");
      return;
    }

    const selectedDish = recipes[dish];
    const calculatedResult = Object.keys(selectedDish.ingredients).reduce(
      (acc, key) => {
        acc[key] = selectedDish.ingredients[key] * servings;
        return acc;
      },
      {}
    );

    setResult({
      ingredients: calculatedResult,
      kcal: selectedDish.kcal * servings,
      img: selectedDish.img,
    });
  };

  return (
    <>
      <Header />
      <div className="portion-calculator">
        <div className="portion-calculator-info">
          <h3>What is Portion Calculator?</h3>
          <p>
            A Portion Calculator is a tool designed to help users determine the
            exact quantities of ingredients required for a specific number of
            servings of a recipe. It's highly useful for reducing food waste,
            ensuring precise meal preparation, and maintaining dietary goals.
            Here's how you can describe it on your website:
          </p>
          <h4>Benefits of a Portion Calculator</h4>
          <ul className="benefits">
            <li>
              Prevents Food Waste: Helps in using only the required amount of
              ingredients.
            </li>
            <li>
              Budget-Friendly: Avoids overspending on unnecessary ingredients.
            </li>
            <li>
              Diet Management: Calculates total calories based on the number of
              servings.
            </li>
            <li>
              Time-Saving: Quickly adapts recipes to suit the required number of
              servings.
            </li>
          </ul>
          <h4>Key Features to Highlight</h4>
          <ul className="feautures">
            <li>Selection of popular dishes.</li>
            <li>Detailed breakdown of ingredients by weight or quantity.</li>
            <li>Total calorie count per serving.</li>
            <li>Visual representation with dish images.</li>
            <li>Adaptable for different serving sizes.</li>
          </ul>
          <h4>How to Use</h4>
          <ol>
            <li>Select a dish from the dropdown menu.</li>
            <li>Input the number of servings.</li>
            <li>
              Click "Calculate" to get the exact ingredient quantities and total
              calories.
            </li>
            <li>Visualize the dish through an accompanying image.</li>
          </ol>
        </div>
        <div className="portion-calculator-container">
          <div className="calculator-section">
            <h2>Portion Calculator</h2>
            <div className="form">
              <label>
                <span>Select Dish:</span>
                <select value={dish} onChange={(e) => setDish(e.target.value)}>
                  <option value="">-- Choose --</option>
                  <option value="pizza">Pizza</option>
                  <option value="pasta">Pasta</option>
                  <option value="salad">Salad</option>
                </select>
              </label>
              <label>
                <span>Number of Servings:</span>
                <input
                  type="number"
                  value={servings}
                  onChange={(e) => setServings(Number(e.target.value))}
                  min="1"
                />
              </label>
              <button onClick={handleCalculate}>Calculate</button>
            </div>
          </div>

          <div className="result-section">
            {result && (
              <>
                <img
                  src={result.img}
                  alt={`${dish} illustration`}
                  className="dish-image"
                />
                <div className="result-details">
                  <h3>Ingredients for {servings} servings:</h3>
                  <ul>
                    {Object.entries(result.ingredients).map(
                      ([ingredient, amount]) => (
                        <li key={ingredient}>
                          {ingredient}: {amount} g
                        </li>
                      )
                    )}
                  </ul>
                  <p>Total Kcal: {result.kcal}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="quote">
        <div className="overlay-quote d-flex justify-content-center align-items-center">
          <div className="overlay-quote-content">
            <p>Balance Your Plate, Reduce Waste</p>
          </div>
        </div>
      </div>
      <div className="statics-container">
        <h3>The Impact of Portion Control</h3>
        <ul className="statics-container-icons">
          <li>
            <FaTrash />
            <p>By using portion control, you can reduce food waste by up to 30%.</p>
          </li>
          <li>
            <FaDollarSign />
            <p>Households can save up to $1,500 per year by reducing food waste.</p>
          </li>
          <li>
            <FaCarrot />
           <p>Portion planning helps reduce ingredient spoilage by up to 25%.</p> 
          </li>
          <li>
            <FaSeedling />
            <p>Reducing food waste could cut global food-related emissions by 4% annually.</p>
          </li>
        </ul>
      </div>
      <Instagram />
      <Footer />
    </>
  );
};

export default PorsionPlanner;
