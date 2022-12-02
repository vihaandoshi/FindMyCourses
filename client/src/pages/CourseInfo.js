const [listOfClasses, setListOfClasses] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/getCourseInfo").then((response) => {
            setListOfClasses(response.data);
    });
    }, []);

    return (
        <div courseName={}>
                <h1>Course Information</h1>
            <div>
                {listOfClasses.map((course) => {
                    return (
                        <div>
                            {}
                        </div>
                    );
                })
            }
            </div>
        </div>
    )


export default CourseInfo