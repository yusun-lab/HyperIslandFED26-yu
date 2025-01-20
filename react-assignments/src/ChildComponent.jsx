function ChildComponent({ person }) {
    return (
        <div>
            <h2>{person.name}</h2>
            <ul>
                <li>Age: {person.info.age}</li>
                <li>City: {person.info.City}</li>
                <li>Job: {person.info.job}</li>
                <li>
                    Hobbies:
                    <ul>                        
                        {person.info.hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ChildComponent;