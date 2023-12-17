import React from 'react'

function Book(props) {
    return (
        <div>
            <h2>{`제 이름은 ${props.name}입니다.`}</h2>
            <h2>{`제 mbti는 ${props.mbti}입니다.`}</h2>
            <h2>{`저는 현재 ${props.place} 소속이에요.`}</h2>
        </div>
    )
}

export default Book