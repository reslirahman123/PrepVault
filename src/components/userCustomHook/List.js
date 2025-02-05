import React from 'react'


const List = React.memo(({ data }) => {

        // console.log("dataList", data)

        return (
            <div>
                <ul>
                    {data?.map((userDetails, index) => {
                        const { first, last, title } = userDetails.name;
                        return <li key={index}>
                            <p>{`${title} ${first} ${last}`}</p>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
)

export default List