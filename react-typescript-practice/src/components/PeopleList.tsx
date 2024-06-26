
// Array type
type PeopleNameListProps = {
    names: {
        firstName: string
        lastName: String
    }[]
}

function PeopleList(props: PeopleNameListProps) {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.firstName}>
                        {name.firstName} {name.lastName}
                    </h2>
                )
            })}
        </div>
    )
}

export default PeopleList;