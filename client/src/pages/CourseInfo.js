const [listOfClasses, setListOfClasses] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/getCourseInfo").then((response) => {
            setListOfClasses(response.data);
    });
    }, []);

    return (
        <div courseName={SearchCSS.container}>
            <form courseName={SearchCSS.form}>
                <div> 
                    <h1>Course Information</h1>
                </div>
            </form>
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