This project performs climate pattern analysis using Python by visualizing yearly temperature, rainfall, and humidity trends from the year 2000 to 2024. The dataset contains 25 years of environmental observations, and the program generates four graphical outputs that help understand historical patterns and future predictions.

The program begins by constructing a pandas DataFrame from predefined climate data and automatically handles missing values using mean substitution to ensure dataset consistency. It then trains a Linear Regression model to learn the temperature trend over the years and generates predicted temperature values which are later compared against the original dataset.

Matplotlib is used to generate a multi-plot dashboard consisting of four analytical charts:

Temperature variation over different years to observe rising or falling patterns.

Yearly rainfall distribution using bar visualization to compare precipitation levels.

Correlation between humidity and temperature with a scatter plot that highlights their relationship.

Temperature prediction line plot using the trained regression model to show long-term climate trends.

After plotting, the program evaluates the accuracy of the temperature prediction model using Mean Squared Error (MSE) and Root Mean Squared Error (RMSE). These metrics indicate how closely the predicted temperature values align with the actual historical data.

This project demonstrates climate data analytics, predictive modeling, and scientific visualization using Python. It incorporates data preprocessing with pandas, numerical computation with NumPy, machine learning regression with scikit-learn, and data visualization with Matplotlib. The script can be extended further for forecasting future years, integrating live datasets, or comparing multiple ML algorithms for better accuracy.

![image](https://github.com/user-attachments/assets/9a355902-340a-4e0a-8893-1b90609e7f14)
