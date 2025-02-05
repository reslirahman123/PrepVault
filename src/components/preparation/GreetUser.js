import { useRef, useState } from 'react';

const GreetUser = () => {

    const [userName, setUserName] = useState('');
    const inputRef = useRef();

    const handleAddHere = (e) => {
        e.preventDefault();
        setUserName(inputRef.current.value);
        inputRef.current.value = '';
    };

    const handleClear = () => {
        inputRef.current.value = '';
        setUserName(inputRef.current.value);
    };

    return (
        <div>
            <form onSubmit={handleAddHere}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" ref={inputRef} />
                <button type="submit">Add Here</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>

            {userName && (
                <div>
                    <p>{`Hi ${userName}`}</p>
                </div>
            )}
        </div>
    )
}

export default GreetUser