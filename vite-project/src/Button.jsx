function handleClick () {
    console.log("hello");
}

function handleMouseOver() {
    console.log("Bye");
}

function handleDblClick () {
    console.log("You Double Clicked");
}

export default function Button () {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver= {handleMouseOver}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod placeat blanditiis deleniti minima officia explicabo nulla dolorem amet expedita excepturi nam, necessitatibus incidunt culpa inventore quo nesciunt, similique nisi quos.</p>
            <button onDoubleClick={handleDblClick}>Double click Me!</button>
        </div>
    );
}