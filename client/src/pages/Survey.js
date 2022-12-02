import React from "react";
const Survey = () => {
    return (
        <div>
            <h1> Rate a class! </h1>
            <form className="survey-questions">
                <h3>
                    What class is this for?
                    {/* Should we use a dropdown? */}
                    <input type="text"/>
                </h3>
                <h3> Professor <input type="text"/> </h3>
                <h3> Year <input type="text"/> </h3>
                <h3> Semester <input type="text"/> </h3>
                <h3> Difficulty (1-10) <input type="number" min="1" max="10"/> </h3>
                <h3> Grade Received <input type="text"/> </h3>
                <h3> Required textbooks <input type="text"/> </h3>
                <h3> Hours a week for homework <input type="text"/> </h3>
                <h3> Number of midterms <input type="text"/> </h3>
                <h3> Prereqs/coreqs <input type="text"/> </h3>
                <h3> Classes to help prepare <input type="text"/> </h3>
                <h3> Next classes to take <input type="text"/> </h3>
                <h3> Has a no homework option <input type="checkbox" value="true" /> </h3>
                <h3> Has a clobber policy <input type="checkbox" value="true" /> </h3>
                <h3> Has mandatory discussion attendance <input type="checkbox" value="true" /> </h3>

             <input type="submit"/>

         </form>
     </div>
    )
}
export default Survey

