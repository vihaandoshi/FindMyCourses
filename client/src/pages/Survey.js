import React from "react";
import SurveyCSS from "../styles/Survey.css";
// import { Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
// import { Formik, Field, Form } from 'formik';
const Survey = () => {
    const options = [{ value: "2022", label: "2022-label"}];
    return (
        <div className="container">
            <h1> Rate a class! </h1>
            
            <form>
                <div className="survey-questions">
                    <div className="question">
                        <label> Class name: </label>
                        <input type="text" required/>
                    </div>
                    <div className="question">
                        <label> Professor: </label>
                        <input type="text" required/>
                    </div>
                    <div className="question">
                        <label> Year: </label>
                        <input type="number" min="1868" max="2022" placeholder="XXXX" required/>
                    </div>
                    <div className="question">
                        <label> Semester: </label>
                        <input type="text" required/>
                    </div>
                    <div className="question">
                        <label> Difficulty (1-10): </label>
                        <input type="number" min="1" max="10" required/>
                    </div>
                    <div className="question">
                        <label> Grade Received: </label>
                        <input type="text"/>
                    </div>
                    <div className="question">
                        <label> Required textbooks: </label>
                        <input type="text"/>
                    </div>
                    <div className="question">
                        <label> Hours a week for homework: </label>
                        <input type="number" min="0" max="168"/>
                    </div>
                    <div className="question">
                        <label> Number of midterms: </label>
                        <input type="number" min="0" max="20"/>
                    </div>
                    <div className="question">
                        <label> Prereqs/coreqs: </label>
                        <input type="text"/>
                    </div>
                    <div className="question">
                        <label> Classes to help prepare: </label>
                        <input type="text"/>
                    </div>
                    <div className="question">
                        <label> Next classes to take: </label>
                        <input type="numeric" maxlength="4" required/>
                    </div>
                    <div className="checkbox-question">
                        <label> Has a no homework option? </label>
                        <input type="checkbox" required/>
                    </div>
                    <div className="checkbox-question">
                        <label> Has a clobber policy? </label>
                        <input type="checkbox" required/>
                    </div>
                    <div className="checkbox-question">
                        <label> Has mandatory discussions? </label>
                        <input type="checkbox" required/>
                    </div>
                    <div className="question">
                        <label> Comments? </label>
                        <input type="text" className="comment"/>
                    </div>
                    <div className="question next-line"> </div>
                    <div className="question next-line"> </div>
                    {/* <h3> Professor: <input type="text"/> </h3>
                    <h3> Year: <input type="numeric" maxlength="4"/> </h3>
                    <h3> Semester: <input type="text"/> </h3>
                    <h3> Difficulty (1-10): <input type="number" min="1" max="10"/> </h3>
                    <h3> Grade Received: <input type="text"/> </h3>
                    <h3> Required textbooks: <input type="text"/> </h3>
                    <h3> Hours a week for homework: <input type="numeric"/> </h3>
                    <h3> Number of midterms: <input type="number" min="0" max="10"/> </h3>
                    <h3> Prereqs/coreqs: <input type="text"/> </h3>
                    <h3> Classes to help prepare: <input type="text"/> </h3>
                    <h3> Next classes to take: <input type="text"/> </h3>
                    <h3> Has a no homework option? <input type="checkbox" value="true" /> </h3>
                    <h3> Has a clobber policy? <input type="checkbox" value="true" /> </h3>
                    <h3> Has mandatory discussion attendance? <input type="checkbox" value="true" /> </h3> */}

                    <div className="question button">
                        <input type="submit"/>
                    </div>
                </div>
            </form>
     </div>
    )
}
export default Survey

// import React from "react";
// import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
// import { Formik, Field, Form } from 'formik';
// //import Select from 'react-select';

//  const Survey = () => {
//     //const options = [{ value: "2022", label: "2022-label"}];
//     return (
//         <div>
//         <h1> Rate a class! </h1>
//         <form className="survey-questions">
//             <h3>
//                 What class is this for?
//                 {/* Should we use a dropdown? */}
//                 <input type="text"/>
//             </h3>
//             <h3> Professor <input type="text"/> </h3>
//             <h3> Year <input type="numeric"/> </h3>

//             {/* Year dropdown */}
//             <Field name="year">
//                 {({ field, form }) => (
//                     <FormControl>
//                     <FormLabel>
//                         Year
//                     </FormLabel>
//                     <Select {...field} placeholder="2022">
//                         <option>2021</option>
//                         <option>2020</option>
//                         <option>2019</option>
//                         <option>2018</option>
//                         <option>2017</option>
//                         <option>2016</option>
//                         <option>2015</option>
//                         <option>2014</option>
//                         <option>2013</option>
//                         <option>2012</option>
//                         <option>2011</option>
//                         <option>2010</option>
//                         <option>2009</option>
//                         <option>2008</option>
//                         <option>2007</option>
//                         <option>2006</option>
//                         <option>2005</option>
//                         <option>2004</option>
//                         <option>2003</option>
//                         <option>2002</option>
//                         <option>2001</option>
//                         <option>2000</option>
//                     </Select>
//                     <FormErrorMessage>
//                         {form.errors.name}
//                     </FormErrorMessage>
//                     </FormControl>
//                 )}
//             </Field>
//             <h3> Semester <input type="text"/> </h3>
//             <h3> Difficulty (1-10) <input type="number" min="1" max="10"/> </h3>
//             <h3> Grade Received <input type="text"/> </h3>
//             <h3> Required textbooks <input type="text"/> </h3>
//             <h3> Hours a week for homework <input type="text"/> </h3>
//             <h3> Number of midterms <input type="text"/> </h3>
//             <h3> Prereqs/coreqs <input type="text"/> </h3>
//             <h3> Classes to help prepare <input type="text"/> </h3>
//             <h3> Next classes to take <input type="text"/> </h3>
//             <h3> Has a no homework option <input type="checkbox" value="true" /> </h3>
//             <h3> Has a clobber policy <input type="checkbox" value="true" /> </h3>
//             <h3> Has mandatory discussion attendance <input type="checkbox" value="true" /> </h3>

//             <input type="submit"/>

//         </form>
//     </div>
//     )

// }

// export default Survey