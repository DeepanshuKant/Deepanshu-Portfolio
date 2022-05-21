import './Mouse.css'


function Mouse() {

    const cursor = document.querySelector('.cursor');
    const cursorSpot = document.querySelector('.cursor-spot');

    document.addEventListener('mousemove', (e) => {
        cursor.style.cssText = cursorSpot.style.cssText = `left:${e.clientX - 10}px; top:${e.clientY - 10}px`;
    })
    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-spot"></div>
        </>
    )
}

export default Mouse;