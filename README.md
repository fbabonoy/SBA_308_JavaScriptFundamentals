# SBA_308_JavaScriptFundamentals
# Learner Data Processor

This script processes course assignments and learner submissions to calculate metrics such as individual assignment scores, penalties for late submissions, and overall average scores per learner.

## Features

- **Assignment Filtering**: Identifies past-due assignments.
- **Score Calculation**: Accounts for late penalties and computes averages.
- **Data Validation**: Ensures course and assignment IDs match before processing.

## Usage

1. Save the code as `learnerProcessor.js`.
2. Run the script with Node.js:
   ```bash
   node learnerProcessor.js
   ```
3. The output will display learner metrics in the console, such as:

```json
[
    { "id": 125, "avg": 0.985, "1": 0.94, "2": 1.0 },
    { "id": 132, "avg": 0.82, "1": 0.78, "2": 0.833 }
]
```

## Functions

- `getNumberOfIdsDue`: Filters past-due assignments and returns their details.
- `getLearnerSubmissions`: Calculates scores and averages per learner.
- `getLearnerData`: Combines all data to generate the final output.

## Assumptions

- Late submission penalty: 15 points.
- Outputs are rounded to three decimals for clarity.
