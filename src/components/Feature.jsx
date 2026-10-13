function Feature({ storage, support }) {
    return (
        <ul className="mt-6 text-xl">
            <li className="border-t border-[#DDDDDD] py-2">{storage}</li>
            <li className="border-t border-[#DDDDDD] py-2">{support}</li>
        </ul>
    )
}

export default Feature;