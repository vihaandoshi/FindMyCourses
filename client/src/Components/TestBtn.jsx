import React from 'react'; 
//update: what the test button will do --> mimic a search query; seach should just call updateList in some way to update the search results 
//courseAction: what the course button will do, i guess the search componenent should generate a corresponding function? 
//search --> needs a way to update CourseList and Scheduler 
// put courses in courseList 
//that have a button that puts it in Scheduler 
const TestBtn = (props) => { 
    
    var dict={ 
            courseName: "CS 61C: Machine Structures", 
            units: 4, 
            bName : "add course"
         }; 
    
return (
    <button onClick= {() => props.update(dict)}>TESTING</button> 
)
}

export default TestBtn 