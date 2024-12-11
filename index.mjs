// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50,
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150,
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500,
        },
    ],
    //what is the total of assignemts
    // what assigment are dues
    // i need to get an arary with the id that are due[]
};

function getNumberOfIdsDue(arr) {
    let dates = []
    let filtered = arr.assignments.filter((section) => {
        let dueDate = new Date(section.due_at)
        let currentDAte = new Date
        if (dueDate < currentDAte) {
            dates.push(dueDate)
            return true
        }
        return false

    })
    
    let object = {}
    for (let cell of filtered) {
        object[`${cell.id}`] = cell.points_possible
    }

    return [object, dates]
}


// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47,
        },
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150,
        },
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400,
        },
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39,
        },
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140,
        },
    },
];

function getLernerData(assigment,list, dueDates) {
    let student = {}
    let studentsArr = []
    let avg = 0
    let counter = 0
    
    for (let cell of list) {
        if (assigment[cell.assignment_id]) {
            //get the agberage of current the assign
            // console.log(cell.submission.score)
            // console.log(assigment[cell.assignment_id])
            let penallty = 0
            let submissionDate = new Date(cell.submission.submitted_at)
            // console.log(submissionDate);
            
            if (submissionDate > dueDates[cell.assignment_id - 1]) {
                penallty = 15
                
            }
            let cellAvg = (cell.submission.score - penallty) / assigment[cell.assignment_id]
            //then add it tot total
            avg += cellAvg
            counter++

            if (student["id"] === cell.learner_id) {
                student[`${cell.assignment_id}`] = cellAvg
            } else {                
                student["id"] = cell.learner_id
                student[`${cell.assignment_id}`] = cellAvg
                continue
            }
                student["avg"] = avg / counter
                studentsArr.push(student)
                student = {}
                avg = 0
                counter = 0
            }
        
    }

    // console.log(studentsArr);
    return studentsArr
    
}

function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.

    let [assignemts, dueDates] = getNumberOfIdsDue(ag)
    // console.log(assignemts)
    // console.log(dateArray)

    let LearnerSubmissions = getLernerData(assignemts, submissions, dueDates)
    console.log(LearnerSubmissions)
    
    const result = [
        {
            id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0, // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833, // late: (140 - 15) / 150
        },
    ];

    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);



// {
// // the ID of the learner for which this data has been collected
// "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,
//         // each assignment should have a key with its ID,
//         // and the value associated with it should be the percentage that
//         // the learner scored on the assignment (submission.score / points_possible)
//         <assignment_id>: number,
// // if an assignment is not yet due, it should not be included in either
// // the average or the keyed dictionary of scores
// }