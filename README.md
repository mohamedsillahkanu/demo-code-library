# README: HF-Level Case Management Analysis Flowchart

## Overview
This README provides a step-by-step analysis for conducting HF-level case management analysis at the chiefdom level. The approach involves aggregating cases managed at the health facility level to identify chiefdoms that require targeted intervention. The process is illustrated with a flowchart, Python code for practical implementation using dummy data, and includes an image of the flowchart to visualize the steps.

## Step-by-Step Approach

### 1. Start
- **Input Data**: HF-level health facility data at the chiefdom level.
  - Chiefdom Name
  - Population Size (Chiefdom Level)
  - Number of Malaria Cases (Health Facility Level)

### 2. Data Filtering
- **Filter Condition**: Select health facilities (HFs) with >0 cases per 1000 people.
  - Variables Needed:
    - Chiefdom Name
    - Population Size
    - Number of Malaria Cases

### 3. Calculation
- **Calculate Incidence**: Compute the number of cases per 1000 people at each HF.
  - Formula: `(Number of Cases / Population Size) * 1000`

### 4. Classification
- **Case Density Threshold**: Determine if the calculated case density exceeds 0 cases per 1000 people.
  - If **Yes**: Facility is selected for further analysis.
  - If **No**: Facility is excluded from further analysis.

### 5. Generate Summary Statistics
- **Chiefdom Aggregation**: Summarize the number of HFs exceeding the threshold at the chiefdom level.
  - Variables Needed:
    - Chiefdom Total HFs
    - HFs with Incidence >0 per 1000

### 6. Chiefdom Cases Calculation
- **Sum of Cases**: Calculate the total number of cases for each chiefdom by summing cases managed at the facility level.
  - Variables Needed:
    - Total Cases per Chiefdom

### 7. Intervention Criteria Evaluation
- **Targeting Interventions**: Identify chiefdoms where more than a specified number or percentage of HFs meet the threshold.
  - **Goal**: Target chiefdoms that require focused intervention.

### 8. Decision
- **Decision Path**:
  - **Chiefdom Selected for Intervention**: Criteria are met.
  - **Chiefdom Not Selected**: Criteria are not met.

### 9. End
- **Goal**: To identify chiefdoms with high case burdens and prioritize them for intervention targeting.

## Python Code Example
Below is a Python script with dummy data that implements the above approach:

```python
import pandas as pd

# Dummy Data
data = {
    'Chiefdom': ['Chiefdom1', 'Chiefdom1', 'Chiefdom2', 'Chiefdom2', 'Chiefdom3'],
    'Population_Size': [1000, 1200, 1500, 1800, 1100],
    'Number_of_Cases': [10, 15, 5, 8, 0]
}

# Create DataFrame
df = pd.DataFrame(data)

# Step 3: Calculate Cases per 1000 People
df['Cases_per_1000'] = (df['Number_of_Cases'] / df['Population_Size']) * 1000

# Step 4: Filter Facilities with >0 Cases per 1000
df_filtered = df[df['Cases_per_1000'] > 0]

# Step 6: Sum of Cases per Chiefdom
chiefdom_cases = df_filtered.groupby('Chiefdom').agg({'Number_of_Cases': 'sum'}).reset_index()

# Step 7: Evaluate Chiefdoms for Intervention Targeting
chiefdom_cases['Intervention_Target'] = chiefdom_cases['Number_of_Cases'] > 0

# Display Results
print(chiefdom_cases)
```

## Flowchart Illustration
The flowchart below illustrates the entire process of analyzing HF-level case management at the chiefdom level.

- **Start and End**: Represented by circles.
- **Process Steps**: Represented by rectangular boxes.

### Flowchart Image
![HF-Level Case Management Flowchart](flowchart.png)

## Conclusion
This analysis helps identify chiefdoms with a high case burden based on HF-level data, enabling targeted interventions to reduce transmission effectively. The Python code and flowchart provided can be used as a template for similar analyses.

