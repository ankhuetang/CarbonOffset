import React, { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

const CalculatorPage = () => {
  const [carbonFields, setCarbonFields] = useState([
    {
      name: 'Tomato',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
      carbonCost: 1.99,
      quantity: 1,
    },
    {
      name: 'Potato',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/2560px-Patates.jpg',
      carbonCost: 0.99,
      quantity: 1,
    },
    {
      name: 'Banana',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/2560px-Bananas_white_background_DS.jpg',
      carbonCost: 0.49,
      quantity: 1,
    },
    {
      name: 'Onion',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/2560px-Bananas_white_background_DS.jpg',
      carbonCost: 0.49,
      quantity: 1,
    },
    {
      name: 'Coriander',
      imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/2560px-Bananas_white_background_DS.jpg',
      carbonCost: 0.49,
      quantity: 1,
    },
  ]);

  const [total, setTotal] = useState(0);
  const [totalCreditsBought, setTotalCreditsBought] = useState(0);
  const [individualCreditsBought, setIndividualCreditsBought] = useState([
    {
      companyName: 'Tesla',
      creditsBought: 500,
    },
    {
      companyName: 'Company B',
      creditsBought: 400,
    },
    {
      companyName: 'Company C',
      creditsBought: 300,
    },
    // Add more companies as needed
  ]);

  useEffect(() => {
    const newTotal = carbonFields.reduce((acc, item) => acc + item.carbonCost * item.quantity, 0);
    setTotal(newTotal);
  }, [carbonFields]);

  useEffect(() => {
    const creditsBought = individualCreditsBought.reduce((acc, item) => acc + item.creditsBought, 0);
    setTotalCreditsBought(creditsBought);
  }, [individualCreditsBought]);

  const handleQuantityChange = (index, newValue) => {
    if (!isNaN(newValue) && newValue >= 0) {
      const intValue = Math.floor(Number(newValue));
      const updatedCarbonFields = [...carbonFields];
      updatedCarbonFields[index].quantity = intValue;
      setCarbonFields(updatedCarbonFields);
    }
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const pieChartData = carbonFields.map((carbonField) => ({
    name: carbonField.name,
    value: carbonField.carbonCost * carbonField.quantity,
  }));

  const barChartData = carbonFields.map((carbonField) => ({
    name: carbonField.name,
    uv: carbonField.carbonCost * carbonField.quantity,
  }));

  const radarChartData = carbonFields.map((carbonField) => ({
    subject: carbonField.name,
    A: carbonField.carbonCost * carbonField.quantity,
    fullMark: 3.0,
  }));

  return (
    <main className="h-screen flex">
      <div className="w-1/2 p-8">
        <div className="bg-white shadow-md rounded-md p-8">
          <h1 className="text-3xl font-semibold mb-4">Carbon Emission Calculator</h1>
          <div>
            {carbonFields.map((carbonField, index) => (
              <div key={index} className="flex flex-row items-center mb-4">
                <img className="w-16 h-16 mr-4 rounded-lg" src={carbonField.imagePath} alt={carbonField.name} />
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <h2 className="text-lg font-semibold mr-4">{carbonField.name}</h2>
                    <h2 className="text-lg font-semibold">${carbonField.carbonCost.toFixed(2)}</h2>
                  </div>
                  <div className="flex flex-row items-center">
                    <input
                      type="number"
                      id={`quantityInput-${index}`}
                      placeholder="Quantity"
                      value={carbonField.quantity}
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                      className="w-16 p-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-semibold mt-4">Total: ${total.toFixed(2)}</h2>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-8 mt-8">
          <h2 className="text-xl font-semibold mb-4">Carbon Emission Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white shadow-md rounded-md p-8 mt-10" style={{ marginLeft: '700px', marginTop: '-400px', width: '100%'}}>
          <h2 className="text-xl font-semibold mb-4">Carbon Emission by Item</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={barChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="uv" fill="#8884d8" />
              <Tooltip />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white shadow-md rounded-md p-8 mt-8" style={{ marginLeft: '400px', width: '100%'}}>
          <h2 className="text-xl font-semibold mb-4">Carbon Emission Radar Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius="80%" data={radarChartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-1/2 p-8">
        <div className="bg-white shadow-md rounded-md p-8">
          <h2 className="text-xl font-semibold mb-4">Total Carbon Credits Bought</h2>
          <p className="text-lg">{totalCreditsBought} credits bought</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-8 mt-8">
          <h2 className="text-xl font-semibold mb-4">Individual Credits Bought</h2>
          {individualCreditsBought.map((company) => (
            <p key={company.companyName} className="text-lg">{company.creditsBought} credits bought from {company.companyName}</p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CalculatorPage;
