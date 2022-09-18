export default function Scocials(links){
    return (
        <ul className="flex gap-3 p-2">
            {links?.links?.github ? <li>
                <button><a href={links.links.github}><img width="32px" height="auto" src="/images/github.svg" alt="" /></a></button>
            </li> : ""}

            {links?.links?.url ? <li>
                <button><a href={links.links.url}><img width="32px" height="auto" src="/images/link.svg" alt="link icon"/></a></button>
            </li> : ""}
        </ul>
    )
}
