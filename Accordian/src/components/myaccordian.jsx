import { useState } from "react"

const MyAccordian = ({question,answer}) => {
    const [show, setShow] = useState(false)
    return(
        <>
            <p className="text-danger text-center" onClick={() => setShow(!show)}>{question}</p>
            {show && <p className="text-success text-center">{answer}</p>}
        </>
    )
}

export default MyAccordian